export const openPage = (url: string = '', target: string = '_blank') => {
    console.log('url', url, 1111);
    
  if (!url || url === '/') {
    return false
  }
  window.open(url, target)
}
