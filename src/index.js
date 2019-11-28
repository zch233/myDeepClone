const deepClone = (data) => {
  const copyData = {}
  if (data instanceof Object) {
    for (let key in data) {
      copyData[key] = data[key]
    }
  } else {
    return data
  }
  return copyData
}

module.exports = deepClone