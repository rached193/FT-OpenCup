import { Controller, Get, Param } from '@nestjs/common';
import { TemtemService } from './temtem.service';

@Controller('back/temtem')
export class TemtemController {
  constructor(private service: TemtemService) {  }

  @Get('list')
  getList(): Promise<any[]> {
    return this.service.temtemList();
  }

  @Get('filter')
  getFilter(): Promise<any[]> {
    return this.service.temtemFilter();
  }

}