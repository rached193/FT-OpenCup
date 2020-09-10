import { Module } from '@nestjs/common';
import { TemtemService } from './temtem.service';
import { TemtemController } from './temtem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleEntity } from '../entities/title.entity';

@Module({
  providers: [TemtemService],
  controllers: [TemtemController],
  imports: [
    TypeOrmModule.forFeature([TitleEntity]),
  ],
})
export class TemtemModule { }