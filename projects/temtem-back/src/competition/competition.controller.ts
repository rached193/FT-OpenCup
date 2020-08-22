import { Controller, Get } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { PrizeEntity } from '../entities/prize.entity';

@Controller('competition')
export class CompetitionController {
  constructor(private service: CompetitionService) {  }

  @Get('list')
  getHello(): Promise<PrizeEntity[]> {
    return this.service.findList();
  }

  @Get('detail')
  getDetail(): Promise<PrizeEntity[]> {
    return this.service.findDetail();
  }

}
