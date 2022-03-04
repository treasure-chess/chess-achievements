const achievementLibrary = require('../src/index.js');
const examplePgns = require('./examplePgns');

// NOTE: Some pgns do not have an opening common name

console.log('====================================');
console.log('Testing...');
let result;
let gamesToCheck = [];
let errorGames = [];
let successfulGames = [];
let achievementsToCheck = {};

function checkAchievementCount(expected, calculated) {
  if (expected.length !== calculated.length) {
    throw 'ERROR: incorrect number of achievements';
  }
}

function achievementChecker(gameNo, expected, calculated) {
  expected.forEach(achievement => {
    if (!calculated.includes(achievement)) {
      gamesToCheck.push(gameNo);
      throw `MISSING ACHIEVEMENT: ${achievement}`;
    }
  });
}

function errorFlagger(flag, gameNo, missing, calculated) {
  if (flag) {
    throw `Error detected while testing Game #${gameNo}`;
  } else {
    successfulGames.push(gameNo);
  }
}

// Tests all games in examplePgns.js
examplePgns.forEach(game => {
  let gameNo = game.gameNo;
  let pgn = game.pgn;
  let color = game.testColor;
  try {
    result = achievementLibrary(pgn, color);
    console.log(`Game #${gameNo} Opening: ${result.opening}`);
    console.log(`Game #${gameNo} Score: ${result.score}`);

    let expectedAchievements = game.expectedAchievements;
    let calculatedAchievements = [];
    let errorFlag = false;
    let missingAchievements = [];

    result['allAchievements'].forEach(achievement => {
      calculatedAchievements.push(achievement['name']);
    });

    // if (expectedAchievements.length !== calculatedAchievements.length) {
    //   gamesToCheck.push(gameNo);
    //   console.log('ERROR: incorrect number of achievements');
    //   errorFlag = true;
    // }

    // Throw error when achievement length doesn't match
    try {
      checkAchievementCount(
        expectedAchievements,
        calculatedAchievements,
        errorFlag
      );
    } catch (e) {
      errorFlag = true;
      gamesToCheck.push(gameNo);
      console.log(e);
    }

    // expectedAchievements.forEach(achievement => {
    //   if (!calculatedAchievements.includes(achievement)) {
    //     gamesToCheck.push(gameNo);
    //     console.log('MISSING ACHIEVEMENT: ' + achievement);
    //     if (achievementsToCheck.hasOwnProperty(achievement)) {
    //       achievementsToCheck[achievement] += 1;
    //     } else {
    //       achievementsToCheck[achievement] = 1;
    //     }
    //     missingAchievements.push(achievement);
    //     errorFlag = true;
    //   }
    // });

    // Throws error if a specific achievement is missing
    try {
      achievementChecker(
        gameNo,
        expectedAchievements,
        calculatedAchievements,
        errorFlag
      );
    } catch (e) {
      errorFlag = true;
      gamesToCheck.push(gameNo);
      console.log(e);
    }

    // Throws error if error flag is true
    try {
      errorFlagger(
        errorFlag,
        gameNo,
        missingAchievements,
        calculatedAchievements
      );
    } catch (e) {
      errorFlag = true;
      console.log(e);
    }

    // if (errorFlag) {
    //   console.log(`ERROR: ISSUE DETECTED WHILE TESTING Pgn #${gameNo}`);
    //   console.log('Missing Achievements:');
    //   console.log(missingAchievements);
    //   console.log('Calculated Achievements:');
    //   console.log(calculatedAchievements);
    // } else {
    //   successfulGames.push(gameNo);
    // }
  } catch (e) {
    gamesToCheck.push(gameNo);
    console.log(`Issue while testing pgn #${gameNo}`);
    console.log(e);
  }
});

gamesToCheck.forEach(game => {
  if (!errorGames.includes(game)) {
    errorGames.push(game);
  }
});

console.log(`Finished testing ${examplePgns.length} pgns`);

if (successfulGames.length === examplePgns.length) {
  console.log('');
  console.log('WOOT! All games passed the checks!!! :D');
  console.log('');
} else {
  console.log('Successful Games:');
  console.log(successfulGames);
  console.log('GAMES TO CHECK:');
  console.log(errorGames);
  console.log('Achievement Error Log:');
  console.log(achievementsToCheck);
  throw 'Test failed';
}
console.log('====================================');
