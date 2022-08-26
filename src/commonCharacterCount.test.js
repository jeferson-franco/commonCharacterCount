const solution = require('./commonCharacterCount.js');

test('test 1', () => {
    expect(solution('aabcc', 'adcaa')).toBe(3);
});

test('test 2', () => {
    expect(solution('zzzz', 'zzzzzzz')).toBe(4);
});

test('test 3', () => {
    expect(solution('abca', 'xyzbac')).toBe(3);
});

test('test 4', () => {
    expect(solution('a', 'b')).toBe(0);
});

test('test 5', () => {
    expect(solution('a', 'aaa')).toBe(1);
});
