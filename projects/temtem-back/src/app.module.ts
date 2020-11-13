import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TournamentModule } from './tournament/tournament.module';
import { StatisticsModule } from './statistics/statistics.module';
import { TemtemModule } from './temtem/temtem.module';
import { PgConf } from '../database.conf';
import { IcoEntity } from './entities/ico.entity';
import { LinkEntity } from './entities/link.entity';
import { TypeEntity } from './entities/type.entity';
import { TournamentEntity } from './entities/tournament.entity';
import { TemtemEntity } from './entities/temtem.entity';
import { PhaseEntity } from './entities/phase.entity';
import { PlayerEntity } from './entities/player.entity';
import { GameEntity } from './entities/game.entity';
import { PrizeEntity } from './entities/prize.entity';
import { ActionEntity } from './entities/action.entity';
import { GameActionEntity } from './entities/game_action.entity';
import { TitleEntity } from './entities/title.entity';
import { TeamEntity } from './entities/team.entity';
import { SetsEntity } from './entities/sets.entity';
import { TournamentPlayersEntity } from './entities/view/tournament_players.entity';
import { PlayerGamesEntity } from './entities/view/player_games.entity';
import { TemtemTypesEntity } from './entities/view/temtem_types.entity';
import { TournamentTemtemActionEntity } from './entities/view/tournament_temtem_action.entity';
import { TemtemStatsEntity } from './entities/view/temtem_stats.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname + '/temtem'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      schema: PgConf.schema,
      username: PgConf.username,
      host: PgConf.host,
      database: PgConf.database,
      password: PgConf.password,
      port: PgConf.port,
      ssl: {
        rejectUnauthorized: false
      },
      entities: [IcoEntity, LinkEntity,
        TournamentEntity, TypeEntity, TeamEntity,
        TemtemEntity, PlayerEntity, PrizeEntity, TypeEntity,
        PhaseEntity, GameEntity, ActionEntity, GameActionEntity,
        TitleEntity, TournamentPlayersEntity, PlayerGamesEntity,
        TemtemTypesEntity, TournamentTemtemActionEntity,
        TemtemStatsEntity, SetsEntity],
      synchronize: true,
    }),
    TournamentModule,
    TemtemModule,
    StatisticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
