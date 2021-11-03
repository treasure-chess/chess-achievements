const { Chess } = require("chess.js");
const ecoCodes = require("./eco-codes.json");
const achievements = require("./achievementsList.json");

function achievementsCalculator(pgn, color) {
  return displayResult(pgn, color);
}

let achieved = [];
let eco = "";

function setResult(pgn, color) {
  let result = "";
  let resultIdx = pgn.indexOf("Result ") + 8;
  while (pgn.charAt(resultIdx) !== '"') {
    result += pgn.charAt(resultIdx);
    resultIdx++;
  }

  let ecoIdx = pgn.indexOf("[ECO ") + 6;
  while (pgn.charAt(ecoIdx) !== '"') {
    eco += pgn.charAt(ecoIdx);
    ecoIdx++;
  }

  const game = new Chess();
  game.load_pgn(pgn);
  const moves = game.history({ verbose: true });

  let numMoves = 0;
  if (moves[moves.length - 1].color === "w") {
    numMoves = moves.length / 2 + 0.5;
  } else {
    numMoves = moves.length / 2;
  }

  if (numMoves > 250) {
    // Complete a game with more than 250 moves
    achieved.push(achievements[18]);
  } else if (numMoves > 150) {
    // Complete a game with more than 150 moves
    achieved.push(achievements[17]);
  } else if (numMoves > 100) {
    // Complete a game with more than 100 moves
    achieved.push(achievements[16]);
  }

  if (
    color === "White" &&
    pgn.includes("won by checkmate") &&
    result === "1-0"
  ) {
    if (numMoves === 2) {
      // Checkmate in 2 moves achievement
      achieved.push(achievements[21]);
    } else if (numMoves < 5) {
      // Checkmate in less than 5 moves achievement
      achieved.push(achievements[20]);
    } else if (numMoves < 10) {
      // Checkmate in less than 10 moves achievement
      achieved.push(achievements[19]);
    }
  } else if (
    color === "Black" &&
    pgn.includes("won by checkmate") &&
    result === "0-1"
  ) {
    if (numMoves === 2) {
      // Checkmate in 2 moves achievement
      achieved.push(achievements[21]);
    } else if (numMoves < 5) {
      // Checkmate in less than 5 moves achievement
      achieved.push(achievements[20]);
    } else if (numMoves < 10) {
      // Checkmate in less than 10 moves achievement
      achieved.push(achievements[19]);
    }
  }

  // determine ratings
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
      achieved.push(achievements[30]);
    }
    if (blackElo <= 750) {
      // Win a game achievement
      achieved.push(achievements[0]);
    } else if (blackElo >= 751 && blackElo <= 1500) {
      // Win a game rated 750+ achievement
      achieved.push(achievements[2]);
    } else if (blackElo >= 1501 && blackElo <= 2000) {
      // Win a game rated 1500+ achievement
      achieved.push(achievements[4]);
    } else if (blackElo >= 2001 && blackElo <= 2200) {
      // Win a game rated 2000+ achievement
      achieved.push(achievements[7]);
    } else {
      // Win a game rated 2200+ achievement
      achieved.push(achievements[9]);
    }

    if (pgn.includes("won by checkmate")) {
      let mateIdx = pgn.indexOf("#");
      while (pgn.charAt(mateIdx) !== " ") {
        if (pgn.charAt(mateIdx) === "B") {
          // Mate with Bishop achievement
          achieved.push(achievements[13]);
        } else if (pgn.charAt(mateIdx) === "N") {
          // Mate with Knight achievement
          achieved.push(achievements[14]);
        }
        mateIdx--;
      }
      const endIdx = pgn.indexOf("#");
      let pawnMateIdx = pgn.indexOf("#");
      let spaceCount = 0;
      while (spaceCount < 2) {
        if (pgn.charAt(pawnMateIdx) === " ") {
          spaceCount++;
        }
        pawnMateIdx--;
      }
      exp = /[0-9]+\.\s[a-h]/;
      const pawnMateSubStr = pgn.substring(pawnMateIdx + 1, endIdx);
      if (exp.test(pawnMateSubStr)) {
        // Mate with pawn
        achieved.push(achievements[15]);
      }
    }
  } else if (result === "1/2-1/2") {
    if (pgn.includes("Game drawn by repetition")) {
      // Draw by repetition achievement
      achieved.push(achievements[29]);
    }
    if (color === "White") {
      if (blackElo > whiteElo) {
        // Draw against higher rated player achievement
        achieved.push(achievements[22]);
      }
      if (blackElo <= 750) {
        // Play a game achievement
        achieved.push(achievements[1]);
      } else if (blackElo >= 751 && blackElo <= 1500) {
        // Play a game rated 750+ achievement
        achieved.push(achievements[3]);
      } else if (blackElo >= 1501 && blackElo <= 2000) {
        // Play a game rated 1500+ achievement
        achieved.push(achievements[5]);
      } else if (blackElo >= 2001 && blackElo <= 2200) {
        // Play a game rated 2000+ achievement
        achieved.push(achievements[6]);
      } else {
        // Play a game rated 2200+ achievement
        achieved.push(achievements[8]);
      }
    } else {
      if (whiteElo > blackElo) {
        // Draw against higher rated player achievement
        achieved.push(achievements[22]);
      }
      if (whiteElo <= 750) {
        // Play a game achievement
        achieved.push(achievements[1]);
      } else if (whiteElo >= 751 && whiteElo <= 1500) {
        // Play a game rated 750+ achievement
        achieved.push(achievements[3]);
      } else if (whiteElo >= 1501 && whiteElo <= 2000) {
        // Play a game rated 1500+ achievement
        achieved.push(achievements[5]);
      } else if (whiteElo >= 2001 && whiteElo <= 2200) {
        // Play a game rated 2000+ achievement
        achieved.push(achievements[6]);
      } else {
        // Play a game rated 2200+ achievement
        achieved.push(achievements[8]);
      }
    }
  } else if (result === "0-1" && color === "Black") {
    if (whiteElo > blackElo) {
      // Defeat a higher rated player achievement
      achieved.push(achievements[30]);
    }
    if (whiteElo <= 750) {
      // Win a game achievement
      achieved.push(achievements[0]);
    } else if (whiteElo >= 751 && whiteElo <= 1500) {
      // Win a game rated 750+ achievement
      achieved.push(achievements[2]);
    } else if (whiteElo >= 1501 && whiteElo <= 2000) {
      // Win a game rated 1500+ achievement
      achieved.push(achievements[4]);
    } else if (whiteElo >= 2001 && whiteElo <= 2200) {
      // Win a game rated 2000+ achievement
      achieved.push(achievements[7]);
    } else {
      // Win a game rated 2200+ achievement
      achieved.push(achievements[9]);
    }

    if (pgn.includes("won by checkmate")) {
      let mateIdx = pgn.indexOf("#");
      while (pgn.charAt(mateIdx) !== " ") {
        if (pgn.charAt(mateIdx) === "B") {
          // Mate with Bishop achievement
          achieved.push(achievements[13]);
        } else if (pgn.charAt(mateIdx) === "N") {
          // Mate with Knight achievement
          achieved.push(achievements[14]);
        }
        mateIdx--;
      }
      const endIdx = pgn.indexOf("#");
      let pawnMateIdx = pgn.indexOf("#");
      let spaceCount = 0;
      while (spaceCount < 2) {
        if (pgn.charAt(pawnMateIdx) === " ") {
          spaceCount++;
        }
        pawnMateIdx--;
      }
      exp = /\.\.\.\s[a-h]/;
      const pawnMateSubStr = pgn.substring(pawnMateIdx + 1, endIdx);
      if (exp.test(pawnMateSubStr)) {
        // Mate with pawn
        achieved.push(achievements[15]);
      }
    }
  } else {
    if (color === "White") {
      if (blackElo <= 750) {
        // Play a game achievement
        achieved.push(achievements[1]);
      } else if (blackElo >= 751 && blackElo <= 1500) {
        // Play a game rated 750+ achievement
        achieved.push(achievements[3]);
      } else if (blackElo >= 1501 && blackElo <= 2000) {
        // Play a game rated 1500+ achievement
        achieved.push(achievements[5]);
      } else if (blackElo >= 2001 && blackElo <= 2200) {
        // Play a game rated 2000+ achievement
        achieved.push(achievements[6]);
      } else {
        // Play a game rated 2200+ achievement
        achieved.push(achievements[8]);
      }
    } else {
      if (whiteElo <= 750) {
        // Play a game achievement
        achieved.push(achievements[1]);
      } else if (whiteElo >= 751 && whiteElo <= 1500) {
        // Play a game rated 750+ achievement
        achieved.push(achievements[3]);
      } else if (whiteElo >= 1501 && whiteElo <= 2000) {
        // Play a game rated 1500+ achievement
        achieved.push(achievements[5]);
      } else if (whiteElo >= 2001 && whiteElo <= 2200) {
        // Play a game rated 2000+ achievement
        achieved.push(achievements[6]);
      } else {
        // Play a game rated 2200+ achievement
        achieved.push(achievements[8]);
      }
    }
  }
}

function gameMoves(pgn, color) {
  const game = new Chess();
  game.load_pgn(pgn);
  const moves = game.history({ verbose: true });

  let numMoves = 0;
  if (moves[moves.length - 1].color === "w") {
    numMoves = moves.length / 2 + 0.5;
  } else {
    numMoves = moves.length / 2;
  }

  let checkFlag = false;
  let enPassantFlag = false;
  let enPassantMateFlag = false;
  let kingMoves = 0;

  for (let i = 0; i < moves.length; i++) {
    if (color === "White") {
      if (moves[i].color === "w") {
        if (moves[i].san.includes("+")) {
          checkFlag = true;
        }
        if (moves[i].flags === "e") {
          enPassantFlag = true;
          if (moves[i].san.includes("#")) {
            enPassantMateFlag = true;
          }
        }
        if (moves[i].piece === "k") {
          kingMoves++;
        }
      }
    } else {
      if (moves[i].color === "b") {
        if (moves[i].san.includes("+")) {
          checkFlag = true;
        }
        if (moves[i].flags === "e") {
          enPassantFlag = true;
          if (moves[i].san.includes("#")) {
            enPassantMateFlag = true;
          }
        }
        if (moves[i].piece === "k") {
          kingMoves++;
        }
      }
    }
  }

  if (checkFlag) {
    // Put opponent in check achievement
    achieved.push(achievements[31]);
  }

  if (enPassantFlag) {
    // En passant achievement
    achieved.push(achievements[26]);
  }

  if (enPassantMateFlag) {
    // Checkmate with en passant achievement
    achieved.push(achievements[27]);
  }

  if (kingMoves > 20) {
    // Move king > 20 times achievement
    achieved.push(achievements[35]);
  }

  const gameAscii = game.ascii();
  let whitePawnCount = 0;
  let whiteBishopCount = 0;
  let whiteKnightCount = 0;
  let whiteQueenCount = 0;
  let blackPawnCount = 0;
  let blackBishopCount = 0;
  let blackKnightCount = 0;
  let blackQueenCount = 0;

  for (let i = 0; i < gameAscii.length - 28; i++) {
    if (gameAscii.charAt(i) === "P") {
      whitePawnCount++;
    } else if (gameAscii.charAt(i) === "B") {
      whiteBishopCount++;
    } else if (gameAscii.charAt(i) === "N") {
      whiteKnightCount++;
    } else if (gameAscii.charAt(i) === "Q") {
      whiteQueenCount++;
    } else if (gameAscii.charAt(i) === "p") {
      blackPawnCount++;
    } else if (gameAscii.charAt(i) === "b") {
      blackBishopCount++;
    } else if (gameAscii.charAt(i) === "n") {
      blackKnightCount++;
    } else if (gameAscii.charAt(i) === "q") {
      blackQueenCount++;
    }
  }

  if (color === "White") {
    if (blackPawnCount === 0 && whitePawnCount === 8) {
      // Capture all pawns without losing any achievement
      achieved.push(achievements[36]);
    } else if (blackPawnCount === 0) {
      // Capture all pawns achievement
      achieved.push(achievements[33]);
    } else if (blackPawnCount >= 5) {
      // Capture <4 pawns achievement
      achieved.push(achievements[32]);
    }
    if (
      whiteKnightCount >= 2 &&
      whiteBishopCount >= 2 &&
      blackKnightCount === 0 &&
      blackBishopCount === 0
    ) {
      // Capture all knights and bishops without losing any achievement
      achieved.push(achievements[34]);
    }
    if (
      pgn.includes("1/2-1/2") &&
      whiteQueenCount === 0 &&
      blackQueenCount > 0
    ) {
      // Draw when opponent has a queen without one
      achieved.push(achievements[28]);
    }
  } else {
    if (whitePawnCount === 0 && blackPawnCount === 8) {
      // Capture all pawns without losing any achievement
      achieved.push(achievements[36]);
    } else if (whitePawnCount === 0) {
      // Capture all pawns achievement
      achieved.push(achievements[33]);
    } else if (whitePawnCount >= 5) {
      // Capture <4 pawns achievement
      achieved.push(achievements[32]);
    }
    if (
      whiteKnightCount === 0 &&
      whiteBishopCount === 0 &&
      blackKnightCount === 2 &&
      blackBishopCount === 2
    ) {
      // Capture all knights and bishops without losing any achievement
      achieved.push(achievements[34]);
    }
    if (
      pgn.includes("1/2-1/2") &&
      whiteQueenCount > 0 &&
      blackQueenCount === 0
    ) {
      // Draw when opponent has a queen without one
      achieved.push(achievements[28]);
    }
  }
}

function specialMoves(pgn, color) {
  if (color === "White") {
    exp = /[0-9]+\.\sO-O-O/i;
    if (exp.test(pgn) === true) {
      // Queenside castle achievement
      achieved.push(achievements[23]);
    }
    if (pgn.includes("8=$146") || pgn.includes("8=N")) {
      // Underpromote to knight achievement
      achieved.push(achievements[24]);
    }
    if (pgn.includes("8=B")) {
      // Underpromote to bishop achievement
      achieved.push(achievements[25]);
    }
  } else {
    if (pgn.includes("... O-O-O")) {
      // Queenside casle achievement
      achieved.push(achievements[23]);
    }
    if (pgn.includes("1=$146") || pgn.includes("1=N")) {
      // Underpromote to knight achievement
      achieved.push(achievements[24]);
    }
    if (pgn.includes("1=B")) {
      // Underpromote to bishop achievement
      achieved.push(achievements[25]);
    }
  }
}

function displayResult(pgn, color) {
  setResult(pgn, color);
  gameMoves(pgn, color);
  specialMoves(pgn, color);

  var numA = achieved.length;
  var score = 0;
  for (var i = 0; i < numA; i++) {
    score += achieved[i].points;
  }

  let openingName = "";
  for (let i = 0; i < ecoCodes.length; i++) {
    if (ecoCodes[i]["ECO"] === eco) {
      openingName = ecoCodes[i]["Opening"];
    }
  }

  return { opening: openingName, score: score, achievements: achieved };
}

//===== =====//
//and then export functions here to be used as a library elsewhere.
module.exports = achievementsCalculator;
module.exports.achievements = achievements;
