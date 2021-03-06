#!/usr/bin/env node
//
// Azure Marketplace Webhook Testing CLI
//

const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const inquirer = require('./src/inquirer')
const simulator = require('./src/simulator')

clear(); // clear the screen

console.log(chalk.blue(figlet.textSync('AMP Webhook CLI'))); // print the AMP banner

const run = async () => {
    let confirm = 'no';
    do {
        const info = await inquirer.askWebhookURL();
        console.log(info);
        confirm = info.confirm;
        if(confirm === 'exit') {    
            process.exit(0);
        }
        if(confirm === 'yes') {
            simulator.PostMessage(info);
        }
    } while (confirm === 'no');
}

run();