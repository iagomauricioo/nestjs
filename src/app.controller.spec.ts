import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should render the API home page', () => {
      const send = jest.fn();
      const response = { send } as unknown as Response;

      appController.getHome(response);

      expect(send).toHaveBeenCalledWith(
        expect.stringContaining('<title>API Oceanos de Plástico</title>'),
      );
    });
  });
});
