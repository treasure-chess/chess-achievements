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

const examplePgn11 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2018.10.08"]
[Round "?"]
[White "riapia2"]
[Black "ChadBiryani"]
[Result "0-1"]
[ECO "C44"]
[WhiteElo "642"]
[BlackElo "2158"]
[TimeControl "300"]
[EndTime "20:03:57 PDT"]
[Termination "ChadBiryani won on time"]

1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d3 Bc5 5. Nc3 d6 6. Nd5 Nxd5 7. exd5 Ne7 8.
Be3 Bxe3 9. fxe3 Nxd5 10. d4 exd4 11. exd4 O-O 12. O-O Re8 13. Re1 Bd7 14. Bc4
Nb6 15. Qe2 Qf6 16. Qd1 Qd8 17. Re2 Nxc4 18. Qe1 Rxe2 19. Qxe2 Qf6 20. Re1 h6
21. Qxc4 Bg4 22. Ne5 a6 23. Nd7 Bxd7 24. Qxc7 Bc6 25. Rf1 Qe7 26. Qxe7 Rf8 27.
Rxf7 Rxf7 28. Qe8+ Rf8 29. Qg6 Be4 30. Qxg7+ Kxg7 31. g3 Bxc2 32. g4 Rf1+ 33.
Kxf1 Kg6 0-1`

const examplePgn12 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.07.27"]
[Round "?"]
[White "mortngabriel"]
[Black "ChadBiryani"]
[Result "0-1"]
[ECO "A00"]
[WhiteElo "2179"]
[BlackElo "2600"]
[TimeControl "60"]
[EndTime "16:24:31 PDT"]
[Termination "ChadBiryani won by checkmate"]

1. f3 e6 2. g4 Qh4# 0-1`

const examplePgn13 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.07.27"]
[Round "-"]
[White "mortngabriel"]
[Black "ChadBiryani"]
[Result "0-1"]
[CurrentPosition "rnb1kb1r/pppn1pp1/6p1/3pp3/1P5q/5P2/P1PPP2P/RNBQKBNR w KQkq -"]
[Timezone "UTC"]
[ECO "A00"]
[ECOUrl "https://www.chess.com/openings/Barnes-Opening-1...d5"]
[UTCDate "2021.07.27"]
[UTCTime "23:24:11"]
[WhiteElo "2181"]
[BlackElo "2598"]
[TimeControl "60"]
[Termination "ChadBiryani won by checkmate"]
[StartTime "23:24:11"]
[EndDate "2021.07.27"]
[EndTime "23:24:21"]
[Link "https://www.chess.com/game/live/21167382239"]

1. f3 d5 2. g4 $2 $17 {MISTAKE (-3.00)} ({(-0.44) The best move was} 2. f4 Bg4 3.
Nf3 e6 4. e3 Nf6 5. Be2 Bd6 6. O-O O-O 7. Nc3 c5 8. h3 Bh5 9. d3 Nc6 10. e4 d4
11. Nb5 Be7 12. e5 Nd5 13. c4 dxc3 14. Nxc3 Bg6) 2... Nf6 $2 $12 {MISTAKE (-1.05)}
({(-3.00) The best move was} 2... e5 3. Nh3 Nc6 4. e3 Be6 5. Bg2 Qh4+ 6. Nf2 h5
7. h3 O-O-O 8. d3 d4 9. e4 Nge7 10. O-O Ng6 11. Nd2 Nb4 12. Nc4) 3. g5 $17
{INACCURACY (-2.01)} ({(-1.05) The best move was} 3. d4 c5 4. e3 Nc6 5. Ne2 e6
6. Nbc3 Be7 7. Bg2 h6 8. O-O Bd7 9. h3 cxd4 10. exd4 O-O 11. f4 Rc8 12. Kh1 Na5
13. b3) 3... Nfd7 $12 {INACCURACY (-0.87)} ({(-2.01) The best move was} 3... Nh5
4. e3 h6 5. g6 fxg6 6. Bd3 Kf7 7. Qe2 e5 8. b3 Nc6 9. Nc3 Be7 10. Qg2 Bf5 11.
Bxf5 gxf5 12. Bb2) 4. g6 $2 $17 {MISTAKE (-4.43)} ({(-0.87) The best move was} 4. d4
Nc6 5. Nc3 e5 6. dxe5 d4 7. Nb5 Bc5 8. c3 dxc3 9. f4 cxb2 10. Bxb2 O-O 11. Nf3
Be3 12. Bc1 Bb6 13. Bg2 Nc5 14. Qxd8 Rxd8) 4... hxg6 5. b3 e5 6. b4 $4 {BLUNDER
(♚ Mate in 1)} ({(-5.09) The best move was} 6. e3 Nc5 7. Qe2 Nc6 8. Bb2 Bf5 9.
d3 Qh4+ 10. Qf2 Qxf2+ 11. Kxf2 O-O-O 12. a3 Be7 13. e4 Be6 14. Nd2 Nd4 15. Rc1
Bh4+ 16. Kg2 dxe4 17. Bxd4 exd4 18. fxe4) 6... Qh4# 0-1`

const examplePgn14 = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2021.07.27"]
[Round "?"]
[White "ChadBiryani"]
[Black "mortngabriel"]
[Result "1-0"]
[ECO "B00"]
[WhiteElo "2599"]
[BlackElo "2180"]
[TimeControl "60"]
[EndTime "16:24:27 PDT"]
[Termination "ChadBiryani won by checkmate"]

1. e4 f6 2. d4 g5 3. Qh5# 1-0`

const examplePgn15 = `[Event "Belgrade"]
[Site "Belgrade YUG"]
[Date "1989.02.17"]
[Round "?"]
[White "Ivan Nikolic"]
[Black "Goran Arsovic"]
[Result "1/2-1/2"]
[ECO "E95"]
[PlyCount "538"]
[EventDate "1989.??.??"]

1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 Nbd7 7. O-O e5 8. Re1
Re8 9. Bf1 h6 10. d5 Nh7 11. Rb1 f5 12. Nd2 f4 13. b4 g5 14. Nb3 Bf8 15. Be2
Ndf6 16. c5 g4 17. cxd6 cxd6 18. a3 Ng5 19. Bf1 Re7 20. Qd3 Rg7 21. Kh1 Qe8 22.
Nd2 g3 23. fxg3 fxg3 24. Qxg3 Nh3 25. Qf3 Qg6 26. Nc4 Bd7 27. Bd3 Ng5 28. Bxg5
Qxg5 29. Ne3 Re8 30. Ne2 Be7 31. Rbd1 Rf8 32. Nf5 Ng4 33. Neg3 h5 34. Kg1 h4 35.
Qxg4 Qxg4 36. Nh6+ Kh7 37. Nxg4 hxg3 38. Ne3 gxh2+ 39. Kxh2 Rh8 40. Rh1 Kg6+ 41.
Kg1 Rc8 42. Be2 Rc3 43. Rd3 Rc1+ 44. Nf1 Bd8 45. Rh8 Bb6+ 46. Kh2 Rh7+ 47. Rxh7
Kxh7 48. Nd2 Bg1+ 49. Kh1 Bd4+ 50. Nf1 Bg4 51. Bxg4 Rxf1+ 52. Kh2 Bg1+ 53. Kh3
Re1 54. Bf5+ Kh6 55. Kg4 Re3 56. Rd1 Bh2 57. Rh1 Rg3+ 58. Kh4 Rxg2 59. Kh3 Rg3+
60. Kxh2 Rxa3 61. Rg1 Ra6 62. Rg6+ Kh5 63. Kg3 Rb6 64. Rg7 Rxb4 65. Bc8 a5 66.
Bxb7 a4 67. Bc6 a3 68. Ra7 Rb3+ 69. Kf2 Kg5 70. Ke2 Kf4 71. Ra4 Rh3 72. Kd2 a2
73. Bb5 Rh1 74. Rxa2 Rh2+ 75. Be2 Kxe4 76. Ra5 Kd4 77. Ke1 Rh1+ 78. Kf2 Rc1 79.
Bg4 Rc2+ 80. Ke1 e4 81. Be6 Ke5 82. Bg8 Rc8 83. Bf7 Rc7 84. Be6 Rc2 85. Ra8 Rb2
86. Ra6 Rg2 87. Kd1 Rb2 88. Ra5 Rg2 89. Bd7 Rh2 90. Bc6 Kf4 91. Ra8 e3 92. Re8
Kf3 93. Rf8+ Ke4 94. Rf6 Kd3 95. Bb5+ Kd4 96. Rf5 Rh1+ 97. Ke2 Rh2+ 98. Kd1 Rh1+
99. Kc2 Rh2+ 100. Kc1 Rh1+ 101. Kc2 Rh2+ 102. Kd1 Rh1+ 103. Ke2 Rh2+ 104. Kf1
Rb2 105. Be2 Ke4 106. Rh5 Rb1+ 107. Kg2 Rb2 108. Rh4+ Kxd5 109. Kf3 Kc5 110.
Kxe3 Rb3+ 111. Bd3 d5 112. Rh8 Ra3 113. Re8 Kd6 114. Kd4 Ra4+ 115. Kc3 Ra3+ 116.
Kd4 Ra4+ 117. Ke3 Ra3 118. Rh8 Ke5 119. Rh5+ Kd6 120. Rg5 Rb3 121. Kd2 Rb8 122.
Bf1 Re8 123. Kd3 Re5 124. Rg8 Rh5 125. Bg2 Kc5 126. Rf8 Rh6 127. Bf3 Rd6 128.
Re8 Rc6 129. Ra8 Rb6 130. Rd8 Rd6 131. Rf8 Ra6 132. Rf5 Rd6 133. Kc3 Rd8 134.
Rg5 Rd6 135. Rh5 Rd8 136. Rf5 Rd6 137. Rf8 Ra6 138. Re8 Rc6 139. Ra8 Rb6 140.
Ra5+ Rb5 141. Ra1 Rb8 142. Rd1 Rd8 143. Rd2 Rd7 144. Bg2 Rd8 145. Kd3 Ra8 146.
Ke3 Re8+ 147. Kd3 Ra8 148. Kc3 Rd8 149. Bf3 Rd7 150. Kd3 Ra7 151. Bg2 Ra8 152.
Rc2+ Kd6 153. Rc3 Ra2 154. Bf3 Ra8 155. Rb3 Ra5 156. Ke3 Ke5 157. Rd3 Rb5 158.
Kd2 Rc5 159. Bg2 Ra5 160. Bf3 Rc5 161. Bd1 Rc8 162. Bb3 Rc5 163. Rh3 Kf4 164.
Kd3 Ke5 165. Rh5+ Kf4 166. Kd4 Rb5 167. Bxd5 Rb4+ 168. Bc4 Ra4 169. Rh7 Kg5 170.
Rf7 Kg6 171. Rf1 Kg5 172. Kc5 Ra5+ 173. Kc6 Ra4 174. Bd5 Rf4 175. Re1 Rf6+ 176.
Kc5 Rf5 177. Kd4 Kf6 178. Re6+ Kg5 179. Be4 Rf6 180. Re8 Kf4 181. Rh8 Rd6+ 182.
Bd5 Rf6 183. Rh1 Kf5 184. Be4+ Ke6 185. Ra1 Kd6 186. Ra5 Re6 187. Bf5 Re1 188.
Ra6+ Ke7 189. Be4 Rc1 190. Ke5 Rc5+ 191. Bd5 Rc7 192. Rg6 Rd7 193. Rh6 Kd8 194.
Be6 Rd2 195. Rh7 Ke8 196. Kf6 Kd8 197. Ke5 Rd1 198. Bd5 Ke8 199. Kd6 Kf8 200.
Rf7+ Ke8 201. Rg7 Rf1 202. Rg8+ Rf8 203. Rg7 Rf6+ 204. Be6 Rf2 205. Bd5 Rf6+
206. Ke5 Rf1 207. Kd6 Rf6+ 208. Be6 Rf2 209. Ra7 Kf8 210. Rc7 Rd2+ 211. Ke5 Ke8
212. Kf6 Rf2+ 213. Bf5 Rd2 214. Rc1 Rd6+ 215. Be6 Rd2 216. Rh1 Kd8 217. Rh7 Rd1
218. Rg7 Rd2 219. Rg8+ Kc7 220. Rc8+ Kb6 221. Ke5 Kb7 222. Rc3 Kb6 223. Bd5 Rh2
224. Kd6 Rh6+ 225. Be6 Rh5 226. Ra3 Ra5 227. Rg3 Rh5 228. Rg2 Ka5 229. Rg3 Kb6
230. Rg4 Rb5 231. Bd5 Rc5 232. Rg8 Rc2 233. Rb8+ Ka5 234. Bb3 Rc3 235. Kd5 Rc7
236. Kd4 Rd7+ 237. Bd5 Re7 238. Rb2 Re8 239. Rb7 Ka6 240. Rb1 Ka5 241. Bc4 Rd8+
242. Kc3 Rh8 243. Rb5+ Ka4 244. Rb6 Rh3+ 245. Bd3 Rh5 246. Re6 Rg5 247. Rh6 Rc5+
248. Bc4 Rg5 249. Ra6+ Ra5 250. Rh6 Rg5 251. Rh4 Ka5 252. Rh2 Rg3+ 253. Kd4 Rg5
254. Bd5 Ka4 255. Kc5 Rg3 256. Ra2+ Ra3 257. Rb2 Rg3 258. Rh2 Rc3+ 259. Bc4 Rg3
260. Rb2 Rg5+ 261. Bd5 Rg3 262. Rh2 Rc3+ 263. Bc4 Rg3 264. Rh8 Ka3 265. Ra8+ Kb2
266. Ra2+ Kb1 267. Rf2 Kc1 268. Kd4 Kd1 269. Bd3 Rg7 1/2-1/2`

const examplePgn16 = `[Event "Czech tht Chess Extraliga"]
[Site "?"]
[Date "2016.04.15"]
[Round "?"]
[White "Danin, Alexandre"]
[Black "Azarov, Sergei"]
[Result "1-0"]
[ECO "C45"]
[PlyCount "477"]
[EventDate "2016.??.??"]

1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 Qf6 6. Qd2 dxc6 7. Nc3 Bd4 8.
Bd3 Ne7 9. O-O Ng6 10. Ne2 Bb6 11. Nf4 Ne5 12. Be2 Ng4 13. Nd3 Be6 14. h3 Ne5
15. Nxe5 Qxe5 16. Qf4 Qc5 17. c3 O-O-O 18. Be3 Qd6 19. Rfd1 Qxf4 20. Bxf4 Rxd1+
21. Bxd1 Rd8 22. Bg4 Re8 23. Re1 a5 24. Kf1 Bc5 25. Be3 Bf8 26. f3 b5 27. Kf2 a4
28. Rd1 Bd6 29. Bd4 g6 30. Bxe6+ fxe6 31. e5 Be7 32. Be3 c5 33. f4 c4 34. a3 h5
35. g3 c5 36. Kf3 Rh8 37. Ke4 Kc7 38. Rg1 Kd7 39. Rg2 Rh7 40. Rd2+ Kc6 41. Rg2
Kd7 42. Bf2 Rh8 43. g4 hxg4 44. hxg4 Rh3 45. f5 gxf5+ 46. gxf5 exf5+ 47. Kxf5 b4
48. Bg3 Rh5+ 49. Ke4 Ke6 50. Bf4 Rh3 51. Rg6+ Kf7 52. Ra6 bxc3 53. bxc3 Rxc3 54.
Kf5 Rf3 55. e6+ Kg7 56. Ra7 Kf8 57. Ke4 Rd3 58. Be5 Bh4 59. Rh7 Bd8 60. Kf5 Rf3+
61. Kg6 Re3 62. e7+ Ke8 63. exd8=Q+ Kxd8 64. Kf6 c3 65. Ke6 Kc8 66. Rc7+ Kb8 67.
Rxc5+ Kb7 68. Kd5 c2 69. Bb2 Re2 70. Rc4 Rh2 71. Kc5 Rh6 72. Kd5 Rh5+ 73. Be5
Rh3 74. Bd6 Rd3+ 75. Ke6 Rd2 76. Bf4 Rf2 77. Bc1 Rg2 78. Ke5 Rh2 79. Rc3 Kb6 80.
Kd4 Kb5 81. Rc8 Rg2 82. Kc3 Rg6 83. Kb2 Rg2 84. Rb8+ Ka6 85. Rd8 Kb5 86. Rd4 Rh2
87. Bd2 Kc5 88. Rd8 Rh3 89. Bb4+ Kb5 90. Rd5+ Kb6 91. Rd2 Kb5 92. Kxc2 Rh5 93.
Rf2 Rg5 94. Bd2 Rc5+ 95. Kb2 Rd5 96. Rg2 Rc5 97. Rg4 Rc4 98. Rg8 Re4 99. Ra8 Rg4
100. Ra5+ Kb6 101. Bb4 Rg2+ 102. Kc3 Rg3+ 103. Kb2 Rg2+ 104. Kc1 Rg1+ 105. Kd2
Rg2+ 106. Ke1 Kc6 107. Rxa4 Kb5 108. Ra8 Ra2 109. Rc8 Rg2 110. Kd1 Ka4 111. Ra8+
Kb3 112. Be7 Rg7 113. Ra7 Rg2 114. Rb7+ Ka4 115. Rb4+ Ka5 116. Bd8+ Ka6 117. Bf6
Rf2 118. Bc3 Rg2 119. Bd2 Rh2 120. Kc2 Rg2 121. a4 Rh2 122. Rd4 Rg2 123. Kb3 Rg6
124. Bb4 Rh6 125. Kc4 Rg6 126. Re4 Rh6 127. Bc5 Kb7 128. Kb5 Rg6 129. Re7+ Kb8
130. Bb6 Rg8 131. Ba7+ Ka8 132. Bc5 Rg6 133. Rd7 Rh6 134. Rg7 Re6 135. a5 Re8
136. Ka6 Rd8 137. Rf7 Kb8 138. Ba7+ Ka8 139. Bb6 Rc8 140. Be3 Rc6+ 141. Kb5 Rc8
142. Ra7+ Kb8 143. Rg7 Ka8 144. Bc5 Rb8+ 145. Kc4 Rc8 146. Rd7 Re8 147. Bb6 Rc8+
148. Kd5 Rg8 149. Kd6 Rg6+ 150. Kc5 Rg5+ 151. Kc6 Rg6+ 152. Kb5 Rg8 153. Rd1 Re8
154. Rh1 Rg8 155. Rh2 Re8 156. Rh3 Rg8 157. Rh5 Re8 158. Rh2 Rg8 159. Bc5 Rb8+
160. Kc4 Rg8 161. Bd6 Rc8+ 162. Kd5 Rg8 163. Kc6 Rc8+ 164. Bc7 Rg8 165. a6 Ka7
166. Rh3 Rf8 167. Rh7 Ka8 168. Rh1 Ka7 169. Rb1 Rg8 170. Rf1 Re8 171. Bb6+ Ka8
172. Kb5 Rg8 173. Bc5 Rb8+ 174. Kc4 Rg8 175. Rf4 Rh8 176. Rg4 Re8 177. Rg3 Rh8
178. Rg2 Re8 179. Rg6 Rh8 180. Rf6 Re8 181. Rf5 Rg8 182. Rf4 Rh8 183. Rf3 Rg8
184. Rf2 Rh8 185. Rf1 Rg8 186. Re1 Rh8 187. Re2 Rg8 188. Re3 Rh8 189. Re4 Rg8
190. Re5 Rh8 191. Re6 Rg8 192. Re1 Rh8 193. Rd1 Rg8 194. Rd2 Rh8 195. Rd3 Rg8
196. Rd4 Rh8 197. Rd1 Rg8 198. a7 Rh8 199. Rg1 Re8 200. Kb5 Rh8 201. Rg2 Re8
202. Bd6 Rc8 203. Kb6 Rh8 204. Kc6 Rc8+ 205. Bc7 Rh8 206. Rf2 Rg8 207. Rh2 Rf8
208. Rh5 Rg8 209. Rh1 Rf8 210. Rb1 Rf2 211. Bd6 Rc2+ 212. Kd7 Kxa7 213. Bc7 Rg2
214. Kc8 Rg8+ 215. Bd8 Rg6 216. Rb5 Rh6 217. Bc7 Rc6 218. Ra5+ Ra6 219. Rc5 Rg6
220. Rc1 Ka6 221. Rb1 Rh6 222. Kd7 Rh3 223. Rb6+ Ka7 224. Rb1 Ka6 225. Kc8 Rh5
226. Rb8 Rc5 227. Rb2 Rh5 228. Rb8 Rf5 229. Rb6+ Ka7 230. Rc6 Rf8+ 231. Bd8 Rg8
232. Rc7+ Ka8 233. Rc1 Rg7 234. Bc7 Rg8+ 235. Kd7 Rg7+ 236. Kc6 Rg6+ 237. Bd6
Rg7 238. Rh1 Rh7 239. Re1 1-0`

const result = achievementLibrary(examplePgn16, 'White');
console.log("Result: \n");
console.log(result);