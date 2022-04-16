import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { AccountModule } from './account/account.module';
import { ComplaintModule } from './complaint/complaint.module';

@Module({
  imports: [AuthModule, CompanyModule, AccountModule, ComplaintModule]
})
export class V1Module {}
