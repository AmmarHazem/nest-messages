import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './message.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findOne({ id }: { id: string }) {
    return this.messagesRepository.findOne({ id });
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create({ message }: { message: string }) {
    return this.messagesRepository.create({ message });
  }
}
