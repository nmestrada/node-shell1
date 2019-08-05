process.stdout.write('prompt > ');

const pwd = require('./pwd.js')
const ls = require('./ls.js');
//const fs = require('fs');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    pwd(cmd);
    ls(cmd);
    process.stdout.write('\nYou type: ' + cmd);
    process.stdout.write('\nprompt > ');
})

