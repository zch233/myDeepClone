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
  describe('能够复制普通类型', () => {
    it('能够复制字符串', () => {
      const stringS = 'zch'
      const copyData = deepClone(stringS)
      assert(stringS === copyData)
    })
    it('能够复制数字', () => {
      const numberS = 2333
      const copyData = deepClone(numberS)
      assert(numberS === copyData)
    })
    it('能够复制null', () => {
      const nullS = null
      const copyData = deepClone(nullS)
      assert(nullS === copyData)
    })
    it('能够复制undefined', () => {
      const undefinedS = undefined
      const copyData = deepClone(undefinedS)
      assert(undefinedS === copyData)
    })
    it('能够复制symbol', () => {
      const symbolS = Symbol()
      const copyData = deepClone(symbolS)
      assert(symbolS === copyData)
    })
    it('能够复制布尔值', () => {
      const booleanS = true
      const copyData = deepClone(booleanS)
      assert(booleanS === copyData)
    })
  })

})
