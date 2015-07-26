/* global Iterable */

'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _RegExpMatch = require('./RegExpMatch');

var _RegExpMatch2 = _interopRequireDefault(_RegExpMatch);

var _MultiRegExpIterable = require('./MultiRegExpIterable');

/**
 * @
 */

var _MultiRegExpIterable2 = _interopRequireDefault(_MultiRegExpIterable);

var MultiRegExp = (function () {
    function MultiRegExp(iterable /*: Iterable<RegExp>*/) {
        _classCallCheck(this, MultiRegExp);

        this.regExps = [];
        if (iterable) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _getIterator(iterable), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var regExp = _step.value;

                    this.regExps.push(regExp);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }

    _createClass(MultiRegExp, [{
        key: 'firstMatch',
        value: function firstMatch(string /*: string*/) /*: RegExpMatch*/ {
            return this.findMatch(string);
        }
    }, {
        key: 'findMatch',
        value: function findMatch(string /*: string*/) /*: RegExpMatch*/ {
            var start /*: number*/ = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            if (start >= string.length) {
                return null;
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _getIterator(this.regExps), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var regExp = _step2.value;

                    regExp.lastIndex = start;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var match = this.exec(string);

            if (match === null) {
                return null;
            }

            return new _RegExpMatch2['default'](match);
        }
    }, {
        key: 'allMatches',
        value: function allMatches(string /*: string*/) /*: MultiRegExpIterable*/ {
            var start /*: number*/ = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            return new _MultiRegExpIterable2['default'](this, string, start);
        }
    }, {
        key: 'exec',
        value: function exec(string /*: string*/) /*: RegExpMatch*/ {
            var found = undefined,
                foundLastIndex = undefined;

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _getIterator(this.regExps), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var regExp = _step3.value;

                    var match = regExp.exec(string);
                    if (match !== null && (found === undefined || match.index < found.index)) {
                        found = match;
                        foundLastIndex = regExp.lastIndex;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (found === undefined) {
                return null;
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _getIterator(this.regExps), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var regExp = _step4.value;

                    regExp.lastIndex = foundLastIndex;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                        _iterator4['return']();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return found;
        }
    }, {
        key: 'test',
        value: function test(string /*: string*/) /*: boolean*/ {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = _getIterator(this.regExps), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var regExp = _step5.value;

                    if (regExp.test(string)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                        _iterator5['return']();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return false;
        }
    }]);

    return MultiRegExp;
})();

exports['default'] = MultiRegExp;
module.exports = exports['default'];
//# sourceMappingURL=MultiRegExp.js.map