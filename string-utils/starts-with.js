export function startsWith(str, search) {
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

    for (let j = 0; j < searchLen; j++) {
      if (str[j] !== search[j]) {
      return false;
      }
    }

    return true; 
}