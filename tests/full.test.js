const achievementLibrary = require('../src/index.js');
const examplePgns = require('./examplePgns');

// NOTE: Some pgns do not have an opening common name

console.log('====================================');
console.log('Testing...');
let result;
let gamesToCheck = [];
let successfulGames = [];
examplePgns.forEach(game => {
  let gameNo = game.gameNo;
  // console.log(game);
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

    if (expectedAchievements.length !== calculatedAchievements.length) {
      console.log('ERROR: incorrect number of achievements');
      errorFlag = true;
    }

    expectedAchievements.forEach(achievement => {
      if (!calculatedAchievements.includes(achievement)) {
        console.log('MISSING ACHIEVEMENT: ' + achievement);
        missingAchievements.push(achievement);
        errorFlag = true;
      }
    });

    if (errorFlag) {
      console.log(`ERROR: ISSUE DETECTED WHILE TESTING Pgn #${gameNo}`);
      console.log('Missing Achievements:');
      console.log(missingAchievements);
    } else {
      successfulGames.push(gameNo);
    }
  } catch (e) {
    gamesToCheck.push(gameNo);
    console.log(`Issue while testing pgn #${gameNo}`);
    console.log(e);
  }
});
console.log(`Finished testing ${examplePgns.length} pgns`);
console.log('Successful Games:');
console.log(successfulGames);
console.log('Games to Check:');
console.log(gamesToCheck);
console.log('====================================');
