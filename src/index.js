const deepClone = (data, cache = [], copiedData) => {
  if (cache.includes(data)) {
    return copiedData
  }
  if (data instanceof Object) {
    let copyData
    if (data instanceof Date) {
      copyData = new Date(data)
    } else if (data instanceof RegExp) {
      copyData = new RegExp(data.source, data.flags)
    } else if (data instanceof Array) {
      copyData = new Array()
    } else if (data instanceof Function) {
      copyData = function () { return data.apply(this, arguments) }
    } else {
      copyData = new Object
    }
    cache.push(data)
    for (let key in data) {
      copyData[key] = deepClone(data[key], cache, copiedData)
    }
    return copyData
  } else {
    return data
  }
}

module.exports = deepClone