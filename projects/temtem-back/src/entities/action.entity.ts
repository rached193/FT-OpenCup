import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { GameActionEntity } from './game_action.entity';

@Entity('action')
export class ActionEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @OneToMany(type => GameActionEntity, game => game.action)
    games: GameActionEntity[];
}