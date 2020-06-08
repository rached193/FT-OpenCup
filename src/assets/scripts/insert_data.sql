/*TEMTEM_DATA*/

-- TABLE: temtem_data.type

INSERT INTO temtem_data.type(id, name) VALUES
(1, 'Neutral'),
(2, 'Fire'),
(3, 'Water'),
(4, 'Nature'),
(5, 'Electric'),
(6, 'Earth'),
(7, 'Mental'),
(8, 'Wind'),
(9, 'Digital'),
(10, 'Melee'),
(11, 'Crystal'),
(12, 'Toxic');

-- TABLE: temtem_data.temtem

INSERT INTO temtem_data.temtem(id, name, type_1, type_2, bs_hp, bs_sta, bs_spd, bs_atk, bs_def, bs_satk, bs_sdef) VALUES
(2, 'Oree', 9, null, 61, 74, 35, 65, 44, 32, 31), 
(3, 'Zaobian', 9, null, 75, 90, 51, 84, 50, 42, 44), 
(7, 'Platypet', 3, 12, 55, 39, 65, 45, 31, 67, 56), 
(8, 'Platox', 3, 12, 62, 44, 74, 50, 35, 76, 63), 
(9, 'Platimous', 3, 12, 71, 49, 82, 56, 39, 90, 70), 
(10, 'Swali', 4, null, 44, 65, 35, 50, 40, 55, 60), 
(11, 'Loali', 4, 8, 55, 80, 80, 60, 50, 70, 90), 
(12, 'Tateru', 1, null, 79, 85, 60, 78, 66, 54, 66), 
(16, 'Paharo', 8, null, 48, 18, 60, 40, 40, 50, 50), 
(17, 'Paharac', 8, null, 60, 30, 70, 50, 55, 60, 60), 
(18, 'Granpah', 8, null, 69, 36, 78, 55, 61, 72, 66), 
(21, 'Bunbun', 6, 11, 72, 40, 69, 50, 36, 64, 43), 
(22, 'Mudrid', 6, 11, 85, 44, 95, 60, 42, 80, 50), 
(23, 'Hidody', 4, null, 49, 70, 39, 42, 39, 62, 55), 
(24, 'Taifu', 4, null, 60, 87, 45, 50, 45, 85, 89), 
(25, 'Fomu', 3, null, 40, 60, 40, 30, 35, 65, 70), 
(26, 'Wiplump', 3, 8, 66, 80, 70, 40, 50, 95, 80), 
(27, 'Skail', 1, null, 57, 43, 60, 45, 50, 32, 41), 
(28, 'Skunch', 1, 10, 72, 62, 75, 70, 70, 45, 60), 
(32, 'Houchic', 7, null, 38, 44, 66, 40, 41, 72, 52), 
(33, 'Tental', 7, null, 41, 51, 76, 42, 50, 81, 62), 
(35, 'Orphyll', 4, 12, 42, 48, 75, 68, 64, 27, 40), 
(36, 'Nidrasil', 4, 12, 77, 52, 61, 88, 80, 36, 51), 
(37, 'Banapi', 2, null, 42, 40, 70, 50, 50, 40, 41), 
(38, 'Capyre', 2, null, 55, 55, 88, 71, 68, 45, 47), 
(39, 'Lapinite', 11, null, 58, 31, 46, 44, 63, 55, 56), 
(40, 'Azuroc', 11, null, 64, 34, 50, 58, 69, 60, 62), 
(41, 'Zenoreth', 11, null, 71, 35, 56, 67, 87, 65, 69), 
(44, 'Bigu', 4, null, 55, 68, 20, 65, 38, 41, 42), 
(45, 'Babawa', 4, 3, 85, 92, 40, 79, 57, 51, 44), 
(48, 'Kaku', 4, null, 69, 48, 35, 35, 60, 60, 50), 
(49, 'Saku', 4, 8, 82, 60, 40, 40, 62, 66, 70), 
(50, 'Valash', 1, 11, 58, 57, 90, 74, 56, 74, 56), 
(53, 'Barnshe', 7, 8, 50, 51, 65, 60, 40, 75, 79), 
(54, 'Gyalis', 11, 10, 86, 44, 100, 85, 61, 23, 61), 
(55, 'Occlura', 11, null, 50, 39, 50, 45, 43, 38, 65), 
(56, 'Myx', 11, 7, 51, 59, 65, 51, 43, 94, 80), 
(57, 'Raiber', 2, null, 57, 35, 42, 40, 61, 59, 38), 
(58, 'Raize', 2, null, 66, 46, 40, 46, 74, 69, 43), 
(59, 'Raican', 2, null, 77, 49, 60, 77, 77, 51, 50), 
(60, 'Pewki', 3, null, 70, 32, 33, 42, 45, 31, 10), 
(61, 'Piraniant', 3, null, 80, 50, 55, 77, 85, 65, 37), 
(69, 'Saipat', 3, 10, 92, 42, 70, 80, 50, 70, 40), 
(72, 'Crystle', 11, null, 60, 41, 33, 61, 69, 46, 42), 
(73, 'Sherald', 11, null, 68, 45, 43, 69, 78, 51, 48), 
(79, 'Hocus', 7, null, 49, 61, 65, 55, 34, 55, 34), 
(80, 'Pocus', 7, null, 60, 73, 78, 69, 36, 77, 38), 
(82, 'Sparzy', 5, null, 70, 80, 85, 85, 46, 42, 46), 
(84, 'Mushi', 12, null, 48, 33, 68, 48, 36, 48, 29), 
(85, 'Mushook', 12, 10, 67, 45, 81, 81, 80, 49, 41), 
(86, 'Magmis', 2, null, 52, 51, 37, 55, 42, 45, 35), 
(87, 'Mastione', 2, null, 69, 62, 52, 91, 65, 62, 37), 
(88, 'Umishi', 3, null, 51, 76, 80, 21, 34, 63, 45), 
(89, 'Ukama', 3, null, 68, 90, 100, 34, 51, 76, 54), 
(92, 'Smazee', 10, null, 49, 55, 66, 69, 44, 37, 37), 
(93, 'Baboong', 10, null, 54, 61, 75, 79, 51, 41, 41), 
(102, 'Spriole', 4, null, 72, 38, 65, 42, 70, 37, 31), 
(103, 'Deendre', 4, null, 80, 42, 70, 48, 74, 42, 35), 
(104, 'Cerneaf', 4, null, 91, 44, 79, 60, 88, 43, 46), 
(105, 'Toxolotl', 12, null, 59, 40, 47, 50, 64, 65, 37), 
(106, 'Noxolotl', 12, null, 72, 49, 61, 61, 78, 85, 45), 
(107, 'Blooze', 12, null, 68, 50, 33, 43, 52, 46, 54), 
(108, 'Goolder', 12, null, 120, 70, 10, 64, 56, 68, 56), 
(109, 'Zephyruff', 12, 8, 58, 34, 68, 43, 47, 50, 51), 
(110, 'Volarend', 12, 8, 64, 38, 74, 51, 61, 68, 96), 
(113, 'Ganki', 5, 8, 38, 46, 61, 57, 38, 62, 73), 
(114, 'Gazuma', 5, 8, 46, 53, 67, 68, 43, 81, 91), 
(115, 'Oceara', 3, null, 64, 42, 100, 54, 51, 110, 65), 
(122, 'Shuine', 3, 11, 43, 90, 81, 67, 49, 72, 60), 
(123, 'Nessla', 3, 5, 45, 58, 66, 76, 50, 70, 72), 
(127, 'Kalazu', 3, null, 63, 24, 28, 54, 70, 38, 44), 
(128, 'Kalabyss', 3, 12, 82, 37, 37, 75, 100, 65, 55), 
(129, 'Adoroboros', 12, 7, 66, 66, 60, 29, 42, 70, 110), 
(130, 'Tuwai', 8, null, 54, 47, 58, 62, 45, 60, 47), 
(133, 'Tuvine', 8, 11, 57, 47, 65, 65, 111, 56, 47), 
(137, 'Kinu', 4, 7, 47, 74, 74, 53, 41, 69, 96), 
(138, 'Vulvir', 2, 6, 59, 54, 57, 47, 64, 47, 31), 
(139, 'Vulor', 2, 6, 65, 59, 63, 49, 71, 49, 32), 
(140, 'Vulcrane', 2, 6, 76, 65, 73, 74, 86, 64, 35), 
(141, 'Pigepic', 8, null, 54, 72, 58, 60, 72, 45, 72), 
(161, 'Anahir', 11, 2, 54, 36, 31, 50, 101, 50, 101);


/*FT_OPEN_CUP*/

-- TABLE: ft_open_cup.tournament

INSERT INTO ft_open_cup.tournament(id, name, date, format, version, top_cut) VALUES
(1, 'Minor Cup Apr', '2020-04-04 16:00:00+00', 'Swiss Round + Single Elimination bracket. 1 Day.', '0.5.15', 8),
(2, 'Minor Cup May', '2020-05-02 14:00:00+00', 'Swiss Round + Single Elimination bracket. 1 Day.', '0.5.19', 8),
(3, 'Minor Cup Jun', '2020-06-06 14:00:00+00', 'Swiss Round + Single Elimination bracket. 1 Day.', '0.5.19', null),
(4, 'Minor Cup Jul', null, 'Swiss Round + Single Elimination bracket. 1 Day.', null, null),
(5, 'Minor Cup Aug', null, 'Swiss Round + Single Elimination bracket. 1 Day.', null, null),
(6, 'Qualifier Sep', null, 'Swiss Round + Double Elimination bracket. 2 Days.', null, null),
(7, 'Minor Cup Oct', null, 'Swiss Round + Single Elimination bracket. 1 Day.', null, null),
(8, 'Qualifier Nov', null, 'Swiss Round + Double Elimination bracket. 2 Days.', null, null),
(9, 'FT Invitational', null, 'Group Stage + Knockout Stage. 4 days, 2 Weekends.', null, null);

-- TABLE: ft_open_cup.ico

INSERT INTO ft_open_cup.ico(id, name) VALUES
(1, 'FT'),
(2, 'Discord'),
(3, 'Rules'),
(4, 'Graph'),
(5, 'Battlefy'),
(6, 'YouTube'),
(7, 'Twitch');

-- TABLE: ft_open_cup.phase

INSERT INTO ft_open_cup.phase(id, name) VALUES
(1, 'Swiss'),
(2, 'Group'),
(3, 'Knockout');

-- TABLE: ft_open_cup.phase

INSERT INTO ft_open_cup.action(id, name) VALUES
(1, 'Ban'),
(2, 'Pick'),
(3, 'Out');