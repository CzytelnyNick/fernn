import { MessagesModule } from './messages/messages.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [MessagesModule],
    providers: [],
    controllers: []
})
export class OtherModule {}
