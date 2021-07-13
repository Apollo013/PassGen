const chalk = require('chalk');
const fs = require('fs');
const os = require('os');
const path = require('path');

const savePassword = (generatedPassword) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
        fs.write(id, generatedPassword + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to passwords.txt'));
            });
        })
    })
};

module.exports = savePassword;