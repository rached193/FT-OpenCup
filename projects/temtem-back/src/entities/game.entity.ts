import { Entity, PrimaryColumn, ManyToOne, OneToMany, Column, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { TournamentEntity } from './tournament.entity';
import { PhaseEntity } from './phase.entity';
import { PlayerEntity } from './player.entity';
import { GameActionEntity } from './game_action.entity';

@Entity('game')
export class GameEntity {
    @PrimaryColumn('integer')
    tournament: number;

    @PrimaryColumn('integer')
    phase: number;

    @ManyToOne(type => TournamentEntity, tournament => tournament.games)
    @JoinColumn({ name: "tournament" })
    tournamentE: TournamentEntity;

    @ManyToOne(type => PhaseEntity, phase => phase.games)
    @JoinColumn({ name: "phase" })
    phaseE: PhaseEntity;

    @PrimaryColumn('integer')
    round: number;

    @PrimaryColumn('integer')
    match: number;

    @PrimaryColumn('integer')
    game: number;

    @ManyToOne(type => PlayerEntity, player => player.games_1)
    @JoinColumn({ name: "player1" })
    player1: PlayerEntity;

    @ManyToOne(type => PlayerEntity, player => player.games_2)
    @JoinColumn({ name: "player2" })
    player2: PlayerEntity;

    @ManyToOne(type => PlayerEntity, player => player.wins, { nullable: true })
    @JoinColumn({ name: "winner" })
    winner: PlayerEntity;

    @OneToMany(type => GameActionEntity, action => action.gameG)
    actions: GameActionEntity[];
}