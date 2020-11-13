import { Controller, Get, Param } from '@nestjs/common';
import { OverviewService } from './overview.service';

@Controller('back/statistics/overview')
export class OverviewController {
  constructor(private service: OverviewService) {  }

  @Get('temtem/appearance/absolute/:id')
  getTemtemAppearance(@Param() params): Promise<any[]> {
    return this.service.temtemAppearance(params.id);
  }

  @Get('temtem/appearance/relative/:id')
  getTemtemAppearanceRel(@Param() params): Promise<any[]> {
    return this.service.temtemAppearanceRel(params.id);
  }

  @Get('temtem/appearance/topcut/absolute/:id')
  getTemtemAppearanceTopCut(@Param() params): Promise<any[]> {
    return this.service.temtemAppearanceTopCut(params.id);
  }

  @Get('temtem/appearance/topcut/relative/:id')
  getTemtemAppearanceTopCutRel(@Param() params): Promise<any[]> {
    return this.service.temtemAppearanceTopCutRel(params.id);
  }

  @Get('temtem/winrate/absolute/:id')
  getTemtemWinrate(@Param() params): Promise<any[]> {
    return this.service.temtemWinrate(params.id);
  }

  @Get('temtem/winrate/relative/:id')
  getTemtemWinrateRel(@Param() params): Promise<any[]> {
    return this.service.temtemWinrateRel(params.id);
  }

  @Get('temtem/winrate/topcut/absolute/:id')
  getTemtemWinrateTopCut(@Param() params): Promise<any[]> {
    return this.service.temtemWinrateTopCut(params.id);
  }

  @Get('temtem/winrate/topcut/relative/:id')
  getTemtemWinrateTopCutRel(@Param() params): Promise<any[]> {
    return this.service.temtemWinrateTopCutRel(params.id);
  }

  @Get('type/appearance/absolute/:id')
  getTypeAppearance(@Param() params): Promise<any[]> {
    return this.service.typeAppearance(params.id);
  }

  @Get('type/appearance/relative/:id')
  getTypeAppearanceRel(@Param() params): Promise<any[]> {
    return this.service.typeAppearanceRel(params.id);
  }

  @Get('type/appearance/topcut/absolute/:id')
  getTypeAppearanceTopCut(@Param() params): Promise<any[]> {
    return this.service.typeAppearanceTopCut(params.id);
  }

  @Get('type/appearance/topcut/relative/:id')
  getTypeAppearanceTopCutRel(@Param() params): Promise<any[]> {
    return this.service.typeAppearanceTopCutRel(params.id);
  }

  @Get('temtem/pickrate/absolute/:id')
  getTemtemPickrate(@Param() params): Promise<any[]> {
    return this.service.temtemPickrate(params.id);
  }

  @Get('temtem/pickrate/relative/:id')
  getTemtemPickrateRel(@Param() params): Promise<any[]> {
    return this.service.temtemPickrateRel(params.id);
  }

  @Get('gear/appearance/absolute/:id')
  getGearAppearance(@Param() params): Promise<any[]> {
    return this.service.gearAppearance(params.id);
  }

  @Get('gear/appearance/relative/:id')
  getGearAppearanceRel(@Param() params): Promise<any[]> {
    return this.service.gearAppearanceRel(params.id);
  }

}