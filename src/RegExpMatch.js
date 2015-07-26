export default class RegExpMatch {
    /**
     * Returns the number of captured groups in the match.
     */
    groupCount: number;

    /**
     * The string on which this match was computed.
     */
    input: string;

    /**
     * The index in the string where the match starts.
     */
    start: number;

    constructor(result) {
        Object.defineProperty(this, 'groupCount', { value: result.length - 1 });
        Object.defineProperty(this, 'start', { value: result.index });
        Object.defineProperty(this, 'input', { value: result.input });

        for (let i = 0; i <= result.length; i++) {
            Object.defineProperty(this, String(i), { value: result[i] });
        }
    }

    /**
     * The match of the pattern.
     */
    get match(): string {
        return this[0];
    }

    get index(): number {
        return this.start;
    }

    get length(): number {
        return this.groupCount;
    }

    /**
     * The index in the string after the last character of the match.
     */
    get end(): number {
        return this.start + this.match.length;
    }

    /**
     * Returns the string matched by the given group.
     *
     * If group is 0, returns the match of the pattern.
     */
    group(group: number): string {
        return this[group];
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                return { value: this[i], done: ++i > this.length };
            },
        };
    }

    toString() {
        let str = 'match= "' + this.match + '", start= ' + this.start + ', groupCount= ' + this.groupCount;

        if (this.groupCount) {
            for (let i = 1; i < this.groupCount; i++) {
                str += ', group' + i + '= "' + this[i] + '"';
            }
        }

        return str;
    }
}
