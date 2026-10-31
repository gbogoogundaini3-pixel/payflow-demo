const test = require('node:test');
const assert = require('node:assert');
const { gbpToUsd } = require('../src/convert');

test('converts 100 GBP to 125 USD', () => {
  assert.strictEqual(gbpToUsd(100), 125);
});

test('rejects negative amounts', () => {
  assert.throws(() => gbpToUsd(-5), /Invalid amount/);
}); 