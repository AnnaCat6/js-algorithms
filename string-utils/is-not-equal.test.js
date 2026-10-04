import isNotEqual from './is-not-equal.js'

describe('функция isNotEqual', () => {
test('Должна вернуть true для разных строк hello, world', () => {
const result = isNotEqual('hello','world');
expect(result).toBe(true);
});

test('Должна вернуть false для одинаковых строк abc, abc', () => {
const result = isNotEqual('abc','abc');
expect(result).toBe(false);
});

test('Должна вернуть true для строк разной длины hi, hello', () => {
const result = isNotEqual('hi','hello');
expect(result).toBe(true);
});

test('Должна вернуть false для пустых строк', () => {
const result = isNotEqual('','');
expect(result).toBe(false);
});

test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
expect(() => isNotEqual(123, 'byebye')).toThrow(TypeError);

  });

})

//• Должна вернуть true для разных строк ('hello', 'world')
//• Должна вернуть false для одинаковых строк ('abc', 'abc')
//• Должна вернуть true для строк разной длины ('hi', 'hello')
//• Должна вернуть false для пустых строк ('', '')
//• Должна выбросить TypeError если аргумент(ы) не строка

//Закоммить: