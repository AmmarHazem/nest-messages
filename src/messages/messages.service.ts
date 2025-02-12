import { MessagesRepository } from './message.repository';

export class MessagesService {
  private messagesRepository: MessagesRepository;
  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

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
