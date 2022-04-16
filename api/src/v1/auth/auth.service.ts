import { accountsbasicview } from './../db/view/accountsbasic.view.entity';
import { Injectable, Session, Headers } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Accounts } from '../db/table/accounts.entity';
import { History } from '../db/table/history.entity';
import { ApiKey } from '../db/table/apikey.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Accounts) private accountsRepository: Repository<Accounts>,
        @InjectRepository(accountsbasicview) private accountsView: Repository<accountsbasicview>,
        @InjectRepository(History) private historyRepository: Repository<History>,
        @InjectRepository(ApiKey) private apiKeys: Repository<ApiKey>
    ){
        this.createSession = this.createSession.bind(this)
        this.login = this.login.bind(this)
    }

    async addToHistory(operation: string, data: object, sessionID: string = null, account: number = null){
        const session: History = this.historyRepository.create();
        session.session = sessionID;
        session.data = JSON.stringify(data);
        session.date = new Date();
        session.operation = operation;
        session.account = account;
        await this.historyRepository.save(session)

        return session
    }

    async verifyApi(apiKey: string){
        const result = await this.apiKeys.count({"where": {apiKey: apiKey}})

        if(result === 1 && apiKey!==undefined)
            return { date: new Date, apiKey: apiKey, result: true }
        else
            return { date: new Date, apiKey: apiKey, result: false }
    }

    async checkAPI(clb: any, argument: any, checkSessionBool: boolean = true): Promise<object>{
        const result = await this.verifyApi(argument.headers.apikey)
        if(result.result)
            if (checkSessionBool)
                return await this.checkSession(clb, argument)
            else
                return await clb(argument)
        else
            return { date: new Date, error: "INVALID API KEY", code: "E01"
            }
    }

    async checkSession(clb: any, argument: any): Promise<Object>{
        const sessionClose = await this.historyRepository.countBy({operation: "close session", session: argument.headers.session})
        const sessionCount = await this.historyRepository.countBy({session: argument.headers.session})

        if(sessionCount>0 && sessionClose===0 && argument.headers.session!==undefined)
            return await clb(argument)
        else
            return { date: new Date, error: "SESSION ID IS REQUIRED", code: "E02" }
    }

    async createSession(): Promise<History> {
        const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)): string =>
            s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
            
        return await this.addToHistory("create session", {}, ObjectId())
    }

    async login(argument: any): Promise<any>{
        const login = argument.param.login
        const password = argument.query.login

        const result = await this.accountsView.findOneBy({login: login, password: password})
        if(result!==null){
            
            return await this.addToHistory("login", {}, argument.headers.session, result._ID)
        }else
            return { date: new Date, error: "INVALID LOGIN OR PASSWORD", code: "E03" }
    }
}
