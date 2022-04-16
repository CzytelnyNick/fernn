import { accountsbasicview } from './../db/view/accountsbasic.view.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { Accounts } from '../db/table/accounts.entity';
import { History } from '../db/table/history.entity';
import { ApiKey } from '../db/table/apikey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History, ApiKey, Accounts, accountsbasicview])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
