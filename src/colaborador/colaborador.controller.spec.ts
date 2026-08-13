import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradorController } from './colaborador.controller';
import { ColaboradorService } from './colaborador.service';
import { JwtService } from '@nestjs/jwt';

describe('ColaboradorController', () => {
  let controller: ColaboradorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboradorController],
      providers: [
        { provide: ColaboradorService, useValue: {} },
        { provide: JwtService, useValue: {} },
      ],
    }).compile();

    controller = module.get<ColaboradorController>(ColaboradorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
