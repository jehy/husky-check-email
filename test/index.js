'use strict';

const {assert} = require('chai');
const lib = require('../lib.js');

describe('checkUserEmail', ()=>{
  it('should find email when it exist', ()=>{
    const needEmail = '@hell.com';
    const userEmail = 'devil@hell.com';
    const res = lib.checkUserEmail(needEmail, userEmail);
    assert.equal(res, true);
  });
  it('should fail when neccesary doamin not passed', ()=>{
    const needEmail = '';
    const userEmail = 'devil@hell.com';
    const res = lib.checkUserEmail(needEmail, userEmail);
    assert.equal(res, false);
  });

  it('should not email when it does not exist', ()=>{
    const needEmail = '@hell.com';
    const badEmail = ['devil@mail.ru', '', null, undefined, 'hell.com@mail.ru'];
    badEmail.forEach((userEmail)=>{
      const res = lib.checkUserEmail(needEmail, userEmail);
      assert.equal(res, false);
    });
  });

  it('should find email when it several', () => {
    const needEmail = '@hell.com,@heaven.co.uk';
    ['devil@hell.com', 'angel@heaven.co.uk'].forEach((userEmail) => {
      const res = lib.checkUserEmail(needEmail, userEmail);
      assert.equal(res, true);
    });
  });
});
