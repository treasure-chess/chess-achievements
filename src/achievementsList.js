const list = [
  {
    number: 1,
    value: 'Player',
    name: 'Player',
    description: 'Play a game',
    points: 1
  },
  {
    number: 2,
    value: 'Winner750',
    name: '750+ Winner',
    description: 'Win a game against opponent rated 750+',
    points: 2
  },
  {
    number: 3,
    value: 'Played750',
    name: 'Played 750+',
    description: 'Play a game against opponent rated 750+',
    points: 1
  },
  {
    number: 4,
    value: 'Winner1500',
    name: '1500+ Winner',
    description: 'Win a game against opponent rated 1500+',
    points: 3
  },
  {
    number: 5,
    value: 'Played1500',
    name: 'Played 1500+',
    description: 'Play a game against opponent rated 1500+',
    points: 2
  },
  {
    number: 6,
    value: 'Played2000',
    name: 'Played 2000+',
    description: 'Play a game against opponent rated 2000+',
    points: 3
  },
  {
    number: 7,
    value: 'BigWinner',
    name: 'Big Winner',
    description: 'Win a game against opponent rated 2000+',
    points: 4
  },
  {
    number: 8,
    value: 'StrongestOpponent',
    name: 'Strongest Opponent',
    description: 'Play a game against opponent rated 2250+',
    points: 4
  },
  {
    number: 9,
    value: 'MythicWinner',
    name: 'Mythic Winner',
    description: 'Win a game against opponent rated 2250+',
    points: 5
  },
  {
    number: 10,
    value: 'DefeatIM',
    name: 'Defeat an IM',
    description: 'Defeat an IM',
    points: 4
  },
  {
    number: 11,
    value: 'DefeatNM',
    name: 'Defeat a NM',
    description: 'Defeat a NM',
    points: 3
  },
  {
    number: 12,
    value: 'DefeatGM',
    name: 'Defeat a GM',
    description: 'Defeat a GM',
    points: 5
  },
  {
    number: 13,
    value: 'CrissCross',
    name: 'Criss Cross',
    description: 'Mate with a bishop',
    points: 4
  },
  {
    number: 14,
    value: 'Jousting',
    name: 'Jousting',
    description: 'Mate with a knight',
    points: 4
  },
  {
    number: 15,
    value: 'UtterDisrespect',
    name: 'Utter Disrespect',
    description: 'Mate with a pawn',
    points: 4
  },
  {
    number: 16,
    value: 'TripleDigitClub',
    name: 'Triple Digit Club',
    description: 'Complete a game with more than 100 moves',
    points: 3
  },
  {
    number: 17,
    value: 'Excessive',
    name: 'Excessive',
    description: 'Complete a game with more than 150 moves',
    points: 4
  },
  {
    number: 18,
    value: 'Ultramarathoners',
    name: 'Ultramarathoners',
    description: 'Complete a game with more than 250 moves',
    points: 5
  },
  {
    number: 19,
    value: 'OpeningExpert',
    name: 'Opening Expert',
    description: 'Win with checkmate in less than 10 moves',
    points: 2
  },
  {
    number: 20,
    value: 'DontBlink',
    name: "Don't Blink",
    description: 'Win with checkmate in <5 moves',
    points: 3
  },
  {
    number: 21,
    value: 'FoolsMate',
    name: "Fool's Mate",
    description: 'Win with checkmate in 2 moves',
    points: 5
  },
  {
    number: 22,
    value: 'LeveledField',
    name: 'Leveled Field',
    description: 'Draw with a higher rated player',
    points: 2
  },
  {
    number: 23,
    value: 'Hellomlady',
    name: "Hello m'lady",
    description: 'Queen side castle',
    points: 1
  },
  {
    number: 24,
    value: 'HorseFarmer',
    name: 'Horse Farmer',
    description: 'Under-promote to a knight',
    points: 3
  },
  {
    number: 25,
    value: 'HolyPromotion',
    name: 'Holy Promotion',
    description: 'Under-promote to a bishop',
    points: 5
  },
  {
    number: 26,
    value: 'TheSneakyPawn',
    name: 'The Sneaky Pawn',
    description: 'En Passant',
    points: 2
  },
  {
    number: 27,
    value: 'GodModeGlitch',
    name: 'God-Mode Glitch',
    description: 'Checkmate with an En Passant',
    points: 5
  },
  {
    number: 28,
    value: 'CuttingitClose',
    name: 'Cutting it Close',
    description: 'Draw when opponent has a queen, without one',
    points: 4
  },
  {
    number: 29,
    value: 'DejaVu',
    name: 'Déjà Vu',
    description: 'Draw by repetition',
    points: 1
  },
  {
    number: 30,
    value: 'TheUnderdog',
    name: 'The Underdog',
    description: 'Defeat a higher rated player',
    points: 3
  },
  {
    number: 31,
    value: 'CheckinYouOut',
    name: "Checkin' You Out",
    description: 'Put opponent in check',
    points: 1
  },
  {
    number: 32,
    value: 'PawnShy',
    name: 'Pawn Shy',
    description: 'Capture <4 pawns',
    points: 1
  },
  {
    number: 33,
    value: 'PawnShopper',
    name: 'Pawn Shopper',
    description: 'Capture all pawns',
    points: 2
  },
  {
    number: 34,
    value: 'MinorProblem',
    name: 'A Minor Problem',
    description: 'Capture all knights and bishops without losing any.',
    points: 5
  },
  {
    number: 35,
    value: 'MrMarathonMan',
    name: 'Mr. Marathon Man',
    description: 'Move king >20 times',
    points: 1
  },
  {
    number: 36,
    value: 'PawnHoarder',
    name: 'Pawn Hoarder',
    description: 'Capture all pawns without losing any',
    points: 5
  },
  {
    number: 37,
    value: 'Winner',
    name: 'Winner',
    description: 'Win a game',
    points: 2
  }
];

module.exports = list;
