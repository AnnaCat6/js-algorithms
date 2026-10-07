export default function isLess(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }

  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);

    if (codeA > codeB) {
      return false;
    }

    if (codeB > codeA) {
      return true;
    }
  }

  
return a.length < b.length;
}
