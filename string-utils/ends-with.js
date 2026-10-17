export function endsWith(str, search) {
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

  let start = strLen - searchLen;

    for (let j = 0; j < searchLen; j++) {
      if (str[start + j] !== search[j]) {
      return false;
      }
    }

    return true; 
}