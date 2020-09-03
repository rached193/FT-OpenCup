import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { LinkEntity } from './link.entity';

@Entity('ico')
export class IcoEntity {
    @PrimaryColumn('integer')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 20, unique: true })
    name: string;

    @OneToMany(type => LinkEntity, link => link.ico)
    links: LinkEntity[]; 
}