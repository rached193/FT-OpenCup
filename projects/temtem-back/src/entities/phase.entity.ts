import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { GameEntity } from './game.entity';

@Entity('phase')
export class PhaseEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @OneToMany(type => GameEntity, game => game.phase)
    games: GameEntity[];
}