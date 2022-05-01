import { MessagesService } from './messages.service';
import { Controller, Get, Headers, Param, Query } from '@nestjs/common';
import { argument } from 'src/v1/dataType/interface';

@Controller('v1/other/messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService){}
   
    @Get('')
    async all(@Param() param: JSON, @Query() query: JSON, @Headers() headers: JSON){
        const arg: argument = { param: param, query: query, headers: headers }
        return await this.messagesService.getAll(arg)
    }
}
