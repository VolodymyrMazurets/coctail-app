const transformIngridients = (data, stringFirst, stringSecond) => {
  const filter = (object, filterString) =>
    Object.entries(object)
      .filter((item) => item[0].includes(filterString) && !!item[1])
      .map((item) => item[1])
  const ingridients = filter(data, stringFirst)
  const values = filter(data, stringSecond)
  return ingridients.map((name, idx) => {
    const value = (values[idx] && String(values[idx])) || 'On your taste'
    return { name, value }
  })
}

export { transformIngridients }
