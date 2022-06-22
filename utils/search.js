export const filterSimilarProducts = (searchText, filterArray, family = false) => {
  let count = 0
  let filteredProducts
  if(family) {
    filteredProducts = filterArray.filter(item => item.title.toLowerCase().startsWith(searchText))
  } else {
    filteredProducts = filterArray.filter(item => {
      if(count >= 10) {
        return false
      }
      if(item.name.toLowerCase().startsWith(searchText) || item.title.toLowerCase().startsWith(searchText) || item.casNo.toLowerCase().startsWith(searchText)) {
        count++
        return true
      }
      return false
    })
  }
  return filteredProducts
}