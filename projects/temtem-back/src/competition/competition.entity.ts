import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('competition')
export class CompetitionEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @IsNotEmpty()
    @Column('character varying', { length: 100, unique: true })
    name: string;
}
