import { Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToMany, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { TypeEntity } from './type.entity';
import { TeamEntity } from './team.entity';

@Entity('temtem')
export class TemtemEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @ManyToOne(type => TypeEntity, type => type.temtems_1)
    @JoinColumn({ name: "type_1" })
    type_1: TypeEntity;

    @ManyToOne(type => TypeEntity, type => type.temtems_2)
    @JoinColumn({ name: "type_2" })
    type_2: TypeEntity;

    @IsNotEmpty()
    @Column('integer')
    bs_hp: number;

    
    @IsNotEmpty()
    @Column('integer')
    bs_sta: number;

    
    @IsNotEmpty()
    @Column('integer')
    bs_spd: number;

    @IsNotEmpty()
    @Column('integer')
    bs_atk: number;

    @IsNotEmpty()
    @Column('integer')
    bs_def: number;

    @IsNotEmpty()
    @Column('integer')
    bs_satk: number;

    @IsNotEmpty()
    @Column('integer')
    bs_sdef: number;

    @OneToMany(type => TeamEntity, team => team.temtemE)
    teams: TeamEntity[];
}