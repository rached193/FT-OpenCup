import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('tournament_temtem_action', { 
    expression: `SELECT sq.tournament, sq.temtem, sq.action, lj.actions
    FROM (SELECT DISTINCT game_action.tournament, game_action.temtem, action.id as action
        FROM ft_open_cup.game_action game_action
        CROSS JOIN ft_open_cup.action action) sq
    LEFT JOIN (SELECT tournament, temtem, action, count(player) as actions
        FROM ft_open_cup.game_Action
        GROUP BY tournament, temtem, action) lj
    ON sq.tournament = lj.tournament
    AND sq.temtem = lj.temtem
    AND sq.action = lj.action`
})
export class TournamentTemtemActionEntity {
    @ViewColumn()
    tournament: number;

    @ViewColumn()
    temtem: number;

    @ViewColumn()
    action: number;
}