import { ApiKey } from './../../db/table/apikey.entity';
import { Module } from '@nestjs/common';
import { History } from 'src/v1/db/table/history.entity';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notyfication } from 'src/v1/db/table/notyfication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History, ApiKey, Notyfication])],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
