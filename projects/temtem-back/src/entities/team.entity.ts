import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { TournamentEntity } from './tournament.entity';
import { PlayerEntity } from './player.entity';
import { TemtemEntity } from './temtem.entity';
import { GameActionEntity } from './game_action.entity';

@Entity('team')
export class TeamEntity {
    @PrimaryColumn('integer')
    tournament: number;

    @PrimaryColumn('integer')
    player: number;

    @PrimaryColumn('integer')
    temtem: number;
    
    @ManyToOne(type => TournamentEntity, tournament => tournament.teams)
    @JoinColumn({ name: "tournament" })
    tournamentE: TournamentEntity;

    @ManyToOne(type => PlayerEntity, player => player.teams)
    @JoinColumn({ name: "player" })
    playerE: PlayerEntity;

    @ManyToOne(type => TemtemEntity, temtem => temtem.teams)
    @JoinColumn({ name: "temtem" })
    temtemE: TemtemEntity;

    @OneToMany(type => GameActionEntity, action => action.team)
    actions: GameActionEntity[];
}