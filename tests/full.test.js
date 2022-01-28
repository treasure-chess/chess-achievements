const achievementLibrary = require('../src/index.js');
const examplePgns = require('./examplePgns');

// NOTE: Some pgns do not have an opening common name

console.log('====================================');
console.log('Testing...');
let result;
examplePgns.map((pgn, index) => {
  try {
    result = achievementLibrary(pgn[2], pgn[1]);
    let expectedAchievements = pgn[3];
    let calculatedAchievements = [];
    let errorFlag = false;
    let missingAchievements = [];

    result['allAchievements'].forEach(achievement => {
      calculatedAchievements.push(achievement['name']);
    });

    console.log(`Game #${index + 1} Opening: ${result.opening}`);
    console.log(`Game #${index + 1} Score: ${result.score}`);

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
      console.log(`ERROR: ISSUE DETECTED WHILE TESTING Pgn #${index + 1}`);
      console.log(missingAchievements);
    }
  } catch (e) {
    console.log(`Issue while testing pgn #${index + 1}`);
    console.log(e);
  }
});
console.log(`Finished testing ${examplePgns.length} pgns`);
console.log('====================================');
