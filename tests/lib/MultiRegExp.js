/* global suite, test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var _libMultiRegExp = require('../../lib/MultiRegExp');

var _libMultiRegExp2 = _interopRequireDefault(_libMultiRegExp);

suite('Single RegExp', function () {
    var regExp = /(hi)/g;
    var multiRegExp = new _libMultiRegExp2['default']([regExp]);

    test('firstMatch', function () {
        for (var i = 0; i < 2; i++) {
            var firstMatch = multiRegExp.firstMatch('hihi');

            _proclaim2['default'].strictEqual(firstMatch.groupCount, 1);
            _proclaim2['default'].strictEqual(firstMatch.start, 0);
            _proclaim2['default'].strictEqual(firstMatch.input, 'hihi');
            _proclaim2['default'].strictEqual(firstMatch.match, 'hi');
            _proclaim2['default'].strictEqual(firstMatch.end, 2);
            _proclaim2['default'].strictEqual(firstMatch.length, 1);
            _proclaim2['default'].strictEqual(firstMatch.group(0), 'hi');
            _proclaim2['default'].strictEqual(firstMatch[0], 'hi');
            _proclaim2['default'].strictEqual(firstMatch.group(1), 'hi');
            _proclaim2['default'].strictEqual(firstMatch[1], 'hi');
        }
    });

    test('allMatches', function () {
        var iterator = multiRegExp.allMatches('hihi');
        var firstMatch = iterator.next();

        _proclaim2['default'].strictEqual(firstMatch.start, 0);
        _proclaim2['default'].strictEqual(firstMatch.match, 'hi');
        _proclaim2['default'].strictEqual(firstMatch.end, 2);
        _proclaim2['default'].strictEqual(firstMatch.group(1), 'hi');
        _proclaim2['default'].strictEqual(iterator._index, 2);

        var secondMatch = iterator.next();

        _proclaim2['default'].strictEqual(secondMatch.start, 2);
        _proclaim2['default'].strictEqual(secondMatch.match, 'hi');
        _proclaim2['default'].strictEqual(secondMatch.end, 4);
        _proclaim2['default'].strictEqual(secondMatch.group(1), 'hi');
        _proclaim2['default'].strictEqual(iterator._index, 4);

        _proclaim2['default'].isNull(iterator.next());
        _proclaim2['default'].strictEqual(iterator._index, 0);
    });
});

suite('Two RegExp', function () {
    var regExp1 = /(hi)/g;
    var regExp2 = /(he)llo/g;
    var multiRegExp = new _libMultiRegExp2['default']([regExp1, regExp2]);

    test('firstMatch', function () {
        for (var i = 0; i < 2; i++) {
            var firstMatch = multiRegExp.firstMatch('hihi');

            _proclaim2['default'].strictEqual(firstMatch.groupCount, 1);
            _proclaim2['default'].strictEqual(firstMatch.start, 0);
            _proclaim2['default'].strictEqual(firstMatch.input, 'hihi');
            _proclaim2['default'].strictEqual(firstMatch.match, 'hi');
            _proclaim2['default'].strictEqual(firstMatch.end, 2);
            _proclaim2['default'].strictEqual(firstMatch.length, 1);
            _proclaim2['default'].strictEqual(firstMatch.group(0), 'hi');
            _proclaim2['default'].strictEqual(firstMatch.group(1), 'hi');
        }
    });

    test('allMatches', function () {
        var iterator = multiRegExp.allMatches('hello hi');
        var firstMatch = iterator.next();

        _proclaim2['default'].strictEqual(firstMatch.groupCount, 1);
        _proclaim2['default'].strictEqual(firstMatch.start, 0);
        _proclaim2['default'].strictEqual(firstMatch.input, 'hello hi');
        _proclaim2['default'].strictEqual(firstMatch.match, 'hello');
        _proclaim2['default'].strictEqual(firstMatch.end, 5);
        _proclaim2['default'].strictEqual(firstMatch.group(1), 'he');

        var secondMatch = iterator.next();

        _proclaim2['default'].strictEqual(secondMatch.start, 6);
        _proclaim2['default'].strictEqual(secondMatch.match, 'hi');
        _proclaim2['default'].strictEqual(secondMatch.end, 8);
        _proclaim2['default'].strictEqual(secondMatch.group(1), 'hi');
        _proclaim2['default'].strictEqual(iterator._index, 8);

        _proclaim2['default'].isNull(iterator.next());
    });
});
//# sourceMappingURL=MultiRegExp.js.map