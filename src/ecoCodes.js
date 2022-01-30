const codes = [
  {
    eco: 'A00',
    opening: 'Uncommon Opening',
    name: 'Uncommon',
    value: 'Uncommon'
  },
  {
    eco: 'A01',
    opening: 'Nimzovich-Larsen Attack',
    name: 'Nimzo-Larsen',
    value: 'NimzoLarsen'
  },
  {
    eco: 'A02',
    opening: "Bird's Opening",
    name: "Bird's Opening",
    value: 'BirdsOpening'
  },
  {
    eco: 'A03',
    opening: "Bird's Opening",
    name: "Bird's Opening",
    value: 'BirdsOpening'
  },
  {
    eco: 'A04',
    opening: 'Reti Opening',
    name: 'Reti Opening',
    value: 'RetiOpening'
  },
  {
    eco: 'A05',
    opening: 'Reti Opening',
    name: 'Reti Opening',
    value: 'RetiOpening'
  },
  {
    eco: 'A06',
    opening: 'Reti Opening',
    name: 'Reti Opening',
    value: 'RetiOpening'
  },
  {
    eco: 'A07',
    opening: "King's Indian Attack",
    name: "King's Indian Attack",
    value: 'KingsIndianAttack'
  },
  {
    eco: 'A08',
    opening: "King's Indian Attack",
    name: "King's Indian Attack",
    value: 'KingsIndianAttack'
  },
  { eco: 'A09', opening: 'Reti Opening', name: 'Reti', value: 'Reti' },
  { eco: 'A10', opening: 'English', name: 'English', value: 'English' },
  {
    eco: 'A11',
    opening: 'English, Caro-Kann Defensive System',
    name: 'English',
    value: 'English'
  },
  { eco: 'A12', opening: 'English with b3', name: 'English', value: 'English' },
  { eco: 'A13', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A14', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A15', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A16', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A17', opening: 'English', name: 'English', value: 'English' },
  {
    eco: 'A18',
    opening: 'English, Mikenas-Carls',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A19',
    opening: 'English, Mikenas-Carls, Sicilian Variation',
    name: 'English',
    value: 'English'
  },
  { eco: 'A20', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A21', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A22', opening: 'English', name: 'English', value: 'English' },
  {
    eco: 'A23',
    opening: 'English, Bremen System, Keres Variation',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A24',
    opening: 'English, Bremen System with ...g6',
    name: 'English',
    value: 'English'
  },
  { eco: 'A25', opening: 'English', name: 'English', value: 'English' },
  { eco: 'A26', opening: 'English', name: 'English', value: 'English' },
  {
    eco: 'A27',
    opening: 'English, Three Knights System',
    name: 'English',
    value: 'English'
  },
  { eco: 'A28', opening: 'English', name: 'English', value: 'English' },
  {
    eco: 'A29',
    opening: 'English, Four Knights, Kingside Fianchetto',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A30',
    opening: 'English, Symmetrical',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A31',
    opening: 'English, Symmetrical, Benoni Formation',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A32',
    opening: 'English, Symmetrical Variation',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A33',
    opening: 'English, Symmetrical',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A34',
    opening: 'English, Symmetrical',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A35',
    opening: 'English, Symmetrical',
    name: 'English',
    value: 'English'
  },
  { eco: 'A36', opening: 'English', name: 'English', value: 'English' },
  {
    eco: 'A37',
    opening: 'English, Symmetrical',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A38',
    opening: 'English, Symmetrical',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A39',
    opening: 'English, Symmetrical, Main line with d4',
    name: 'English',
    value: 'English'
  },
  {
    eco: 'A40',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'A41',
    opening: "Queen's Pawn Game (with ...d6)",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'A42',
    opening: 'Modern Defense, Averbakh System',
    name: 'Modern',
    value: 'Modern'
  },
  { eco: 'A43', opening: 'Old Benoni', name: 'Benoni', value: 'Benoni' },
  {
    eco: 'A44',
    opening: 'Old Benoni Defense',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A45',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'A46',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'A47',
    opening: "Queen's Indian",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'A48',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'A49',
    opening: "King's Indian, Fianchetto without c4",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'A50',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'A51',
    opening: 'Budapest Gambit',
    name: 'Budapest Gambit',
    value: 'BudapestGambit'
  },
  {
    eco: 'A52',
    opening: 'Budapest Gambit',
    name: 'Budapest Gambit',
    value: 'BudapestGambit'
  },
  { eco: 'A53', opening: 'Old Indian', name: 'Old Indian', value: 'OldIndian' },
  {
    eco: 'A54',
    opening: 'Old Indian, Ukrainian Variation, 4.Nf3',
    name: 'Old Indian',
    value: 'OldIndian'
  },
  {
    eco: 'A55',
    opening: 'Old Indian, Main line',
    name: 'Old Indian',
    value: 'OldIndian'
  },
  { eco: 'A56', opening: 'Benoni Defense', name: 'Benoni', value: 'Benoni' },
  {
    eco: 'A57',
    opening: 'Benko Gambit',
    name: 'Benko Gambit',
    value: 'BenkoGambit'
  },
  {
    eco: 'A58',
    opening: 'Benko Gambit',
    name: 'Benko Gambit',
    value: 'BenkoGambit'
  },
  {
    eco: 'A59',
    opening: 'Benko Gambit',
    name: 'Benko Gambit',
    value: 'BenkoGambit'
  },
  { eco: 'A60', opening: 'Benoni Defense', name: 'Benoni', value: 'Benoni' },
  { eco: 'A61', opening: 'Benoni', name: 'Benoni', value: 'Benoni' },
  {
    eco: 'A62',
    opening: 'Benoni, Fianchetto Variation',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A63',
    opening: 'Benoni, Fianchetto, 9...Nbd7',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A64',
    opening: 'Benoni, Fianchetto, 11...Re8',
    name: 'Benoni',
    value: 'Benoni'
  },
  { eco: 'A65', opening: 'Benoni, 6.e4', name: 'Benoni', value: 'Benoni' },
  { eco: 'A66', opening: 'Benoni', name: 'Benoni', value: 'Benoni' },
  {
    eco: 'A67',
    opening: 'Benoni, Taimanov Variation',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A68',
    opening: 'Benoni, Four Pawns Attack',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A69',
    opening: 'Benoni, Four Pawns Attack, Main line',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A70',
    opening: 'Benoni, Classical with 7.Nf3',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A71',
    opening: 'Benoni, Classical, 8.Bg5',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A72',
    opening: 'Benoni, Classical without 9.O-O',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A73',
    opening: 'Benoni, Classical, 9.O-O',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A74',
    opening: 'Benoni, Classical, 9...a6, 10.a4',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A75',
    opening: 'Benoni, Classical with ...a6 and 10...Bg4',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A76',
    opening: 'Benoni, Classical, 9...Re8',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A77',
    opening: 'Benoni, Classical, 9...Re8, 10.Nd2',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A78',
    opening: 'Benoni, Classical with ...Re8 and ...Na6',
    name: 'Benoni',
    value: 'Benoni'
  },
  {
    eco: 'A79',
    opening: 'Benoni, Classical, 11.f3',
    name: 'Benoni',
    value: 'Benoni'
  },
  { eco: 'A80', opening: 'Dutch', name: 'Dutch', value: 'Dutch' },
  { eco: 'A81', opening: 'Dutch', name: 'Dutch', value: 'Dutch' },
  {
    eco: 'A82',
    opening: 'Dutch, Staunton Gambit',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A83',
    opening: 'Dutch, Staunton Gambit',
    name: 'Dutch',
    value: 'Dutch'
  },
  { eco: 'A84', opening: 'Dutch', name: 'Dutch', value: 'Dutch' },
  {
    eco: 'A85',
    opening: 'Dutch, with c4 & Nc3',
    name: 'Dutch',
    value: 'Dutch'
  },
  { eco: 'A86', opening: 'Dutch', name: 'Dutch', value: 'Dutch' },
  {
    eco: 'A87',
    opening: 'Dutch, Leningrad, Main Variation',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A88',
    opening: 'Dutch, Leningrad, Main Variation with c6',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A89',
    opening: 'Dutch, Leningrad, Main Variation with Nc6',
    name: 'Dutch',
    value: 'Dutch'
  },
  { eco: 'A90', opening: 'Dutch', name: 'Dutch', value: 'Dutch' },
  { eco: 'A91', opening: 'Dutch Defense', name: 'Dutch', value: 'Dutch' },
  { eco: 'A92', opening: 'Dutch', name: 'Dutch', value: 'Dutch' },
  {
    eco: 'A93',
    opening: 'Dutch, Stonewall, Botvinnik Variation',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A94',
    opening: 'Dutch, Stonewall with Ba3',
    name: 'Dutch',
    value: 'Dutch'
  },
  { eco: 'A95', opening: 'Dutch, Stonewall', name: 'Dutch', value: 'Dutch' },
  {
    eco: 'A96',
    opening: 'Dutch, Classical Variation',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A97',
    opening: 'Dutch, Ilyin-Genevsky',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A98',
    opening: 'Dutch, Ilyin-Genevsky Variation with Qc2',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'A99',
    opening: 'Dutch, Ilyin-Genevsky Variation with b3',
    name: 'Dutch',
    value: 'Dutch'
  },
  {
    eco: 'B00',
    opening: "Uncommon King's Pawn Opening",
    name: 'Uncommon',
    value: 'Uncommon'
  },
  {
    eco: 'B01',
    opening: 'Scandinavian',
    name: 'Scandinavian',
    value: 'Scandinavian'
  },
  {
    eco: 'B02',
    opening: "Alekhine's Defense",
    name: 'Alekhine',
    value: 'Alekhine'
  },
  {
    eco: 'B03',
    opening: "Alekhine's Defense",
    name: 'Alekhine',
    value: 'Alekhine'
  },
  {
    eco: 'B04',
    opening: "Alekhine's Defense, Modern",
    name: 'Alekhine',
    value: 'Alekhine'
  },
  {
    eco: 'B05',
    opening: "Alekhine's Defense, Modern",
    name: 'Alekhine',
    value: 'Alekhine'
  },
  { eco: 'B06', opening: 'Robatsch', name: 'Modern', value: 'Modern' },
  { eco: 'B07', opening: 'Pirc', name: 'Pirc', value: 'Pirc' },
  { eco: 'B08', opening: 'Pirc, Classical', name: 'Pirc', value: 'Pirc' },
  { eco: 'B09', opening: 'Pirc, Austrian Attack', name: 'Pirc', value: 'Pirc' },
  { eco: 'B10', opening: 'Caro-Kann', name: 'Caro-Kann', value: 'CaroKann' },
  {
    eco: 'B11',
    opening: 'Caro-Kann, Two Knights, 3...Bg4',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  {
    eco: 'B12',
    opening: 'Caro-Kann Defense',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  {
    eco: 'B13',
    opening: 'Caro-Kann, Exchange',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  {
    eco: 'B14',
    opening: 'Caro-Kann, Panov-Botvinnik Attack',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  { eco: 'B15', opening: 'Caro-Kann', name: 'Caro-Kann', value: 'CaroKann' },
  {
    eco: 'B16',
    opening: 'Caro-Kann, Bronstein-Larsen Variation',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  {
    eco: 'B17',
    opening: 'Caro-Kann, Steinitz Variation',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  {
    eco: 'B18',
    opening: 'Caro-Kann, Classical',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  {
    eco: 'B19',
    opening: 'Caro-Kann, Classical',
    name: 'Caro-Kann',
    value: 'CaroKann'
  },
  { eco: 'B20', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B21',
    opening: 'Sicilian, 2.f4 and 2.d4',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B22',
    opening: 'Sicilian, Alapin',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B23',
    opening: 'Sicilian, Closed',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B24',
    opening: 'Sicilian, Closed',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B25',
    opening: 'Sicilian, Closed',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B26',
    opening: 'Sicilian, Closed, 6.Be3',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B27', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B28',
    opening: "Sicilian, O'Kelly Variation",
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B29',
    opening: 'Sicilian, Nimzovich-Rubinstein',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B30', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B31',
    opening: 'Sicilian, Rossolimo Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B32', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  { eco: 'B33', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B34',
    opening: 'Sicilian, Accelerated Fianchetto',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B35',
    opening: 'Sicilian, Accelerated Fianchetto, Modern Variation with Bc4',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B36',
    opening: 'Sicilian, Accelerated Fianchetto',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B37',
    opening: 'Sicilian, Accelerated Fianchetto',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B38',
    opening: 'Sicilian, Accelerated Fianchetto, Maroczy Bind, 6.Be3',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B39',
    opening: 'Sicilian, Accelerated Fianchetto, Breyer Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B40', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  { eco: 'B41', opening: 'Sicilian, Kan', name: 'Sicilian', value: 'Sicilian' },
  { eco: 'B42', opening: 'Sicilian, Kan', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B43',
    opening: 'Sicilian, Kan, 5.Nc3',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B44', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B45',
    opening: 'Sicilian, Taimanov',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B46',
    opening: 'Sicilian, Taimanov Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B47',
    opening: 'Sicilian, Taimanov (Bastrikov) Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B48',
    opening: 'Sicilian, Taimanov Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B49',
    opening: 'Sicilian, Taimanov Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B50', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B51',
    opening: 'Sicilian, Canal-Sokolsky (Rossolimo) Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B52',
    opening: 'Sicilian, Canal-Sokolsky (Rossolimo) Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B53', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  { eco: 'B54', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B55',
    opening: 'Sicilian, Prins Variation, Venice Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B56', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  { eco: 'B57', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  { eco: 'B58', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B59',
    opening: 'Sicilian, Boleslavsky Variation, 7.Nb3',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B60',
    opening: 'Sicilian, Richter-Rauzer',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B61',
    opening: 'Sicilian, Richter-Rauzer, Larsen Variation, 7.Qd2',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B62',
    opening: 'Sicilian, Richter-Rauzer',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B63',
    opening: 'Sicilian, Richter-Rauzer Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B64',
    opening: 'Sicilian, Richter-Rauzer Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B65',
    opening: 'Sicilian, Richter-Rauzer Attack, 7...Be7 Defense, 9...Nxd4',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B66',
    opening: 'Sicilian, Richter-Rauzer Attack, 7...a6',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B67',
    opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 8...Bd7',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B68',
    opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 9...Be7',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B69',
    opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 11.Bxf6',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B70',
    opening: 'Sicilian, Dragon Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B71',
    opening: 'Sicilian, Dragon, Levenfish Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B72',
    opening: 'Sicilian, Dragon',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B73',
    opening: 'Sicilian, Dragon, Classical',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B74',
    opening: 'Sicilian, Dragon, Classical',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B75',
    opening: 'Sicilian, Dragon, Yugoslav Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B76',
    opening: 'Sicilian, Dragon, Yugoslav Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B77',
    opening: 'Sicilian, Dragon, Yugoslav Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B78',
    opening: 'Sicilian, Dragon, Yugoslav Attack, 10.castle long',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B79',
    opening: 'Sicilian, Dragon, Yugoslav Attack, 12.h4',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B80',
    opening: 'Sicilian, Scheveningen',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B81',
    opening: 'Sicilian, Scheveningen, Keres Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B82',
    opening: 'Sicilian, Scheveningen',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B83', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B84',
    opening: 'Sicilian, Scheveningen',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B85',
    opening: 'Sicilian, Scheveningen, Classical',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B86',
    opening: 'Sicilian, Fischer-Sozin Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B87',
    opening: 'Sicilian, Fischer-Sozin with ...a6 and ...b5',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B88',
    opening: 'Sicilian, Fischer-Sozin Attack',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  { eco: 'B89', opening: 'Sicilian', name: 'Sicilian', value: 'Sicilian' },
  {
    eco: 'B90',
    opening: 'Sicilian, Najdorf',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B91',
    opening: 'Sicilian, Najdorf, Zagreb (Fianchetto) Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B92',
    opening: 'Sicilian, Najdorf, Opocensky Variation',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B93',
    opening: 'Sicilian, Najdorf, 6.f4',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B94',
    opening: 'Sicilian, Najdorf',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B95',
    opening: 'Sicilian, Najdorf, 6...e6',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B96',
    opening: 'Sicilian, Najdorf',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B97',
    opening: 'Sicilian, Najdorf',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B98',
    opening: 'Sicilian, Najdorf',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'B99',
    opening: 'Sicilian, Najdorf, 7...Be7 Main line',
    name: 'Sicilian',
    value: 'Sicilian'
  },
  {
    eco: 'C00',
    opening: 'French Defense',
    name: 'French Defense',
    value: 'FrenchDefense'
  },
  { eco: 'C01', opening: 'French, Exchange', name: 'French', value: 'French' },
  { eco: 'C02', opening: 'French, Advance', name: 'French', value: 'French' },
  { eco: 'C03', opening: 'French, Tarrasch', name: 'French', value: 'French' },
  {
    eco: 'C04',
    opening: 'French, Tarrasch, Guimard Main line',
    name: 'French',
    value: 'French'
  },
  { eco: 'C05', opening: 'French, Tarrasch', name: 'French', value: 'French' },
  { eco: 'C06', opening: 'French, Tarrasch', name: 'French', value: 'French' },
  { eco: 'C07', opening: 'French, Tarrasch', name: 'French', value: 'French' },
  {
    eco: 'C08',
    opening: 'French, Tarrasch, Open, 4.ed ed',
    name: 'French',
    value: 'French'
  },
  {
    eco: 'C09',
    opening: 'French, Tarrasch, Open Variation, Main line',
    name: 'French',
    value: 'French'
  },
  { eco: 'C10', opening: 'French', name: 'French', value: 'French' },
  { eco: 'C11', opening: 'French', name: 'French', value: 'French' },
  {
    eco: 'C12',
    opening: 'French, McCutcheon',
    name: 'French',
    value: 'French'
  },
  { eco: 'C13', opening: 'French', name: 'French', value: 'French' },
  { eco: 'C14', opening: 'French, Classical', name: 'French', value: 'French' },
  { eco: 'C15', opening: 'French, Winawer', name: 'French', value: 'French' },
  { eco: 'C16', opening: 'French, Winawer', name: 'French', value: 'French' },
  {
    eco: 'C17',
    opening: 'French, Winawer, Advance',
    name: 'French',
    value: 'French'
  },
  { eco: 'C18', opening: 'French, Winawer', name: 'French', value: 'French' },
  {
    eco: 'C19',
    opening: 'French, Winawer, Advance',
    name: 'French',
    value: 'French'
  },
  {
    eco: 'C20',
    opening: "King's Pawn Game",
    name: "King's Pawn Game",
    value: 'KingsPawnGame'
  },
  {
    eco: 'C21',
    opening: 'Center Game',
    name: 'Center Game',
    value: 'CenterGame'
  },
  {
    eco: 'C22',
    opening: 'Center Game',
    name: 'Center Game',
    value: 'CenterGame'
  },
  {
    eco: 'C23',
    opening: "Bishop's Opening",
    name: "Bishop's Opening",
    value: 'BishopsOpening'
  },
  {
    eco: 'C24',
    opening: "Bishop's Opening",
    name: "Bishop's Opening",
    value: 'BishopsOpening'
  },
  { eco: 'C25', opening: 'Vienna', name: 'Vienna', value: 'Vienna' },
  { eco: 'C26', opening: 'Vienna', name: 'Vienna', value: 'Vienna' },
  { eco: 'C27', opening: 'Vienna Game', name: 'Vienna', value: 'Vienna' },
  { eco: 'C28', opening: 'Vienna Game', name: 'Vienna', value: 'Vienna' },
  { eco: 'C29', opening: 'Vienna Gambit', name: 'Vienna', value: 'Vienna' },
  {
    eco: 'C30',
    opening: "King's Gambit Declined",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C31',
    opening: "King's Gambit Declined, Falkbeer Counter Gambit",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C32',
    opening: "King's Gambit Declined, Falkbeer Counter Gambit",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C33',
    opening: "King's Gambit Accepted",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C34',
    opening: "King's Gambit Accepted",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C35',
    opening: "King's Gambit Accepted, Cunningham",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C36',
    opening: "King's Gambit Accepted, Abbazia Defense",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C37',
    opening: "King's Gambit Accepted",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C38',
    opening: "King's Gambit Accepted",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C39',
    opening: "King's Gambit Accepted",
    name: "King's Gambit",
    value: 'KingsGambit'
  },
  {
    eco: 'C40',
    opening: "King's Knight Opening",
    name: "King's Knight Opening",
    value: 'KingsKnightOpening'
  },
  {
    eco: 'C41',
    opening: 'Philidor Defense',
    name: 'Philidor',
    value: 'Philidor'
  },
  { eco: 'C42', opening: 'Petrov Defense', name: 'Petroff', value: 'Petroff' },
  {
    eco: 'C43',
    opening: 'Petrov, Modern Attack',
    name: 'Petroff',
    value: 'Petroff'
  },
  {
    eco: 'C44',
    opening: "King's Pawn Game",
    name: "King's Pawn Game",
    value: 'KingsPawnGame'
  },
  {
    eco: 'C45',
    opening: 'Scotch Game',
    name: 'Scotch Game',
    value: 'ScotchGame'
  },
  {
    eco: 'C46',
    opening: 'Three Knights',
    name: 'Three Knights',
    value: 'ThreeKnights'
  },
  {
    eco: 'C47',
    opening: 'Four Knights',
    name: 'Four Knights',
    value: 'FourKnights'
  },
  {
    eco: 'C48',
    opening: 'Four Knights',
    name: 'Four Knights',
    value: 'FourKnights'
  },
  {
    eco: 'C49',
    opening: 'Four Knights',
    name: 'Four Knights',
    value: 'FourKnights'
  },
  { eco: 'C50', opening: 'Giuoco Piano', name: 'Italian', value: 'Italian' },
  {
    eco: 'C51',
    opening: 'Evans Gambit',
    name: 'Evans Gambit',
    value: 'EvansGambit'
  },
  {
    eco: 'C52',
    opening: 'Evans Gambit',
    name: 'Evans Gambit',
    value: 'EvansGambit'
  },
  { eco: 'C53', opening: 'Giuoco Piano', name: 'Italian', value: 'Italian' },
  { eco: 'C54', opening: 'Giuoco Piano', name: 'Italian', value: 'Italian' },
  {
    eco: 'C55',
    opening: 'Two Knights Defense',
    name: 'Two Knights',
    value: 'TwoKnights'
  },
  {
    eco: 'C56',
    opening: 'Two Knights',
    name: 'Two Knights',
    value: 'TwoKnights'
  },
  {
    eco: 'C57',
    opening: 'Two Knights',
    name: 'Two Knights',
    value: 'TwoKnights'
  },
  {
    eco: 'C58',
    opening: 'Two Knights',
    name: 'Two Knights',
    value: 'TwoKnights'
  },
  {
    eco: 'C59',
    opening: 'Two Knights',
    name: 'Two Knights',
    value: 'TwoKnights'
  },
  { eco: 'C60', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  {
    eco: 'C61',
    opening: "Ruy Lopez, Bird's Defense",
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C62',
    opening: 'Ruy Lopez, Old Steinitz Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C63',
    opening: 'Ruy Lopez, Schliemann Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C64',
    opening: 'Ruy Lopez, Classical',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C65',
    opening: 'Ruy Lopez, Berlin Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  { eco: 'C66', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  { eco: 'C67', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  {
    eco: 'C68',
    opening: 'Ruy Lopez, Exchange',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C69',
    opening: 'Ruy Lopez, Exchange, Gligoric Variation',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  { eco: 'C70', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  { eco: 'C71', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  {
    eco: 'C72',
    opening: 'Ruy Lopez, Modern Steinitz Defense, 5.O-O',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C73',
    opening: 'Ruy Lopez, Modern Steinitz Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C74',
    opening: 'Ruy Lopez, Modern Steinitz Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C75',
    opening: 'Ruy Lopez, Modern Steinitz Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C76',
    opening: 'Ruy Lopez, Modern Steinitz Defense, Fianchetto Variation',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  { eco: 'C77', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  { eco: 'C78', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  {
    eco: 'C79',
    opening: 'Ruy Lopez, Steinitz Defense Deferred',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C80',
    opening: 'Ruy Lopez, Open',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C81',
    opening: 'Ruy Lopez, Open, Howell Attack',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C82',
    opening: 'Ruy Lopez, Open',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C83',
    opening: 'Ruy Lopez, Open',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C84',
    opening: 'Ruy Lopez, Closed',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C85',
    opening: 'Ruy Lopez, Exchange Variation Doubly Deferred (DERLD)',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C86',
    opening: 'Ruy Lopez, Worrall Attack',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  { eco: 'C87', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  { eco: 'C88', opening: 'Ruy Lopez', name: 'Ruy Lopez', value: 'RuyLopez' },
  {
    eco: 'C89',
    opening: 'Ruy Lopez, Marshall',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C90',
    opening: 'Ruy Lopez, Closed',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C91',
    opening: 'Ruy Lopez, Closed',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C92',
    opening: 'Ruy Lopez, Closed',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C93',
    opening: 'Ruy Lopez, Closed, Smyslov Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C94',
    opening: 'Ruy Lopez, Closed, Breyer Defense',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C95',
    opening: 'Ruy Lopez, Closed, Breyer',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C96',
    opening: 'Ruy Lopez, Closed',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C97',
    opening: 'Ruy Lopez, Closed, Chigorin',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C98',
    opening: 'Ruy Lopez, Closed, Chigorin',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'C99',
    opening: 'Ruy Lopez, Closed, Chigorin, 12...cd',
    name: 'Ruy Lopez',
    value: 'RuyLopez'
  },
  {
    eco: 'D00',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'D01',
    opening: 'Richter-Veresov Attack',
    name: 'Veresov',
    value: 'Veresov'
  },
  {
    eco: 'D02',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'D03',
    opening: 'Torre Attack (Tartakower Variation)',
    name: 'Torre',
    value: 'Torre'
  },
  {
    eco: 'D04',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'D05',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'D06',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D07',
    opening: "Queen's Gambit Declined, Chigorin Defense",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D08',
    opening: "Queen's Gambit Declined, Albin Counter Gambit",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D09',
    opening: "Queen's Gambit Declined, Albin Counter Gambit, 5.g3",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D10',
    opening: "Queen's Gambit Declined Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D11',
    opening: "Queen's Gambit Declined Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D12',
    opening: "Queen's Gambit Declined Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D13',
    opening: "Queen's Gambit Declined Slav, Exchange Variation",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D14',
    opening: "Queen's Gambit Declined Slav, Exchange Variation",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D15',
    opening: "Queen's Gambit Declined Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D16',
    opening: "Queen's Gambit Declined Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D17',
    opening: "Queen's Gambit Declined Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D18',
    opening: "Queen's Gambit Declined Slav, Dutch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D19',
    opening: "Queen's Gambit Declined Slav, Dutch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D20',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D21',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D22',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D23',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D24',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D25',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D26',
    opening: "Queen's Gambit Accepted",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D27',
    opening: "Queen's Gambit Accepted, Classical",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D28',
    opening: "Queen's Gambit Accepted, Classical",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D29',
    opening: "Queen's Gambit Accepted, Classical",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D30',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D31',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D32',
    opening: "Queen's Gambit Declined, Tarrasch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D33',
    opening: "Queen's Gambit Declined, Tarrasch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D34',
    opening: "Queen's Gambit Declined, Tarrasch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D35',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D36',
    opening: "Queen's Gambit Declined, Exchange, Positional line, 6.Qc2",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D37',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D38',
    opening: "Queen's Gambit Declined, Ragozin Variation",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D39',
    opening: "Queen's Gambit Declined, Ragozin, Vienna Variation",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D40',
    opening: "Queen's Gambit Declined, Semi-Tarrasch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D41',
    opening: "Queen's Gambit Declined, Semi-Tarrasch",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D42',
    opening: "Queen's Gambit Declined, Semi-Tarrasch, 7.Bd3",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D43',
    opening: "Queen's Gambit Declined Semi-Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D44',
    opening: "Queen's Gambit Declined Semi-Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D45',
    opening: "Queen's Gambit Declined Semi-Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D46',
    opening: "Queen's Gambit Declined Semi-Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D47',
    opening: "Queen's Gambit Declined Semi-Slav",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D48',
    opening: "Queen's Gambit Declined Semi-Slav, Meran",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D49',
    opening: "Queen's Gambit Declined Semi-Slav, Meran",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D50',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D51',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D52',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D53',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D54',
    opening: "Queen's Gambit Declined, Anti-Neo-Orthodox Variation",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D55',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D56',
    opening: "Queen's Gambit Declined",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D57',
    opening: "Queen's Gambit Declined, Lasker Defense",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D58',
    opening:
      "Queen's Gambit Declined, Tartakower (Makagonov-Bondarevsky) System",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D59',
    opening: "Queen's Gambit Declined, Tartakower",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D60',
    opening: "Queen's Gambit Declined, Orthodox Defense",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D61',
    opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D62',
    opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D63',
    opening: "Queen's Gambit Declined, Orthodox Defense",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D64',
    opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D65',
    opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack, Main line",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D66',
    opening: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D67',
    opening: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D68',
    opening: "Queen's Gambit Declined, Orthodox Defense, Classical",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D69',
    opening: "Queen's Gambit Declined, Orthodox Defense, Classical, 13.de",
    name: "Queen's Gambit",
    value: 'QueensGambit'
  },
  {
    eco: 'D70',
    opening: 'Neo-Grunfeld Defense',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  { eco: 'D71', opening: 'Neo-Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  {
    eco: 'D72',
    opening: 'Neo-Grunfeld, 5.cd, Main line',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D73',
    opening: 'Neo-Grunfeld, 5.Nf3',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D74',
    opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D75',
    opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O c5, 8.dxc5',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D76',
    opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O Nb6',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D77',
    opening: 'Neo-Grunfeld, 6.O-O',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D78',
    opening: 'Neo-Grunfeld, 6.O-O c6',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D79',
    opening: 'Neo-Grunfeld, 6.O-O, Main line',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  { eco: 'D80', opening: 'Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  {
    eco: 'D81',
    opening: 'Grunfeld, Russian Variation',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D82',
    opening: 'Grunfeld, 4.Bf4',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D83',
    opening: 'Grunfeld, Grunfeld Gambit',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D84',
    opening: 'Grunfeld, Grunfeld Gambit Accepted',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  { eco: 'D85', opening: 'Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  {
    eco: 'D86',
    opening: 'Grunfeld, Exchange',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D87',
    opening: 'Grunfeld, Exchange',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D88',
    opening: 'Grunfeld, Spassky Variation, Main line, 10...cd, 11.cd',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  { eco: 'D89', opening: 'Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  { eco: 'D90', opening: 'Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  {
    eco: 'D91',
    opening: 'Grunfeld, 5.Bg5',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D92',
    opening: 'Grunfeld, 5.Bf4',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D93',
    opening: 'Grunfeld, with Bf4 & e3',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  { eco: 'D94', opening: 'Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  { eco: 'D95', opening: 'Grunfeld', name: 'Grunfeld', value: 'Grunfeld' },
  {
    eco: 'D96',
    opening: 'Grunfeld, Russian Variation',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D97',
    opening: 'Grunfeld, Russian',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D98',
    opening: 'Grunfeld, Russian',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'D99',
    opening: 'Grunfeld Defense, Smyslov',
    name: 'Grunfeld',
    value: 'Grunfeld'
  },
  {
    eco: 'E00',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  { eco: 'E01', opening: 'Catalan, Closed', name: 'Catalan', value: 'Catalan' },
  {
    eco: 'E02',
    opening: 'Catalan, Open, 5.Qa4',
    name: 'Catalan',
    value: 'Catalan'
  },
  { eco: 'E03', opening: 'Catalan, Open', name: 'Catalan', value: 'Catalan' },
  {
    eco: 'E04',
    opening: 'Catalan, Open, 5.Nf3',
    name: 'Catalan',
    value: 'Catalan'
  },
  {
    eco: 'E05',
    opening: 'Catalan, Open, Classical line',
    name: 'Catalan',
    value: 'Catalan'
  },
  {
    eco: 'E06',
    opening: 'Catalan, Closed, 5.Nf3',
    name: 'Catalan',
    value: 'Catalan'
  },
  { eco: 'E07', opening: 'Catalan, Closed', name: 'Catalan', value: 'Catalan' },
  { eco: 'E08', opening: 'Catalan, Closed', name: 'Catalan', value: 'Catalan' },
  { eco: 'E09', opening: 'Catalan, Closed', name: 'Catalan', value: 'Catalan' },
  {
    eco: 'E10',
    opening: "Queen's Pawn Game",
    name: "Queen's Pawn Game",
    value: 'QueensPawnGame'
  },
  {
    eco: 'E11',
    opening: 'Bogo-Indian Defense',
    name: 'Bogo-Indian',
    value: 'BogoIndian'
  },
  {
    eco: 'E12',
    opening: "Queen's Indian",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E13',
    opening: "Queen's Indian, 4.Nc3, Main line",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E14',
    opening: "Queen's Indian",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E15',
    opening: "Queen's Indian",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E16',
    opening: "Queen's Indian",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E17',
    opening: "Queen's Indian",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E18',
    opening: "Queen's Indian, Old Main line, 7.Nc3",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E19',
    opening: "Queen's Indian, Old Main line, 9.Qxc3",
    name: "Queen's Indian",
    value: 'QueensIndian'
  },
  {
    eco: 'E20',
    opening: 'Nimzo-Indian',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E21',
    opening: 'Nimzo-Indian, Three Knights',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E22',
    opening: 'Nimzo-Indian, Spielmann Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E23',
    opening: 'Nimzo-Indian, Spielmann',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E24',
    opening: 'Nimzo-Indian, Samisch',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E25',
    opening: 'Nimzo-Indian, Samisch',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E26',
    opening: 'Nimzo-Indian, Samisch',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E27',
    opening: 'Nimzo-Indian, Samisch Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E28',
    opening: 'Nimzo-Indian, Samisch Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E29',
    opening: 'Nimzo-Indian, Samisch',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E30',
    opening: 'Nimzo-Indian, Leningrad',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E31',
    opening: 'Nimzo-Indian, Leningrad, Main line',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E32',
    opening: 'Nimzo-Indian, Classical',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E33',
    opening: 'Nimzo-Indian, Classical',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E34',
    opening: 'Nimzo-Indian, Classical, Noa Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E35',
    opening: 'Nimzo-Indian, Classical, Noa Variation, 5.cd ed',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E36',
    opening: 'Nimzo-Indian, Classical',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E37',
    opening: 'Nimzo-Indian, Classical',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E38',
    opening: 'Nimzo-Indian, Classical, 4...c5',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E39',
    opening: 'Nimzo-Indian, Classical, Pirc Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E40',
    opening: 'Nimzo-Indian, 4.e3',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E41',
    opening: 'Nimzo-Indian',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E42',
    opening: 'Nimzo-Indian, 4.e3 c5, 5.Ne2 (Rubinstein)',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E43',
    opening: 'Nimzo-Indian, Fischer Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E44',
    opening: 'Nimzo-Indian, Fischer Variation, 5.Ne2',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E45',
    opening: 'Nimzo-Indian, 4.e3, Bronstein (Byrne) Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E46',
    opening: 'Nimzo-Indian',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E47',
    opening: 'Nimzo-Indian, 4.e3 O-O 5.Bd3',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E48',
    opening: 'Nimzo-Indian, 4.e3 O-O 5.Bd3 d5',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E49',
    opening: 'Nimzo-Indian, 4.e3, Botvinnik System',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E50',
    opening: 'Nimzo-Indian, 4.e3 O-O 5.Nf3, without ...d5',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E51',
    opening: 'Nimzo-Indian, 4.e3',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E52',
    opening: 'Nimzo-Indian, 4.e3, Main line with ...b6',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E53',
    opening: 'Nimzo-Indian, 4.e3',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E54',
    opening: 'Nimzo-Indian, 4.e3, Gligoric System',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E55',
    opening: 'Nimzo-Indian, 4.e3, Gligoric System, Bronstein Variation',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E56',
    opening: 'Nimzo-Indian, 4.e3, Main line with 7...Nc6',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E57',
    opening: 'Nimzo-Indian, 4.e3, Main line with 8...dc and 9...cd',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E58',
    opening: 'Nimzo-Indian, 4.e3, Main line with 8...Bxc3',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E59',
    opening: 'Nimzo-Indian, 4.e3, Main line',
    name: 'Nimzo-Indian',
    value: 'NimzoIndian'
  },
  {
    eco: 'E60',
    opening: "King's Indian Defense",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E61',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E62',
    opening: "King's Indian, Fianchetto",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E63',
    opening: "King's Indian, Fianchetto, Panno Variation",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E64',
    opening: "King's Indian, Fianchetto, Yugoslav System",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E65',
    opening: "King's Indian, Fianchetto, Yugoslav, 7.O-O",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E66',
    opening: "King's Indian, Fianchetto, Yugoslav Panno",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E67',
    opening: "King's Indian, Fianchetto",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E68',
    opening: "King's Indian, Fianchetto, Classical Variation, 8.e4",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E69',
    opening: "King's Indian, Fianchetto, Classical Main line",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E70',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E71',
    opening: "King's Indian, Makagonov System (5.h3)",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E72',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E73',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E74',
    opening: "King's Indian, Averbakh, 6...c5",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E75',
    opening: "King's Indian, Averbakh, Main line",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E76',
    opening: "King's Indian, Four Pawns Attack",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E77',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E78',
    opening: "King's Indian, Four Pawns Attack, with Be2 and Nf3",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E79',
    opening: "King's Indian, Four Pawns Attack, Main line",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E80',
    opening: "King's Indian, Samisch Variation",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E81',
    opening: "King's Indian, Samisch",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E82',
    opening: "King's Indian, Samisch, double Fianchetto Variation",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E83',
    opening: "King's Indian, Samisch",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E84',
    opening: "King's Indian, Samisch, Panno Main line",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E85',
    opening: "King's Indian, Samisch, Orthodox Variation",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E86',
    opening: "King's Indian, Samisch, Orthodox, 7.Nge2 c6",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E87',
    opening: "King's Indian, Samisch, Orthodox",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E88',
    opening: "King's Indian, Samisch, Orthodox, 7.d5 c6",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E89',
    opening: "King's Indian, Samisch, Orthodox Main line",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E90',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E91',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E92',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E93',
    opening: "King's Indian, Petrosian System",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E94',
    opening: "King's Indian, Orthodox",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E95',
    opening: "King's Indian, Orthodox, 7...Nbd7, 8.Re1",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E96',
    opening: "King's Indian, Orthodox, 7...Nbd7, Main line",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E97',
    opening: "King's Indian",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E98',
    opening: "King's Indian, Orthodox, Taimanov, 9.Ne1",
    name: "King's Indian",
    value: 'KingsIndian'
  },
  {
    eco: 'E99',
    opening: "King's Indian, Orthodox, Taimanov",
    name: "King's Indian",
    value: 'KingsIndian'
  }
];
module.exports = codes;
