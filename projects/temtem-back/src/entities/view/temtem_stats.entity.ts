import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('temtem_stats', { 
    expression: `SELECT id as temtem, 7 as order, 'STA' as stat, bs_sta as value
    FROM ft_open_cup.temtem
    UNION ALL
    SELECT id as temtem, 6 as order, 'ATK' as stat, bs_atk as value
    FROM ft_open_cup.temtem
    UNION ALL
    SELECT id as temtem, 5 as order, 'SPATK' as stat, bs_satk as value
    FROM ft_open_cup.temtem
    UNION ALL
    SELECT id as temtem, 4 as order, 'SPD' as stat, bs_spd as value
    FROM ft_open_cup.temtem
    UNION ALL
    SELECT id as temtem, 3 as order, 'SPDEF' as stat, bs_sdef as value
    FROM ft_open_cup.temtem
    UNION ALL
    SELECT id as temtem, 2 as order, 'DEF' as stat, bs_def as value
    FROM ft_open_cup.temtem
    UNION ALL
    SELECT id as temtem, 1 as order, 'HP' as stat, bs_hp as value
    FROM ft_open_cup.temtem`
})
export class TemtemStatsEntity {
    @ViewColumn()
    temtem: number;

    @ViewColumn()
    order: number;

    @ViewColumn()
    stat: number;

    @ViewColumn()
    value: number;
}