import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { TeamEntity } from './team.entity';

@Entity('sets')
export class SetsEntity {
    @PrimaryColumn('integer')
    tournament: number;

    @PrimaryColumn('integer')
    player: number;

    @PrimaryColumn('integer')
    temtem: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20 })
    trait: string;

    @IsNotEmpty()
    @Column('character varying', { length: 20 })
    gear: string;

    @IsNotEmpty()
    @Column('character varying', { array: true })
    moveset: string[];

    @ManyToOne(type => TeamEntity, team => team.sets)
    @JoinColumn([
        { name: "tournament", referencedColumnName: "tournament" },
        { name: "player", referencedColumnName: "player"  },
        { name: "temtem", referencedColumnName: "temtem"  }
    ])
    team: TeamEntity;
}