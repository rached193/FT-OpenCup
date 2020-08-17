import { Controller, Get } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionEntity } from './competition.entity';

@Controller('competition')
export class CompetitionController {
  constructor(private service: CompetitionService) {  }

  @Get('dame')
  getHello(): Promise<CompetitionEntity[]> {
    return this.service.findAll();
  }

  @Get('crear')
  create() {
    const hola = new CompetitionEntity();
    hola.name = 'Jose';
    return this.service.insert(hola);
  }
}
