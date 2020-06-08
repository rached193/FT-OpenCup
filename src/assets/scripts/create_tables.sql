/*TEMTEM_DATA*/

-- Table: temtem_data.types

-- DROP TABLE temtem_data.types;

CREATE TABLE temtem_data.type
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    CONSTRAINT type_pkey PRIMARY KEY (id),
    CONSTRAINT type_name_key UNIQUE (name)
);

-- Table: temtem_data.temtem

-- DROP TABLE temtem_data.temtem;

CREATE TABLE temtem_data.temtem
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
	type_1 integer NOT NULL,
	type_2 integer,
	bs_hp integer NOT NULL,
	bs_sta integer NOT NULL,
	bs_spd integer NOT NULL,
	bs_atk integer NOT NULL,
	bs_def integer NOT NULL,
	bs_satk integer NOT NULL,
	bs_sdef integer NOT NULL,
    CONSTRAINT temtem_pk PRIMARY KEY (id),
    CONSTRAINT temtem_name_uk UNIQUE (name),
	CONSTRAINT temtem_type1_fk FOREIGN KEY (type_1) REFERENCES temtem_data.type (id),
	CONSTRAINT temtem_type2_fk FOREIGN KEY (type_2) REFERENCES temtem_data.type (id)
);


/*FT_OPEN_CUP*/

-- TABLE: ft_open_cup.tournament

-- DROP TABLE ft_open_cup.tournament;

CREATE TABLE ft_open_cup.tournament
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    date timestamp with time zone,
	format character varying(50) NOT NULL,
    version character varying(10),
    top_cut integer,
    CONSTRAINT tournament_pk PRIMARY KEY (id),
    CONSTRAINT tournament_name_uk UNIQUE (name)
);

-- Table: ft_open_cup.player

-- DROP TABLE ft_open_cup.player;

CREATE TABLE ft_open_cup.player
(
    id serial NOT NULL,
    name character varying(20) NOT NULL,
    CONSTRAINT player_pk PRIMARY KEY (id),
    CONSTRAINT player_name_uk UNIQUE (name)
);

-- Table: ft_open_cup.prize

-- DROP TABLE ft_open_cup.prize;

CREATE TABLE ft_open_cup.prize
(
    tournament integer NOT NULL,
    pos integer NOT NULL,
    player integer,
    points integer,
	qualification boolean NOT NULL,
    money integer,
    CONSTRAINT prize_pk PRIMARY KEY (tournament, pos),
    CONSTRAINT prize_tournament_player_uk UNIQUE (tournament, player),
    CONSTRAINT prize_tournament_fk FOREIGN KEY (tournament) REFERENCES ft_open_cup.tournament (id),
    CONSTRAINT prize_player_fk FOREIGN KEY (player) REFERENCES ft_open_cup.player (id)
);

-- TABLE: ft_open_cup.ico

-- DROP TABLE ft_open_cup.ico;

CREATE TABLE ft_open_cup.ico
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    CONSTRAINT ico_pk PRIMARY KEY (id),
    CONSTRAINT ico_name_uk UNIQUE (name)
);

-- TABLE: ft_open_cup.link

-- DROP TABLE ft_open_cup.link;

CREATE TABLE ft_open_cup.link
(
    tournament integer NOT NULL,
	ico integer NOT NULL,
	name character varying(20) NOT NULL,
	url text NOT NULL,
    active boolean NOT NULL,
    CONSTRAINT link_pk PRIMARY KEY (tournament, ico),
	CONSTRAINT link_tournament_fk FOREIGN KEY (tournament) REFERENCES ft_open_cup.tournament (id),
    CONSTRAINT link_ico_fk FOREIGN KEY (ico) REFERENCES ft_open_cup.ico (id)
);

-- Table: ft_open_cup.phase

-- DROP TABLE ft_open_cup.phase;

CREATE TABLE ft_open_cup.phase
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    CONSTRAINT phase_pk PRIMARY KEY (id),
    CONSTRAINT phase_name_uk UNIQUE (name)
);

-- Table: ft_open_cup.team

-- DROP TABLE ft_open_cup.team;

CREATE TABLE ft_open_cup.team
(
    tournament integer NOT NULL,
    player integer NOT NULL,
    temtem integer NOT NULL,
    CONSTRAINT team_pk PRIMARY KEY (tournament, player, temtem),
    CONSTRAINT team_player_fk FOREIGN KEY (player) REFERENCES ft_open_cup.player (id),
    CONSTRAINT team_temtem_fk FOREIGN KEY (temtem) REFERENCES temtem_data.temtem (id),
    CONSTRAINT team_tournament_fk FOREIGN KEY (tournament) REFERENCES ft_open_cup.tournament (id)
);

-- Table: ft_open_cup.game

-- DROP TABLE ft_open_cup.game;

CREATE TABLE ft_open_cup.game
(
    tournament integer NOT NULL,
    phase integer NOT NULL,
    round integer NOT NULL,
    match integer NOT NULL,
    game integer NOT NULL,
    player1 integer NOT NULL,
    player2 integer NOT NULL,
    winner integer,
    CONSTRAINT game_pk PRIMARY KEY (tournament, phase, round, match, game),
    CONSTRAINT game_tournament_fk FOREIGN KEY (tournament) REFERENCES ft_open_cup.tournament (id),
	CONSTRAINT game_phase_fk FOREIGN KEY (phase) REFERENCES ft_open_cup.phase (id),
    CONSTRAINT game_player1_fk FOREIGN KEY (player1) REFERENCES ft_open_cup.player (id),
    CONSTRAINT game_player2_fk FOREIGN KEY (player2) REFERENCES ft_open_cup.player (id),
    CONSTRAINT game_winner_fk FOREIGN KEY (winner) REFERENCES ft_open_cup.player (id)
);

-- Table: ft_open_cup.action

-- DROP TABLE ft_open_cup.action;

CREATE TABLE ft_open_cup.action
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    CONSTRAINT action_pk PRIMARY KEY (id),
    CONSTRAINT action_name_uk UNIQUE (name)
);

-- Table: ft_open_cup.game_action

-- DROP TABLE ft_open_cup.game_action;

CREATE TABLE ft_open_cup.game_action
(
    tournament integer NOT NULL,
    phase integer NOT NULL,
    round integer NOT NULL,
    match integer NOT NULL,
    game integer NOT NULL,
    player integer NOT NULL,
    temtem integer NOT NULL,
    action integer NOT NULL,
    CONSTRAINT game_action_pk PRIMARY KEY (tournament, phase, round, match, game, player, temtem),
    CONSTRAINT game_action_game_fk FOREIGN KEY (tournament, phase, round, match, game) REFERENCES ft_open_cup.game (tournament, phase, round, match, game),
	CONSTRAINT game_action_team_fk FOREIGN KEY (tournament, player, temtem) REFERENCES ft_open_cup.team (tournament, player, temtem),
    CONSTRAINT game_action_action_fk FOREIGN KEY (action) REFERENCES ft_open_cup.action (id)
);