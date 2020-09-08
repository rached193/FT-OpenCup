import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TitleEntity } from '../entities/title.entity';

@Injectable()
export class TournamentService {
  constructor(@InjectRepository(TitleEntity) private repo: Repository<TitleEntity>) {
  }

  tournamentList(): Promise<any[]> {
    return this.repo.createQueryBuilder()
    .select("tournament.id", "id")
    .addSelect("tournament.name", "name")
    .from("tournament", "tournament")
    .orderBy({"id": "ASC"})
    .getRawMany();
  }

  tournamentDetail(id): Promise<any> {
    return this.repo.createQueryBuilder()
      .select("tournament.id", "id")
      .addSelect("tournament.name", "name")
      .addSelect("tournament.date", "date")
      .addSelect("tournament.format", "format")
      .addSelect("tournament.version", "version")
      .addSelect(subQuery => {
        return subQuery
          .select("jsonb_agg(jsonb_build_object('ico', ico.name, 'title', link.name, 'url', link.url))")
          .from("link", "link")
          .innerJoin("link.ico", "ico")
          .where("link.tournament = tournament.id")
          .andWhere("link.active = true");
      }, "link")
      .addSelect(subQuery => {
        return subQuery
          .select("jsonb_agg(jsonb_build_object('pos', prize.pos, 'player', player.name, 'points', prize.points, 'money', prize.money))")
          .from("prize", "prize")
          .leftJoin("prize.player", "player")
          .where("prize.tournament = tournament.id")
      }, "table")
      .from("tournament", "tournament")
      .where("tournament.id = :id", { id: id })
      .getRawOne();
  }

  tournamentLinks(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select("ico.name", "ico")
      .addSelect("link.name", "title")
      .addSelect("link.url", "url")
      .from("link", "link")
      .innerJoin("link.ico", "ico")
      .where("link.tournament = :id", { id: id })
      .andWhere("link.active = true")
      .orderBy({"ico.id": "ASC"})
      .getRawMany();
  }

  tournamentPrizes(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select("RANK() OVER(ORDER BY prize.points DESC)", "rank")
      .addSelect("player.name", "player")
      .addSelect("prize.points", "points")
      .addSelect("prize.money", "money")
      .from("prize", "prize")
      .innerJoin("prize.player", "player")
      .where("prize.tournament = :id", { id: id })
      .orderBy({
        "rank": "ASC",
        "player": "ASC"
      })
      .getRawMany();
  }

  circuitClasification(): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select("RANK() OVER(ORDER BY sum(prize.points) DESC)", "rank")
      .addSelect("player.name", "player")
      .addSelect("sum(prize.points)", "points")
      .from("prize", "prize")
      .innerJoin("prize.player", "player")
      .groupBy("player.name")
      .orderBy({
        "rank": "ASC",
        "player": "ASC"
      })
      .getRawMany();
  }
}
