import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { history } from '../db/history.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(history) private historyRepository: Repository<history>
    ){}

    async createSession(): Promise<history> {
        const session: history = this.historyRepository.create();
        const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)): string =>
            s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))

        session.session = ObjectId();
        session.data = "324234";
        session.date = new Date();
        session.operation = "sdfsdf";
        await this.historyRepository.save(session)
        return session
    }


    login(dat, res, res2){
        return {"a": [dat, res, res2]}
    }
}
