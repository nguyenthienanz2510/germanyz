export const removeTags = (str: String) => {
  if (str === null || str === '') return false
  else str = str.toString()
  return str.replace(/(<([^>]+)>)/gi, '')
}
