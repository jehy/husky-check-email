# husky-check-email

[![npm](https://img.shields.io/npm/v/husky-check-email.svg)](https://npm.im/husky-check-email)
[![license](https://img.shields.io/npm/l/husky-check-email.svg)](https://npm.im/husky-check-email)
[![Build Status](https://travis-ci.org/jehy/checkExact.svg?branch=master)](https://travis-ci.org/jehy/checkExact)
[![dependencies Status](https://david-dm.org/jehy/checkExact/status.svg)](https://david-dm.org/jehy/checkExact)
[![devDependencies Status](https://david-dm.org/jehy/checkExact/dev-status.svg)](https://david-dm.org/jehy/checkExact?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/jehy/checkExact/badge.svg)](https://snyk.io/test/github/jehy/checkExact)

Add this module to only allow git commits with emails from certain domain.

#### Install

```bash
npm i husky-check-email
```

#### Usage (package.json)

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "husky-check-email @mydomain.com"
    }
  }
}
```
