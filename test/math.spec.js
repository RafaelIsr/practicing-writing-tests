const assert = require('assert');
const sum = require('../index');
it ('calc sum with positive numbers', () => {
    assert.equal(sum(5, 7), 12)
})
it ('calc sum with negative numbers', () => {
    assert.equal(sum(-5, -7), -12)
})
