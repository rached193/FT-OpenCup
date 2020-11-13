import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TitleEntity } from '../entities/title.entity';

@Injectable()
export class TemtemService {
  constructor(@InjectRepository(TitleEntity) private repo: Repository<TitleEntity>) {
  }

  temtemList(): Promise<any[]> {
    return this.repo.createQueryBuilder()
    .select("temtem.id", "id")
    .addSelect("temtem.name", "name")
    .from("temtem", "temtem")
    .orderBy({"id": "ASC"})
    .getRawMany();
  }

  temtemFilter(): Promise<any[]> {
    return this.repo.createQueryBuilder()
    .select("temtem.id", "id")
    .addSelect("temtem.name", "name")
    .addSelect("count(teams.player)::integer", "players")
    .from("temtem", "temtem")
    .innerJoin('temtem.teams', 'teams')
    .groupBy("temtem.id")
    .addGroupBy("temtem.name")
    .orderBy({"players": "DESC", "name": "ASC"})
    .getRawMany();
  }

}
