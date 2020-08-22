import { Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { PrizeEntity } from './prize.entity';
import { TeamEntity } from './team.entity';
import { GameEntity } from './game.entity';

@Entity('player')
export class PlayerEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @OneToMany(type => PrizeEntity, prize => prize.player)
    prizes: PrizeEntity[];

    @OneToMany(type => TeamEntity, team => team.player)
    teams: TeamEntity[];

    @OneToMany(type => GameEntity, game => game.player1)
    games_1: GameEntity[];

    @OneToMany(type => GameEntity, game => game.player2)
    games_2: GameEntity[];

    @OneToMany(type => GameEntity, game => game.winner)
    wins: GameEntity[];
}