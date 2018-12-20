#!/usr/bin/env node

'use strict';

const {execSync} = require('child_process');

const needEmail = process.argv[2];

const colors = {
  // eslint-disable-next-line no-console
  red: ((...args)=>console.log(`\x1b[41m${args.join('')}\x1b[0m`)),
};

if (!needEmail)
{
  colors.red('No email to check! Please provide email to check in package.json!');
  process.exit(1);
}
// console.log(`checking if email is ${needEmail}`);
const userEmail = execSync('git config user.email').toString('utf8').trim();
if (!userEmail || !userEmail.includes(needEmail))
{
  colors.red(`You need to commit with ${needEmail} email`);
  colors.red(`Your email is set to "${userEmail}"`);
  colors.red('You can fix this with following command:');
  colors.red(`git config --global user.email <your_name>${needEmail}`);
  process.exit(1);
}
// console.log('email check okay');
