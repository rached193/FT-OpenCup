import { Controller, Get, Param } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TitleEntity } from '../entities/title.entity';

@Controller('tournament')
export class TournamentController {
  constructor(private service: TournamentService) {  }

  @Get('list')
  getList(): Promise<any[]> {
    return this.service.tournamentList();
  }

  @Get('detail/:id')
  getDetail(@Param() params): Promise<any> {
    return this.service.tournamentDetail(params.id);
  }

  @Get('circuit/clasification')
  getCircuitClasification(): Promise<any[]> {
    return this.service.circuitClasification();
  }

}