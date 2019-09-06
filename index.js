#!/usr/bin/env node

'use strict';

const lib = require('./lib.js');

const {colors} = lib;

const needEmail = process.argv[2];
const userEmail = lib.getUserEmail();


if (!needEmail)
{
  colors.red('No email to check! Please provide email to check in package.json!');
  process.exit(1);
}
// console.log(`checking if email is ${needEmail}`);
if (!lib.checkUserEmail(needEmail, userEmail))
{
  if (!needEmail) {
    colors.red('You need to pass domain as argyment to husky-check-email!');
    process.exit(1);
  }
  colors.red(`You need to commit with ${needEmail} email`);
  colors.red(`Your email is set to "${userEmail}"`);
  colors.red('You can fix this with following command:');
  colors.red(`git config --global user.email <your_name>${needEmail}`);
  process.exit(1);
}
// console.log('email check okay');
