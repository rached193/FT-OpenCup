import { Module } from '@nestjs/common';
import { OverviewService } from './overview.service';
import { OverviewController } from './overview.controller';
import { TemtemService } from './temtem.service';
import { TemtemController } from './temtem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleEntity } from '../entities/title.entity';

@Module({
  providers: [OverviewService, TemtemService],
  controllers: [OverviewController, TemtemController],
  imports: [
    TypeOrmModule.forFeature([TitleEntity]),
  ],
})
export class StatisticsModule { }