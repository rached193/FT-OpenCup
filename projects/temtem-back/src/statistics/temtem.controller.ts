import { Controller, Get, Param } from '@nestjs/common';
import { TemtemService } from './temtem.service';

@Controller('back/statistics/temtem')
export class TemtemController {
  constructor(private service: TemtemService) {  }

  @Get('stats/:id')
  getStats(@Param() params): Promise<any[]> {
    return this.service.stats(params.id);
  }
}