import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('player_games', { 
    expression: `SELECT tournament, phase, player1 as player, 'Games' as serie, count(1) as value
    FROM ft_open_cup.game
    GROUP BY tournament, phase, player1
    UNION ALL
    SELECT tournament, phase, player2 as player, 'Games' as serie, count(1) as value
    FROM ft_open_cup.game
    GROUP BY tournament, phase, player2
    UNION ALL
    SELECT tournament, phase, winner as player, 'Wins' as serie, count(1) as value
    FROM ft_open_cup.game
    GROUP BY tournament, phase, winner`
})
export class PlayerGamesEntity {
    @ViewColumn()
    tournament: number;

    @ViewColumn()
    phase: number;

    @ViewColumn()
    player: number;

    @ViewColumn()
    serie: string;

    @ViewColumn()
    value: number;
}