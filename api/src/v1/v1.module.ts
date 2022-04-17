import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { AccountModule } from './account/account.module';
import { ComplaintModule } from './complaint/complaint.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [AuthModule, CompanyModule, AccountModule, ComplaintModule, FilesModule]
})
export class V1Module {}