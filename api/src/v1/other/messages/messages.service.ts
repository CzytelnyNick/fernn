import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { argument, response } from 'src/v1/dataType/interface'; 

import { ApiKey } from 'src/v1/db/table/apikey.entity';
import { History } from 'src/v1/db/table/history.entity';
import { Notyfication } from 'src/v1/db/table/notyfication.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(History) private historyRepository: Repository<History>,
        @InjectRepository(ApiKey) private apiKeys: Repository<ApiKey>,
        @InjectRepository(Notyfication) private notyfication: Repository<Notyfication>
    ){}

    async verify(apiKey: string, sessionID: string): Promise<response>{
        const result = await this.apiKeys.count({"where": {apiKey: apiKey}})
        if(result === 1 && apiKey!==undefined){
            const sessionClose: number = await this.historyRepository.countBy({operation: "close session", session: sessionID})
            const sessionCount: number = await this.historyRepository.countBy({session: sessionID})

            const user: Array<History> = await this.historyRepository.find({
                where: {session: sessionID},
                order: {
                    _ID: "ASC"
                },
                take: 1
            })

            if(sessionCount>0 && sessionClose===0 && sessionID!==undefined)
                return { date: new Date, result: true, response: [], sessionInfo: user, error: [] }
            else
                return { date: new Date, result: false, response: [], sessionInfo: {}, error: {content: "SESSION ID IS REQUIRED", code: "E02"} }
        }
        return { date: new Date, result: false, response: [], sessionInfo: {}, error: {content: "INVALID API KEY", code: "E01"} }
    }

    async getAll(argument: argument): Promise<response>{
        const result: response = await this.verify(argument.headers.apikey, argument.headers.session)
        if(result.result){
            const res: Array<Notyfication> = await this.notyfication.find({
                where: {
                    type: 1, 
                    recipient: result.sessionInfo.user
                },
                order: { 
                    _ID: "DESC"
                }
            })

            this.notyfication.update({type: 1, recipient: result.sessionInfo.user, sent: false}, {sent: true})
            
            result.response = res
            result.sessionInfo = {ID: result.sessionInfo[0].session}
            return result
        }
        return result
    }

    async getOne(argument: argument): Promise<response>{
        const result: response = await this.verify(argument.headers.apikey, argument.headers.session)
        if(result.result){
            const res: Array<Notyfication> = await this.notyfication.find({
                where: {
                    _ID: argument.query.ID,
                    type: 1, 
                    recipient: result.sessionInfo.user
                }, 
                order: { 
                    _ID: "DESC"
                },
                take: 1
            })

            this.notyfication.update({type: 1, recipient: result.sessionInfo.user, sent: false}, {sent: true})
            
            result.response = res
            result.sessionInfo = {ID: result.sessionInfo[0].session}
            return result
        }
        return result
    }
    
    async getLast(argument: argument): Promise<response> {
        const result: response = await this.verify(argument.headers.apikey, argument.headers.session)
        if(result.result){
            const res: Array<Notyfication> = await this.notyfication.find({
                where: {
                    type: 1, 
                    recipient: result.sessionInfo.user
                }, 
                order: { 
                    _ID: "DESC"
                },
                take: argument.param.count
            })

            this.notyfication.update({type: 1, recipient: result.sessionInfo.user, sent: false}, {sent: true})
            
            result.response = res
            result.sessionInfo = {ID: result.sessionInfo[0].session}
            return result
        }
        return result
    }
}
