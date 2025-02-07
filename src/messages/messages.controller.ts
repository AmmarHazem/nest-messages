import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  getMessages() {}

  @Post()
  createMessage(@Body() body: any) {
    console.log('body', body);
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
    return id;
  }
}
