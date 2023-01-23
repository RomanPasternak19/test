import * as fs from 'fs';

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  const items = data.toString().split('\r\n');

  const newItems = items.map((item) => {
    item = item.split(' ');
    return {
      symbol: item[0],
      range: item[1].match(/[0-9]/g),
      password: item[2]
    }
  });
  
  console.log(countNumberValidPasswords(newItems));
});

function countNumberValidPasswords(data) {
  return data.reduce((total , item) => {
    const repetitionCount = item.password.split(item.symbol).length - 1;
    if (repetitionCount >= Number(item.range[0]) && repetitionCount <= Number(item.range[1])) {
      total++;
    }
    return total;
  }, 0);
}