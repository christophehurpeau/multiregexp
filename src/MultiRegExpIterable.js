import MultiRegExp from './MultiRegExp';
import RegExpMatch from './RegExpMatch';

export default class MultiRegExpIterable {
    _multiRegExp: MultiRegExp;
    _index: number;
    _current: RegExpMatch;

    constructor(multiRegExp: MultiRegExp, string: string, start: number = 0) {
        this._multiRegExp = multiRegExp;
        this._string = string;
        this._index = start;
    }

    get current() {
        return this._current;
    }

    next() {
        const match = this._multiRegExp.findMatch(this._string, this._index);

        if (match !== null) {
            this._index = match.start === match.end ? match.start + 1 : match.end;
        } else {
            this._index = 0;
        }

        this._current = match;
        return match;
    }

    [Symbol.iterator]() {
        this._index = 0;
        return {
            next: () => {
                const match = this.next();
                return {
                    value: match === null ? undefined : match,
                    done: match === null,
                };
            },
        };
    }
}
