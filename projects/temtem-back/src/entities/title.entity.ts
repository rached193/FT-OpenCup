import { Entity, PrimaryColumn} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('title')
export class TitleEntity {
    @PrimaryColumn('character varying', { length: 20, unique: true })
    name: string;
}