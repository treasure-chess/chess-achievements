const codes = require('../src/ecoCodes');
const fs = require('fs');

const filterable = [
  // Enums which can be filtered by
  'KingsPawnGame',
  'QueensGambit',
  'RuyLopez',
  'FrenchDefense',
  'CaroKann',
  'RetiOpening',
  'English',
  'Modern',
  'BirdsOpening',
  'Scandinavian',
  'ScotchGame'
];

const main = () => {
  let names = [];
  let enums = [];
  let finalCodes = [];
  for (var i = 0; i < codes.length; i++) {
    const name = codes[i].name;
    const parsedEnum = name.replace(/\s|-|'/g, '');
    if (!names.includes(name)) {
      if (filterable.includes(parsedEnum)) {
        // Put filterable enums at the beginnning of the list
        names.unshift(name);
        enums.unshift(parsedEnum);
      } else {
        names = [...names, name];
        enums = [...enums, parsedEnum];
      }
    }
    finalCodes.push({
      ...codes[i],
      value: codes[i].name.replace(/\s|-|'/g, '')
    });
  }

  fs.writeFile(
    'ecoCodes.js',
    `const codes = ${JSON.stringify(finalCodes)}
  module.exports = codes`,
    err => {
      if (err) throw err;
    }
  );
  console.log('names: ', names);
  console.log('##############');
  console.log('enums: ');
  enums.map(num => console.log(num));
  console.log('##############');
  console.log('Total openings: ', finalCodes.length);
  console.log('Unique names: ', names.length);
  console.log('Filterable names: ', filterable.length);
};
main();
