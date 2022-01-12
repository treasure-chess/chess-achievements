const codes = [
  {
    ECO: 'A00',
    Opening: 'Uncommon Opening',
    Name: 'Uncommon'
  },
  {
    ECO: 'A01',
    Opening: 'Nimzovich-Larsen Attack',
    Name: 'Nimzo-Larsen'
  },
  {
    ECO: 'A02',
    Opening: "Bird's Opening",
    Name: "Bird's Opening"
  },
  {
    ECO: 'A03',
    Opening: "Bird's Opening",
    Name: "Bird's Opening"
  },
  {
    ECO: 'A04',
    Opening: 'Reti Opening',
    Name: 'Reti Opening'
  },
  {
    ECO: 'A05',
    Opening: 'Reti Opening',
    Name: 'Reti Opening'
  },
  {
    ECO: 'A06',
    Opening: 'Reti Opening',
    Name: 'Reti Opening'
  },
  {
    ECO: 'A07',
    Opening: "King's Indian Attack",
    Name: "King's Indian Attack"
  },
  {
    ECO: 'A08',
    Opening: "King's Indian Attack",
    Name: "King's Indian Attack"
  },
  {
    ECO: 'A09',
    Opening: 'Reti Opening',
    Name: 'Reti'
  },
  {
    ECO: 'A10',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A11',
    Opening: 'English, Caro-Kann Defensive System',
    Name: 'English'
  },
  {
    ECO: 'A12',
    Opening: 'English with b3',
    Name: 'English'
  },
  {
    ECO: 'A13',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A14',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A15',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A16',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A17',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A18',
    Opening: 'English, Mikenas-Carls',
    Name: 'English'
  },
  {
    ECO: 'A19',
    Opening: 'English, Mikenas-Carls, Sicilian Variation',
    Name: 'English'
  },
  {
    ECO: 'A20',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A21',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A22',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A23',
    Opening: 'English, Bremen System, Keres Variation',
    Name: 'English'
  },
  {
    ECO: 'A24',
    Opening: 'English, Bremen System with ...g6',
    Name: 'English'
  },
  {
    ECO: 'A25',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A26',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A27',
    Opening: 'English, Three Knights System',
    Name: 'English'
  },
  {
    ECO: 'A28',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A29',
    Opening: 'English, Four Knights, Kingside Fianchetto',
    Name: 'English'
  },
  {
    ECO: 'A30',
    Opening: 'English, Symmetrical',
    Name: 'English'
  },
  {
    ECO: 'A31',
    Opening: 'English, Symmetrical, Benoni Formation',
    Name: 'English'
  },
  {
    ECO: 'A32',
    Opening: 'English, Symmetrical Variation',
    Name: 'English'
  },
  {
    ECO: 'A33',
    Opening: 'English, Symmetrical',
    Name: 'English'
  },
  {
    ECO: 'A34',
    Opening: 'English, Symmetrical',
    Name: 'English'
  },
  {
    ECO: 'A35',
    Opening: 'English, Symmetrical',
    Name: 'English'
  },
  {
    ECO: 'A36',
    Opening: 'English',
    Name: 'English'
  },
  {
    ECO: 'A37',
    Opening: 'English, Symmetrical',
    Name: 'English'
  },
  {
    ECO: 'A38',
    Opening: 'English, Symmetrical',
    Name: 'English'
  },
  {
    ECO: 'A39',
    Opening: 'English, Symmetrical, Main line with d4',
    Name: 'English'
  },
  {
    ECO: 'A40',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'A41',
    Opening: "Queen's Pawn Game (with ...d6)",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'A42',
    Opening: 'Modern Defense, Averbakh System',
    Name: 'Modern'
  },
  {
    ECO: 'A43',
    Opening: 'Old Benoni',
    Name: 'Benoni'
  },
  {
    ECO: 'A44',
    Opening: 'Old Benoni Defense',
    Name: 'Benoni'
  },
  {
    ECO: 'A45',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'A46',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'A47',
    Opening: "Queen's Indian",
    Name: "Queen's Indian"
  },
  {
    ECO: 'A48',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'A49',
    Opening: "King's Indian, Fianchetto without c4",
    Name: "King's Indian"
  },
  {
    ECO: 'A50',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'A51',
    Opening: 'Budapest Gambit',
    Name: 'Budapest Gambit'
  },
  {
    ECO: 'A52',
    Opening: 'Budapest Gambit',
    Name: 'Budapest Gambit'
  },
  {
    ECO: 'A53',
    Opening: 'Old Indian',
    Name: 'Old Indian'
  },
  {
    ECO: 'A54',
    Opening: 'Old Indian, Ukrainian Variation, 4.Nf3',
    Name: 'Old Indian'
  },
  {
    ECO: 'A55',
    Opening: 'Old Indian, Main line',
    Name: 'Old Indian'
  },
  {
    ECO: 'A56',
    Opening: 'Benoni Defense',
    Name: 'Benoni'
  },
  {
    ECO: 'A57',
    Opening: 'Benko Gambit',
    Name: 'Benko Gambit'
  },
  {
    ECO: 'A58',
    Opening: 'Benko Gambit',
    Name: 'Benko Gambit'
  },
  {
    ECO: 'A59',
    Opening: 'Benko Gambit',
    Name: 'Benko Gambit'
  },
  {
    ECO: 'A60',
    Opening: 'Benoni Defense',
    Name: 'Benoni'
  },
  {
    ECO: 'A61',
    Opening: 'Benoni',
    Name: 'Benoni'
  },
  {
    ECO: 'A62',
    Opening: 'Benoni, Fianchetto Variation',
    Name: 'Benoni'
  },
  {
    ECO: 'A63',
    Opening: 'Benoni, Fianchetto, 9...Nbd7',
    Name: 'Benoni'
  },
  {
    ECO: 'A64',
    Opening: 'Benoni, Fianchetto, 11...Re8',
    Name: 'Benoni'
  },
  {
    ECO: 'A65',
    Opening: 'Benoni, 6.e4',
    Name: 'Benoni'
  },
  {
    ECO: 'A66',
    Opening: 'Benoni',
    Name: 'Benoni'
  },
  {
    ECO: 'A67',
    Opening: 'Benoni, Taimanov Variation',
    Name: 'Benoni'
  },
  {
    ECO: 'A68',
    Opening: 'Benoni, Four Pawns Attack',
    Name: 'Benoni'
  },
  {
    ECO: 'A69',
    Opening: 'Benoni, Four Pawns Attack, Main line',
    Name: 'Benoni'
  },
  {
    ECO: 'A70',
    Opening: 'Benoni, Classical with 7.Nf3',
    Name: 'Benoni'
  },
  {
    ECO: 'A71',
    Opening: 'Benoni, Classical, 8.Bg5',
    Name: 'Benoni'
  },
  {
    ECO: 'A72',
    Opening: 'Benoni, Classical without 9.O-O',
    Name: 'Benoni'
  },
  {
    ECO: 'A73',
    Opening: 'Benoni, Classical, 9.O-O',
    Name: 'Benoni'
  },
  {
    ECO: 'A74',
    Opening: 'Benoni, Classical, 9...a6, 10.a4',
    Name: 'Benoni'
  },
  {
    ECO: 'A75',
    Opening: 'Benoni, Classical with ...a6 and 10...Bg4',
    Name: 'Benoni'
  },
  {
    ECO: 'A76',
    Opening: 'Benoni, Classical, 9...Re8',
    Name: 'Benoni'
  },
  {
    ECO: 'A77',
    Opening: 'Benoni, Classical, 9...Re8, 10.Nd2',
    Name: 'Benoni'
  },
  {
    ECO: 'A78',
    Opening: 'Benoni, Classical with ...Re8 and ...Na6',
    Name: 'Benoni'
  },
  {
    ECO: 'A79',
    Opening: 'Benoni, Classical, 11.f3',
    Name: 'Benoni'
  },
  {
    ECO: 'A80',
    Opening: 'Dutch',
    Name: 'Dutch'
  },
  {
    ECO: 'A81',
    Opening: 'Dutch',
    Name: 'Dutch'
  },
  {
    ECO: 'A82',
    Opening: 'Dutch, Staunton Gambit',
    Name: 'Dutch'
  },
  {
    ECO: 'A83',
    Opening: 'Dutch, Staunton Gambit',
    Name: 'Dutch'
  },
  {
    ECO: 'A84',
    Opening: 'Dutch',
    Name: 'Dutch'
  },
  {
    ECO: 'A85',
    Opening: 'Dutch, with c4 & Nc3',
    Name: 'Dutch'
  },
  {
    ECO: 'A86',
    Opening: 'Dutch',
    Name: 'Dutch'
  },
  {
    ECO: 'A87',
    Opening: 'Dutch, Leningrad, Main Variation',
    Name: 'Dutch'
  },
  {
    ECO: 'A88',
    Opening: 'Dutch, Leningrad, Main Variation with c6',
    Name: 'Dutch'
  },
  {
    ECO: 'A89',
    Opening: 'Dutch, Leningrad, Main Variation with Nc6',
    Name: 'Dutch'
  },
  {
    ECO: 'A90',
    Opening: 'Dutch',
    Name: 'Dutch'
  },
  {
    ECO: 'A91',
    Opening: 'Dutch Defense',
    Name: 'Dutch'
  },
  {
    ECO: 'A92',
    Opening: 'Dutch',
    Name: 'Dutch'
  },
  {
    ECO: 'A93',
    Opening: 'Dutch, Stonewall, Botvinnik Variation',
    Name: 'Dutch'
  },
  {
    ECO: 'A94',
    Opening: 'Dutch, Stonewall with Ba3',
    Name: 'Dutch'
  },
  {
    ECO: 'A95',
    Opening: 'Dutch, Stonewall',
    Name: 'Dutch'
  },
  {
    ECO: 'A96',
    Opening: 'Dutch, Classical Variation',
    Name: 'Dutch'
  },
  {
    ECO: 'A97',
    Opening: 'Dutch, Ilyin-Genevsky',
    Name: 'Dutch'
  },
  {
    ECO: 'A98',
    Opening: 'Dutch, Ilyin-Genevsky Variation with Qc2',
    Name: 'Dutch'
  },
  {
    ECO: 'A99',
    Opening: 'Dutch, Ilyin-Genevsky Variation with b3',
    Name: 'Dutch'
  },
  {
    ECO: 'B00',
    Opening: "Uncommon King's Pawn Opening",
    Name: 'Uncommon'
  },
  {
    ECO: 'B01',
    Opening: 'Scandinavian',
    Name: 'Scandinavian'
  },
  {
    ECO: 'B02',
    Opening: "Alekhine's Defense",
    Name: 'Alekhine'
  },
  {
    ECO: 'B03',
    Opening: "Alekhine's Defense",
    Name: 'Alekhine'
  },
  {
    ECO: 'B04',
    Opening: "Alekhine's Defense, Modern",
    Name: 'Alekhine'
  },
  {
    ECO: 'B05',
    Opening: "Alekhine's Defense, Modern",
    Name: 'Alekhine'
  },
  {
    ECO: 'B06',
    Opening: 'Robatsch',
    Name: 'Modern'
  },
  {
    ECO: 'B07',
    Opening: 'Pirc',
    Name: 'Pirc'
  },
  {
    ECO: 'B08',
    Opening: 'Pirc, Classical',
    Name: 'Pirc'
  },
  {
    ECO: 'B09',
    Opening: 'Pirc, Austrian Attack',
    Name: 'Pirc'
  },
  {
    ECO: 'B10',
    Opening: 'Caro-Kann',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B11',
    Opening: 'Caro-Kann, Two Knights, 3...Bg4',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B12',
    Opening: 'Caro-Kann Defense',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B13',
    Opening: 'Caro-Kann, Exchange',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B14',
    Opening: 'Caro-Kann, Panov-Botvinnik Attack',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B15',
    Opening: 'Caro-Kann',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B16',
    Opening: 'Caro-Kann, Bronstein-Larsen Variation',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B17',
    Opening: 'Caro-Kann, Steinitz Variation',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B18',
    Opening: 'Caro-Kann, Classical',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B19',
    Opening: 'Caro-Kann, Classical',
    Name: 'Caro-Kann'
  },
  {
    ECO: 'B20',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B21',
    Opening: 'Sicilian, 2.f4 and 2.d4',
    Name: 'Sicilian'
  },
  {
    ECO: 'B22',
    Opening: 'Sicilian, Alapin',
    Name: 'Sicilian'
  },
  {
    ECO: 'B23',
    Opening: 'Sicilian, Closed',
    Name: 'Sicilian'
  },
  {
    ECO: 'B24',
    Opening: 'Sicilian, Closed',
    Name: 'Sicilian'
  },
  {
    ECO: 'B25',
    Opening: 'Sicilian, Closed',
    Name: 'Sicilian'
  },
  {
    ECO: 'B26',
    Opening: 'Sicilian, Closed, 6.Be3',
    Name: 'Sicilian'
  },
  {
    ECO: 'B27',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B28',
    Opening: "Sicilian, O'Kelly Variation",
    Name: 'Sicilian'
  },
  {
    ECO: 'B29',
    Opening: 'Sicilian, Nimzovich-Rubinstein',
    Name: 'Sicilian'
  },
  {
    ECO: 'B30',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B31',
    Opening: 'Sicilian, Rossolimo Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B32',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B33',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B34',
    Opening: 'Sicilian, Accelerated Fianchetto',
    Name: 'Sicilian'
  },
  {
    ECO: 'B35',
    Opening: 'Sicilian, Accelerated Fianchetto, Modern Variation with Bc4',
    Name: 'Sicilian'
  },
  {
    ECO: 'B36',
    Opening: 'Sicilian, Accelerated Fianchetto',
    Name: 'Sicilian'
  },
  {
    ECO: 'B37',
    Opening: 'Sicilian, Accelerated Fianchetto',
    Name: 'Sicilian'
  },
  {
    ECO: 'B38',
    Opening: 'Sicilian, Accelerated Fianchetto, Maroczy Bind, 6.Be3',
    Name: 'Sicilian'
  },
  {
    ECO: 'B39',
    Opening: 'Sicilian, Accelerated Fianchetto, Breyer Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B40',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B41',
    Opening: 'Sicilian, Kan',
    Name: 'Sicilian'
  },
  {
    ECO: 'B42',
    Opening: 'Sicilian, Kan',
    Name: 'Sicilian'
  },
  {
    ECO: 'B43',
    Opening: 'Sicilian, Kan, 5.Nc3',
    Name: 'Sicilian'
  },
  {
    ECO: 'B44',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B45',
    Opening: 'Sicilian, Taimanov',
    Name: 'Sicilian'
  },
  {
    ECO: 'B46',
    Opening: 'Sicilian, Taimanov Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B47',
    Opening: 'Sicilian, Taimanov (Bastrikov) Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B48',
    Opening: 'Sicilian, Taimanov Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B49',
    Opening: 'Sicilian, Taimanov Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B50',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B51',
    Opening: 'Sicilian, Canal-Sokolsky (Rossolimo) Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B52',
    Opening: 'Sicilian, Canal-Sokolsky (Rossolimo) Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B53',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B54',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B55',
    Opening: 'Sicilian, Prins Variation, Venice Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B56',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B57',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B58',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B59',
    Opening: 'Sicilian, Boleslavsky Variation, 7.Nb3',
    Name: 'Sicilian'
  },
  {
    ECO: 'B60',
    Opening: 'Sicilian, Richter-Rauzer',
    Name: 'Sicilian'
  },
  {
    ECO: 'B61',
    Opening: 'Sicilian, Richter-Rauzer, Larsen Variation, 7.Qd2',
    Name: 'Sicilian'
  },
  {
    ECO: 'B62',
    Opening: 'Sicilian, Richter-Rauzer',
    Name: 'Sicilian'
  },
  {
    ECO: 'B63',
    Opening: 'Sicilian, Richter-Rauzer Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B64',
    Opening: 'Sicilian, Richter-Rauzer Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B65',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...Be7 Defense, 9...Nxd4',
    Name: 'Sicilian'
  },
  {
    ECO: 'B66',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6',
    Name: 'Sicilian'
  },
  {
    ECO: 'B67',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 8...Bd7',
    Name: 'Sicilian'
  },
  {
    ECO: 'B68',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 9...Be7',
    Name: 'Sicilian'
  },
  {
    ECO: 'B69',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 11.Bxf6',
    Name: 'Sicilian'
  },
  {
    ECO: 'B70',
    Opening: 'Sicilian, Dragon Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B71',
    Opening: 'Sicilian, Dragon, Levenfish Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B72',
    Opening: 'Sicilian, Dragon',
    Name: 'Sicilian'
  },
  {
    ECO: 'B73',
    Opening: 'Sicilian, Dragon, Classical',
    Name: 'Sicilian'
  },
  {
    ECO: 'B74',
    Opening: 'Sicilian, Dragon, Classical',
    Name: 'Sicilian'
  },
  {
    ECO: 'B75',
    Opening: 'Sicilian, Dragon, Yugoslav Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B76',
    Opening: 'Sicilian, Dragon, Yugoslav Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B77',
    Opening: 'Sicilian, Dragon, Yugoslav Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B78',
    Opening: 'Sicilian, Dragon, Yugoslav Attack, 10.castle long',
    Name: 'Sicilian'
  },
  {
    ECO: 'B79',
    Opening: 'Sicilian, Dragon, Yugoslav Attack, 12.h4',
    Name: 'Sicilian'
  },
  {
    ECO: 'B80',
    Opening: 'Sicilian, Scheveningen',
    Name: 'Sicilian'
  },
  {
    ECO: 'B81',
    Opening: 'Sicilian, Scheveningen, Keres Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B82',
    Opening: 'Sicilian, Scheveningen',
    Name: 'Sicilian'
  },
  {
    ECO: 'B83',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B84',
    Opening: 'Sicilian, Scheveningen',
    Name: 'Sicilian'
  },
  {
    ECO: 'B85',
    Opening: 'Sicilian, Scheveningen, Classical',
    Name: 'Sicilian'
  },
  {
    ECO: 'B86',
    Opening: 'Sicilian, Fischer-Sozin Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B87',
    Opening: 'Sicilian, Fischer-Sozin with ...a6 and ...b5',
    Name: 'Sicilian'
  },
  {
    ECO: 'B88',
    Opening: 'Sicilian, Fischer-Sozin Attack',
    Name: 'Sicilian'
  },
  {
    ECO: 'B89',
    Opening: 'Sicilian',
    Name: 'Sicilian'
  },
  {
    ECO: 'B90',
    Opening: 'Sicilian, Najdorf',
    Name: 'Sicilian'
  },
  {
    ECO: 'B91',
    Opening: 'Sicilian, Najdorf, Zagreb (Fianchetto) Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B92',
    Opening: 'Sicilian, Najdorf, Opocensky Variation',
    Name: 'Sicilian'
  },
  {
    ECO: 'B93',
    Opening: 'Sicilian, Najdorf, 6.f4',
    Name: 'Sicilian'
  },
  {
    ECO: 'B94',
    Opening: 'Sicilian, Najdorf',
    Name: 'Sicilian'
  },
  {
    ECO: 'B95',
    Opening: 'Sicilian, Najdorf, 6...e6',
    Name: 'Sicilian'
  },
  {
    ECO: 'B96',
    Opening: 'Sicilian, Najdorf',
    Name: 'Sicilian'
  },
  {
    ECO: 'B97',
    Opening: 'Sicilian, Najdorf',
    Name: 'Sicilian'
  },
  {
    ECO: 'B98',
    Opening: 'Sicilian, Najdorf',
    Name: 'Sicilian'
  },
  {
    ECO: 'B99',
    Opening: 'Sicilian, Najdorf, 7...Be7 Main line',
    Name: 'Sicilian'
  },
  {
    ECO: 'C00',
    Opening: 'French Defense',
    Name: 'French Defense'
  },
  {
    ECO: 'C01',
    Opening: 'French, Exchange',
    Name: 'French'
  },
  {
    ECO: 'C02',
    Opening: 'French, Advance',
    Name: 'French'
  },
  {
    ECO: 'C03',
    Opening: 'French, Tarrasch',
    Name: 'French'
  },
  {
    ECO: 'C04',
    Opening: 'French, Tarrasch, Guimard Main line',
    Name: 'French'
  },
  {
    ECO: 'C05',
    Opening: 'French, Tarrasch',
    Name: 'French'
  },
  {
    ECO: 'C06',
    Opening: 'French, Tarrasch',
    Name: 'French'
  },
  {
    ECO: 'C07',
    Opening: 'French, Tarrasch',
    Name: 'French'
  },
  {
    ECO: 'C08',
    Opening: 'French, Tarrasch, Open, 4.ed ed',
    Name: 'French'
  },
  {
    ECO: 'C09',
    Opening: 'French, Tarrasch, Open Variation, Main line',
    Name: 'French'
  },
  {
    ECO: 'C10',
    Opening: 'French',
    Name: 'French'
  },
  {
    ECO: 'C11',
    Opening: 'French',
    Name: 'French'
  },
  {
    ECO: 'C12',
    Opening: 'French, McCutcheon',
    Name: 'French'
  },
  {
    ECO: 'C13',
    Opening: 'French',
    Name: 'French'
  },
  {
    ECO: 'C14',
    Opening: 'French, Classical',
    Name: 'French'
  },
  {
    ECO: 'C15',
    Opening: 'French, Winawer',
    Name: 'French'
  },
  {
    ECO: 'C16',
    Opening: 'French, Winawer',
    Name: 'French'
  },
  {
    ECO: 'C17',
    Opening: 'French, Winawer, Advance',
    Name: 'French'
  },
  {
    ECO: 'C18',
    Opening: 'French, Winawer',
    Name: 'French'
  },
  {
    ECO: 'C19',
    Opening: 'French, Winawer, Advance',
    Name: 'French'
  },
  {
    ECO: 'C20',
    Opening: "King's Pawn Game",
    Name: "King's Pawn Game"
  },
  {
    ECO: 'C21',
    Opening: 'Center Game',
    Name: 'Center Game'
  },
  {
    ECO: 'C22',
    Opening: 'Center Game',
    Name: 'Center Game'
  },
  {
    ECO: 'C23',
    Opening: "Bishop's Opening",
    Name: "Bishop's Opening"
  },
  {
    ECO: 'C24',
    Opening: "Bishop's Opening",
    Name: "Bishop's Opening"
  },
  {
    ECO: 'C25',
    Opening: 'Vienna',
    Name: 'Vienna'
  },
  {
    ECO: 'C26',
    Opening: 'Vienna',
    Name: 'Vienna'
  },
  {
    ECO: 'C27',
    Opening: 'Vienna Game',
    Name: 'Vienna'
  },
  {
    ECO: 'C28',
    Opening: 'Vienna Game',
    Name: 'Vienna'
  },
  {
    ECO: 'C29',
    Opening: 'Vienna Gambit',
    Name: 'Vienna'
  },
  {
    ECO: 'C30',
    Opening: "King's Gambit Declined",
    Name: "King's Gambit"
  },
  {
    ECO: 'C31',
    Opening: "King's Gambit Declined, Falkbeer Counter Gambit",
    Name: "King's Gambit"
  },
  {
    ECO: 'C32',
    Opening: "King's Gambit Declined, Falkbeer Counter Gambit",
    Name: "King's Gambit"
  },
  {
    ECO: 'C33',
    Opening: "King's Gambit Accepted",
    Name: "King's Gambit"
  },
  {
    ECO: 'C34',
    Opening: "King's Gambit Accepted",
    Name: "King's Gambit"
  },
  {
    ECO: 'C35',
    Opening: "King's Gambit Accepted, Cunningham",
    Name: "King's Gambit"
  },
  {
    ECO: 'C36',
    Opening: "King's Gambit Accepted, Abbazia Defense",
    Name: "King's Gambit"
  },
  {
    ECO: 'C37',
    Opening: "King's Gambit Accepted",
    Name: "King's Gambit"
  },
  {
    ECO: 'C38',
    Opening: "King's Gambit Accepted",
    Name: "King's Gambit"
  },
  {
    ECO: 'C39',
    Opening: "King's Gambit Accepted",
    Name: "King's Gambit"
  },
  {
    ECO: 'C40',
    Opening: "King's Knight Opening",
    Name: "King's Knight Opening"
  },
  {
    ECO: 'C41',
    Opening: 'Philidor Defense',
    Name: 'Philidor'
  },
  {
    ECO: 'C42',
    Opening: 'Petrov Defense',
    Name: 'Petroff'
  },
  {
    ECO: 'C43',
    Opening: 'Petrov, Modern Attack',
    Name: 'Petroff'
  },
  {
    ECO: 'C44',
    Opening: "King's Pawn Game",
    Name: "King's Pawn Game"
  },
  {
    ECO: 'C45',
    Opening: 'Scotch Game',
    Name: 'Scotch Game'
  },
  {
    ECO: 'C46',
    Opening: 'Three Knights',
    Name: 'Three Knights'
  },
  {
    ECO: 'C47',
    Opening: 'Four Knights',
    Name: 'Four Knights'
  },
  {
    ECO: 'C48',
    Opening: 'Four Knights',
    Name: 'Four Knights'
  },
  {
    ECO: 'C49',
    Opening: 'Four Knights',
    Name: 'Four Knights'
  },
  {
    ECO: 'C50',
    Opening: 'Giuoco Piano',
    Name: 'Italian'
  },
  {
    ECO: 'C51',
    Opening: 'Evans Gambit',
    Name: 'Evans Gambit'
  },
  {
    ECO: 'C52',
    Opening: 'Evans Gambit',
    Name: 'Evans Gambit'
  },
  {
    ECO: 'C53',
    Opening: 'Giuoco Piano',
    Name: 'Italian'
  },
  {
    ECO: 'C54',
    Opening: 'Giuoco Piano',
    Name: 'Italian'
  },
  {
    ECO: 'C55',
    Opening: 'Two Knights Defense',
    Name: 'Two Knights'
  },
  {
    ECO: 'C56',
    Opening: 'Two Knights',
    Name: 'Two Knights'
  },
  {
    ECO: 'C57',
    Opening: 'Two Knights',
    Name: 'Two Knights'
  },
  {
    ECO: 'C58',
    Opening: 'Two Knights',
    Name: 'Two Knights'
  },
  {
    ECO: 'C59',
    Opening: 'Two Knights',
    Name: 'Two Knights'
  },
  {
    ECO: 'C60',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C61',
    Opening: "Ruy Lopez, Bird's Defense",
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C62',
    Opening: 'Ruy Lopez, Old Steinitz Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C63',
    Opening: 'Ruy Lopez, Schliemann Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C64',
    Opening: 'Ruy Lopez, Classical',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C65',
    Opening: 'Ruy Lopez, Berlin Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C66',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C67',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C68',
    Opening: 'Ruy Lopez, Exchange',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C69',
    Opening: 'Ruy Lopez, Exchange, Gligoric Variation',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C70',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C71',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C72',
    Opening: 'Ruy Lopez, Modern Steinitz Defense, 5.O-O',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C73',
    Opening: 'Ruy Lopez, Modern Steinitz Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C74',
    Opening: 'Ruy Lopez, Modern Steinitz Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C75',
    Opening: 'Ruy Lopez, Modern Steinitz Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C76',
    Opening: 'Ruy Lopez, Modern Steinitz Defense, Fianchetto Variation',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C77',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C78',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C79',
    Opening: 'Ruy Lopez, Steinitz Defense Deferred',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C80',
    Opening: 'Ruy Lopez, Open',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C81',
    Opening: 'Ruy Lopez, Open, Howell Attack',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C82',
    Opening: 'Ruy Lopez, Open',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C83',
    Opening: 'Ruy Lopez, Open',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C84',
    Opening: 'Ruy Lopez, Closed',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C85',
    Opening: 'Ruy Lopez, Exchange Variation Doubly Deferred (DERLD)',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C86',
    Opening: 'Ruy Lopez, Worrall Attack',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C87',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C88',
    Opening: 'Ruy Lopez',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C89',
    Opening: 'Ruy Lopez, Marshall',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C90',
    Opening: 'Ruy Lopez, Closed',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C91',
    Opening: 'Ruy Lopez, Closed',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C92',
    Opening: 'Ruy Lopez, Closed',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C93',
    Opening: 'Ruy Lopez, Closed, Smyslov Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C94',
    Opening: 'Ruy Lopez, Closed, Breyer Defense',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C95',
    Opening: 'Ruy Lopez, Closed, Breyer',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C96',
    Opening: 'Ruy Lopez, Closed',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C97',
    Opening: 'Ruy Lopez, Closed, Chigorin',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C98',
    Opening: 'Ruy Lopez, Closed, Chigorin',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'C99',
    Opening: 'Ruy Lopez, Closed, Chigorin, 12...cd',
    Name: 'Ruy Lopez'
  },
  {
    ECO: 'D00',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'D01',
    Opening: 'Richter-Veresov Attack',
    Name: 'Veresov'
  },
  {
    ECO: 'D02',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'D03',
    Opening: 'Torre Attack (Tartakower Variation)',
    Name: 'Torre'
  },
  {
    ECO: 'D04',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'D05',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'D06',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D07',
    Opening: "Queen's Gambit Declined, Chigorin Defense",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D08',
    Opening: "Queen's Gambit Declined, Albin Counter Gambit",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D09',
    Opening: "Queen's Gambit Declined, Albin Counter Gambit, 5.g3",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D10',
    Opening: "Queen's Gambit Declined Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D11',
    Opening: "Queen's Gambit Declined Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D12',
    Opening: "Queen's Gambit Declined Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D13',
    Opening: "Queen's Gambit Declined Slav, Exchange Variation",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D14',
    Opening: "Queen's Gambit Declined Slav, Exchange Variation",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D15',
    Opening: "Queen's Gambit Declined Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D16',
    Opening: "Queen's Gambit Declined Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D17',
    Opening: "Queen's Gambit Declined Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D18',
    Opening: "Queen's Gambit Declined Slav, Dutch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D19',
    Opening: "Queen's Gambit Declined Slav, Dutch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D20',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D21',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D22',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D23',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D24',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D25',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D26',
    Opening: "Queen's Gambit Accepted",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D27',
    Opening: "Queen's Gambit Accepted, Classical",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D28',
    Opening: "Queen's Gambit Accepted, Classical",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D29',
    Opening: "Queen's Gambit Accepted, Classical",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D30',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D31',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D32',
    Opening: "Queen's Gambit Declined, Tarrasch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D33',
    Opening: "Queen's Gambit Declined, Tarrasch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D34',
    Opening: "Queen's Gambit Declined, Tarrasch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D35',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D36',
    Opening: "Queen's Gambit Declined, Exchange, Positional line, 6.Qc2",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D37',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D38',
    Opening: "Queen's Gambit Declined, Ragozin Variation",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D39',
    Opening: "Queen's Gambit Declined, Ragozin, Vienna Variation",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D40',
    Opening: "Queen's Gambit Declined, Semi-Tarrasch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D41',
    Opening: "Queen's Gambit Declined, Semi-Tarrasch",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D42',
    Opening: "Queen's Gambit Declined, Semi-Tarrasch, 7.Bd3",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D43',
    Opening: "Queen's Gambit Declined Semi-Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D44',
    Opening: "Queen's Gambit Declined Semi-Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D45',
    Opening: "Queen's Gambit Declined Semi-Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D46',
    Opening: "Queen's Gambit Declined Semi-Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D47',
    Opening: "Queen's Gambit Declined Semi-Slav",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D48',
    Opening: "Queen's Gambit Declined Semi-Slav, Meran",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D49',
    Opening: "Queen's Gambit Declined Semi-Slav, Meran",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D50',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D51',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D52',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D53',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D54',
    Opening: "Queen's Gambit Declined, Anti-Neo-Orthodox Variation",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D55',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D56',
    Opening: "Queen's Gambit Declined",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D57',
    Opening: "Queen's Gambit Declined, Lasker Defense",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D58',
    Opening:
      "Queen's Gambit Declined, Tartakower (Makagonov-Bondarevsky) System",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D59',
    Opening: "Queen's Gambit Declined, Tartakower",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D60',
    Opening: "Queen's Gambit Declined, Orthodox Defense",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D61',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D62',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D63',
    Opening: "Queen's Gambit Declined, Orthodox Defense",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D64',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D65',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack, Main line",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D66',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D67',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D68',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Classical",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D69',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Classical, 13.de",
    Name: "Queen's Gambit"
  },
  {
    ECO: 'D70',
    Opening: 'Neo-Grunfeld Defense',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D71',
    Opening: 'Neo-Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D72',
    Opening: 'Neo-Grunfeld, 5.cd, Main line',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D73',
    Opening: 'Neo-Grunfeld, 5.Nf3',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D74',
    Opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D75',
    Opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O c5, 8.dxc5',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D76',
    Opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O Nb6',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D77',
    Opening: 'Neo-Grunfeld, 6.O-O',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D78',
    Opening: 'Neo-Grunfeld, 6.O-O c6',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D79',
    Opening: 'Neo-Grunfeld, 6.O-O, Main line',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D80',
    Opening: 'Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D81',
    Opening: 'Grunfeld, Russian Variation',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D82',
    Opening: 'Grunfeld, 4.Bf4',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D83',
    Opening: 'Grunfeld, Grunfeld Gambit',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D84',
    Opening: 'Grunfeld, Grunfeld Gambit Accepted',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D85',
    Opening: 'Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D86',
    Opening: 'Grunfeld, Exchange',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D87',
    Opening: 'Grunfeld, Exchange',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D88',
    Opening: 'Grunfeld, Spassky Variation, Main line, 10...cd, 11.cd',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D89',
    Opening: 'Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D90',
    Opening: 'Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D91',
    Opening: 'Grunfeld, 5.Bg5',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D92',
    Opening: 'Grunfeld, 5.Bf4',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D93',
    Opening: 'Grunfeld, with Bf4 & e3',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D94',
    Opening: 'Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D95',
    Opening: 'Grunfeld',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D96',
    Opening: 'Grunfeld, Russian Variation',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D97',
    Opening: 'Grunfeld, Russian',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D98',
    Opening: 'Grunfeld, Russian',
    Name: 'Grunfeld'
  },
  {
    ECO: 'D99',
    Opening: 'Grunfeld Defense, Smyslov',
    Name: 'Grunfeld'
  },
  {
    ECO: 'E00',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'E01',
    Opening: 'Catalan, Closed',
    Name: 'Catalan'
  },
  {
    ECO: 'E02',
    Opening: 'Catalan, Open, 5.Qa4',
    Name: 'Catalan'
  },
  {
    ECO: 'E03',
    Opening: 'Catalan, Open',
    Name: 'Catalan'
  },
  {
    ECO: 'E04',
    Opening: 'Catalan, Open, 5.Nf3',
    Name: 'Catalan'
  },
  {
    ECO: 'E05',
    Opening: 'Catalan, Open, Classical line',
    Name: 'Catalan'
  },
  {
    ECO: 'E06',
    Opening: 'Catalan, Closed, 5.Nf3',
    Name: 'Catalan'
  },
  {
    ECO: 'E07',
    Opening: 'Catalan, Closed',
    Name: 'Catalan'
  },
  {
    ECO: 'E08',
    Opening: 'Catalan, Closed',
    Name: 'Catalan'
  },
  {
    ECO: 'E09',
    Opening: 'Catalan, Closed',
    Name: 'Catalan'
  },
  {
    ECO: 'E10',
    Opening: "Queen's Pawn Game",
    Name: "Queen's Pawn Game"
  },
  {
    ECO: 'E11',
    Opening: 'Bogo-Indian Defense',
    Name: 'Bogo-Indian'
  },
  {
    ECO: 'E12',
    Opening: "Queen's Indian",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E13',
    Opening: "Queen's Indian, 4.Nc3, Main line",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E14',
    Opening: "Queen's Indian",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E15',
    Opening: "Queen's Indian",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E16',
    Opening: "Queen's Indian",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E17',
    Opening: "Queen's Indian",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E18',
    Opening: "Queen's Indian, Old Main line, 7.Nc3",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E19',
    Opening: "Queen's Indian, Old Main line, 9.Qxc3",
    Name: "Queen's Indian"
  },
  {
    ECO: 'E20',
    Opening: 'Nimzo-Indian',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E21',
    Opening: 'Nimzo-Indian, Three Knights',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E22',
    Opening: 'Nimzo-Indian, Spielmann Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E23',
    Opening: 'Nimzo-Indian, Spielmann',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E24',
    Opening: 'Nimzo-Indian, Samisch',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E25',
    Opening: 'Nimzo-Indian, Samisch',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E26',
    Opening: 'Nimzo-Indian, Samisch',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E27',
    Opening: 'Nimzo-Indian, Samisch Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E28',
    Opening: 'Nimzo-Indian, Samisch Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E29',
    Opening: 'Nimzo-Indian, Samisch',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E30',
    Opening: 'Nimzo-Indian, Leningrad',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E31',
    Opening: 'Nimzo-Indian, Leningrad, Main line',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E32',
    Opening: 'Nimzo-Indian, Classical',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E33',
    Opening: 'Nimzo-Indian, Classical',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E34',
    Opening: 'Nimzo-Indian, Classical, Noa Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E35',
    Opening: 'Nimzo-Indian, Classical, Noa Variation, 5.cd ed',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E36',
    Opening: 'Nimzo-Indian, Classical',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E37',
    Opening: 'Nimzo-Indian, Classical',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E38',
    Opening: 'Nimzo-Indian, Classical, 4...c5',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E39',
    Opening: 'Nimzo-Indian, Classical, Pirc Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E40',
    Opening: 'Nimzo-Indian, 4.e3',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E41',
    Opening: 'Nimzo-Indian',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E42',
    Opening: 'Nimzo-Indian, 4.e3 c5, 5.Ne2 (Rubinstein)',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E43',
    Opening: 'Nimzo-Indian, Fischer Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E44',
    Opening: 'Nimzo-Indian, Fischer Variation, 5.Ne2',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E45',
    Opening: 'Nimzo-Indian, 4.e3, Bronstein (Byrne) Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E46',
    Opening: 'Nimzo-Indian',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E47',
    Opening: 'Nimzo-Indian, 4.e3 O-O 5.Bd3',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E48',
    Opening: 'Nimzo-Indian, 4.e3 O-O 5.Bd3 d5',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E49',
    Opening: 'Nimzo-Indian, 4.e3, Botvinnik System',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E50',
    Opening: 'Nimzo-Indian, 4.e3 O-O 5.Nf3, without ...d5',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E51',
    Opening: 'Nimzo-Indian, 4.e3',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E52',
    Opening: 'Nimzo-Indian, 4.e3, Main line with ...b6',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E53',
    Opening: 'Nimzo-Indian, 4.e3',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E54',
    Opening: 'Nimzo-Indian, 4.e3, Gligoric System',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E55',
    Opening: 'Nimzo-Indian, 4.e3, Gligoric System, Bronstein Variation',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E56',
    Opening: 'Nimzo-Indian, 4.e3, Main line with 7...Nc6',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E57',
    Opening: 'Nimzo-Indian, 4.e3, Main line with 8...dc and 9...cd',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E58',
    Opening: 'Nimzo-Indian, 4.e3, Main line with 8...Bxc3',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E59',
    Opening: 'Nimzo-Indian, 4.e3, Main line',
    Name: 'Nimzo-Indian'
  },
  {
    ECO: 'E60',
    Opening: "King's Indian Defense",
    Name: "King's Indian"
  },
  {
    ECO: 'E61',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E62',
    Opening: "King's Indian, Fianchetto",
    Name: "King's Indian"
  },
  {
    ECO: 'E63',
    Opening: "King's Indian, Fianchetto, Panno Variation",
    Name: "King's Indian"
  },
  {
    ECO: 'E64',
    Opening: "King's Indian, Fianchetto, Yugoslav System",
    Name: "King's Indian"
  },
  {
    ECO: 'E65',
    Opening: "King's Indian, Fianchetto, Yugoslav, 7.O-O",
    Name: "King's Indian"
  },
  {
    ECO: 'E66',
    Opening: "King's Indian, Fianchetto, Yugoslav Panno",
    Name: "King's Indian"
  },
  {
    ECO: 'E67',
    Opening: "King's Indian, Fianchetto",
    Name: "King's Indian"
  },
  {
    ECO: 'E68',
    Opening: "King's Indian, Fianchetto, Classical Variation, 8.e4",
    Name: "King's Indian"
  },
  {
    ECO: 'E69',
    Opening: "King's Indian, Fianchetto, Classical Main line",
    Name: "King's Indian"
  },
  {
    ECO: 'E70',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E71',
    Opening: "King's Indian, Makagonov System (5.h3)",
    Name: "King's Indian"
  },
  {
    ECO: 'E72',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E73',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E74',
    Opening: "King's Indian, Averbakh, 6...c5",
    Name: "King's Indian"
  },
  {
    ECO: 'E75',
    Opening: "King's Indian, Averbakh, Main line",
    Name: "King's Indian"
  },
  {
    ECO: 'E76',
    Opening: "King's Indian, Four Pawns Attack",
    Name: "King's Indian"
  },
  {
    ECO: 'E77',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E78',
    Opening: "King's Indian, Four Pawns Attack, with Be2 and Nf3",
    Name: "King's Indian"
  },
  {
    ECO: 'E79',
    Opening: "King's Indian, Four Pawns Attack, Main line",
    Name: "King's Indian"
  },
  {
    ECO: 'E80',
    Opening: "King's Indian, Samisch Variation",
    Name: "King's Indian"
  },
  {
    ECO: 'E81',
    Opening: "King's Indian, Samisch",
    Name: "King's Indian"
  },
  {
    ECO: 'E82',
    Opening: "King's Indian, Samisch, double Fianchetto Variation",
    Name: "King's Indian"
  },
  {
    ECO: 'E83',
    Opening: "King's Indian, Samisch",
    Name: "King's Indian"
  },
  {
    ECO: 'E84',
    Opening: "King's Indian, Samisch, Panno Main line",
    Name: "King's Indian"
  },
  {
    ECO: 'E85',
    Opening: "King's Indian, Samisch, Orthodox Variation",
    Name: "King's Indian"
  },
  {
    ECO: 'E86',
    Opening: "King's Indian, Samisch, Orthodox, 7.Nge2 c6",
    Name: "King's Indian"
  },
  {
    ECO: 'E87',
    Opening: "King's Indian, Samisch, Orthodox",
    Name: "King's Indian"
  },
  {
    ECO: 'E88',
    Opening: "King's Indian, Samisch, Orthodox, 7.d5 c6",
    Name: "King's Indian"
  },
  {
    ECO: 'E89',
    Opening: "King's Indian, Samisch, Orthodox Main line",
    Name: "King's Indian"
  },
  {
    ECO: 'E90',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E91',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E92',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E93',
    Opening: "King's Indian, Petrosian System",
    Name: "King's Indian"
  },
  {
    ECO: 'E94',
    Opening: "King's Indian, Orthodox",
    Name: "King's Indian"
  },
  {
    ECO: 'E95',
    Opening: "King's Indian, Orthodox, 7...Nbd7, 8.Re1",
    Name: "King's Indian"
  },
  {
    ECO: 'E96',
    Opening: "King's Indian, Orthodox, 7...Nbd7, Main line",
    Name: "King's Indian"
  },
  {
    ECO: 'E97',
    Opening: "King's Indian",
    Name: "King's Indian"
  },
  {
    ECO: 'E98',
    Opening: "King's Indian, Orthodox, Taimanov, 9.Ne1",
    Name: "King's Indian"
  },
  {
    ECO: 'E99',
    Opening: "King's Indian, Orthodox, Taimanov",
    Name: "King's Indian"
  }
];

module.exports = codes;
