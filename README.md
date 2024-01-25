# husky-check-email

[![npm](https://img.shields.io/npm/v/husky-check-email.svg)](https://npm.im/husky-check-email)
[![license](https://img.shields.io/npm/l/husky-check-email.svg)](https://npm.im/husky-check-email)
![Build](https://github.com/jehy/husky-check-email/workflows/Build/badge.svg)
[![dependencies Status](https://david-dm.org/jehy/husky-check-email/status.svg)](https://david-dm.org/jehy/husky-check-email)
[![devDependencies Status](https://david-dm.org/jehy/husky-check-email/dev-status.svg)](https://david-dm.org/jehy/husky-check-email?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/jehy/husky-check-email/badge.svg?branch=master)](https://coveralls.io/github/jehy/husky-check-email?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/jehy/husky-check-email/badge.svg)](https://snyk.io/test/github/jehy/husky-check-email)

Add this module to only allow git commits with emails from certain domain.

#### Install

```bash
npm i husky-check-email
```

#### Usage (package.json)

If you want to validate email against one domain:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "husky-check-email @mydomain.com"
    }
  }
}
```

If you want to validate email against several domains:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "husky-check-email @mydomain.com,@mail.ru"
    }
  }
}
```

You can also validate using a regex:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "husky-check-email @mydomain.[a-z]+"
    }
  }
}
```

#### See also
 * [husky-check-name](https://www.npmjs.com/package/husky-check-name)
 * [husky-add-issue-tracker](https://www.npmjs.com/package/husky-add-issue-tracker)
