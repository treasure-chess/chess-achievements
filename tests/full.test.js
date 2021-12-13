const achievementLibrary = require('../src/index.js');
const examplePgns = require('./examplePgns');

console.log('====================================');
console.log('Testing...');
examplePgns.map((pgn, index) => {
  try {
    const result = achievementLibrary(pgn, 'Black');
    if (index === 3) {
      console.log('Example result:');
      console.log(result);
    }
    // TODO: score for many pgns is all the same "15"??
    // console.log(result.score);
    if (result.opening === '') throw new Error('No opening calculated');
  } catch (e) {
    console.log(`Issue while testing pgn #${index}`);
    console.log(e);
  }
});
console.log(`Finished testing ${examplePgns.length} pgns`);
console.log('====================================');
