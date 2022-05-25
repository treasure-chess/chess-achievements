const { Chess } = require('chess.js');
const ecoCodes = require('./ecoCodes');
const achievements = require('./achievementsList');

let achieved = [];
let eco = '';

const parsePgn = (pgn) => {
  let black
  let white
  let winner = 'white'
  let eventName
  let moves
  let timeControl
  let eco
  let termination
  pgn.split(/\n/).map((line) => {
    if (line.includes('[Black ')) black = line.split(`"`)[1]
    if (line.includes('[White ')) white = line.split(`"`)[1]
    if (line.includes('[Event ')) eventName = line.split(`"`)[1]
    let winnerRaw
    if (line.includes('[Result ')) winnerRaw = line.split(`"`)[1]
    if (winnerRaw === '0-1') winner = 'black'
    else if (winnerRaw === '1/2-1/2') winner = 'draw'
    if (line.match(/1./))
      moves = line
        .split(/[0-21/2]+-/)[0]
        .replace(/\{.+?\} /g, '') // remove clock time
        .trim()
    if (line.includes('[TimeControl ')) timeControl = line.split(`"`)[1]
    if (line.includes('[ECO ')) eco = line.split(`"`)[1]
    if (line.includes('[Termination ')) termination = line.split(`"`)[1]
  })

  return {
    black,
    white,
    winner,
    event: eventName,
    moves,
    // moveCount: countMoves(moves),
    timeControl,
    eco,
    termination,
  }
}

function setResult(pgn, color) {
  let result = '';
  let resultIdx = pgn.indexOf('Result ') + 8;
  while (pgn.charAt(resultIdx) !== '"') {
    result += pgn.charAt(resultIdx);
    resultIdx++;
  }

  let ecoIdx = pgn.indexOf('[ECO ') + 6;
  while (pgn.charAt(ecoIdx) !== '"') {
    eco += pgn.charAt(ecoIdx);
    ecoIdx++;
  }

  const game = new Chess();
  const options = { sloppy: true };
  game.load_pgn(pgn, options);

  const moves = game.history({ verbose: true });
  let numMoves = 0;

  // Determines game length based on color
  if (moves.length % 2 === 0) {
    numMoves = moves.length / 2;
  } else if (moves.length % 2 === 1) {
    if (color.toLowerCase() === 'white') {
      numMoves = moves.length / 2 + 0.5;
    } else if (color.toLowerCase() === 'black') {
      numMoves = moves.length / 2 - 0.5;
    }
  }

  if (numMoves > 250) {
    // Complete a game with more than 250 moves
    achieved.push(achievements[17]);
  } else if (numMoves > 150) {
    // Complete a game with more than 150 moves
    achieved.push(achievements[16]);
  } else if (numMoves > 100) {
    // Complete a game with more than 100 moves
    achieved.push(achievements[15]);
  }

  const lastMove = moves[moves.length - 1];

  if (lastMove.san.includes('#')) {
    const pawnFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    if (color.toLowerCase() === 'white' && lastMove.color === 'w') {
      // Checkmate in n moves achievements
      if (numMoves === 2) {
        // Checkmate in 2 moves achievement
        achieved.push(achievements[20]);
      } else if (numMoves < 5) {
        // Checkmate in less than 5 moves achievement
        achieved.push(achievements[19]);
      } else if (numMoves < 10) {
        // Checkmate in less than 10
        achieved.push(achievements[18]);
      }
      // Mate with certain piece achievements
      if (lastMove.san.includes('N')) {
        // Mate with knight achievement
        achieved.push(achievements[13]);
      } else if (lastMove.san.includes('B')) {
        // Mate with bishop achievement
        achieved.push(achievements[12]);
      } else if (pawnFiles.includes(lastMove.san.charAt(0))) {
        // Mate with pawn achievement
        achieved.push(achievements[14]);
      }
    } else if (color.toLowerCase() === 'black' && lastMove.color === 'b') {
      // Checkmate in n moves achievements
      if (numMoves === 2) {
        // Checkmate in 2 moves achievement
        achieved.push(achievements[20]);
      } else if (numMoves < 5) {
        // Checkmate in less than 5 moves achievement
        achieved.push(achievements[19]);
      } else if (numMoves < 10) {
        // Checkmate in less than 10
        achieved.push(achievements[18]);
      }
      // Mate with certain piece achievements
      if (lastMove.san.includes('N')) {
        // Mate with knight achievement
        achieved.push(achievements[13]);
      } else if (lastMove.san.includes('B')) {
        // Mate with bishop achievement
        achieved.push(achievements[12]);
      } else if (pawnFiles.includes(lastMove.san.charAt(0))) {
        // Mate with pawn achievement
        achieved.push(achievements[14]);
      }
    }
  }

  let whiteElo = 0;
  let blackElo = 0;

  // Determines ratings
  if (pgn.includes('WhiteElo') && pgn.includes('BlackElo')) {
    let strBlackElo = '';
    let eloIdx = pgn.indexOf('BlackElo ') + 10;

    while (pgn.charAt(eloIdx) !== '"') {
      strBlackElo += pgn.charAt(eloIdx);
      eloIdx++;
    }

    blackElo = parseInt(strBlackElo);

    let strWhiteElo = '';
    eloIdx = pgn.indexOf('WhiteElo ') + 10;

    while (pgn.charAt(eloIdx) !== '"') {
      strWhiteElo += pgn.charAt(eloIdx);
      eloIdx++;
    }

    whiteElo = parseInt(strWhiteElo);
  } else {
    whiteElo = null;
    blackElo = null;
  }

  if (result === '1-0' && color.toLowerCase() === 'white') {
    if (blackElo <= 749 || !blackElo) {
      // Win a game achievement, accounts for no rating provided
      achieved.push(achievements[36]);
    }
    if (whiteElo && blackElo) {
      if (blackElo > whiteElo) {
        // Defeat a higher rated player achievement
        achieved.push(achievements[29]);
      }
      if (blackElo >= 750 && blackElo <= 1499) {
        // Win a game rated 750+ achievement
        achieved.push(achievements[1]);
      } else if (blackElo >= 1500 && blackElo <= 1999) {
        // Win a game rated 1500+ achievement
        achieved.push(achievements[3]);
      } else if (blackElo >= 2000 && blackElo <= 2249) {
        // Win a game rated 2000+ achievement
        achieved.push(achievements[6]);
      } else if (blackElo >= 2250) {
        // Win a game rated 2250+ achievement
        achieved.push(achievements[8]);
      }
    }
  } else if (result === '1/2-1/2') {
    if (pgn.includes('Game drawn by repetition')) {
      // Draw by repetition achievement
      achieved.push(achievements[28]);
    }
    if (color.toLowerCase() === 'white') {
      if (blackElo <= 749 || !blackElo) {
        // Play a game achievement, accounts for no rating provided
        achieved.push(achievements[0]);
      }
      if (whiteElo && blackElo) {
        if (blackElo > whiteElo) {
          // Draw against higher rated player achievement
          achieved.push(achievements[21]);
        }
        if (blackElo >= 750 && blackElo <= 1499) {
          // Play a game rated 750+ achievement
          achieved.push(achievements[2]);
        } else if (blackElo >= 1500 && blackElo <= 1999) {
          // Play a game rated 1500+ achievement
          achieved.push(achievements[4]);
        } else if (blackElo >= 2000 && blackElo <= 2249) {
          // Play a game rated 2000+ achievement
          achieved.push(achievements[5]);
        } else if (blackElo >= 2250) {
          // Play a game rated 2250+ achievement
          achieved.push(achievements[7]);
        }
      }
    } else {
      if (whiteElo <= 749 || !whiteElo) {
        // Play a game achievement, accounts for no rating provided
        achieved.push(achievements[0]);
      }
      if (whiteElo && blackElo) {
        if (whiteElo > blackElo) {
          // Draw against higher rated player achievement
          achieved.push(achievements[21]);
        }
        if (whiteElo >= 750 && whiteElo <= 1499) {
          // Play a game rated 750+ achievement
          achieved.push(achievements[2]);
        } else if (whiteElo >= 1500 && whiteElo <= 1999) {
          // Play a game rated 1500+ achievement
          achieved.push(achievements[4]);
        } else if (whiteElo >= 2000 && whiteElo <= 2249) {
          // Play a game rated 2000+ achievement
          achieved.push(achievements[5]);
        } else if (whiteElo >= 2250) {
          // Play a game rated 2250+ achievement
          achieved.push(achievements[7]);
        }
      }
    }
  } else if (result === '0-1' && color.toLowerCase() === 'black') {
    if (whiteElo <= 749 || !whiteElo) {
      // Win a game achievement, accounts for no rating provided
      achieved.push(achievements[36]);
    }
    if (whiteElo && blackElo) {
      if (whiteElo > blackElo) {
        // Defeat a higher rated player achievement
        achieved.push(achievements[29]);
      }
      if (whiteElo >= 750 && whiteElo <= 1499) {
        // Win a game rated 750+ achievement
        achieved.push(achievements[1]);
      } else if (whiteElo >= 1500 && whiteElo <= 1999) {
        // Win a game rated 1500+ achievement
        achieved.push(achievements[3]);
      } else if (whiteElo >= 2000 && whiteElo <= 2249) {
        // Win a game rated 2000+ achievement
        achieved.push(achievements[6]);
      } else if (whiteElo >= 2250) {
        // Win a game rated 2250+ achievement
        achieved.push(achievements[8]);
      }
    }
  } else {
    if (color.toLowerCase() === 'white') {
      if (blackElo <= 749 || !blackElo) {
        // Play a game achievement, accounts for no rating provided
        achieved.push(achievements[0]);
      }
      if (whiteElo && blackElo) {
        if (blackElo >= 750 && blackElo <= 1499) {
          // Play a game rated 750+ achievement
          achieved.push(achievements[2]);
        } else if (blackElo >= 1500 && blackElo <= 1999) {
          // Play a game rated 1500+ achievement
          achieved.push(achievements[4]);
        } else if (blackElo >= 2000 && blackElo <= 2249) {
          // Play a game rated 2000+ achievement
          achieved.push(achievements[5]);
        } else if (blackElo >= 2250) {
          // Play a game rated 2250+ achievement
          achieved.push(achievements[7]);
        }
      }
    } else {
      if (whiteElo <= 749 || !whiteElo) {
        // Play a game achievement, accounts for no ratig provided
        achieved.push(achievements[0]);
      }
      if (whiteElo && blackElo) {
        if (whiteElo >= 750 && whiteElo <= 1499) {
          // Play a game rated 750+ achievement
          achieved.push(achievements[2]);
        } else if (whiteElo >= 1500 && whiteElo <= 1999) {
          // Play a game rated 1500+ achievement
          achieved.push(achievements[4]);
        } else if (whiteElo >= 2001 && whiteElo <= 2249) {
          // Play a game rated 2000+ achievement
          achieved.push(achievements[5]);
        } else if (whiteElo >= 2250) {
          // Play a game rated 2250+ achievement
          achieved.push(achievements[7]);
        }
      }
    }
  }
}

function gameMoves(pgn, color) {
  const game = new Chess();
  // const options = { sloppy: true };
  game.load_pgn(pgn);
  const moves = game.history({ verbose: true });

  let checkFlag = false;
  let enPassantFlag = false;
  let enPassantMateFlag = false;
  let queensideCastleFlag = false;
  let knightPromotionFlag = false;
  let bishopPromotionFlag = false;
  let kingMoves = 0;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    if (color.toLowerCase() === 'white') {
      // Calculates for white moves
      if (move.color === 'w') {
        if (move.flags === 'q') {
          // Queenside castle achievement
          queensideCastleFlag = true;
        }
        if (move.san.includes('+')) {
          // Check achievement
          checkFlag = true;
        }
        if (move.flags === 'e') {
          // En passant achievement
          enPassantFlag = true;
          if (move.san.includes('#')) {
            // En passant mate achievement
            enPassantMateFlag = true;
          }
        }
        if (move.san.includes('=')) {
          // Checks for underpromotions
          if (move.san.includes('N')) {
            // Underpromote to knight achievement
            knightPromotionFlag = true;
          } else if (move.san.includes('B')) {
            // Underpromote to bishop achievement
            bishopPromotionFlag = true;
          }
        }
        if (
          // Checks for king moves or any castling
          move.san.includes('K') ||
          move.san.includes('O-O') ||
          move.san.includes('O-O-O')
        ) {
          kingMoves++;
        }
      }
    } else if (color.toLowerCase() === 'black') {
      // Calculates for black moves
      if (move.color === 'b') {
        if (move.flags === 'q') {
          // Queenside castle achievement
          queensideCastleFlag = true;
        }
        if (move.san.includes('+')) {
          // Check achievement
          checkFlag = true;
        }
        if (move.flags === 'e') {
          // En passant achievement
          enPassantFlag = true;
          if (move.san.includes('#')) {
            // En passant mate achievement
            enPassantMateFlag = true;
          }
        }
        if (move.san.includes('=')) {
          // Checks for underpromotions
          if (move.san.includes('N')) {
            // Underpromote to knight achievement
            knightPromotionFlag = true;
          } else if (move.san.includes('B')) {
            // Underpromote to bishop achievement
            bishopPromotionFlag = true;
          }
        }
        if (
          // Checks for king moves or any castling
          move.san.includes('K') ||
          move.san.includes('O-O') ||
          move.san.includes('O-O-O')
        ) {
          kingMoves++;
        }
      }
    }
  }

  if (checkFlag) {
    // Put opponent in check achievement
    achieved.push(achievements[30]);
  }

  if (enPassantFlag) {
    // En passant achievement
    achieved.push(achievements[25]);
  }

  if (enPassantMateFlag) {
    // Checkmate with en passant achievement
    achieved.push(achievements[26]);
  }

  if (queensideCastleFlag) {
    // Queenside castle achievement
    achieved.push(achievements[22]);
  }

  if (knightPromotionFlag) {
    // Knight underpromotion achievement
    achieved.push(achievements[23]);
  }

  if (bishopPromotionFlag) {
    // Bishop underpromotion achievement
    achieved.push(achievements[24]);
  }

  if (kingMoves > 20) {
    // Move king >20 times achievement
    achieved.push(achievements[34]);
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
    if (gameAscii.charAt(i) === 'P') {
      whitePawnCount++;
    } else if (gameAscii.charAt(i) === 'B') {
      whiteBishopCount++;
    } else if (gameAscii.charAt(i) === 'N') {
      whiteKnightCount++;
    } else if (gameAscii.charAt(i) === 'Q') {
      whiteQueenCount++;
    } else if (gameAscii.charAt(i) === 'p') {
      blackPawnCount++;
    } else if (gameAscii.charAt(i) === 'b') {
      blackBishopCount++;
    } else if (gameAscii.charAt(i) === 'n') {
      blackKnightCount++;
    } else if (gameAscii.charAt(i) === 'q') {
      blackQueenCount++;
    }
  }

  if (color.toLowerCase() === 'white') {
    if (blackPawnCount === 0 && whitePawnCount === 8) {
      // Capture all pawns without losing any achievement
      achieved.push(achievements[35]);
    } else if (blackPawnCount === 0) {
      // Capture all pawns achievement
      achieved.push(achievements[32]);
    } else if (blackPawnCount >= 5) {
      // Capture <4 pawns achievement
      achieved.push(achievements[31]);
    }
    if (
      whiteKnightCount >= 2 &&
      whiteBishopCount >= 2 &&
      blackKnightCount === 0 &&
      blackBishopCount === 0
    ) {
      // Capture all knights and bishops without losing any achievement
      achieved.push(achievements[33]);
    }
    if (
      pgn.includes('1/2-1/2') &&
      whiteQueenCount === 0 &&
      blackQueenCount > 0
    ) {
      // Draw when opponent has a queen without one
      achieved.push(achievements[27]);
    }
  } else if (color.toLowerCase() === 'black') {
    if (whitePawnCount === 0 && blackPawnCount === 8) {
      // Capture all pawns without losing any achievement
      achieved.push(achievements[35]);
    } else if (whitePawnCount === 0) {
      // Capture all pawns achievement
      achieved.push(achievements[32]);
    } else if (whitePawnCount >= 5) {
      // Capture <4 pawns achievement
      achieved.push(achievements[31]);
    }
    if (
      whiteKnightCount === 0 &&
      whiteBishopCount === 0 &&
      blackKnightCount === 2 &&
      blackBishopCount === 2
    ) {
      // Capture all knights and bishops without losing any achievement
      achieved.push(achievements[33]);
    }
    if (
      pgn.includes('1/2-1/2') &&
      whiteQueenCount > 0 &&
      blackQueenCount === 0
    ) {
      // Draw when opponent has a queen without one
      achieved.push(achievements[27]);
    }
  }
  let parsedpgn = parsePgn(pgn)

  // Determine opening
  if (parsedpgn.eco == 'A00') {
    // Play a new opening achievement (from either player works)
    achieved.push(achievements[37]);
  }

  if (parsedpgn.termination?.includes('won on time')) {
    // Win on time achievement
    achieved.push(achievements[38]);
  }
}

  

// function specialMoves(pgn, color) {
//   if (color.toLowerCase() === 'white') {
//     const exp = /[0-9]+\.\sO-O-O/i;
//     if (exp.test(pgn) === true) {
//       // Queenside castle achievement
//       achieved.push(achievements[22]);
//     }
//     if (pgn.includes('8=$146') || pgn.includes('8=N')) {
//       // Underpromote to knight achievement
//       achieved.push(achievements[23]);
//     }
//     if (pgn.includes('8=B')) {
//       // Underpromote to bishop achievement
//       achieved.push(achievements[24]);
//     }
//   } else {
//     if (pgn.includes('... O-O-O')) {
//       // Queenside casle achievement
//       achieved.push(achievements[22]);
//     }
//     if (pgn.includes('1=$146') || pgn.includes('1=N')) {
//       // Underpromote to knight achievement
//       achieved.push(achievements[23]);
//     }
//     if (pgn.includes('1=B')) {
//       // Underpromote to bishop achievement
//       achieved.push(achievements[24]);
//     }
//   }
// }



function achievementsCalculator(pgn, rawColor) {
  if (!pgn) throw new Error('No pgn provided');
  if (!rawColor) throw new Error('No color provided');

  const color = rawColor.toUpperCase(); // Allow passing lowercase

  // Note: required to reset these variables
  eco = '';
  achieved = [];

  setResult(pgn, color);
  gameMoves(pgn, color);
  // specialMoves(pgn, color);

  achieved = achieved.sort((a, b) => b.points - a.points);
  const finalAchievements = achieved.slice(0, 3);
  var score = 0;
  finalAchievements.map(chiev => {
    score += chiev.points;
  });

  let opening = '';
  let openingName = '';
  let openingValue = '';
  ecoCodes.map(codeObject => {
    if (codeObject.eco == eco) {
      opening = codeObject.opening;
      openingName = codeObject.name;
      openingValue = codeObject.value;
    }
  });

  // console.log(finalAchievements);
  console.log(achieved);

  return {
    opening,
    openingValue,
    openingName,
    score,
    achievements: finalAchievements,
    allAchievements: achieved
  };
}

//===== =====//
//and then export functions here to be used as a library elsewhere.
module.exports = achievementsCalculator;
module.exports.achievements = achievements;
module.exports.ecoCodes = ecoCodes;
