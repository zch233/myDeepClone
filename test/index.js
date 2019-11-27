const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const deepClone = require('../src/index')

chai.use(sinonChai)
const assert = chai.assert

describe('deepClone', () => {
  it('是一个函数', () => {
    assert.isFunction(deepClone)
  })
})
