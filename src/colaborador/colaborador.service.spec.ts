import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradorService } from './colaborador.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';
import { Instituicao } from '../instituicao/entities/instituicao.entity';

describe('ColaboradorService', () => {
  let service: ColaboradorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ColaboradorService,
        { provide: getRepositoryToken(Colaborador), useValue: {} },
        { provide: getRepositoryToken(Instituicao), useValue: {} },
      ],
    }).compile();

    service = module.get<ColaboradorService>(ColaboradorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
