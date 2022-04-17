import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

import { MinioModule } from 'nestjs-minio-client';

@Module({
  imports: [
    MinioModule.register({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minio_access_key',
      secretKey: 'minio_secret_key'
    })
  ],
  providers: [FilesService],
  controllers: [FilesController]
})
export class FilesModule {}
