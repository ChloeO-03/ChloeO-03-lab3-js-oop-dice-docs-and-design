import { describe, it } from 'node:test';
import assert from 'node:assert';
import { DiceNotation } from '../../src/domain/DiceNotation.js';
describe('DiceNotation', () => {
describe('parse', () => {
it('should parse simple dice notation', () => {
const parsed = DiceNotation.parse('3d6');
assert.strictEqual(parsed.notation, '3d6');
assert.strictEqual(parsed.components.length, 1);
assert.deepStrictEqual(parsed.components[0], {
type: 'dice',
count: 3,
sides: 6,
sign: 1
});
});
it('should parse dice with modifier', () => {
const parsed = DiceNotation.parse('2d8+3');
assert.strictEqual(parsed.notation, '2d8+3');
assert.strictEqual(parsed.components.length, 2);
assert.deepStrictEqual(parsed.components[0], {
type: 'dice',
count: 2,
sides: 8,
sign: 1
});
assert.deepStrictEqual(parsed.components[1], {
type: 'modifier',
value: 3
});
});
