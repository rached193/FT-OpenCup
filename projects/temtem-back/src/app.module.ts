import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { CompetitionModule } from './competition/competition.module';
import { TournamentModule } from './tournament/tournament.module';
import { CompetitionEntity } from './competition/competition.entity';
import { PgConf } from '../database.conf';
import { IcoEntity } from './entities/ico.entity';
import { LinkEntity } from './entities/link.entity';
import { TournamentEntity } from './entities/tournament.entity';
import { TypeEntity } from './entities/type.entity';
import { TemtemEntity } from './entities/temtem.entity';
import { PrizeEntity } from './entities/prize.entity';
import { PlayerEntity } from './entities/player.entity';
import { TeamEntity } from './entities/team.entity';
import { GameEntity } from './entities/game.entity';
import { PhaseEntity } from './entities/phase.entity';
import { ActionEntity } from './entities/action.entity';
import { GameActionEntity } from './entities/game_action.entity';
import { TitleEntity } from './entities/title.entity';

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
      entities: [CompetitionEntity, IcoEntity, LinkEntity, TournamentEntity, TypeEntity, TemtemEntity, PlayerEntity, PrizeEntity, TeamEntity, PhaseEntity, GameEntity, ActionEntity, GameActionEntity, TitleEntity],
      synchronize: true,
    }),
    /*CompetitionModule,*/
    TournamentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
