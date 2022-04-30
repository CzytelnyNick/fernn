import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { AccountModule } from './account/account.module';
import { ComplaintModule } from './complaint/complaint.module';
import { FilesModule } from './files/files.module';
import { OtherModule } from './other/other.module';

@Module({
  imports: [AuthModule, CompanyModule, AccountModule, ComplaintModule, FilesModule, OtherModule],
  providers: [],
  controllers: []
})
export class V1Module {}