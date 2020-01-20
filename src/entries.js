const os = require('os');
const fs = require('fs');

module.exports = getEntries = (file) => {
    const entriesString = fs.readFileSync(file, 'utf-8');

    return entriesString.split(os.EOL)
        .filter(entry => entry)
        .map((item, index) => ({ index, value: item }));
}
