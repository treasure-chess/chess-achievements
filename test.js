const achievementLibrary = require("./index.js");
//import index.js which is the main library

const examplePgn1 = '1.e4 {[%clk 0:02:59]} e5 {[%clk 0:02:59]} 2.Nf3 {[%clk 0:02:58]} Nc6 {[%clk 0:02:59]} 3.Bb5 {[%clk 0:02:58]} Nf6 {[%clk 0:02:59]} 4.d3 {[%clk 0:02:57]} Bc5 {[%clk 0:02:57]} 5.c3 {[%clk 0:02:57]} O-O {[%clk 0:02:56]} 6.O-O {[%clk 0:02:56]} Re8 {[%clk 0:02:56]} 7.h3 {[%clk 0:02:54]} a6 {[%clk 0:02:55]} 8.Ba4 {[%clk 0:02:53]} d5 {[%clk 0:02:54]} 9.Nbd2 {[%clk 0:02:51]} h6 {[%clk 0:02:53]} 10.Re1 {[%clk 0:02:50]} b5 {[%clk 0:02:51]} 11.Bb3 {[%clk 0:02:48]} d4 {[%clk 0:02:51]} 12.Nf1 {[%clk 0:02:43]} Be6 {[%clk 0:02:49]} 13.Ng3 {[%clk 0:02:38]} Bxb3 {[%clk 0:02:43]} 14.axb3 {[%clk 0:02:38]} Qd7 {[%clk 0:02:40]} 15.b4 {[%clk 0:02:24]} Bf8 {[%clk 0:02:37]} 16.Qe2 {[%clk 0:02:22]} dxc3 {[%clk 0:02:22]} 17.bxc3 {[%clk 0:02:20]} a5 {[%clk 0:02:20]} 18.bxa5 {[%clk 0:02:16]} Nxa5 {[%clk 0:02:20]} 19.Be3 {[%clk 0:02:11]} c5 {[%clk 0:02:17]} 20.Red1 {[%clk 0:02:06]} Qc6 {[%clk 0:02:08]} 21.Qc2 {[%clk 0:01:45]} b4 {[%clk 0:02:02]} 22.Nxe5 {[%clk 0:01:30]} b3 {[%clk 0:01:53]} 23.Qxb3 {[%clk 0:01:03]} Nxb3 {[%clk 0:01:49]}  0-1'

const examplePgn2 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.08.06"]
[Round "?"]
[White "ChadBiryani"]
[Black "DemonHunter69"]
[Result "1-0"]
[ECO "B06"]
[WhiteElo "2442"]
[BlackElo "2373"]
[TimeControl "60"]
[EndTime "12:38:55 PDT"]
[Termination "ChadBiryani won on time"]

1. e4 {[%timestamp 1]} 1... d6 {[%timestamp 1]} 2. d4 {[%timestamp 7]} 2... g6
{[%timestamp 1]} 3. Nc3 {[%timestamp 8]} 3... Bg7 {[%timestamp 3]} 4. h4
{[%timestamp 4]} 4... a6 {[%timestamp 2]} 5. h5 {[%timestamp 5]} 5... b5
{[%timestamp 3]} 6. a3 {[%timestamp 11]} 6... Bb7 {[%timestamp 8]} 7. Bd3
{[%timestamp 12]} 7... Nd7 {[%timestamp 4]} 8. f4 {[%timestamp 26]} 8... Bxd4
{[%timestamp 13]} 9. Nf3 {[%timestamp 5]} 9... Bg7 {[%timestamp 18]} 10. hxg6
{[%timestamp 10]} 10... hxg6 {[%timestamp 6]} 11. Rxh8 {[%timestamp 4]} 11...
Bxh8 {[%timestamp 1]} 12. Be3 {[%timestamp 6]} 12... c5 {[%timestamp 8]} 13. Qd2
{[%timestamp 39]} 13... c4 {[%timestamp 9]} 14. Be2 {[%timestamp 7]} 14... Ngf6
{[%timestamp 1]} 15. Ng5 {[%timestamp 14]} 15... Bg7 {[%timestamp 14]} 16. Bf3
{[%timestamp 6]} 16... Qc7 {[%timestamp 7]} 17. O-O-O {[%timestamp 7]} 17... Nc5
{[%timestamp 19]} 18. e5 {[%timestamp 21]} 18... dxe5 {[%timestamp 8]} 19. fxe5
{[%timestamp 2]} 19... Bxf3 {[%timestamp 88]} 20. exf6 {[%timestamp 26]} 20...
exf6 {[%timestamp 1]} 21. Nxf3 {[%timestamp 13]} 21... Ne6 {[%timestamp 24]} 22.
Nd5 {[%timestamp 15]} 22... Qb7 {[%timestamp 18]} 23. Qa5 {[%timestamp 67]}
23... Rd8 {[%timestamp 26]} 24. Nb6 {[%timestamp 13]} 24... Rxd1+ {[%timestamp
13]} 25. Kxd1 {[%timestamp 1]} 25... f5 {[%timestamp 39]} 26. Kc1 {[%timestamp
14]} 26... f4 {[%timestamp 19]} 27. Bf2 {[%timestamp 13]} 27... c3 {[%timestamp
48]} 28. bxc3 {[%timestamp 16]} 28... Qc6 {[%timestamp 5]} 29. Qxa6 {[%timestamp
17]} 29... Bxc3 {[%timestamp 11]} 30. Qc8+ {[%timestamp 3]} 30... Qxc8
{[%timestamp 9]} 31. Nxc8 {[%timestamp 1]} 31... Kd7 {[%timestamp 14]} 32. Na7
{[%timestamp 3]} 32... b4 {[%timestamp 13]} 33. axb4 {[%timestamp 8]} 33... Bxb4
{[%timestamp 1]} 34. Nb5 {[%timestamp 7]} 34... g5 {[%timestamp 22]} 35. Nbd4
{[%timestamp 10]} 35... g4 {[%timestamp 17]} 36. Ne5+ {[%timestamp 41]} 36...
Kd6 {[%timestamp 12]} 37. Nxg4 {[%timestamp 1]} 37... Kd5 {[%timestamp 5]} 38.
Nxe6 {[%timestamp 6]} 38... fxe6 {[%timestamp 1]} 39. Kd1 {[%timestamp 13]}
39... e5 {[%timestamp 1]} 40. Ke2 {[%timestamp 3]} 40... e4 {[%timestamp 5]} 41.
Be1 {[%timestamp 3]} 41... Bc5 {[%timestamp 8]} 42. Bd2 {[%timestamp 9]} 42...
e3 {[%timestamp 8]} 43. Bc3 {[%timestamp 4]} 43... Ke4 {[%timestamp 9]} 44. Bg7
{[%timestamp 1]} 44... Bb4 {[%timestamp 32]} 45. Nf6+ {[%timestamp 7]} 45... Kf5
{[%timestamp 6]} 46. Nd5 {[%timestamp 5]} 46... Bc5 {[%timestamp 10]} 47. c4
{[%timestamp 1]} 1-0`;

const examplePgn3 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.05.11"]
[Round "?"]
[White "ChadBiryani"]
[Black "bronek255"]
[Result "1/2-1/2"]
[ECO "A40"]
[WhiteElo "2519"]
[BlackElo "2605"]
[TimeControl "60"]
[EndTime "15:53:14 PDT"]
[Termination "Game drawn by repetition"]

1. d4 {[%timestamp 1]} 1... c6 {[%timestamp 1]} 2. Bf4 {[%timestamp 18]} 2... d5
{[%timestamp 1]} 3. e3 {[%timestamp 3]} 3... Nf6 {[%timestamp 7]} 4. Nf3
{[%timestamp 1]} 4... Bg4 {[%timestamp 8]} 5. Bd3 {[%timestamp 1]} 5... e6
{[%timestamp 9]} 6. Nbd2 {[%timestamp 7]} 6... Nbd7 {[%timestamp 4]} 7. h3
{[%timestamp 8]} 7... Bh5 {[%timestamp 11]} 8. O-O {[%timestamp 8]} 8... Be7
{[%timestamp 5]} 9. c4 {[%timestamp 7]} 9... O-O {[%timestamp 13]} 10. Rc1
{[%timestamp 6]} 10... Bg6 {[%timestamp 9]} 11. Bxg6 {[%timestamp 11]} 11...
hxg6 {[%timestamp 1]} 12. Ne5 {[%timestamp 8]} 12... Nxe5 {[%timestamp 9]} 13.
Bxe5 {[%timestamp 1]} 13... Nd7 {[%timestamp 6]} 14. Bh2 {[%timestamp 3]} 14...
a6 {[%timestamp 13]} 15. e4 {[%timestamp 8]} 15... dxe4 {[%timestamp 18]} 16.
Nxe4 {[%timestamp 1]} 16... Nf6 {[%timestamp 8]} 17. Qd3 {[%timestamp 27]} 17...
Nxe4 {[%timestamp 14]} 18. Qxe4 {[%timestamp 1]} 18... Bf6 {[%timestamp 2]} 19.
Rfd1 {[%timestamp 18]} 19... Qa5 {[%timestamp 5]} 20. a3 {[%timestamp 12]} 20...
Rfd8 {[%timestamp 12]} 21. Be5 {[%timestamp 25]} 21... Rd7 {[%timestamp 35]} 22.
Bxf6 {[%timestamp 10]} 22... gxf6 {[%timestamp 1]} 23. Rd3 {[%timestamp 14]}
23... Rad8 {[%timestamp 10]} 24. Rcd1 {[%timestamp 9]} 24... Kg7 {[%timestamp
8]} 25. Rf3 {[%timestamp 20]} 25... Qc7 {[%timestamp 61]} 26. h4 {[%timestamp
12]} 26... f5 {[%timestamp 8]} 27. Qe3 {[%timestamp 13]} 27... c5 {[%timestamp
15]} 28. d5 {[%timestamp 37]} 28... exd5 {[%timestamp 11]} 29. cxd5 {[%timestamp
5]} 29... Rxd5 {[%timestamp 4]} 30. Re1 {[%timestamp 3]} 30... Rd1 {[%timestamp
22]} 31. g3 {[%timestamp 21]} 31... Rxe1+ {[%timestamp 23]} 32. Qxe1
{[%timestamp 1]} 32... Qd6 {[%timestamp 10]} 33. Qc3+ {[%timestamp 8]} 33... Qd4
{[%timestamp 11]} 34. Qb3 {[%timestamp 7]} 34... b5 {[%timestamp 14]} 35. Re3
{[%timestamp 27]} 35... Qd1+ {[%timestamp 11]} 36. Kg2 {[%timestamp 9]} 36...
Qxb3 {[%timestamp 12]} 37. Rxb3 {[%timestamp 1]} 37... Rd2 {[%timestamp 5]} 38.
Rc3 {[%timestamp 17]} 38... c4 {[%timestamp 9]} 39. b3 {[%timestamp 11]} 39...
Rd3 {[%timestamp 8]} 40. Rxd3 {[%timestamp 19]} 40... cxd3 {[%timestamp 5]} 41.
Kf3 {[%timestamp 1]} 41... Kf6 {[%timestamp 27]} 42. Ke3 {[%timestamp 9]} 42...
Ke5 {[%timestamp 1]} 43. Kxd3 {[%timestamp 6]} 43... Kd5 {[%timestamp 12]} 44.
b4 {[%timestamp 8]} 44... f6 {[%timestamp 11]} 45. f4 {[%timestamp 8]} 45... Ke6
{[%timestamp 5]} 46. Kd4 {[%timestamp 11]} 46... Kd6 {[%timestamp 4]} 47. Kc3
{[%timestamp 10]} 47... Kd5 {[%timestamp 1]} 48. Kd3 {[%timestamp 4]} 48... Kc6
{[%timestamp 4]} 49. Kd4 {[%timestamp 8]} 49... Kd6 {[%timestamp 3]} 50. h5
{[%timestamp 11]} 50... gxh5 {[%timestamp 9]} 51. Ke3 {[%timestamp 7]} 51... Ke6
{[%timestamp 7]} 52. Kd4 {[%timestamp 18]} 52... Kd6 {[%timestamp 8]} 53. Ke3
{[%timestamp 1]} 53... Kc7 {[%timestamp 7]} 54. Kd4 {[%timestamp 5]} 54... Kd6
{[%timestamp 1]} 1/2-1/2`

const examplePgn4 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.08.31"]
[Round "?"]
[White "ChadBiryani"]
[Black "sergeikim"]
[Result "0-1"]
[ECO "A01"]
[WhiteElo "2342"]
[BlackElo "2467"]
[TimeControl "180+1"]
[EndTime "11:41:27 PDT"]
[Termination "sergeikim won by checkmate"]

1. b3 {[%timestamp 1]} 1... Nf6 {[%timestamp 20]} 2. Bb2 {[%timestamp 23]} 2...
g6 {[%timestamp 9]} 3. g4 {[%timestamp 23]} 3... Bg7 {[%timestamp 14]} 4. h4
{[%timestamp 14]} 4... O-O {[%timestamp 130]} 5. e3 {[%timestamp 47]} 5... d6
{[%timestamp 44]} 6. Be2 {[%timestamp 16]} 6... e5 {[%timestamp 29]} 7. c4
{[%timestamp 45]} 7... a5 {[%timestamp 32]} 8. Nc3 {[%timestamp 53]} 8... c6
{[%timestamp 28]} 9. g5 {[%timestamp 37]} 9... Ne8 {[%timestamp 61]} 10. Qc2
{[%timestamp 29]} 10... Nc7 {[%timestamp 98]} 11. d3 {[%timestamp 75]} 11... d5
{[%timestamp 14]} 12. O-O-O {[%timestamp 64]} 12... Nba6 {[%timestamp 23]} 13.
Nf3 {[%timestamp 194]} 13... Nc5 {[%timestamp 112]} 14. Nh2 {[%timestamp 64]}
14... d4 {[%timestamp 88]} 15. exd4 {[%timestamp 188]} 15... exd4 {[%timestamp
19]} 16. Ne4 {[%timestamp 4]} 16... Nxe4 {[%timestamp 20]} 17. dxe4 {[%timestamp
1]} 17... c5 {[%timestamp 57]} 18. f4 {[%timestamp 16]} 18... a4 {[%timestamp
26]} 19. Ng4 {[%timestamp 105]} 19... Bxg4 {[%timestamp 37]} 20. Bxg4
{[%timestamp 14]} 20... axb3 {[%timestamp 55]} 21. axb3 {[%timestamp 19]} 21...
Na6 {[%timestamp 14]} 22. f5 {[%timestamp 34]} 22... Nb4 {[%timestamp 20]} 23.
Qf2 {[%timestamp 75]} 23... Be5 {[%timestamp 17]} 24. Rh3 {[%timestamp 150]}
24... Ra2 {[%timestamp 45]} 25. Kb1 {[%timestamp 444]} 25... Qa5 {[%timestamp
99]} 26. h5 {[%timestamp 88]} 26... Ra8 {[%timestamp 43]} 27. Kc1 {[%timestamp
93]} 27... Bf4+ {[%timestamp 114]} 28. Qxf4 {[%timestamp 13]} 28... Rxb2
{[%timestamp 13]} 29. Qb8+ {[%timestamp 141]} 29... Rxb8 {[%timestamp 38]} 30.
hxg6 {[%timestamp 1]} 30... Qa1# {[%timestamp 26]} 0-1`;

const examplePgn5 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.08.31"]
[Round "?"]
[White "Eternauta2400"]
[Black "ChadBiryani"]
[Result "1/2-1/2"]
[ECO "B01"]
[WhiteElo "2537"]
[BlackElo "2357"]
[TimeControl "180+1"]
[EndTime "10:40:55 PDT"]
[Termination "Game drawn by repetition"]

1. e4 d5 2. exd5 Qxd5 3. Nf3 Bg4 4. Be2 Nf6 5. h3 Bh5 6. Nc3 Qd8 7. d3 e6 8. Bf4
c6 9. Qd2 Bd6 10. O-O-O O-O 11. g4 Bg6 12. Ne5 a5 13. h4 Bxe5 14. Bxe5 h6 15. h5
Bh7 16. g5 Nfd7 17. Bd6 Qxg5 18. Bxf8 Nxf8 19. f4 Qe7 20. Rdg1 Kh8 21. Qe3 Nbd7
22. Bg4 Nf6 23. Bf3 N8d7 24. Rg2 Rg8 25. Rhg1 b5 26. Ne4 Nd5 27. Qd4 f6 28. Nc3
c5 29. Nxd5 exd5 30. Qxd5 c4 31. Be4 cxd3 32. Bxd3 Nb6 33. Qf3 Bxd3 34. Qxd3 Nc4
35. Re2 Qc5 36. Rge1 Qxh5 37. b3 Na3 38. Kb2 b4 39. c4 bxc3+ 40. Qxc3 Nb5 41.
Qxa5 Qc5 42. Rc2 Qd5 43. Rd2 Qc5 44. Rc1 Qe3 45. Rdc2 Nd4 46. Rc8 Qe2+ 47. Ka3
Rxc8 48. Rxc8+ Kh7 49. Rc4 Nc2+ 50. Ka4 Ne3 51. Rc5 Qxa2+ 52. Kb5 Qxb3+ 53. Kc6
Qe6+ 54. Kb7 Qd7+ 55. Rc7 Qd5+ 56. Qxd5 Nxd5 57. Rc4 f5 58. Kc6 Ne3 59. Ra4 Kg6
60. Kc5 h5 61. Kd4 Ng4 62. Kd3 h4 63. Ke2 Kh5 64. Kf3 h3 65. Ra8 h2 66. Rh8+ Kg6
67. Kg3 Kf6 68. Kg2 Ke6 69. Re8+ Kd5 70. Re7 g6 71. Kh1 Kd4 72. Re6 Kd5 73. Re8
Kd4 74. Kg2 Kd5 75. Re1 Kd4 76. Re6 Kd5 77. Rxg6 Ke4 78. Rg8 Kxf4 79. Rh8 Ke3
80. Kg3 Nf2 81. Rxh2 Ne4+ 82. Kg2 f4 83. Rh3+ Kd4 84. Rh5 Ke3 85. Rf5 Nd2 86.
Re5+ Ne4 87. Kf1 f3 88. Re8 Kf4 89. Rf8+ Ke3 90. Re8 Kf4 91. Kg1 Ke3 92. Kf1
1/2-1/2`

const examplePgn6 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2020.04.08"]
[Round "?"]
[White "BubonicPawn"]
[Black "ledorio"]
[Result "1-0"]
[ECO "A02"]
[WhiteElo "1776"]
[BlackElo "1721"]
[TimeControl "180"]
[EndTime "17:23:33 PDT"]
[Termination "BubonicPawn won by checkmate"]

1. f4 e5 2. fxe5 Qh4+ 3. g3 Qe4 4. Nf3 g5 5. Bg2 g4 6. Nh4 Qxe5 7. d4 Qe6 8. Bf4
Ne7 9. Nc3 Ng6 10. Bxc7 Nxh4 11. Bd5 Nf3+ 12. Kf2 Qf6 13. exf3 d6 14. Ne4 Qf5
15. Re1 Qxf3+ 16. Qxf3 gxf3 17. Nf6# 1-0`

const examplePgn7 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.07.28"]
[Round "?"]
[White "schimmelreite3"]
[Black "ChadBiryani"]
[Result "0-1"]
[ECO "A02"]
[WhiteElo "800"]
[BlackElo "2390"]
[TimeControl "900+10"]
[EndTime "16:45:04 PDT"]
[Termination "ChadBiryani won by checkmate"]

1. g4 d5 2. f4 e6 3. Bh3 c5 4. c3 Nc6 5. Na3 Be7 6. f5 Nf6 7. Nf3 exf5 8. gxf5
b6 9. Kf2 Bb7 10. d4 O-O 11. Ne5 Rc8 12. Qa4 Ne4+ 13. Kf3 Nxe5+ 14. dxe5 d4 15.
cxd4 cxd4 16. Qxa7 Qd5 17. Be3 Bh4 18. Kf4 Nf2 19. Qxb7 Qxb7 20. Bxd4 h6 21.
Rhf1 Rfe8 22. Rxf2 Bxf2 23. Rf1 Bh4 24. f6 g5+ 25. Kf5 Rcd8 26. Nc4 b5 27. Nd6
Rxd6 28. exd6 Qe4# 0-1`

const examplePgn8 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2018.10.08"]
[Round "?"]
[White "ChadBiryani"]
[Black "riapia2"]
[Result "1/2-1/2"]
[ECO "C40"]
[WhiteElo "2158"]
[BlackElo "642"]
[TimeControl "300"]
[EndTime "19:56:11 PDT"]
[Termination "Game drawn by agreement"]

1. e4 e5 2. Nf3 Bd6 3. Nc3 Nf6 4. Bc4 Nc6 5. d4 exd4 6. Nxd4 O-O 7. Nxc6 bxc6 8.
O-O Bb7 9. Bg5 Nxe4 10. Bxd8 Raxd8 11. Nxe4 Rfe8 12. Nxd6 Re4 1/2-1/2`

const examplePgn9 = `[Event "Monthly Blitz Arena"]
[Site "https://lichess.org/LY5WQjXL"]
[Date "2021.01.27"]
[White "Franck_PIETERS"]
[Black "EricRosen"]
[Result "0-1"]
[UTCDate "2021.01.27"]
[UTCTime "18:47:14"]
[WhiteElo "1811"]
[BlackElo "2477"]
[WhiteRatingDiff "+0"]
[BlackRatingDiff "+0"]
[BlackTitle "IM"]
[Variant "Standard"]
[TimeControl "300+0"]
[ECO "A04"]
[Opening "Zukertort Opening: The Walrus"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. Nf3 e5? { (0.17 → 1.51) Mistake. Nf6 was best. } (1... Nf6 2. c4 c6 3. Nc3 d5 4. e3 e6 5. Be2 Nbd7 6. Qc2) 2. Nxe5 Nc6?! { (1.35 → 2.08) Inaccuracy. Nf6 was best. } (2... Nf6 3. c4 d5 4. cxd5 Qxd5 5. Nf3 c5 6. Nc3 Qd8 7. e4) 3. Nxc6 dxc6 { A04 Zukertort Opening: The Walrus } 4. e3 Nf6 5. b3 Bd6 6. Bb2 h5 7. d4?! { (1.90 → 1.04) Inaccuracy. Na3 was best. } (7. Na3 Ng4 8. Nc4 Nxh2 9. Bxg7 Rh7 10. Be5 Bxe5 11. Nxe5 Bg4 12. Qc1 Qg5 13. Qb2 Nxf1) 7... Qe7 8. Nd2 Bf5 9. Nc4 Bf4? { (1.80 → 3.08) Mistake. Qe4 was best. } (9... Qe4 10. Nxd6+) 10. Be2?! { (3.08 → 2.23) Inaccuracy. Bd3 was best. } (10. Bd3) 10... Bh6 11. Qd2 O-O-O?! { (2.21 → 3.39) Inaccuracy. Qe6 was best. } (11... Qe6 12. Ne5) 12. O-O? { (3.39 → 1.87) Mistake. Qa5 was best. } (12. Qa5 Be6) 12... Kb8 13. a4 Ne4 14. Qa5 Bc8?! { (1.81 → 2.98) Inaccuracy. g6 was best. } (14... g6 15. Ba3 Qe8 16. Bd3 Rd5 17. Qe1 Ng5 18. Bb2 h4 19. h3 Bg7 20. Qe2 c5 21. dxc5) 15. Ba3? { (2.98 → 1.43) Mistake. Qe5 was best. } (15. Qe5) 15... Qh4?! { (1.43 → 2.56) Inaccuracy. Qe6 was best. } (15... Qe6) 16. Ne5 f6?? { (2.43 → 5.05) Blunder. Qf6 was best. } (16... Qf6) 17. Bc5?? { (5.05 → 2.48) Blunder. Ng6 was best. } (17. Ng6 Qg5 18. Qxg5 Bxg5 19. Nxh8 Rxh8 20. f4 Bh6 21. Bxh5 Bf5 22. Bb4 Nd6 23. c4 Bd3) 17... Nxc5 18. Nxc6+?? { (2.64 → -1.15) Blunder. Ng6 was best. } (18. Ng6 Nxb3 19. cxb3 Qe4 20. Nxh8 Rxh8 21. Qc3 g5 22. b4 h4 23. b5 g4 24. Qd3 Qd5) 18... bxc6 19. Qxc5 Bb7 20. a5? { (-0.95 → -2.36) Mistake. Bf3 was best. } (20. Bf3 f5) 20... a6 21. Ra4?! { (-2.12 → -2.85) Inaccuracy. b4 was best. } (21. b4) 21... Rd5? { (-2.85 → -1.39) Mistake. Qg5 was best. } (21... Qg5 22. Qxg5 Bxg5 23. Rb4 Ka7 24. f4 Bh6 25. Rc4 h4 26. Bf3 g5 27. g3 Bf8 28. Bxc6) 22. Qc3 Qg5 23. Rb4?? { (0.00 → -1.74) Blunder. Bxa6 was best. } (23. Bxa6 Bxa6 24. Qxc6 Bb5 25. Rb4 Kc8 26. Qe6+ Kd8 27. c4 Rd6 28. Qxd6+ cxd6 29. Rxb5 f5) 23... Rb5 24. Bxb5?? { (-1.77 → -5.51) Blunder. Bf3 was best. } (24. Bf3 Rxb4 25. Qxb4 Qb5 26. Qe7 Qxa5 27. c4 f5 28. c5 Qb5 29. h3 Bc8 30. Rd1 h4) 24... cxb5 25. f3 Qxe3+ 26. Qxe3 Bxe3+ 27. Kh1?! { (-5.70 → -9.23) Inaccuracy. Rf2 was best. } (27. Rf2) 27... h4?! { (-9.23 → -5.83) Inaccuracy. Bd2 was best. } (27... Bd2) 28. Re1?! { (-5.83 → -9.48) Inaccuracy. Rd1 was best. } (28. Rd1 Bc8) 28... Bd2 29. Re7 Bxb4 30. Rxg7 Re8 31. Kg1 Bc3 32. f4 Bxd4+ 33. Kf1 Bc6 34. Rh7 b4 35. Rxh4?! { (-15.71 → Mate in 2) Checkmate is now unavoidable. Rh5 was best. } (35. Rh5 Bb5+) 35... Bb5+ 36. c4 bxc3# { Black wins by checkmate. } 0-1`

const examplePgn10 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.09.26"]
[Round "?"]
[White "Castling_is4_Wussies"]
[Black "alex_rowland"]
[Result "0-1"]
[ECO "A00"]
[WhiteElo "1267"]
[BlackElo "1308"]
[TimeControl "60"]
[EndTime "12:26:55 PDT"]
[Termination "alex_rowland won by checkmate"]

1. e3 g6 2. a4 Bg7 3. c3 Nc6 4. Bc4 d6 5. Ba2 e6 6. Na3 d5 7. b3 a6 8. Bb2 Nge7
9. Qc1 O-O 10. Bb1 Ne5 11. Ne2 Nd3+ 12. Bxd3 c5 13. Bb1 c4 14. h4 cxb3 15. Qd1
Qb6 16. Nd4 Bxd4 17. exd4 Nf5 18. Qc1 Re8 19. c4 dxc4 20. Qc3 e5 21. dxe5 Qc5
22. e6 Rxe6+ 23. Kd1 Nd4 24. Re1 Rxe1+ 25. Kxe1 Qe5+ 26. Kd1 Qe2+ 27. Kc1 Qe1#
0-1`

const result = achievementLibrary(examplePgn10, 'Black');
console.log("Result: \n");
console.log(result);