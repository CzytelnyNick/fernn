import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';

import { Accounts } from './v1/db/table/accounts.entity';
import { Advertised } from './v1/db/table/advertised.entity';
import { ApiKey } from './v1/db/table/apikey.entity';
import { Assigment } from './v1/db/table/assignment.entity';
import { Attachment } from './v1/db/table/attachment.entity';
import { Company } from './v1/db/table/company.entity';
import { Complaints } from './v1/db/table/complaints.entity';
import { Country } from './v1/db/table/country.entity';
import { Dictionary } from './v1/db/table/dictionary.entity';
import { Expection } from './v1/db/table/expectation.entity';
import { History } from './v1/db/table/history.entity';
import { Manufacters } from './v1/db/table/manufacters.entity';
import { Notyfication } from './v1/db/table/notyfication.entity';
import { Products } from './v1/db/table/products.entity';
import { Sections } from './v1/db/table/sections.entity';
import { Status } from './v1/db/table/status.entity';
import { Style } from './v1/db/table/style.entity';
import { Subscription } from './v1/db/table/subscription.entity';
import { Types } from './v1/db/table/types.entity';
import { accountsbasicview } from './v1/db/view/accountsbasic.view.entity';

@Module({
  imports: [V1Module, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'superRoot',
    password: '',
    database: 'fernn',
    entities: [Accounts, Advertised, ApiKey, Assigment, Attachment, Company, Complaints, Country, Dictionary, Expection, History, Manufacters, Notyfication, Products, Sections, Status, Style, Subscription, Types, accountsbasicview]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}