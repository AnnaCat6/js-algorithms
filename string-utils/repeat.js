export function repeat(str, count) {
  if (typeof str !== 'string') {
    throw new TypeError('Первый аргумент должен быть строкой!');
  }

  if (count === undefined) {
    return '';
  }

  if (typeof count !== 'number' || Number.isNaN(count)) {
    throw new TypeError('Второй аргумент должен быть числом!');
  }

  if (count < 0) {
    throw new RangeError('Количество повторений не может быть отрицательным!');
  }

  let n = 0;
  while (n + 1 <= count) {
    n++;
  }

  if (n === 0) {
    return '';
  }

  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
  
  }