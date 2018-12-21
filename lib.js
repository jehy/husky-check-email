'use strict';

const {execSync} = require('child_process');

/* istanbul ignore next */
const colors = {
  // eslint-disable-next-line no-console
  red: ((...args)=>console.log(`\x1b[41m${args.join('')}\x1b[0m`)),
};

/* istanbul ignore next */
function getUserEmail()
{
  return execSync('git config user.email').toString('utf8').trim();
}

function checkUserEmail(needEmail, userEmail)
{
  return userEmail && userEmail.toLowerCase().endsWith(needEmail.toLowerCase()) || false;
}

module.exports = {
  colors,
  getUserEmail,
  checkUserEmail,
};
