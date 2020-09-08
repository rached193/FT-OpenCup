import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('tournament_players', { 
    expression: `SELECT tournament, count(DISTINCT player) as players FROM ft_open_cup.team GROUP BY tournament`
})
export class TournamentPlayersEntity {
    @ViewColumn()
    tournament: number;

    @ViewColumn()
    players: number;
}