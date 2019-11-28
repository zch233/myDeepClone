const deepClone = (data) => {
  if (data instanceof Object) {
    let copyData
    if (data instanceof Date) {
      copyData = new Date(data)
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