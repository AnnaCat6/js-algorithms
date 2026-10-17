export function indexOf (str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
  throw new TypeError ('Аргументы должны быть строками!')
  }
  
  if (search[0] === undefined) {
  
  return 0;

  }
  
  let i = 0;

  while (str[i] !== undefined) {
  
  let j = 0;

  while (search[j] !== undefined) {
  
  if (str[i + j] === undefined || str[i + j] !== search[j]) {
    
  break;

  }
  
  j++;
  
  }
  
  if (search[j] === undefined) {
  
  return i;

  }

  i++;
  
  }

  return -1;

}