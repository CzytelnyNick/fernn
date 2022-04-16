import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';

import { Accounts } from './v1/db/accounts.entity';
import { Advertised } from './v1/db/advertised.entity';
import { Assigment } from './v1/db/assignment.entity';
import { Attachment } from './v1/db/attachment.entity';
import { Company } from './v1/db/company.entity';
import { Complaints } from './v1/db/complaints.entity';
import { Country } from './v1/db/country.entity';
import { Dictionary } from './v1/db/dictionary.entity';
import { Expection } from './v1/db/expectation.entity';
import { history } from './v1/db/history.entity';
import { Manufacters } from './v1/db/manufacters.entity';
import { Notyfication } from './v1/db/notyfication.entity';
import { Products } from './v1/db/products.entity';
import { Sections } from './v1/db/sections.entity';
import { Status } from './v1/db/status.entity';
import { Style } from './v1/db/style.entity';
import { Subscription } from './v1/db/subscription.entity';
import { Types } from './v1/db/types.entity';

@Module({
  imports: [V1Module, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'superRoot',
    password: '',
    database: 'fernn',
    entities: [Accounts, Advertised, Assigment, Attachment, Company, Complaints, Country, Dictionary, Expection, history, Manufacters, Notyfication, Products, Sections, Status, Style, Subscription, Types]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
