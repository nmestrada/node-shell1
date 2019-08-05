const fs = require('fs');
module.exports = function(string) {
    let arr = string.split(' ');
    if(arr[0] === 'cat'){
        fs.readFile(arr[1], (err, data) => {
            if (err) throw err;
            process.stdout.write(data);
        });
    }
};

