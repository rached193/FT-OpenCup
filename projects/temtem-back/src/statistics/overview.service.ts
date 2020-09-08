import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import { TitleEntity } from '../entities/title.entity';

@Injectable()
export class OverviewService {
  constructor(@InjectRepository(TitleEntity) private repo: Repository<TitleEntity>) {
  }

  temtemAppearance(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.name', 'category')
      .addSelect(`'Teams'`, 'serie')
      .addSelect('count(team.player)::integer', 'value')
      .from('team', 'team')
      .innerJoin('team.temtemE', 'temtem')
      .where('team.tournament = :id', { id: id })
      .orWhere(':id = 0', { id: id })
      .groupBy('temtem.name')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemAppearanceRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.temtem', 'category')
      .addSelect(`'Teams'`, 'serie')
      .addSelect('round(100::numeric*sum(temtem.teams)/sum(temtem.players), 2)::real', 'value')
      .from(subQuery => {
        return subQuery
          .select('temtem.name', 'temtem')
          .addSelect('count(team.player)::numeric', 'teams')
          .addSelect(subQuery => {
            return subQuery
              .select('sum(tp.players::numeric)')
              .from('tournament_players', 'tp')
              .where('tp.tournament = :id', { id: id })
              .orWhere(':id = 0', { id: id });
          }, "players")
          .from('team', 'team')
          .innerJoin('team.temtemE', 'temtem')
          .where('team.tournament = :id', { id: id })
          .orWhere(':id = 0', { id: id })
          .groupBy('temtem.name');
      }, "temtem")
      .groupBy('temtem.temtem')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemAppearanceTopCut(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.name', 'category')
      .addSelect(`'Teams'`, 'serie')
      .addSelect('count(team.player)::integer', 'value')
      .from('tournament', 'tournament')
      .innerJoin('tournament.prizes', 'prizes', 'prizes.pos <= tournament.top_cut')
      .innerJoin('team', 'team', 'team.tournament = prizes.tournament and team.player = prizes.player')
      .innerJoin('team.temtemE', 'temtem')
      .where('team.tournament = :id', { id: id })
      .orWhere(':id = 0', { id: id })
      .groupBy('temtem.name')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemAppearanceTopCutRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.temtem', 'category')
      .addSelect(`'Teams'`, 'serie')
      .addSelect('round(100::numeric*sum(temtem.teams)/sum(temtem.players), 2)::real', 'value')
      .from(subQuery => {
        return subQuery
          .select('temtem.name', 'temtem')
          .addSelect('count(team.player)::numeric', 'teams')
          .addSelect(subQuery => {
            return subQuery
              .select('sum(tournament.top_cut::numeric)')
              .from('tournament', 'tournament')
              .where('tournament.id = :id', { id: id })
              .orWhere(':id = 0', { id: id });
          }, "players")
          .from('tournament', 'tournament')
          .innerJoin('tournament.prizes', 'prizes', 'prizes.pos <= tournament.top_cut')
          .innerJoin('team', 'team', 'team.tournament = prizes.tournament and team.player = prizes.player')
          .innerJoin('team.temtemE', 'temtem')
          .where('team.tournament = :id', { id: id })
          .orWhere(':id = 0', { id: id })
          .groupBy('temtem.name');
      }, "temtem")
      .groupBy('temtem.temtem')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemWinrate(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.name', 'category')
      .addSelect('games.serie', 'serie')
      .addSelect('sum(games.value)::integer', 'value')
      .from('player_games', 'games')
      .innerJoin('team', 'team', 'games.tournament = team.tournament and games.player = team.player')
      .innerJoin('team.temtemE', 'temtem')
      .where('games.tournament = :id', { id: id })
      .orWhere(':id = 0', { id: id })
      .groupBy('temtem.name')
      .addGroupBy('games.serie')
      .orderBy({
        'serie': 'ASC',
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemWinrateTopCut(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.name', 'category')
      .addSelect('games.serie', 'serie')
      .addSelect('sum(games.value)::integer', 'value')
      .from('player_games', 'games')
      .innerJoin('team', 'team', 'games.tournament = team.tournament and games.player = team.player')
      .innerJoin('team.temtemE', 'temtem')
      .where('games.phase = 3')
      .andWhere(new Brackets(qb => {
        qb.where('games.tournament = :id', { id: id })
        .orWhere(':id = 0', { id: id })
      }))
      .groupBy('temtem.name')
      .addGroupBy('games.serie')
      .orderBy({
        'serie': 'ASC',
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemWinrateRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('sq.category', 'category')
      .addSelect('sq.serie', 'serie')
      .addSelect(`round(100::numeric*sum(sq.value)/(CASE WHEN sq.serie = 'Games' THEN sum(sq.total_games) ELSE sum(sq.temtem_games) END)::numeric, 2)::real`, 'value')
      .from(subQuery => {
        return subQuery
        .select('temtem.name', 'category')
        .addSelect('games.serie', 'serie')
        .addSelect('sum(games.value)::numeric', 'value')
        .addSelect(subQuery => {
          return subQuery
            .select('count(game)::numeric*2::numeric')
            .from('game', 'game')
            .where('game.tournament = :id', { id: id })
            .orWhere(':id = 0', { id: id })
        }, 'total_games')
        .addSelect(subQuery => {
          return subQuery
            .select('sum(gamesi.value::numeric)')
            .from('player_games', 'gamesi')
            .innerJoin('team', 'teami', 'gamesi.tournament = teami.tournament and gamesi.player = teami.player')
            .where(`gamesi.serie = 'Games'`)
            .andWhere(new Brackets(qb => {
              qb.where('gamesi.tournament = :id', { id: id })
              .orWhere(':id = 0', { id: id })
            }))
            .andWhere('teami.temtem = team.temtem');
        }, "temtem_games")
        .from('player_games', 'games')
        .innerJoin('team', 'team', 'games.tournament = team.tournament and games.player = team.player')
        .innerJoin('team.temtemE', 'temtem')
        .where('games.tournament = :id', { id: id })
        .orWhere(':id = 0', { id: id })
        .groupBy('team.temtem')
        .addGroupBy('temtem.name')
        .addGroupBy('games.serie');
      }, "sq")
      .groupBy('sq.category')
      .addGroupBy('sq.serie')
      .orderBy({
        'serie': 'ASC',
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemWinrateTopCutRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('sq.category', 'category')
      .addSelect('sq.serie', 'serie')
      .addSelect(`round(100::numeric*sum(sq.value)/(CASE WHEN sq.serie = 'Games' THEN sum(sq.total_games) ELSE sum(sq.temtem_games) END)::numeric, 2)::real`, 'value')
      .from(subQuery => {
        return subQuery
        .select('temtem.name', 'category')
        .addSelect('games.serie', 'serie')
        .addSelect('sum(games.value)::numeric', 'value')
        .addSelect(subQuery => {
          return subQuery
            .select('count(game)::numeric*2::numeric')
            .from('game', 'game')
            .where('game.phase = 3')
            .andWhere(new Brackets(qb => {
              qb.where('game.tournament = :id', { id: id })
              .orWhere(':id = 0', { id: id })
            }))
        }, 'total_games')
        .addSelect(subQuery => {
          return subQuery
            .select('sum(gamesi.value::numeric)')
            .from('player_games', 'gamesi')
            .innerJoin('team', 'teami', 'gamesi.tournament = teami.tournament and gamesi.player = teami.player')
            .where(`gamesi.serie = 'Games'`)
            .andWhere('gamesi.phase = 3')
            .andWhere(new Brackets(qb => {
              qb.where('gamesi.tournament = :id', { id: id })
              .orWhere(':id = 0', { id: id })
            }))
            .andWhere('teami.temtem = team.temtem');
        }, "temtem_games")
        .from('player_games', 'games')
        .innerJoin('team', 'team', 'games.tournament = team.tournament and games.player = team.player')
        .innerJoin('team.temtemE', 'temtem')
        .where('games.phase = 3')
        .andWhere(new Brackets(qb => {
          qb.where('games.tournament = :id', { id: id })
          .orWhere(':id = 0', { id: id })
        }))
        .groupBy('team.temtem')
        .addGroupBy('temtem.name')
        .addGroupBy('games.serie')
      }, "sq")
      .groupBy('sq.category')
      .addGroupBy('sq.serie')
      .orderBy({
        'serie': 'ASC',
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  typeAppearance(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('type.name', 'category')
      .addSelect(`'Temtems'`, 'serie')
      .addSelect('count(types.temtem)::integer', 'value')
      .from('temtem_types', 'types')
      .innerJoin('team', 'team', 'types.temtem = team.temtem')
      .innerJoin('type', 'type', 'types.type = type.id')
      .where('team.tournament = :id', { id: id })
      .orWhere(':id = 0', { id: id })
      .groupBy('type.name')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  typeAppearanceRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('type_use.name', 'category')
      .addSelect(`'Temtems'`, 'serie')
      .addSelect('round(sum(type_use.temtems)/sum(type_use.players), 2)::real', 'value')
      .from(subQuery => {
        return subQuery
          .select('type.name', 'name')
        .addSelect('count(types.temtem)::numeric', 'temtems')
        .addSelect(subQuery => {
          return subQuery
            .select('sum(tp.players::numeric)')
            .from('tournament_players', 'tp')
            .where('tp.tournament = :id', { id: id })
            .orWhere(':id = 0', { id: id });
        }, "players")
        .from('temtem_types', 'types')
        .innerJoin('team', 'team', 'types.temtem = team.temtem')
        .innerJoin('type', 'type', 'types.type = type.id')
        .where('team.tournament = :id', { id: id })
        .orWhere(':id = 0', { id: id })
        .groupBy('type.name')
      }, 'type_use')
      .groupBy('type_use.name')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  typeAppearanceTopCut(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('type.name', 'category')
      .addSelect(`'Temtems'`, 'serie')
      .addSelect('count(team.player)::integer', 'value')
      .from('tournament', 'tournament')
      .innerJoin('tournament.prizes', 'prizes', 'prizes.pos <= tournament.top_cut')
      .innerJoin('team', 'team', 'team.tournament = prizes.tournament and team.player = prizes.player')
      .innerJoin('temtem_types', 'types', 'team.temtem = types.temtem')
      .innerJoin('type', 'type', 'types.type = type.id')
      .where('team.tournament = :id', { id: id })
      .orWhere(':id = 0', { id: id })
      .groupBy('type.name')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  typeAppearanceTopCutRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('type_use.name', 'category')
      .addSelect(`'Temtems'`, 'serie')
      .addSelect('round(sum(type_use.temtems)/sum(type_use.players), 2)::real', 'value')
      .from(subQuery => {
        return subQuery
          .select('type.name', 'name')
        .addSelect('count(types.temtem)::numeric', 'temtems')
        .addSelect(subQuery => {
          return subQuery
            .select('sum(tournament.top_cut::numeric)')
            .from('tournament', 'tournament')
            .where('tournament.id = :id', { id: id })
            .orWhere(':id = 0', { id: id });
        }, "players")
        .from('tournament', 'tournament')
        .innerJoin('tournament.prizes', 'prizes', 'prizes.pos <= tournament.top_cut')
        .innerJoin('team', 'team', 'team.tournament = prizes.tournament and team.player = prizes.player')
        .innerJoin('temtem_types', 'types', 'team.temtem = types.temtem')
        .innerJoin('type', 'type', 'types.type = type.id')
        .where('team.tournament = :id', { id: id })
        .orWhere(':id = 0', { id: id })
        .groupBy('type.name')
      }, 'type_use')
      .groupBy('type_use.name')
      .orderBy({
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemPickrate(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('temtem.name', 'category')
      .addSelect(`action.name||'s'`, 'serie')
      .addSelect('sum(game_action.actions)::integer', 'value')
      .addSelect(subQuery => {
        return subQuery
          .select('count(game_actioni.temtem)::integer')
          .from('game_action', 'game_actioni')
          .where('game_actioni.temtem = temtem.id')
          .andWhere(new Brackets(qb => {
            qb.where('game_actioni.tournament = :id', { id: id })
            .orWhere(':id = 0', { id: id })
          }))
      }, 'total_actions')
      .from('tournament_temtem_action', 'game_action')
      .innerJoin('action', 'action', 'game_action.action = action.id')
      .innerJoin('temtem', 'temtem', 'game_action.temtem = temtem.id')
      .where('game_action.tournament = :id', { id: id })
      .orWhere(':id = 0', { id: id })
      .groupBy('temtem.id')
      .addGroupBy('temtem.name')
      .addGroupBy('action.name')
      .addGroupBy('action.id')
      .orderBy({
        'action.id': 'ASC',
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

  temtemPickrateRel(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('sq.temtem', 'category')
      .addSelect(`sq.action||'s'`, 'serie')
      .addSelect('round(100::numeric*sum(sq.value)/sum(sq.total_actions), 2)::real', 'value')
      .addSelect('round(sum(sq.total_actions), 0)::real', 'total_actions')
      .from(subQuery => {
        return subQuery
          .select('temtem.name', 'temtem')
          .addSelect('action.name', 'action')
          .addSelect('action.id', 'order')
          .addSelect('sum(game_action.actions)::numeric', 'value')
          .addSelect(subQuery => {
            return subQuery
              .select('count(game_actioni.temtem)::numeric')
              .from('game_action', 'game_actioni')
              .where('game_actioni.temtem = temtem.id')
              .andWhere(new Brackets(qb => {
                qb.where('game_actioni.tournament = :id', { id: id })
                .orWhere(':id = 0', { id: id })
              }))
          }, 'total_actions')
          .from('tournament_temtem_action', 'game_action')
          .innerJoin('action', 'action', 'game_action.action = action.id')
          .innerJoin('temtem', 'temtem', 'game_action.temtem = temtem.id')
          .where('game_action.tournament = :id', { id: id })
          .orWhere(':id = 0', { id: id })
          .groupBy('temtem.id')
          .addGroupBy('temtem.name')
          .addGroupBy('action.name')
          .addGroupBy('action.id')
      }, 'sq')
      .addGroupBy('sq.temtem')
      .addGroupBy('sq.action')
      .addGroupBy('sq.order')
      .orderBy({
        'sq.order': 'ASC',
        'value': 'DESC',
        'category': 'ASC'
      })
      .getRawMany();
  }

}
