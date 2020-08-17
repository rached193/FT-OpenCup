import { Module } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionController } from './competition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionEntity } from './competition.entity';

@Module({
  providers: [CompetitionService],
  controllers: [CompetitionController],
  imports: [
    TypeOrmModule.forFeature([CompetitionEntity]),
  ],
})
export class CompetitionModule { }
