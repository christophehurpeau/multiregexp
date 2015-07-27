'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Symbol$iterator = require('babel-runtime/core-js/symbol/iterator')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class RegExpMatch 
* @param result */
var RegExpMatch = (function () {
    function RegExpMatch(result) {
        _classCallCheck(this, RegExpMatch);

        Object.defineProperty(this, 'groupCount', { value: result.length - 1 });
        Object.defineProperty(this, 'start', { value: result.index });
        Object.defineProperty(this, 'input', { value: result.input });

        for (var i = 0; i <= result.length; i++) {
            _Object$defineProperty(this, String(i), { value: result[i] });
        }
    }

    /**
     * The match of the pattern.
     
    * @memberof RegExpMatch 
    * @instance 
    * @member {string} match */

    _createClass(RegExpMatch, [{
        key: 'group',

        /**
         * Returns the string matched by the given group.
         *
         * If group is 0, returns the match of the pattern.
         
        * @memberof RegExpMatch 
        * @instance 
        * @method group 
        * @param {number} group 
        * @returns {string} */
        value: function group(_group) {
            return this[_group];
        }
    }, {
        key: _Symbol$iterator,
        /** @memberof RegExpMatch 
        * @instance */value: function value() {
            var i = 0;
            return {
                next: /** @function */function next() {
                    return { value: this[i], done: ++i > this.length };
                }
            };
        }
    }, {
        key: 'toString',
        /** @memberof RegExpMatch 
        * @instance 
        * @method toString */value: function toString() {
            var str = 'match= "' + this.match + '", start= ' + this.start + ', groupCount= ' + this.groupCount;

            if (this.groupCount) {
                for (var i = 1; i < this.groupCount; i++) {
                    str += ', group' + i + '= "' + this[i] + '"';
                }
            }

            return str;
        }
    }, {
        key: 'match',
        get: function get() {
            return this[0];
        }
    }, {
        key: 'index',
        /** @memberof RegExpMatch 
        * @instance 
        * @member {number} index */get: function get() {
            return this.start;
        }
    }, {
        key: 'length',
        /** @memberof RegExpMatch 
        * @instance 
        * @member {number} length */get: function get() {
            return this.groupCount;
        }

        /**
         * The index in the string after the last character of the match.
         
        * @memberof RegExpMatch 
        * @instance 
        * @member {number} end */
    }, {
        key: 'end',
        get: function get() {
            return this.start + this.match.length;
        }
    }]);

    return RegExpMatch;
})();

exports['default'] = RegExpMatch;
module.exports = exports['default'];

/**
 * Returns the number of captured groups in the match.
 */

/**
 * The string on which this match was computed.
 */

/**
 * The index in the string where the match starts.
 */
//# sourceMappingURL=RegExpMatch.js.map