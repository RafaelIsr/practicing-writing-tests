const expect = require('chai').expect
const sum = require('../index');
it ('calc sum with positive numbers', () => {
    expect(sum(5, 7)).equal( 12)
})
it ('calc sum with negative numbers', () => {
    expect(sum(-5, -7)).equal( -12)
})
