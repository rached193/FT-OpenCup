import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { CompetitionModule } from './competition/competition.module';
import { CompetitionEntity } from './competition/competition.entity';
import { PgConf } from '../database.conf';

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
      entities: [CompetitionEntity],
      synchronize: true,
    }),
    CompetitionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
