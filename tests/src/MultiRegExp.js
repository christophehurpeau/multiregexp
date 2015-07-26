/* global suite, test */
import assert from 'proclaim';
import MultiRegExp from '../../lib/MultiRegExp';

suite('Single RegExp', () => {
    const regExp = /(hi)/g;
    const multiRegExp = new MultiRegExp([regExp]);

    test('firstMatch', () => {
        for (let i = 0; i < 2; i++) {
            let firstMatch = multiRegExp.firstMatch('hihi');

            assert.strictEqual(firstMatch.groupCount, 1);
            assert.strictEqual(firstMatch.start, 0);
            assert.strictEqual(firstMatch.input, 'hihi');
            assert.strictEqual(firstMatch.match, 'hi');
            assert.strictEqual(firstMatch.end, 2);
            assert.strictEqual(firstMatch.length, 1);
            assert.strictEqual(firstMatch.group(0), 'hi');
            assert.strictEqual(firstMatch[0], 'hi');
            assert.strictEqual(firstMatch.group(1), 'hi');
            assert.strictEqual(firstMatch[1], 'hi');
        }
    });

    test('allMatches', () => {
        const iterator = multiRegExp.allMatches('hihi');
        const firstMatch = iterator.next();

        assert.strictEqual(firstMatch.start, 0);
        assert.strictEqual(firstMatch.match, 'hi');
        assert.strictEqual(firstMatch.end, 2);
        assert.strictEqual(firstMatch.group(1), 'hi');
        assert.strictEqual(iterator._index, 2);

        const secondMatch = iterator.next();

        assert.strictEqual(secondMatch.start, 2);
        assert.strictEqual(secondMatch.match, 'hi');
        assert.strictEqual(secondMatch.end, 4);
        assert.strictEqual(secondMatch.group(1), 'hi');
        assert.strictEqual(iterator._index, 4);

        assert.isNull(iterator.next());
        assert.strictEqual(iterator._index, 0);
    });
});

suite('Two RegExp', () => {
    const regExp1 = /(hi)/g;
    const regExp2 = /(he)llo/g;
    const multiRegExp = new MultiRegExp([regExp1, regExp2]);

    test('firstMatch', () => {
        for (let i = 0; i < 2; i++) {
            let firstMatch = multiRegExp.firstMatch('hihi');

            assert.strictEqual(firstMatch.groupCount, 1);
            assert.strictEqual(firstMatch.start, 0);
            assert.strictEqual(firstMatch.input, 'hihi');
            assert.strictEqual(firstMatch.match, 'hi');
            assert.strictEqual(firstMatch.end, 2);
            assert.strictEqual(firstMatch.length, 1);
            assert.strictEqual(firstMatch.group(0), 'hi');
            assert.strictEqual(firstMatch.group(1), 'hi');
        }
    });

    test('allMatches', () => {
        const iterator = multiRegExp.allMatches('hello hi');
        const firstMatch = iterator.next();

        assert.strictEqual(firstMatch.groupCount, 1);
        assert.strictEqual(firstMatch.start, 0);
        assert.strictEqual(firstMatch.input, 'hello hi');
        assert.strictEqual(firstMatch.match, 'hello');
        assert.strictEqual(firstMatch.end, 5);
        assert.strictEqual(firstMatch.group(1), 'he');

        const secondMatch = iterator.next();

        assert.strictEqual(secondMatch.start, 6);
        assert.strictEqual(secondMatch.match, 'hi');
        assert.strictEqual(secondMatch.end, 8);
        assert.strictEqual(secondMatch.group(1), 'hi');
        assert.strictEqual(iterator._index, 8);

        assert.isNull(iterator.next());
    });
});
