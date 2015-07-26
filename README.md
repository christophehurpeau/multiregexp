multiregexp [![NPM version][npm-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Code Climate][code-climate-image]][code-climate-url] [![Coverage][coverage-image]][coverage-url]
============================

Use multiple RegExp like you had only one ! Iterate on matches or find the first match.

## Quick example

```js
import MultiRegExp from 'multiregexp'; // or var MultiRegExp = require('multiregexp');
const multiRegExp = new MultiRegExp([
    /hi/gi,
    /hello/gi,
]);

let firstMatch = multiRegExp.firstMatch('Hi ! Hello !');
console.log(firstMatch.toString());
// match= "Hi", start= 0, groupCount= 0

let firstMatch = multiRegExp.firstMatch('Oh hello ! Hi !');
console.log(firstMatch.toString());
// match= "hello", start= 3, groupCount= 0

for (let match of multiRegExp.allMatches('Oh hello ! Hi !')) {
    console.log(match.toString());
    // match= "hello", start= 3, groupCount= 0
    // match= "Hi", start= 11, groupCount= 0
}
```

[build-status-image]: https://circleci.com/gh/christophehurpeau/multiregexp.svg?style=svg
[build-status-url]: https://circleci.com/gh/christophehurpeau/multiregexp
[npm-image]: https://img.shields.io/npm/v/multiregexp.svg?style=flat
[npm-url]: https://npmjs.org/package/multiregexp
[coverage-image]: https://codeclimate.com/github/christophehurpeau/multiregexp/badges/coverage.svg
[coverage-url]: http://christophehurpeau.github.io/multiregexp/coverage/lcov-report/
[code-climate-image]: https://codeclimate.com/github/christophehurpeau/multiregexp/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/christophehurpeau/multiregexp
