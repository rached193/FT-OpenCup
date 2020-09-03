import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { TournamentEntity } from '../entities/tournament.entity';
import { PrizeEntity } from '../entities/prize.entity';

@Injectable()
export class CompetitionService {
  constructor(@InjectRepository(PrizeEntity) private repo: Repository<PrizeEntity>) {
  }

  findList(): Promise<PrizeEntity[]> {
    return this.repo.find({ /*select: ['id', 'name'],*/ order: { tournament: 'ASC', pos: 'ASC' } });
  }

  findDetail(): Promise<PrizeEntity[]> {
    return this.repo.find({
      select: ['tournament', 'pos'],
      order: { tournament: 'ASC', pos: 'ASC' }, relations: ['tournamentE', 'player']
    });
  }

}
