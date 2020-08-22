import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { IcoEntity } from './ico.entity';
import { TournamentEntity } from './tournament.entity';

@Entity('link')
export class LinkEntity {
    /*@PrimaryColumn('integer')
    tournament: number;*/
    @ManyToOne(type => TournamentEntity, tournament => tournament.links, { primary: true })
    @JoinColumn({ name: "tournament" })
    tournament: TournamentEntity;

    /*@PrimaryColumn('integer')
    ico: number;*/
    @ManyToOne(type => IcoEntity, ico => ico.links, { primary: true })
    @JoinColumn({ name: "ico" })
    ico: IcoEntity;

    @IsNotEmpty()
    @Column('character varying', { length: 20 })
    name: string;

    @IsNotEmpty()
    @Column('text')
    url: string;

    @IsNotEmpty()
    @Column('boolean')
    active: boolean;
}