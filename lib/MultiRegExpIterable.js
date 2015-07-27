'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol$iterator = require('babel-runtime/core-js/symbol/iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _MultiRegExp = require('./MultiRegExp');

var _MultiRegExp2 = _interopRequireDefault(_MultiRegExp);

var _RegExpMatch = require('./RegExpMatch');

var _RegExpMatch2 = _interopRequireDefault(_RegExpMatch);

/** @class MultiRegExpIterable 
* @param {MultiRegExp} multiRegExp 
* @param {string} string 
* @param {number} [start=0] */
var MultiRegExpIterable = (function () {
    function MultiRegExpIterable(multiRegExp, string) {
        var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        _classCallCheck(this, MultiRegExpIterable);

        this._multiRegExp = multiRegExp;
        this._string = string;
        this._index = start;
    }

    _createClass(MultiRegExpIterable, [{
        key: 'next',
        /** @memberof MultiRegExpIterable 
        * @instance 
        * @method next 
        * @returns {RegExpMatch} */value: function next() {
            var match = this._multiRegExp.findMatch(this._string, this._index);

            if (match !== null) {
                this._index = match.start === match.end ? match.start + 1 : match.end;
            } else {
                this._index = 0;
            }

            this._current = match;
            return match;
        }

        /**
         * @method @@iterator
         * @returns {{next: Function}}
         
        * @memberof MultiRegExpIterable 
        * @instance */
    }, {
        key: _Symbol$iterator,
        value: function value() {
            var _this = this;

            this._index = 0;
            return {
                next: function next() {
                    var match = _this.next();
                    return {
                        value: match === null ? undefined : match,
                        done: match === null
                    };
                }
            };
        }
    }, {
        key: 'current',
        /** @memberof MultiRegExpIterable 
        * @instance 
        * @member {RegExpMatch} current */get: function get() {
            return this._current;
        }
    }]);

    return MultiRegExpIterable;
})();

exports['default'] = MultiRegExpIterable;
module.exports = exports['default'];
//# sourceMappingURL=MultiRegExpIterable.js.map