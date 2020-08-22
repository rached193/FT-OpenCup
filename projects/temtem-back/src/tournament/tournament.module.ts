import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleEntity } from '../entities/title.entity';

@Module({
  providers: [TournamentService],
  controllers: [TournamentController],
  imports: [
    TypeOrmModule.forFeature([TitleEntity]),
  ],
})
export class TournamentModule { }