/* global Iterable */

import RegExpMatch from './RegExpMatch';
import MultiRegExpIterable from './MultiRegExpIterable';

/**
 * @
 */
export default class MultiRegExp {
    regExps: Array<RegExp>;

    constructor(iterable: Iterable<RegExp>) {
        this.regExps = [];
        if (iterable) {
            for (let regExp of iterable) {
                this.regExps.push(regExp);
            }
        }
    }

    firstMatch(string: string): RegExpMatch {
        return this.findMatch(string);
    }

    findMatch(string: string, start: number = 0): RegExpMatch {
        if (start >= string.length) {
            return null;
        }

        for (let regExp of this.regExps) {
            regExp.lastIndex = start;
        }

        const match = this.exec(string);

        if (match === null) {
            return null;
        }

        return new RegExpMatch(match);
    }

    allMatches(string: string, start: number = 0): MultiRegExpIterable {
        return new MultiRegExpIterable(this, string, start);
    }

    exec(string: string): RegExpMatch {
        let found, foundLastIndex;

        for (let regExp of this.regExps) {
            let match = regExp.exec(string);
            if (match !== null && (found === undefined || match.index < found.index)) {
                found = match;
                foundLastIndex = regExp.lastIndex;
            }
        }

        if (found === undefined) {
            return null;
        }

        for (let regExp of this.regExps) {
            regExp.lastIndex = foundLastIndex;
        }

        return found;
    }

    test(string: string): boolean {
        for (let regExp of this.regExps) {
            if (regExp.test(string)) {
                return true;
            }
        }

        return false;
    }
}
