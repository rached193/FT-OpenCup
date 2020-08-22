import { Module } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionController } from './competition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeEntity } from '../entities/prize.entity';

@Module({
  providers: [CompetitionService],
  controllers: [CompetitionController],
  imports: [
    TypeOrmModule.forFeature([PrizeEntity]),
  ],
})
export class CompetitionModule { }
