import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column, Unique } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { TournamentEntity } from './tournament.entity';
import { PlayerEntity } from './player.entity';

@Entity('prize')
@Unique('prize_tournament_player_uk', ["tournament", "player"])
export class PrizeEntity {
    @PrimaryColumn('integer')
    tournament: number;

    @PrimaryColumn('integer')
    pos: number;

    @ManyToOne(type => TournamentEntity, tournament => tournament.prizes, { primary: true })
    @JoinColumn({ name: "tournament" })
    tournamentE: TournamentEntity;

    @ManyToOne(type => PlayerEntity, player => player.prizes, { nullable: true })
    @JoinColumn({ name: "player" })
    player: PlayerEntity;

    @Column('integer', { nullable: true })
    points: number;

    @Column('boolean', { nullable: true })
    qualification: boolean;

    @Column('integer', { nullable: true })
    money: number;
}