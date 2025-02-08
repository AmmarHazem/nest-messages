import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  getMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('body', body);
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
    return id;
  }
}
