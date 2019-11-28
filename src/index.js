const deepClone = (data) => {
  if (data instanceof Object) {
      copyData = new Object()
    for (let key in data) {
      copyData[key] = deepClone(data[key])
    }
    return copyData
  } else {
    return data
  }
}

module.exports = deepClone