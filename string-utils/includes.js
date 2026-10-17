export function includes(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }

  if (search === '') {
    return true;
  }

  let strLen = 0;
  for (let _ in str) strLen++;

  let searchLen = 0;
  for (let _ in search) searchLen++;

  if (searchLen > strLen) {
    return false;
  }

  for (let i = 0; i <= strLen - searchLen; i++) {
    let match = true;

    for (let j = 0; j < searchLen; j++) {
      if (str[i + j] !== search[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return true; 
    }
  }

  return false;
}


    
    