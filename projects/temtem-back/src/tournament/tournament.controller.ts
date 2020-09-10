import { Controller, Get, Param } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TitleEntity } from '../entities/title.entity';

@Controller('back/tournament')
export class TournamentController {
  constructor(private service: TournamentService) {  }

  @Get('list')
  getList(): Promise<any[]> {
    return this.service.tournamentList();
  }

  @Get('filter')
  getFilter(): Promise<any[]> {
    return this.service.tournamentFilter();
  }

  @Get('detail/:id')
  getDetail(@Param() params): Promise<any> {
    return this.service.tournamentDetail(params.id);
  }

  @Get('clasification/:id')
  getClasification(@Param() params): Promise<any[]> {
    return this.service.tournamentPrizes(params.id);
  }

  @Get('links/:id')
  getLinks(@Param() params): Promise<any[]> {
    return this.service.tournamentLinks(params.id);
  }

  @Get('circuit/clasification')
  getCircuitClasification(): Promise<any[]> {
    return this.service.circuitClasification();
  }

}