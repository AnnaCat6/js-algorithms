export function reverse (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой!');
  }

  let len = 0;
  for (let _ in str) {
    len++;
  }

  let result = '';

  for (let i = len - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}
