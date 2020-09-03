import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { GameEntity } from './game.entity';
import { TeamEntity } from './team.entity';
import { ActionEntity } from './action.entity';

@Entity('game_action')
export class GameActionEntity {
    @PrimaryColumn('integer')
    tournament: number;

    @PrimaryColumn('integer')
    phase: number;

    @PrimaryColumn('integer')
    round: number;

    @PrimaryColumn('integer')
    match: number;

    @PrimaryColumn('integer')
    game: number;

    @PrimaryColumn('integer')
    player: number;

    @PrimaryColumn('integer')
    temtem: number;

    @ManyToOne(type => GameEntity, game => game.actions)
    @JoinColumn([
        { name: "tournament", referencedColumnName: "tournament" },
        { name: "phase", referencedColumnName: "phase"  },
        { name: "round", referencedColumnName: "round"  },
        { name: "match", referencedColumnName: "match"  },
        { name: "game", referencedColumnName: "game"  }
    ])
    gameG: GameEntity;

    @ManyToOne(type => TeamEntity, team => team.actions)
    @JoinColumn([
        { name: "tournament", referencedColumnName: "tournament" },
        { name: "player", referencedColumnName: "player"  },
        { name: "temtem", referencedColumnName: "temtem"  }
    ])
    team: TeamEntity;

    @ManyToOne(type => ActionEntity, action => action.games)
    @JoinColumn({ name: "action" })
    action: ActionEntity;
}