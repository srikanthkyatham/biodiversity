export const fetchProducts = async () => {
  if(window !== 'undefined' && localStorage && localStorage.getItem('products')) {
    return JSON.parse(localStorage.getItem('products'))
  }
  const response = await fetch('/api/products').then(res => res.json())
  localStorage.setItem('products', JSON.stringify(response))
  return response
}

export const productsNameFilter = (title) => title.toLowerCase().replaceAll(/[^\w\s]/gi, ' ').replace(/\s+/g, ' ').trim().split(' ').join('-')