import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { LinkEntity } from './link.entity';
import { PrizeEntity } from './prize.entity';
import { TeamEntity } from './team.entity';
import { GameEntity } from './game.entity';

@Entity('tournament')
export class TournamentEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @Column('timestamp with time zone', { nullable: true })
    date: Date;

    @IsNotEmpty()
    @Column('character varying', { length: 50 })
    format: string;

    @Column('character varying', { length: 10, nullable: true })
    version: string;

    @Column('integer', { nullable: true })
    top_cut: number;

    @OneToMany(type => LinkEntity, link => link.tournament)
    links: LinkEntity[];

    @OneToMany(type => PrizeEntity, prize => prize.tournamentE)
    prizes: PrizeEntity[];

    @OneToMany(type => TeamEntity, team => team.tournamentE)
    teams: TeamEntity[];

    @OneToMany(type => GameEntity, game => game.tournamentE)
    games: GameEntity[];
}