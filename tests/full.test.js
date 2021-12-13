const achievementLibrary = require('../src/index.js');
const examplePgns = require('./examplePgns');

console.log('====================================');
console.log('Testing...');
examplePgns.map((pgn, index) => {
  try {
    const result = achievementLibrary(pgn, 'Black');
    // console.log('Result: \n');
    // console.log(result);
  } catch (e) {
    console.log(`Error testing pgn #${index}`);
    console.log(e);
  }
});
console.log(`Finished testing ${examplePgns.length} pgns`);
console.log('====================================');
