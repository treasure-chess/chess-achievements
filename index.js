function achievements() {
  const examplePgn1 =
    "1.e4 {[%clk 0:02:59]} e5 {[%clk 0:02:59]} 2.Nf3 {[%clk 0:02:58]} Nc6 {[%clk 0:02:59]} 3.Bb5 {[%clk 0:02:58]} Nf6 {[%clk 0:02:59]} 4.d3 {[%clk 0:02:57]} Bc5 {[%clk 0:02:57]} 5.c3 {[%clk 0:02:57]} O-O {[%clk 0:02:56]} 6.O-O {[%clk 0:02:56]} Re8 {[%clk 0:02:56]} 7.h3 {[%clk 0:02:54]} a6 {[%clk 0:02:55]} 8.Ba4 {[%clk 0:02:53]} d5 {[%clk 0:02:54]} 9.Nbd2 {[%clk 0:02:51]} h6 {[%clk 0:02:53]} 10.Re1 {[%clk 0:02:50]} b5 {[%clk 0:02:51]} 11.Bb3 {[%clk 0:02:48]} d4 {[%clk 0:02:51]} 12.Nf1 {[%clk 0:02:43]} Be6 {[%clk 0:02:49]} 13.Ng3 {[%clk 0:02:38]} Bxb3 {[%clk 0:02:43]} 14.axb3 {[%clk 0:02:38]} Qd7 {[%clk 0:02:40]} 15.b4 {[%clk 0:02:24]} Bf8 {[%clk 0:02:37]} 16.Qe2 {[%clk 0:02:22]} dxc3 {[%clk 0:02:22]} 17.bxc3 {[%clk 0:02:20]} a5 {[%clk 0:02:20]} 18.bxa5 {[%clk 0:02:16]} Nxa5 {[%clk 0:02:20]} 19.Be3 {[%clk 0:02:11]} c5 {[%clk 0:02:17]} 20.Red1 {[%clk 0:02:06]} Qc6 {[%clk 0:02:08]} 21.Qc2 {[%clk 0:01:45]} b4 {[%clk 0:02:02]} 22.Nxe5 {[%clk 0:01:30]} b3 {[%clk 0:01:53]} 23.Qxb3 {[%clk 0:01:03]} Nxb3 {[%clk 0:01:49]}  0-1";

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
    {[%timestamp 1]} 1/2-1/2`;

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

  // console.log(examplePgn1);
  // console.log(examplePgn2);
  // console.log(examplePgn3);
  // console.log(examplePgn4);

  displayScore(examplePgn2, "White");
}

//write other functions here

const achievements = [
  {
    name: "Win a game",
    points: 1,
  },
  {
    name: "Finish a game",
    points: 1,
  },
  {
    name: "Win a game rated 750+",
    points: 2,
  },
  {
    name: "Play a game rated 750+",
    points: 1,
  },
  {
    name: "Win a game rated 1500+",
    points: 2,
  },
  {
    name: "Play a game rated 1500+",
    points: 1,
  },
  {
    name: "Play a game rated 2000+",
    points: 2,
  },
  {
    name: "Win a game rated 2000+",
    points: 2,
  },
  {
    name: "Play a game rated 2250+",
    points: 3,
  },
  {
    name: "Win a game rated 2250+",
    points: 4,
  },
  {
    name: "Defeat an IM",
    points: 4,
  },
  {
    name: "Defeat a NM",
    points: 4,
  },
  {
    name: "Defeat a GM",
    points: 5,
  },
  {
    name: "Mate with a bishop",
    points: 2,
  },
  {
    name: "Mate with a knight",
    points: 3,
  },
  {
    name: "Mate with a pawn",
    points: 5,
  },
  {
    name: "Complete a game with more than 100 moves",
    points: 1,
  },
  {
    name: "Complete a game with more than 150 moves",
    points: 2,
  },
  {
    name: "Complete a game with more than 250 moves",
    points: 3,
  },
  {
    name: "Win with checkmate in less than 10 moves",
    points: 2,
  },
  {
    name: "Win with checkmate in <5 moves",
    points: 3,
  },
  {
    name: "Win with checkmate in 2 moves",
    points: 5,
  },
  {
    name: "Draw with a higher rated player",
    points: 2,
  },
  {
    name: "Queen side castle",
    points: 1,
  },
  {
    name: "Under-promote to a knight",
    points: 1,
  },
  {
    name: "Under-promote to a bishop",
    points: 1,
  },
  {
    name: "En Passent",
    points: 2,
  },
  {
    name: "Checkmate with an En Passent",
    points: 5,
  },
  {
    name: "Draw when opponent has a queen, without one",
    points: 2,
  },
  {
    name: "Draw by repetition",
    points: 1,
  },
  {
    name: "Defeat a higher ranked player",
    points: 1,
  },
  {
    name: "Put opponent in check",
    points: 1,
  },
  {
    name: "Capture <4 pawns",
    points: 1,
  },
  {
    name: "Capture all pawns",
    points: 2,
  },
  {
    name: "Capture all knights and bishops without losing any.",
    points: 4,
  },
  {
    name: "Move king <20 times",
    points: 1,
  },
  {
    name: "Capture all pawns without losing any",
    points: 4,
  },
];

let score = 0;
let achievementsHit = [];

function setResult(pgn, color) {
  let result = "";
  for (let i = pgn.length - 1; i > 0; i--) {
    if (pgn.charAt(i) === " ") {
      result = pgn.substring(i + 1, pgn.length);
      break;
    }
  }
  let numMoves = 0;
  for (let i = pgn.length - 1; i > 0; i--) {
    if (pgn.charAt(i) === '.' && pgn.charAt(i-1) === '.') {
      continue;
    } else if (pgn.charAt(i) === '.' ){

    }
  }


  // determine opponent's rating
  let whiteElo = 0;
  let blackElo = 0;

  let strBlackElo = "";
  let eloIdx = pgn.indexOf("BlackElo ") + 10;

  while (pgn.charAt(eloIdx) !== '"') {
    strBlackElo += pgn.charAt(eloIdx);
    eloIdx++;
  }

  blackElo = parseInt(strBlackElo);

  let strWhiteElo = "";
  eloIdx = pgn.indexOf("WhiteElo ") + 10;

  while (pgn.charAt(eloIdx) !== '"') {
    strWhiteElo += pgn.charAt(eloIdx);
    eloIdx++;
  }

  whiteElo = parseInt(strWhiteElo);

  if (result === "1-0" && color === "White") {
    if (blackElo > whiteElo) {
      // Defeat a higher rated player achievement
      achievementsHit.push(achievements[30].name);
      score += achievements[30].points;
    }
    if (blackElo <= 750) {
      // Win a game achievement
      achievementsHit.push(achievements[0].name);
      score += achievements[0].points;
    } else if (blackElo >= 751 && blackElo <= 1500) {
      // Win a game rated 750+ achievement
      achievementsHit.push(achievements[2].name);
      score += achievements[2].points;
    } else if (blackElo >= 1501 && blackElo <= 2000) {
      // Win a game rated 1500+ achievement
      achievementsHit.push(achievements[4].name);
      score += achievements[4].points;
    } else if (blackElo >= 2001 && blackElo <= 2200) {
      // Win a game rated 2000+ achievement
      achievementsHit.push(achievements[7].name);
      score += achievements[7].points;
    } else {
      // Win a game rated 2200+ achievement
      achievementsHit.push(achievements[9].name);
      score += achievements[9].points;
    }
    // determine if defeat titled opponent achievements
    if (pgn.includes("won by checkmate")) {
      let mateIdx = pgn.indexOf("#");
      while (pgn.charAt(mateIdx) !== " ") {
        if (pgn.charAt(mateIdx) === "B") {
          // Mate with Bishop achievement
          achievementsHit.push(achievements[13].name);
          score += achievements[13].points;
        } else if (pgn.charAt(mateIdx) === "N") {
          // Mate with Knight achievement
          achievementsHit.push(achievements[14].name);
          score += achievements[14].points;
        }
        // check for pawn mate
        mateIdx--;
      }
      // check for en passant mate
      // check for checkmate in (<10, <5, 2)
    }
  } else if (result === "1/2-1/2") {
    if ((color === 'White' && blackElo > whiteElo) || (color === 'Black' && whiteElo > blackElo)) {
      // Draw against higher rated player achievement
      achievementsHit.push(achievements[22].name);
      score += achievements[22].points;
    }
    if (pgn.includes("Game drawn by repetition")) {
      // Draw by repetition achievement
      achievementsHit.push(achievements[29].name);
      score += achievements[29].points;
    }
    // determine if draw when opponent has a queen, without one achievement
  } else if (result === "0-1" && color === "Black") {
    if (whiteElo > blackElo) {
      // Defeat a higher rated player achievement
      achievementsHit.push(achievements[30].name);
      score += achievements[30].points;
    }
    if (whiteElo <= 750) {
      // Win a game achievement
      achievementsHit.push(achievements[0].name);
      score += achievements[0].points;
    } else if (whiteElo >= 751 && whiteElo <= 1500) {
      // Win a game rated 750+ achievement
      achievementsHit.push(achievements[2].name);
      score += achievements[2].points;
    } else if (whiteElo >= 1501 && whiteElo <= 2000) {
      // Win a game rated 1500+ achievement
      achievementsHit.push(achievements[4].name);
      score += achievements[4].points;
    } else if (whiteElo >= 2001 && whiteElo <= 2200) {
      // Win a game rated 2000+ achievement
      achievementsHit.push(achievements[7].name);
      score += achievements[7].points;
    } else {
      // Win a game rated 2200+ achievement
      achievementsHit.push(achievements[9].name);
      score += achievements[9].points;
    }
    // determine if defeat titled opponent achievements
    if (pgn.includes("won by checkmate")) {
      let mateIdx = pgn.indexOf("#");
      while (pgn.charAt(mateIdx) !== " ") {
        if (pgn.charAt(mateIdx) === "B") {
          // Mate with Bishop achievement
          achievementsHit.push(achievements[13].name);
          score += achievements[13].points;
        } else if (pgn.charAt(mateIdx) === "N") {
          // Mate with Knight achievement
          achievementsHit.push(achievements[14].name);
          score += achievements[14].points;
        }
        // check for pawn mate
        mateIdx--;
      }
      // check for en passant mate
      // check for checkmate in (<10, <5, 2)
    }
  } else {
    if (color === "White") {
      if (blackElo <= 750) {
        // Play a game achievement
        achievementsHit.push(achievements[1].name);
        score += achievements[1].points;
      } else if (blackElo >= 751 && blackElo <= 1500) {
        // Play a game rated 750+ achievement
        achievementsHit.push(achievements[3].name);
        score += achievements[3].points;
      } else if (blackElo >= 1501 && blackElo <= 2000) {
        // Play a game rated 1500+ achievement
        achievementsHit.push(achievements[5].name);
        score += achievements[5].points;
      } else if (blackElo >= 2001 && blackElo <= 2200) {
        // Play a game rated 2000+ achievement
        achievementsHit.push(achievements[6].name);
        score += achievements[6].points;
      } else {
        // Play a game rated 2200+ achievement
        achievementsHit.push(achievements[8].name);
        score += achievements[8].points;
      }
    } else {
      if (whiteElo <= 750) {
        // Play a game achievement
        achievementsHit.push(achievements[1].name);
        score += achievements[1].points;
      } else if (whiteElo >= 751 && whiteElo <= 1500) {
        // Play a game rated 750+ achievement
        achievementsHit.push(achievements[3].name);
        score += achievements[3].points;
      } else if (whiteElo >= 1501 && whiteElo <= 2000) {
        // Play a game rated 1500+ achievement
        achievementsHit.push(achievements[5].name);
        score += achievements[5].points;
      } else if (whiteElo >= 2001 && whiteElo <= 2200) {
        // Play a game rated 2000+ achievement
        achievementsHit.push(achievements[6].name);
        score += achievements[6].points;
      } else {
        // Play a game rated 2200+ achievement
        achievementsHit.push(achievements[8].name);
        score += achievements[8].points;
      }
    }
  }
}

function gameMoves(pgn, color) {
  // determine check achievement
  if (color === "White") {
  } else {
  }
  // capture <4 pawns
  // capture all pawns
  // capture all knights and bishops without losing any
  // move king <20 times
  // capture all pawns without losing any
}

function specialMoves(pgn, color) {
  if (color === "White") {
    const exp = /[0-9]+\.\sO-O-O/i;
    if (exp.test(pgn) === true) {
      // Queenside castle achievement
      achievementsHit.push(achievements[23].name);
      score += achievements[23].points;
    }
    if (pgn.includes("8=N")) {
      // Underpromote to knight achievement
      achievementsHit.push(achievements[24].name);
      score += achievements[24].points;
    }
    if (pgn.includes("8=B")) {
      // Underpromote to bishop achievement
      achievementsHit.push(achievements[25].name);
      score += achievements[25].points;
    }
  } else {
    if (pgn.includes("... O-O-O")) {
      // Queenside casle achievement
      achievementsHit.push(achievements[23].name);
      score += achievements[23].points;
    }
    if (pgn.includes("1=N")) {
      // Underpromote to knight achievement
      achievementsHit.push(achievements[24].name);
      score += achievements[24].points;
    }
    if (pgn.includes("1=B")) {
      // Underpromote to bishop achievement
      achievementsHit.push(achievements[25].name);
      score += achievements[25].points;
    }
  }
}

function displayScore(pgn, color) {
  setResult(pgn, color);
  gameMoves(pgn, color);
  specialMoves(pgn, color);

  console.log(achievementsHit);
  return score;
}

//===== =====//
//and then export functions here to be used as a library elsewhere.
module.exports.achievements = achievements;
