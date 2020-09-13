import { Controller, Get, Param } from '@nestjs/common';
import { TemtemService } from './temtem.service';

@Controller('back/statistics/temtem')
export class TemtemController {
  constructor(private service: TemtemService) {  }

  @Get('stats/:id')
  getStats(@Param() params): Promise<any[]> {
    return this.service.stats(params.id);
  }

  @Get('teammate/absolute/:id')
  getTeammate(@Param() params): Promise<any[]> {
    return this.service.teammate(params.id);
  }

  @Get('teammate/relative/:id')
  getTeammateRel(@Param() params): Promise<any[]> {
    return this.service.teammateRel(params.id);
  }

  @Get('teammate/topcut/absolute/:id')
  getTeammateTopCut(@Param() params): Promise<any[]> {
    return this.service.teammateTopCut(params.id);
  }

  @Get('teammate/topcut/relative/:id')
  getTeammateTopCutRel(@Param() params): Promise<any[]> {
    return this.service.teammateTopCutRel(params.id);
  }
}