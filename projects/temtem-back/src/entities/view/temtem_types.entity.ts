import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('temtem_types', { 
    expression: `SELECT id as temtem, type_1 as type FROM ft_open_cup.temtem UNION ALL SELECT id as temtem, type_2 as type FROM ft_open_cup.temtem WHERE type_2 IS NOT NULL`
})
export class TemtemTypesEntity {
    @ViewColumn()
    temtem: number;

    @ViewColumn()
    type: number;
}