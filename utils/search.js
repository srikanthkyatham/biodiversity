export const filterSimilarProducts = (searchText, filterArray, family = false) => {
  const products = [
    {
      name: '123',
      title: '5',
      casNo: '467'
    }
  ]
  let count = 0
  let filteredProducts
  if(family) {
    filteredProducts = filterArray.filter(item => item.title.toUpperCase().startsWith(searchText))
  } else {
    filteredProducts = filterArray.filter(item => {
      if(count >= 10) {
        return false
      }
      if(item.name.startsWith(searchText) || item.title.startsWith(searchText) || item.casNo.startsWith(searchText)) {
        count++
        return true
      }
      return false
    })
  }
  return filteredProducts

  const filteredProducts1 = []
  for(let i = 0; i < filterArray.length; i++) {
    if(count >= 10) {
      break
    }
    if(filterArray[i].name.includes(searchText) || filterArray[i].title.includes(searchText) || filterArray[i].casNo.includes(searchText)) {
      filteredProducts1.push(filterArray[i])
      count++
    }
  }
}