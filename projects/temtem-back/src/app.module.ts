import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TournamentModule } from './tournament/tournament.module';
import { CompetitionEntity } from './competition/competition.entity';
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

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname + '/temtem'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      schema: 'ft_open_cup',
      username: process.env.DATABASE_USERNAME || PgConf.username,
      host: process.env.DATABASE_HOST || PgConf.host,
      database: process.env.DATABASE || PgConf.database,
      password: process.env.PASSWORD_PASSWORD || PgConf.password,
      port: 5432,
      ssl: {
        rejectUnauthorized: false
      },
      entities: [CompetitionEntity, IcoEntity, LinkEntity,
        TournamentEntity, TypeEntity, TeamEntity,
        TemtemEntity, PlayerEntity, PrizeEntity, TypeEntity,
        PhaseEntity, GameEntity, ActionEntity, GameActionEntity, TitleEntity],
      synchronize: true,
    }),
    /*CompetitionModule,*/
    TournamentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
