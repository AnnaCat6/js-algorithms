export default function isLessOrEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }

  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);

    if (codeA < codeB) {
      return true;
    }

    if (codeA > codeB) {
      return false;
    }
  }

  return a.length <= b.length;
}