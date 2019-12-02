const deepClone = (data) => {
  if (data instanceof Object) {
    let copyData
    if (data instanceof Date) {
      copyData = new Date(data)
    } else if (data instanceof RegExp) {
      copyData = new RegExp(data.source, data.flags)
    } else if (data instanceof Array) {
      copyData = new Array()
    } else if (data instanceof Function) {
      copyData = function () {
        return data.apply(this, arguments)
      }
    } else {
      copyData = new Object
    }
    for (let key in data) {
      copyData[key] = deepClone(data[key])
    }
    return copyData
  } else {
    return data
  }
}

module.exports = deepClone