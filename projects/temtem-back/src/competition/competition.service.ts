import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { CompetitionEntity } from './competition.entity';

@Injectable()
export class CompetitionService {
  constructor(@InjectRepository(CompetitionEntity) private repo: Repository<CompetitionEntity>) {
  }

  findAll(): Promise<CompetitionEntity[]> {
    return this.repo.find();
  }

  insert(account: CompetitionEntity): Promise<InsertResult> {
    return this.repo.insert(account);
  }
}
