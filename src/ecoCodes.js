const codes = [
  {
    ECO: 'A00',
    Opening: 'Uncommon Opening'
  },
  {
    ECO: 'A01',
    Opening: 'Nimzovich-Larsen Attack'
  },
  {
    ECO: 'A02',
    Opening: "Bird's Opening"
  },
  {
    ECO: 'A03',
    Opening: "Bird's Opening"
  },
  {
    ECO: 'A04',
    Opening: 'Reti Opening'
  },
  {
    ECO: 'A05',
    Opening: 'Reti Opening'
  },
  {
    ECO: 'A06',
    Opening: 'Reti Opening'
  },
  {
    ECO: 'A07',
    Opening: "King's Indian Attack"
  },
  {
    ECO: 'A08',
    Opening: "King's Indian Attack"
  },
  {
    ECO: 'A09',
    Opening: 'Reti Opening'
  },
  {
    ECO: 'A10',
    Opening: 'English'
  },
  {
    ECO: 'A11',
    Opening: 'English, Caro-Kann Defensive System'
  },
  {
    ECO: 'A12',
    Opening: 'English with b3'
  },
  {
    ECO: 'A13',
    Opening: 'English'
  },
  {
    ECO: 'A14',
    Opening: 'English'
  },
  {
    ECO: 'A15',
    Opening: 'English'
  },
  {
    ECO: 'A16',
    Opening: 'English'
  },
  {
    ECO: 'A17',
    Opening: 'English'
  },
  {
    ECO: 'A18',
    Opening: 'English, Mikenas-Carls'
  },
  {
    ECO: 'A19',
    Opening: 'English, Mikenas-Carls, Sicilian Variation'
  },
  {
    ECO: 'A20',
    Opening: 'English'
  },
  {
    ECO: 'A21',
    Opening: 'English'
  },
  {
    ECO: 'A22',
    Opening: 'English'
  },
  {
    ECO: 'A23',
    Opening: 'English, Bremen System, Keres Variation'
  },
  {
    ECO: 'A24',
    Opening: 'English, Bremen System with ...g6'
  },
  {
    ECO: 'A25',
    Opening: 'English'
  },
  {
    ECO: 'A26',
    Opening: 'English'
  },
  {
    ECO: 'A27',
    Opening: 'English, Three Knights System'
  },
  {
    ECO: 'A28',
    Opening: 'English'
  },
  {
    ECO: 'A29',
    Opening: 'English, Four Knights, Kingside Fianchetto'
  },
  {
    ECO: 'A30',
    Opening: 'English, Symmetrical'
  },
  {
    ECO: 'A31',
    Opening: 'English, Symmetrical, Benoni Formation'
  },
  {
    ECO: 'A32',
    Opening: 'English, Symmetrical Variation'
  },
  {
    ECO: 'A33',
    Opening: 'English, Symmetrical'
  },
  {
    ECO: 'A34',
    Opening: 'English, Symmetrical'
  },
  {
    ECO: 'A35',
    Opening: 'English, Symmetrical'
  },
  {
    ECO: 'A36',
    Opening: 'English'
  },
  {
    ECO: 'A37',
    Opening: 'English, Symmetrical'
  },
  {
    ECO: 'A38',
    Opening: 'English, Symmetrical'
  },
  {
    ECO: 'A39',
    Opening: 'English, Symmetrical, Main line with d4'
  },
  {
    ECO: 'A40',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'A41',
    Opening: "Queen's Pawn Game (with ...d6)"
  },
  {
    ECO: 'A42',
    Opening: 'Modern Defense, Averbakh System'
  },
  {
    ECO: 'A43',
    Opening: 'Old Benoni'
  },
  {
    ECO: 'A44',
    Opening: 'Old Benoni Defense'
  },
  {
    ECO: 'A45',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'A46',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'A47',
    Opening: "Queen's Indian"
  },
  {
    ECO: 'A48',
    Opening: "King's Indian"
  },
  {
    ECO: 'A49',
    Opening: "King's Indian, Fianchetto without c4"
  },
  {
    ECO: 'A50',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'A51',
    Opening: 'Budapest Gambit'
  },
  {
    ECO: 'A52',
    Opening: 'Budapest Gambit'
  },
  {
    ECO: 'A53',
    Opening: 'Old Indian'
  },
  {
    ECO: 'A54',
    Opening: 'Old Indian, Ukrainian Variation, 4.Nf3'
  },
  {
    ECO: 'A55',
    Opening: 'Old Indian, Main line'
  },
  {
    ECO: 'A56',
    Opening: 'Benoni Defense'
  },
  {
    ECO: 'A57',
    Opening: 'Benko Gambit'
  },
  {
    ECO: 'A58',
    Opening: 'Benko Gambit'
  },
  {
    ECO: 'A59',
    Opening: 'Benko Gambit'
  },
  {
    ECO: 'A60',
    Opening: 'Benoni Defense'
  },
  {
    ECO: 'A61',
    Opening: 'Benoni'
  },
  {
    ECO: 'A62',
    Opening: 'Benoni, Fianchetto Variation'
  },
  {
    ECO: 'A63',
    Opening: 'Benoni, Fianchetto, 9...Nbd7'
  },
  {
    ECO: 'A64',
    Opening: 'Benoni, Fianchetto, 11...Re8'
  },
  {
    ECO: 'A65',
    Opening: 'Benoni, 6.e4'
  },
  {
    ECO: 'A66',
    Opening: 'Benoni'
  },
  {
    ECO: 'A67',
    Opening: 'Benoni, Taimanov Variation'
  },
  {
    ECO: 'A68',
    Opening: 'Benoni, Four Pawns Attack'
  },
  {
    ECO: 'A69',
    Opening: 'Benoni, Four Pawns Attack, Main line'
  },
  {
    ECO: 'A70',
    Opening: 'Benoni, Classical with 7.Nf3'
  },
  {
    ECO: 'A71',
    Opening: 'Benoni, Classical, 8.Bg5'
  },
  {
    ECO: 'A72',
    Opening: 'Benoni, Classical without 9.O-O'
  },
  {
    ECO: 'A73',
    Opening: 'Benoni, Classical, 9.O-O'
  },
  {
    ECO: 'A74',
    Opening: 'Benoni, Classical, 9...a6, 10.a4'
  },
  {
    ECO: 'A75',
    Opening: 'Benoni, Classical with ...a6 and 10...Bg4'
  },
  {
    ECO: 'A76',
    Opening: 'Benoni, Classical, 9...Re8'
  },
  {
    ECO: 'A77',
    Opening: 'Benoni, Classical, 9...Re8, 10.Nd2'
  },
  {
    ECO: 'A78',
    Opening: 'Benoni, Classical with ...Re8 and ...Na6'
  },
  {
    ECO: 'A79',
    Opening: 'Benoni, Classical, 11.f3'
  },
  {
    ECO: 'A80',
    Opening: 'Dutch'
  },
  {
    ECO: 'A81',
    Opening: 'Dutch'
  },
  {
    ECO: 'A82',
    Opening: 'Dutch, Staunton Gambit'
  },
  {
    ECO: 'A83',
    Opening: 'Dutch, Staunton Gambit'
  },
  {
    ECO: 'A84',
    Opening: 'Dutch'
  },
  {
    ECO: 'A85',
    Opening: 'Dutch, with c4 & Nc3'
  },
  {
    ECO: 'A86',
    Opening: 'Dutch'
  },
  {
    ECO: 'A87',
    Opening: 'Dutch, Leningrad, Main Variation'
  },
  {
    ECO: 'A88',
    Opening: 'Dutch, Leningrad, Main Variation with c6'
  },
  {
    ECO: 'A89',
    Opening: 'Dutch, Leningrad, Main Variation with Nc6'
  },
  {
    ECO: 'A90',
    Opening: 'Dutch'
  },
  {
    ECO: 'A91',
    Opening: 'Dutch Defense'
  },
  {
    ECO: 'A92',
    Opening: 'Dutch'
  },
  {
    ECO: 'A93',
    Opening: 'Dutch, Stonewall, Botvinnik Variation'
  },
  {
    ECO: 'A94',
    Opening: 'Dutch, Stonewall with Ba3'
  },
  {
    ECO: 'A95',
    Opening: 'Dutch, Stonewall'
  },
  {
    ECO: 'A96',
    Opening: 'Dutch, Classical Variation'
  },
  {
    ECO: 'A97',
    Opening: 'Dutch, Ilyin-Genevsky'
  },
  {
    ECO: 'A98',
    Opening: 'Dutch, Ilyin-Genevsky Variation with Qc2'
  },
  {
    ECO: 'A99',
    Opening: 'Dutch, Ilyin-Genevsky Variation with b3'
  },
  {
    ECO: 'B00',
    Opening: "Uncommon King's Pawn Opening"
  },
  {
    ECO: 'B01',
    Opening: 'Scandinavian'
  },
  {
    ECO: 'B02',
    Opening: "Alekhine's Defense"
  },
  {
    ECO: 'B03',
    Opening: "Alekhine's Defense"
  },
  {
    ECO: 'B04',
    Opening: "Alekhine's Defense, Modern"
  },
  {
    ECO: 'B05',
    Opening: "Alekhine's Defense, Modern"
  },
  {
    ECO: 'B06',
    Opening: 'Robatsch'
  },
  {
    ECO: 'B07',
    Opening: 'Pirc'
  },
  {
    ECO: 'B08',
    Opening: 'Pirc, Classical'
  },
  {
    ECO: 'B09',
    Opening: 'Pirc, Austrian Attack'
  },
  {
    ECO: 'B10',
    Opening: 'Caro-Kann'
  },
  {
    ECO: 'B11',
    Opening: 'Caro-Kann, Two Knights, 3...Bg4'
  },
  {
    ECO: 'B12',
    Opening: 'Caro-Kann Defense'
  },
  {
    ECO: 'B13',
    Opening: 'Caro-Kann, Exchange'
  },
  {
    ECO: 'B14',
    Opening: 'Caro-Kann, Panov-Botvinnik Attack'
  },
  {
    ECO: 'B15',
    Opening: 'Caro-Kann'
  },
  {
    ECO: 'B16',
    Opening: 'Caro-Kann, Bronstein-Larsen Variation'
  },
  {
    ECO: 'B17',
    Opening: 'Caro-Kann, Steinitz Variation'
  },
  {
    ECO: 'B18',
    Opening: 'Caro-Kann, Classical'
  },
  {
    ECO: 'B19',
    Opening: 'Caro-Kann, Classical'
  },
  {
    ECO: 'B20',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B21',
    Opening: 'Sicilian, 2.f4 and 2.d4'
  },
  {
    ECO: 'B22',
    Opening: 'Sicilian, Alapin'
  },
  {
    ECO: 'B23',
    Opening: 'Sicilian, Closed'
  },
  {
    ECO: 'B24',
    Opening: 'Sicilian, Closed'
  },
  {
    ECO: 'B25',
    Opening: 'Sicilian, Closed'
  },
  {
    ECO: 'B26',
    Opening: 'Sicilian, Closed, 6.Be3'
  },
  {
    ECO: 'B27',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B28',
    Opening: "Sicilian, O'Kelly Variation"
  },
  {
    ECO: 'B29',
    Opening: 'Sicilian, Nimzovich-Rubinstein'
  },
  {
    ECO: 'B30',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B31',
    Opening: 'Sicilian, Rossolimo Variation'
  },
  {
    ECO: 'B32',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B33',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B34',
    Opening: 'Sicilian, Accelerated Fianchetto'
  },
  {
    ECO: 'B35',
    Opening: 'Sicilian, Accelerated Fianchetto, Modern Variation with Bc4'
  },
  {
    ECO: 'B36',
    Opening: 'Sicilian, Accelerated Fianchetto'
  },
  {
    ECO: 'B37',
    Opening: 'Sicilian, Accelerated Fianchetto'
  },
  {
    ECO: 'B38',
    Opening: 'Sicilian, Accelerated Fianchetto, Maroczy Bind, 6.Be3'
  },
  {
    ECO: 'B39',
    Opening: 'Sicilian, Accelerated Fianchetto, Breyer Variation'
  },
  {
    ECO: 'B40',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B41',
    Opening: 'Sicilian, Kan'
  },
  {
    ECO: 'B42',
    Opening: 'Sicilian, Kan'
  },
  {
    ECO: 'B43',
    Opening: 'Sicilian, Kan, 5.Nc3'
  },
  {
    ECO: 'B44',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B45',
    Opening: 'Sicilian, Taimanov'
  },
  {
    ECO: 'B46',
    Opening: 'Sicilian, Taimanov Variation'
  },
  {
    ECO: 'B47',
    Opening: 'Sicilian, Taimanov (Bastrikov) Variation'
  },
  {
    ECO: 'B48',
    Opening: 'Sicilian, Taimanov Variation'
  },
  {
    ECO: 'B49',
    Opening: 'Sicilian, Taimanov Variation'
  },
  {
    ECO: 'B50',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B51',
    Opening: 'Sicilian, Canal-Sokolsky (Rossolimo) Attack'
  },
  {
    ECO: 'B52',
    Opening: 'Sicilian, Canal-Sokolsky (Rossolimo) Attack'
  },
  {
    ECO: 'B53',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B54',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B55',
    Opening: 'Sicilian, Prins Variation, Venice Attack'
  },
  {
    ECO: 'B56',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B57',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B58',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B59',
    Opening: 'Sicilian, Boleslavsky Variation, 7.Nb3'
  },
  {
    ECO: 'B60',
    Opening: 'Sicilian, Richter-Rauzer'
  },
  {
    ECO: 'B61',
    Opening: 'Sicilian, Richter-Rauzer, Larsen Variation, 7.Qd2'
  },
  {
    ECO: 'B62',
    Opening: 'Sicilian, Richter-Rauzer'
  },
  {
    ECO: 'B63',
    Opening: 'Sicilian, Richter-Rauzer Attack'
  },
  {
    ECO: 'B64',
    Opening: 'Sicilian, Richter-Rauzer Attack'
  },
  {
    ECO: 'B65',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...Be7 Defense, 9...Nxd4'
  },
  {
    ECO: 'B66',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6'
  },
  {
    ECO: 'B67',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 8...Bd7'
  },
  {
    ECO: 'B68',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 9...Be7'
  },
  {
    ECO: 'B69',
    Opening: 'Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 11.Bxf6'
  },
  {
    ECO: 'B70',
    Opening: 'Sicilian, Dragon Variation'
  },
  {
    ECO: 'B71',
    Opening: 'Sicilian, Dragon, Levenfish Variation'
  },
  {
    ECO: 'B72',
    Opening: 'Sicilian, Dragon'
  },
  {
    ECO: 'B73',
    Opening: 'Sicilian, Dragon, Classical'
  },
  {
    ECO: 'B74',
    Opening: 'Sicilian, Dragon, Classical'
  },
  {
    ECO: 'B75',
    Opening: 'Sicilian, Dragon, Yugoslav Attack'
  },
  {
    ECO: 'B76',
    Opening: 'Sicilian, Dragon, Yugoslav Attack'
  },
  {
    ECO: 'B77',
    Opening: 'Sicilian, Dragon, Yugoslav Attack'
  },
  {
    ECO: 'B78',
    Opening: 'Sicilian, Dragon, Yugoslav Attack, 10.castle long'
  },
  {
    ECO: 'B79',
    Opening: 'Sicilian, Dragon, Yugoslav Attack, 12.h4'
  },
  {
    ECO: 'B80',
    Opening: 'Sicilian, Scheveningen'
  },
  {
    ECO: 'B81',
    Opening: 'Sicilian, Scheveningen, Keres Attack'
  },
  {
    ECO: 'B82',
    Opening: 'Sicilian, Scheveningen'
  },
  {
    ECO: 'B83',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B84',
    Opening: 'Sicilian, Scheveningen'
  },
  {
    ECO: 'B85',
    Opening: 'Sicilian, Scheveningen, Classical'
  },
  {
    ECO: 'B86',
    Opening: 'Sicilian, Fischer-Sozin Attack'
  },
  {
    ECO: 'B87',
    Opening: 'Sicilian, Fischer-Sozin with ...a6 and ...b5'
  },
  {
    ECO: 'B88',
    Opening: 'Sicilian, Fischer-Sozin Attack'
  },
  {
    ECO: 'B89',
    Opening: 'Sicilian'
  },
  {
    ECO: 'B90',
    Opening: 'Sicilian, Najdorf'
  },
  {
    ECO: 'B91',
    Opening: 'Sicilian, Najdorf, Zagreb (Fianchetto) Variation'
  },
  {
    ECO: 'B92',
    Opening: 'Sicilian, Najdorf, Opocensky Variation'
  },
  {
    ECO: 'B93',
    Opening: 'Sicilian, Najdorf, 6.f4'
  },
  {
    ECO: 'B94',
    Opening: 'Sicilian, Najdorf'
  },
  {
    ECO: 'B95',
    Opening: 'Sicilian, Najdorf, 6...e6'
  },
  {
    ECO: 'B96',
    Opening: 'Sicilian, Najdorf'
  },
  {
    ECO: 'B97',
    Opening: 'Sicilian, Najdorf'
  },
  {
    ECO: 'B98',
    Opening: 'Sicilian, Najdorf'
  },
  {
    ECO: 'B99',
    Opening: 'Sicilian, Najdorf, 7...Be7 Main line'
  },
  {
    ECO: 'C00',
    Opening: 'French Defense'
  },
  {
    ECO: 'C01',
    Opening: 'French, Exchange'
  },
  {
    ECO: 'C02',
    Opening: 'French, Advance'
  },
  {
    ECO: 'C03',
    Opening: 'French, Tarrasch'
  },
  {
    ECO: 'C04',
    Opening: 'French, Tarrasch, Guimard Main line'
  },
  {
    ECO: 'C05',
    Opening: 'French, Tarrasch'
  },
  {
    ECO: 'C06',
    Opening: 'French, Tarrasch'
  },
  {
    ECO: 'C07',
    Opening: 'French, Tarrasch'
  },
  {
    ECO: 'C08',
    Opening: 'French, Tarrasch, Open, 4.ed ed'
  },
  {
    ECO: 'C09',
    Opening: 'French, Tarrasch, Open Variation, Main line'
  },
  {
    ECO: 'C10',
    Opening: 'French'
  },
  {
    ECO: 'C11',
    Opening: 'French'
  },
  {
    ECO: 'C12',
    Opening: 'French, McCutcheon'
  },
  {
    ECO: 'C13',
    Opening: 'French'
  },
  {
    ECO: 'C14',
    Opening: 'French, Classical'
  },
  {
    ECO: 'C15',
    Opening: 'French, Winawer'
  },
  {
    ECO: 'C16',
    Opening: 'French, Winawer'
  },
  {
    ECO: 'C17',
    Opening: 'French, Winawer, Advance'
  },
  {
    ECO: 'C18',
    Opening: 'French, Winawer'
  },
  {
    ECO: 'C19',
    Opening: 'French, Winawer, Advance'
  },
  {
    ECO: 'C20',
    Opening: "King's Pawn Game"
  },
  {
    ECO: 'C21',
    Opening: 'Center Game'
  },
  {
    ECO: 'C22',
    Opening: 'Center Game'
  },
  {
    ECO: 'C23',
    Opening: "Bishop's Opening"
  },
  {
    ECO: 'C24',
    Opening: "Bishop's Opening"
  },
  {
    ECO: 'C25',
    Opening: 'Vienna'
  },
  {
    ECO: 'C26',
    Opening: 'Vienna'
  },
  {
    ECO: 'C27',
    Opening: 'Vienna Game'
  },
  {
    ECO: 'C28',
    Opening: 'Vienna Game'
  },
  {
    ECO: 'C29',
    Opening: 'Vienna Gambit'
  },
  {
    ECO: 'C30',
    Opening: "King's Gambit Declined"
  },
  {
    ECO: 'C31',
    Opening: "King's Gambit Declined, Falkbeer Counter Gambit"
  },
  {
    ECO: 'C32',
    Opening: "King's Gambit Declined, Falkbeer Counter Gambit"
  },
  {
    ECO: 'C33',
    Opening: "King's Gambit Accepted"
  },
  {
    ECO: 'C34',
    Opening: "King's Gambit Accepted"
  },
  {
    ECO: 'C35',
    Opening: "King's Gambit Accepted, Cunningham"
  },
  {
    ECO: 'C36',
    Opening: "King's Gambit Accepted, Abbazia Defense"
  },
  {
    ECO: 'C37',
    Opening: "King's Gambit Accepted"
  },
  {
    ECO: 'C38',
    Opening: "King's Gambit Accepted"
  },
  {
    ECO: 'C39',
    Opening: "King's Gambit Accepted"
  },
  {
    ECO: 'C40',
    Opening: "King's Knight Opening"
  },
  {
    ECO: 'C41',
    Opening: 'Philidor Defense'
  },
  {
    ECO: 'C42',
    Opening: 'Petrov Defense'
  },
  {
    ECO: 'C43',
    Opening: 'Petrov, Modern Attack'
  },
  {
    ECO: 'C44',
    Opening: "King's Pawn Game"
  },
  {
    ECO: 'C45',
    Opening: 'Scotch Game'
  },
  {
    ECO: 'C46',
    Opening: 'Three Knights'
  },
  {
    ECO: 'C47',
    Opening: 'Four Knights'
  },
  {
    ECO: 'C48',
    Opening: 'Four Knights'
  },
  {
    ECO: 'C49',
    Opening: 'Four Knights'
  },
  {
    ECO: 'C50',
    Opening: 'Giuoco Piano'
  },
  {
    ECO: 'C51',
    Opening: 'Evans Gambit'
  },
  {
    ECO: 'C52',
    Opening: 'Evans Gambit'
  },
  {
    ECO: 'C53',
    Opening: 'Giuoco Piano'
  },
  {
    ECO: 'C54',
    Opening: 'Giuoco Piano'
  },
  {
    ECO: 'C55',
    Opening: 'Two Knights Defense'
  },
  {
    ECO: 'C56',
    Opening: 'Two Knights'
  },
  {
    ECO: 'C57',
    Opening: 'Two Knights'
  },
  {
    ECO: 'C58',
    Opening: 'Two Knights'
  },
  {
    ECO: 'C59',
    Opening: 'Two Knights'
  },
  {
    ECO: 'C60',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C61',
    Opening: "Ruy Lopez, Bird's Defense"
  },
  {
    ECO: 'C62',
    Opening: 'Ruy Lopez, Old Steinitz Defense'
  },
  {
    ECO: 'C63',
    Opening: 'Ruy Lopez, Schliemann Defense'
  },
  {
    ECO: 'C64',
    Opening: 'Ruy Lopez, Classical'
  },
  {
    ECO: 'C65',
    Opening: 'Ruy Lopez, Berlin Defense'
  },
  {
    ECO: 'C66',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C67',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C68',
    Opening: 'Ruy Lopez, Exchange'
  },
  {
    ECO: 'C69',
    Opening: 'Ruy Lopez, Exchange, Gligoric Variation'
  },
  {
    ECO: 'C70',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C71',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C72',
    Opening: 'Ruy Lopez, Modern Steinitz Defense, 5.O-O'
  },
  {
    ECO: 'C73',
    Opening: 'Ruy Lopez, Modern Steinitz Defense'
  },
  {
    ECO: 'C74',
    Opening: 'Ruy Lopez, Modern Steinitz Defense'
  },
  {
    ECO: 'C75',
    Opening: 'Ruy Lopez, Modern Steinitz Defense'
  },
  {
    ECO: 'C76',
    Opening: 'Ruy Lopez, Modern Steinitz Defense, Fianchetto Variation'
  },
  {
    ECO: 'C77',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C78',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C79',
    Opening: 'Ruy Lopez, Steinitz Defense Deferred'
  },
  {
    ECO: 'C80',
    Opening: 'Ruy Lopez, Open'
  },
  {
    ECO: 'C81',
    Opening: 'Ruy Lopez, Open, Howell Attack'
  },
  {
    ECO: 'C82',
    Opening: 'Ruy Lopez, Open'
  },
  {
    ECO: 'C83',
    Opening: 'Ruy Lopez, Open'
  },
  {
    ECO: 'C84',
    Opening: 'Ruy Lopez, Closed'
  },
  {
    ECO: 'C85',
    Opening: 'Ruy Lopez, Exchange Variation Doubly Deferred (DERLD)'
  },
  {
    ECO: 'C86',
    Opening: 'Ruy Lopez, Worrall Attack'
  },
  {
    ECO: 'C87',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C88',
    Opening: 'Ruy Lopez'
  },
  {
    ECO: 'C89',
    Opening: 'Ruy Lopez, Marshall'
  },
  {
    ECO: 'C90',
    Opening: 'Ruy Lopez, Closed'
  },
  {
    ECO: 'C91',
    Opening: 'Ruy Lopez, Closed'
  },
  {
    ECO: 'C92',
    Opening: 'Ruy Lopez, Closed'
  },
  {
    ECO: 'C93',
    Opening: 'Ruy Lopez, Closed, Smyslov Defense'
  },
  {
    ECO: 'C94',
    Opening: 'Ruy Lopez, Closed, Breyer Defense'
  },
  {
    ECO: 'C95',
    Opening: 'Ruy Lopez, Closed, Breyer'
  },
  {
    ECO: 'C96',
    Opening: 'Ruy Lopez, Closed'
  },
  {
    ECO: 'C97',
    Opening: 'Ruy Lopez, Closed, Chigorin'
  },
  {
    ECO: 'C98',
    Opening: 'Ruy Lopez, Closed, Chigorin'
  },
  {
    ECO: 'C99',
    Opening: 'Ruy Lopez, Closed, Chigorin, 12...cd'
  },
  {
    ECO: 'D00',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'D01',
    Opening: 'Richter-Veresov Attack'
  },
  {
    ECO: 'D02',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'D03',
    Opening: 'Torre Attack (Tartakower Variation)'
  },
  {
    ECO: 'D04',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'D05',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'D06',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D07',
    Opening: "Queen's Gambit Declined, Chigorin Defense"
  },
  {
    ECO: 'D08',
    Opening: "Queen's Gambit Declined, Albin Counter Gambit"
  },
  {
    ECO: 'D09',
    Opening: "Queen's Gambit Declined, Albin Counter Gambit, 5.g3"
  },
  {
    ECO: 'D10',
    Opening: "Queen's Gambit Declined Slav"
  },
  {
    ECO: 'D11',
    Opening: "Queen's Gambit Declined Slav"
  },
  {
    ECO: 'D12',
    Opening: "Queen's Gambit Declined Slav"
  },
  {
    ECO: 'D13',
    Opening: "Queen's Gambit Declined Slav, Exchange Variation"
  },
  {
    ECO: 'D14',
    Opening: "Queen's Gambit Declined Slav, Exchange Variation"
  },
  {
    ECO: 'D15',
    Opening: "Queen's Gambit Declined Slav"
  },
  {
    ECO: 'D16',
    Opening: "Queen's Gambit Declined Slav"
  },
  {
    ECO: 'D17',
    Opening: "Queen's Gambit Declined Slav"
  },
  {
    ECO: 'D18',
    Opening: "Queen's Gambit Declined Slav, Dutch"
  },
  {
    ECO: 'D19',
    Opening: "Queen's Gambit Declined Slav, Dutch"
  },
  {
    ECO: 'D20',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D21',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D22',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D23',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D24',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D25',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D26',
    Opening: "Queen's Gambit Accepted"
  },
  {
    ECO: 'D27',
    Opening: "Queen's Gambit Accepted, Classical"
  },
  {
    ECO: 'D28',
    Opening: "Queen's Gambit Accepted, Classical"
  },
  {
    ECO: 'D29',
    Opening: "Queen's Gambit Accepted, Classical"
  },
  {
    ECO: 'D30',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D31',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D32',
    Opening: "Queen's Gambit Declined, Tarrasch"
  },
  {
    ECO: 'D33',
    Opening: "Queen's Gambit Declined, Tarrasch"
  },
  {
    ECO: 'D34',
    Opening: "Queen's Gambit Declined, Tarrasch"
  },
  {
    ECO: 'D35',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D36',
    Opening: "Queen's Gambit Declined, Exchange, Positional line, 6.Qc2"
  },
  {
    ECO: 'D37',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D38',
    Opening: "Queen's Gambit Declined, Ragozin Variation"
  },
  {
    ECO: 'D39',
    Opening: "Queen's Gambit Declined, Ragozin, Vienna Variation"
  },
  {
    ECO: 'D40',
    Opening: "Queen's Gambit Declined, Semi-Tarrasch"
  },
  {
    ECO: 'D41',
    Opening: "Queen's Gambit Declined, Semi-Tarrasch"
  },
  {
    ECO: 'D42',
    Opening: "Queen's Gambit Declined, Semi-Tarrasch, 7.Bd3"
  },
  {
    ECO: 'D43',
    Opening: "Queen's Gambit Declined Semi-Slav"
  },
  {
    ECO: 'D44',
    Opening: "Queen's Gambit Declined Semi-Slav"
  },
  {
    ECO: 'D45',
    Opening: "Queen's Gambit Declined Semi-Slav"
  },
  {
    ECO: 'D46',
    Opening: "Queen's Gambit Declined Semi-Slav"
  },
  {
    ECO: 'D47',
    Opening: "Queen's Gambit Declined Semi-Slav"
  },
  {
    ECO: 'D48',
    Opening: "Queen's Gambit Declined Semi-Slav, Meran"
  },
  {
    ECO: 'D49',
    Opening: "Queen's Gambit Declined Semi-Slav, Meran"
  },
  {
    ECO: 'D50',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D51',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D52',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D53',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D54',
    Opening: "Queen's Gambit Declined, Anti-Neo-Orthodox Variation"
  },
  {
    ECO: 'D55',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D56',
    Opening: "Queen's Gambit Declined"
  },
  {
    ECO: 'D57',
    Opening: "Queen's Gambit Declined, Lasker Defense"
  },
  {
    ECO: 'D58',
    Opening:
      "Queen's Gambit Declined, Tartakower (Makagonov-Bondarevsky) System"
  },
  {
    ECO: 'D59',
    Opening: "Queen's Gambit Declined, Tartakower"
  },
  {
    ECO: 'D60',
    Opening: "Queen's Gambit Declined, Orthodox Defense"
  },
  {
    ECO: 'D61',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack"
  },
  {
    ECO: 'D62',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack"
  },
  {
    ECO: 'D63',
    Opening: "Queen's Gambit Declined, Orthodox Defense"
  },
  {
    ECO: 'D64',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack"
  },
  {
    ECO: 'D65',
    Opening: "Queen's Gambit Declined, Orthodox, Rubinstein Attack, Main line"
  },
  {
    ECO: 'D66',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Bd3 line"
  },
  {
    ECO: 'D67',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Bd3 line"
  },
  {
    ECO: 'D68',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Classical"
  },
  {
    ECO: 'D69',
    Opening: "Queen's Gambit Declined, Orthodox Defense, Classical, 13.de"
  },
  {
    ECO: 'D70',
    Opening: 'Neo-Grunfeld Defense'
  },
  {
    ECO: 'D71',
    Opening: 'Neo-Grunfeld'
  },
  {
    ECO: 'D72',
    Opening: 'Neo-Grunfeld, 5.cd, Main line'
  },
  {
    ECO: 'D73',
    Opening: 'Neo-Grunfeld, 5.Nf3'
  },
  {
    ECO: 'D74',
    Opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O'
  },
  {
    ECO: 'D75',
    Opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O c5, 8.dxc5'
  },
  {
    ECO: 'D76',
    Opening: 'Neo-Grunfeld, 6.cd Nxd5, 7.O-O Nb6'
  },
  {
    ECO: 'D77',
    Opening: 'Neo-Grunfeld, 6.O-O'
  },
  {
    ECO: 'D78',
    Opening: 'Neo-Grunfeld, 6.O-O c6'
  },
  {
    ECO: 'D79',
    Opening: 'Neo-Grunfeld, 6.O-O, Main line'
  },
  {
    ECO: 'D80',
    Opening: 'Grunfeld'
  },
  {
    ECO: 'D81',
    Opening: 'Grunfeld, Russian Variation'
  },
  {
    ECO: 'D82',
    Opening: 'Grunfeld, 4.Bf4'
  },
  {
    ECO: 'D83',
    Opening: 'Grunfeld, Grunfeld Gambit'
  },
  {
    ECO: 'D84',
    Opening: 'Grunfeld, Grunfeld Gambit Accepted'
  },
  {
    ECO: 'D85',
    Opening: 'Grunfeld'
  },
  {
    ECO: 'D86',
    Opening: 'Grunfeld, Exchange'
  },
  {
    ECO: 'D87',
    Opening: 'Grunfeld, Exchange'
  },
  {
    ECO: 'D88',
    Opening: 'Grunfeld, Spassky Variation, Main line, 10...cd, 11.cd'
  },
  {
    ECO: 'D89',
    Opening: 'Grunfeld'
  },
  {
    ECO: 'D90',
    Opening: 'Grunfeld'
  },
  {
    ECO: 'D91',
    Opening: 'Grunfeld, 5.Bg5'
  },
  {
    ECO: 'D92',
    Opening: 'Grunfeld, 5.Bf4'
  },
  {
    ECO: 'D93',
    Opening: 'Grunfeld, with Bf4 & e3'
  },
  {
    ECO: 'D94',
    Opening: 'Grunfeld'
  },
  {
    ECO: 'D95',
    Opening: 'Grunfeld'
  },
  {
    ECO: 'D96',
    Opening: 'Grunfeld, Russian Variation'
  },
  {
    ECO: 'D97',
    Opening: 'Grunfeld, Russian'
  },
  {
    ECO: 'D98',
    Opening: 'Grunfeld, Russian'
  },
  {
    ECO: 'D99',
    Opening: 'Grunfeld Defense, Smyslov'
  },
  {
    ECO: 'E00',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'E01',
    Opening: 'Catalan, Closed'
  },
  {
    ECO: 'E02',
    Opening: 'Catalan, Open, 5.Qa4'
  },
  {
    ECO: 'E03',
    Opening: 'Catalan, Open'
  },
  {
    ECO: 'E04',
    Opening: 'Catalan, Open, 5.Nf3'
  },
  {
    ECO: 'E05',
    Opening: 'Catalan, Open, Classical line'
  },
  {
    ECO: 'E06',
    Opening: 'Catalan, Closed, 5.Nf3'
  },
  {
    ECO: 'E07',
    Opening: 'Catalan, Closed'
  },
  {
    ECO: 'E08',
    Opening: 'Catalan, Closed'
  },
  {
    ECO: 'E09',
    Opening: 'Catalan, Closed'
  },
  {
    ECO: 'E10',
    Opening: "Queen's Pawn Game"
  },
  {
    ECO: 'E11',
    Opening: 'Bogo-Indian Defense'
  },
  {
    ECO: 'E12',
    Opening: "Queen's Indian"
  },
  {
    ECO: 'E13',
    Opening: "Queen's Indian, 4.Nc3, Main line"
  },
  {
    ECO: 'E14',
    Opening: "Queen's Indian"
  },
  {
    ECO: 'E15',
    Opening: "Queen's Indian"
  },
  {
    ECO: 'E16',
    Opening: "Queen's Indian"
  },
  {
    ECO: 'E17',
    Opening: "Queen's Indian"
  },
  {
    ECO: 'E18',
    Opening: "Queen's Indian, Old Main line, 7.Nc3"
  },
  {
    ECO: 'E19',
    Opening: "Queen's Indian, Old Main line, 9.Qxc3"
  },
  {
    ECO: 'E20',
    Opening: 'Nimzo-Indian'
  },
  {
    ECO: 'E21',
    Opening: 'Nimzo-Indian, Three Knights'
  },
  {
    ECO: 'E22',
    Opening: 'Nimzo-Indian, Spielmann Variation'
  },
  {
    ECO: 'E23',
    Opening: 'Nimzo-Indian, Spielmann'
  },
  {
    ECO: 'E24',
    Opening: 'Nimzo-Indian, Samisch'
  },
  {
    ECO: 'E25',
    Opening: 'Nimzo-Indian, Samisch'
  },
  {
    ECO: 'E26',
    Opening: 'Nimzo-Indian, Samisch'
  },
  {
    ECO: 'E27',
    Opening: 'Nimzo-Indian, Samisch Variation'
  },
  {
    ECO: 'E28',
    Opening: 'Nimzo-Indian, Samisch Variation'
  },
  {
    ECO: 'E29',
    Opening: 'Nimzo-Indian, Samisch'
  },
  {
    ECO: 'E30',
    Opening: 'Nimzo-Indian, Leningrad'
  },
  {
    ECO: 'E31',
    Opening: 'Nimzo-Indian, Leningrad, Main line'
  },
  {
    ECO: 'E32',
    Opening: 'Nimzo-Indian, Classical'
  },
  {
    ECO: 'E33',
    Opening: 'Nimzo-Indian, Classical'
  },
  {
    ECO: 'E34',
    Opening: 'Nimzo-Indian, Classical, Noa Variation'
  },
  {
    ECO: 'E35',
    Opening: 'Nimzo-Indian, Classical, Noa Variation, 5.cd ed'
  },
  {
    ECO: 'E36',
    Opening: 'Nimzo-Indian, Classical'
  },
  {
    ECO: 'E37',
    Opening: 'Nimzo-Indian, Classical'
  },
  {
    ECO: 'E38',
    Opening: 'Nimzo-Indian, Classical, 4...c5'
  },
  {
    ECO: 'E39',
    Opening: 'Nimzo-Indian, Classical, Pirc Variation'
  },
  {
    ECO: 'E40',
    Opening: 'Nimzo-Indian, 4.e3'
  },
  {
    ECO: 'E41',
    Opening: 'Nimzo-Indian'
  },
  {
    ECO: 'E42',
    Opening: 'Nimzo-Indian, 4.e3 c5, 5.Ne2 (Rubinstein)'
  },
  {
    ECO: 'E43',
    Opening: 'Nimzo-Indian, Fischer Variation'
  },
  {
    ECO: 'E44',
    Opening: 'Nimzo-Indian, Fischer Variation, 5.Ne2'
  },
  {
    ECO: 'E45',
    Opening: 'Nimzo-Indian, 4.e3, Bronstein (Byrne) Variation'
  },
  {
    ECO: 'E46',
    Opening: 'Nimzo-Indian'
  },
  {
    ECO: 'E47',
    Opening: 'Nimzo-Indian, 4.e3 O-O 5.Bd3'
  },
  {
    ECO: 'E48',
    Opening: 'Nimzo-Indian, 4.e3 O-O 5.Bd3 d5'
  },
  {
    ECO: 'E49',
    Opening: 'Nimzo-Indian, 4.e3, Botvinnik System'
  },
  {
    ECO: 'E50',
    Opening: 'Nimzo-Indian, 4.e3 O-O 5.Nf3, without ...d5'
  },
  {
    ECO: 'E51',
    Opening: 'Nimzo-Indian, 4.e3'
  },
  {
    ECO: 'E52',
    Opening: 'Nimzo-Indian, 4.e3, Main line with ...b6'
  },
  {
    ECO: 'E53',
    Opening: 'Nimzo-Indian, 4.e3'
  },
  {
    ECO: 'E54',
    Opening: 'Nimzo-Indian, 4.e3, Gligoric System'
  },
  {
    ECO: 'E55',
    Opening: 'Nimzo-Indian, 4.e3, Gligoric System, Bronstein Variation'
  },
  {
    ECO: 'E56',
    Opening: 'Nimzo-Indian, 4.e3, Main line with 7...Nc6'
  },
  {
    ECO: 'E57',
    Opening: 'Nimzo-Indian, 4.e3, Main line with 8...dc and 9...cd'
  },
  {
    ECO: 'E58',
    Opening: 'Nimzo-Indian, 4.e3, Main line with 8...Bxc3'
  },
  {
    ECO: 'E59',
    Opening: 'Nimzo-Indian, 4.e3, Main line'
  },
  {
    ECO: 'E60',
    Opening: "King's Indian Defense"
  },
  {
    ECO: 'E61',
    Opening: "King's Indian"
  },
  {
    ECO: 'E62',
    Opening: "King's Indian, Fianchetto"
  },
  {
    ECO: 'E63',
    Opening: "King's Indian, Fianchetto, Panno Variation"
  },
  {
    ECO: 'E64',
    Opening: "King's Indian, Fianchetto, Yugoslav System"
  },
  {
    ECO: 'E65',
    Opening: "King's Indian, Fianchetto, Yugoslav, 7.O-O"
  },
  {
    ECO: 'E66',
    Opening: "King's Indian, Fianchetto, Yugoslav Panno"
  },
  {
    ECO: 'E67',
    Opening: "King's Indian, Fianchetto"
  },
  {
    ECO: 'E68',
    Opening: "King's Indian, Fianchetto, Classical Variation, 8.e4"
  },
  {
    ECO: 'E69',
    Opening: "King's Indian, Fianchetto, Classical Main line"
  },
  {
    ECO: 'E70',
    Opening: "King's Indian"
  },
  {
    ECO: 'E71',
    Opening: "King's Indian, Makagonov System (5.h3)"
  },
  {
    ECO: 'E72',
    Opening: "King's Indian"
  },
  {
    ECO: 'E73',
    Opening: "King's Indian"
  },
  {
    ECO: 'E74',
    Opening: "King's Indian, Averbakh, 6...c5"
  },
  {
    ECO: 'E75',
    Opening: "King's Indian, Averbakh, Main line"
  },
  {
    ECO: 'E76',
    Opening: "King's Indian, Four Pawns Attack"
  },
  {
    ECO: 'E77',
    Opening: "King's Indian"
  },
  {
    ECO: 'E78',
    Opening: "King's Indian, Four Pawns Attack, with Be2 and Nf3"
  },
  {
    ECO: 'E79',
    Opening: "King's Indian, Four Pawns Attack, Main line"
  },
  {
    ECO: 'E80',
    Opening: "King's Indian, Samisch Variation"
  },
  {
    ECO: 'E81',
    Opening: "King's Indian, Samisch"
  },
  {
    ECO: 'E82',
    Opening: "King's Indian, Samisch, double Fianchetto Variation"
  },
  {
    ECO: 'E83',
    Opening: "King's Indian, Samisch"
  },
  {
    ECO: 'E84',
    Opening: "King's Indian, Samisch, Panno Main line"
  },
  {
    ECO: 'E85',
    Opening: "King's Indian, Samisch, Orthodox Variation"
  },
  {
    ECO: 'E86',
    Opening: "King's Indian, Samisch, Orthodox, 7.Nge2 c6"
  },
  {
    ECO: 'E87',
    Opening: "King's Indian, Samisch, Orthodox"
  },
  {
    ECO: 'E88',
    Opening: "King's Indian, Samisch, Orthodox, 7.d5 c6"
  },
  {
    ECO: 'E89',
    Opening: "King's Indian, Samisch, Orthodox Main line"
  },
  {
    ECO: 'E90',
    Opening: "King's Indian"
  },
  {
    ECO: 'E91',
    Opening: "King's Indian"
  },
  {
    ECO: 'E92',
    Opening: "King's Indian"
  },
  {
    ECO: 'E93',
    Opening: "King's Indian, Petrosian System"
  },
  {
    ECO: 'E94',
    Opening: "King's Indian, Orthodox"
  },
  {
    ECO: 'E95',
    Opening: "King's Indian, Orthodox, 7...Nbd7, 8.Re1"
  },
  {
    ECO: 'E96',
    Opening: "King's Indian, Orthodox, 7...Nbd7, Main line"
  },
  {
    ECO: 'E97',
    Opening: "King's Indian"
  },
  {
    ECO: 'E98',
    Opening: "King's Indian, Orthodox, Taimanov, 9.Ne1"
  },
  {
    ECO: 'E99',
    Opening: "King's Indian, Orthodox, Taimanov"
  }
];

module.exports.default = codes;
