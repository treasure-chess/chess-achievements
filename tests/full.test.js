const achievementLibrary = require('../src/index.js');
const examplePgns = require('./examplePgns');

// NOTE: Some pgns do not have an opening common name

console.log('====================================');
console.log('Testing...');
let result;
examplePgns.map((pgn, index) => {
  try {
    result = achievementLibrary(pgn, 'Black');
    if (index === 1) {
      console.log('Example result:');
      console.log(result);
    }
    console.log(`Game #${index + 1} opening: ${result.opening}`);
  } catch (e) {
    console.log(`Issue while testing pgn #${index + 1}`);
    console.log(e);
  }
});
console.log(`Finished testing ${examplePgns.length} pgns`);
console.log('====================================');
