/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('ask')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        question: { type: 'string', example: 'Olá, quem é você?' },
      },
    },
  })
  async askQuestion(@Body('question') question: string): Promise<string> {
    return await this.chatbotService.getResponse(question);
  }
}
