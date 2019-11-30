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
  describe('能够复制普通对象', () => {
    const data = { stringS: 'zch', numberS: 1, nullS: null, undefinedS: undefined, symbolS: Symbol(), booleanS: true }
    const copyData = deepClone(data)
    assert(data !== copyData)
    it('能够复制对象中的字符串', () => {
      assert(data.stringS === copyData.stringS)
    })
    it('能够复制对象中的数字', () => {
      assert(data.numberS === copyData.numberS)
    })
    it('能够复制对象中的null', () => {
      assert(data.nullS === copyData.nullS)
    })
    it('能够复制对象中的undefined', () => {
      assert(data.undefinedS === copyData.undefinedS)
    })
    it('能够复制对象中的symbol', () => {
      assert(data.symbolS === copyData.symbolS)
    })
    it('能够复制对象中的布尔值', () => {
      assert(data.booleanS === copyData.booleanS)
    })
  })
  describe('能够复制复杂类型', () => {
    it('能够复制日期类型', () => {
      const data = new Date()
      data.stringS = 'zch'
      data.numberS = 2333
      data.dateS = new Date()
      const copyData = deepClone(data)
      assert(data !== copyData)
      assert(data.dateS !== copyData.dateS)
      assert(data.stringS === copyData.stringS)
      assert(data.numberS === copyData.numberS)
    })
    it('能够复制正则类型', () => {
      const data = /\d+/gi
      data.stringS = 'zch'
      data.numberS = 2333
      data.regExpS = new RegExp('\\d')
      const copyData = deepClone(data)
      assert(data !== copyData)
      assert(data.regExpS !== copyData.regExpS)
      assert(data.stringS === copyData.stringS)
      assert(data.numberS === copyData.numberS)
    })
    it('能够复制数组', () => {
      const data = [[1,2], ['zch'], [[{ name: 'zch' }]], Symbol(), null]
      const copyData = deepClone(data)
      assert(data !== copyData)
      assert(data[0] !== copyData[0])
      assert(data[0][0] === copyData[0][0])
      assert(data[0][1] === copyData[0][1])
      assert(data[1] !== copyData[1])
      assert(data[1][0] === copyData[1][0])
      assert(data[2] !== copyData[2])
      assert(data[2][0] !== copyData[2][0])
      assert(data[2][0].name === copyData[2][0].name)
      assert(data[3] === copyData[3])
      assert(data[4] === copyData[4])
    })
    it('能够复制环', () => {
      const data = { stringS: 'zch' }
      data.self = data
      const copyData = deepClone(data)
      assert(data !== copyData)
      assert(data.stringS === copyData.stringS)
      assert(data.self !== copyData.self)
    })
  })
})
