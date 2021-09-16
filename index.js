function achievementsCalculator(pgn, color) {


    return displayResult(pgn, color);
}

//write other functions here

const achievements = [
    {
      name: 'Win a game',
      points: 1,
    },
    {
      name: 'Finish a game',
      points: 1,
    },
    {
      name: 'Win a game rated 750+',
      points: 2,
    },
    {
      name: 'Play a game rated 750+',
      points: 1,
    },
    {
      name: 'Win a game rated 1500+',
      points: 2,
    },
    {
      name: 'Play a game rated 1500+',
      points: 1,
    },
    {
      name: 'Play a game rated 2000+',
      points: 2,
    },
    {
      name: 'Win a game rated 2000+',
      points: 2,
    },
    {
      name: 'Play a game rated 2250+',
      points: 3,
    },
    {
      name: 'Win a game rated 2250+',
      points: 4,
    },
    {
      name: 'Defeat an IM',
      points: 4,
    },
    {
      name: 'Defeat a NM',
      points: 4,
    },
    {
      name: 'Defeat a GM',
      points: 5,
    },
    {
      name: 'Mate with a bishop',
      points: 2,
    },
    {
      name: 'Mate with a knight',
      points: 3,
    },
    {
      name: 'Mate with a pawn',
      points: 5,
    },
    {
      name: 'Complete a game with more than 100 moves',
      points: 1,
    },
    {
      name: 'Complete a game with more than 150 moves',
      points: 2,
    },
    {
      name: 'Complete a game with more than 250 moves',
      points: 3,
    },
    {
      name: 'Win with checkmate in less than 10 moves',
      points: 2,
    },
    {
      name: 'Win with checkmate in <5 moves',
      points: 3,
    },
    {
      name: 'Win with checkmate in 2 moves',
      points: 5,
    },
    {
      name: 'Draw with a higher rated player',
      points: 2,
    },
    {
      name: 'Queen side castle',
      points: 1,
    },
    {
      name: 'Under-promote to a knight',
      points: 1,
    },
    {
      name: 'Under-promote to a bishop',
      points: 1,
    },
    {
      name: 'En Passent',
      points: 2,
    },
    {
      name: 'Checkmate with an En Passent',
      points: 5,
    },
    {
      name: 'Draw when opponent has a queen, without one',
      points: 2,
    },
    {
      name: 'Draw by repetition',
      points: 1,
    },
    {
      name: 'Defeat a higher ranked player',
      points: 1,
    },
    {
      name: 'Put opponent in check',
      points: 1,
    },
    {
      name: 'Capture <4 pawns',
      points: 1,
    },
    {
      name: 'Capture all pawns',
      points: 2,
    },
    {
      name: 'Capture all knights and bishops without losing any.',
      points: 4,
    },
    {
      name: 'Move king <20 times',
      points: 1,
    },
    {
      name: 'Capture all pawns without losing any',
      points: 4,
    }
]

let score = 0;
let achieved = [];

function setResult(pgn, color) {
    let result =  '';
    for (let i = pgn.length - 1; i > 0; i--) {
        if (pgn.charAt(i) === ' ') {
            result = pgn.substring(i+1, pgn.length);
        }
    }
    let numMoves = 0;
    // determine number of moves in the game
    // numMoves = ...

    // determine opponent's rating
    let whiteElo = 0;
    let blackElo = 0;
    if (color === 'White') {
        let startIdx = pgn.indexOf("BlackElo ");
    } else {
        let startIdx = pgn.indexOf("WhiteElo ");
    }



    if (result === '1-0' && color === 'White') {
        if (blackElo <= 750) {
            // Win a game achievement
            achieved.push(achievements[0])
        } else if (blackElo >= 751 && blackElo <= 1500) {
            // Win a game rated 750+ achievement
            achieved.push(achievements[2])
        } else if (blackElo >= 1501 && blackElo <= 2000) {
            // Win a game rated 1500+ achievement
            achieved.push(achievements[4])
        } else if (blackElo >= 2001 && blackElo <= 2200) {
            // Win a game rated 2000+ achievement
            achieved.push(achievements[7])
        } else {
            // Win a game rated 2200+ achievement
            achieved.push(achievements[9])
        }
        // determine if win a game against higher rated opponent achievement
        // determine if defeat titled opponent achievements
        if (pgn.includes("won by checkmate")) {
            let mateIdx = pgn.indexOf("#");
            while (pgn.charAt(mateIdx) !== " ") {
                if (pgn.charAt(mateIdx) === "B") {
                    // Mate with Bishop achievement
                    achieved.push(achievements[13])
                } else if (pgn.charAt(mateIdx) === "N") {
                    // Mate with Knight achievement
                    achieved.push(achievements[14])
                }
                // check for pawn mate
                mateIdx--;
            }
            // check for en passant mate
            // check for checkmate in (<10, <5, 2)
        }
    } else if (result === '1/2-1/2') {
        if (pgn.includes("Game drawn by repetition")) {
            // Draw by repetition achievement
            achieved.push(achievements[29])
        }
        // determine if draw against higher rated player achievement
        // determine if draw when opponent has a queen, without one achievement
    } else if (result === '0-1' && color === 'Black') {
        if (whiteElo <= 750) {
            // Win a game achievement
            achieved.push(achievements[0])
        } else if (whiteElo >= 751 && whiteElo <= 1500) {
            // Win a game rated 750+ achievement
            achieved.push(achievements[2])
        } else if (whiteElo >= 1501 && whiteElo <= 2000) {
            // Win a game rated 1500+ achievement
            achieved.push(achievements[4])
        } else if (whiteElo >= 2001 && whiteElo <= 2200) {
            // Win a game rated 2000+ achievement
            achieved.push(achievements[7])
        } else {
            // Win a game rated 2200+ achievement
            achieved.push(achievements[9])
        }
        // determine if win a game against higher rated opponent achievement
        // determine if defeat titled opponent achievements
        if (pgn.includes("won by checkmate")) {
            let mateIdx = pgn.indexOf("#");
            while (pgn.charAt(mateIdx) !== " ") {
                if (pgn.charAt(mateIdx) === "B") {
                    // Mate with Bishop achievement
                    achieved.push(achievements[13])
                } else if (pgn.charAt(mateIdx) === "N") {
                    // Mate with Knight achievement
                    achieved.push(achievements[14])
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
                achieved.push(achievements[1])
            } else if (blackElo >= 751 && blackElo <= 1500) {
                // Play a game rated 750+ achievement
                achieved.push(achievements[3])
            } else if (blackElo >= 1501 && blackElo <= 2000) {
                // Play a game rated 1500+ achievement
                achieved.push(achievements[5])
            } else if (blackElo >= 2001 && blackElo <= 2200) {
                // Play a game rated 2000+ achievement
                achieved.push(achievements[6])
            } else {
                // Play a game rated 2200+ achievement
                achieved.push(achievements[8])
            }
        }
        else {
            if (whiteElo <= 750) {
                // Play a game achievement
                achieved.push(achievements[1])
            } else if (whiteElo >= 751 && whiteElo <= 1500) {
                // Play a game rated 750+ achievement
                achieved.push(achievements[3])
            } else if (whiteElo >= 1501 && whiteElo <= 2000) {
                // Play a game rated 1500+ achievement
                achieved.push(achievements[5])
            } else if (whiteElo >= 2001 && whiteElo <= 2200) {
                // Play a game rated 2000+ achievement
                achieved.push(achievements[6])
            } else {
                // Play a game rated 2200+ achievement
                achieved.push(achievements[8])
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
            achieved.push(achievements[23])
        }
        if (pgn.includes("8=N")) {
            // Underpromote to knight achievement
            achieved.push(achievements[24])
        } else if (pgn.includes("8=B")) {
            // Underpromote to bishop achievement
            achieved.push(achievements[25])
        }
    } else {
        if (pgn.includes("... O-O-O")) {
            // Queenside casle achievement
            achieved.push(achievements[23])
        }
        if (pgn.includes("1=N")) {
            // Underpromote to knight achievement
            achieved.push(achievements[24])
        } else if (pgn.includes("1=B")) {
            // Underpromote to bishop achievement
            achieved.push(achievements[25])
        }
    }
}

function displayResult(pgn, color) {
    setResult(pgn, color);
    gameMoves(pgn, color);
    specialMoves(pgn, color);


    var numA = (achieved.length < 3) ? achieved.length : 3;
    var score = 0;
    for (var i = 0; i < numA; i++) {
       score += achieved[i].points;
    }

    //console.log("score = " + score)
    //console.log({"score":score, "achievements": achieved});
    return {"score":score, "achievements": achieved};
}

//===== =====//
//and then export functions here to be used as a library elsewhere.
module.exports = achievementsCalculator
