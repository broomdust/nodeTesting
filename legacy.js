const fs = require('fs');

var filenum = fs.readdirSync('./legacy', (err, files) => {}).length+1;

fs.renameSync('./app.js', `./legacy/${filenum}-app.js`)
fs.writeFileSync('./app.js', '');

console.log('Old app moved to legacy and new app file created.')