import { Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { TemtemEntity } from './temtem.entity';

@Entity('type')
export class TypeEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @OneToMany(type => TemtemEntity, temtem => temtem.type_1)
    temtems_1: TemtemEntity[];

    @OneToMany(type => TemtemEntity, temtem => temtem.type_2)
    temtems_2: TemtemEntity[];
}