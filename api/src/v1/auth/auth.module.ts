import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { history } from '../db/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([history])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
