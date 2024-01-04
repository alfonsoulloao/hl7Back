import { Test, TestingModule } from '@nestjs/testing';
import { EventoInicioService } from './evento-inicio.service';

describe('EventoInicioService', () => {
  let service: EventoInicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventoInicioService],
    }).compile();

    service = module.get<EventoInicioService>(EventoInicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
