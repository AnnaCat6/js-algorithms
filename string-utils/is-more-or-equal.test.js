import isMoreOrEqual from './is-more-or-equal.js';

describe('Тесты isMoreOrEqual', () => {
test('Должна вернуть true если a больше', () => {
expect(isMoreOrEqual('cat', 'car')).toBe(true);
});

test('Должна вернуть true если строки равны', () => {
expect(isMoreOrEqual('hello', 'hello')).toBe(true);
});

test('Должна вернуть false если a меньше ', () => {
expect(isMoreOrEqual('car', 'cat')).toBe(false);
});

test('Должна вернуть true если a длиннее и символы совпадают', () => {
expect(isMoreOrEqual('hello!', 'hello')).toBe(true);
});

test('Должна вернуть false если a короче и символы совпадают', () => {
expect(isMoreOrEqual('hello', 'hello!')).toBe(false);
});

test('Должна вернуть true для пустых строк', () => {
expect(isMoreOrEqual('', '')).toBe(true);
});

test('Должна выбросить TypeError если аргумент не строка', () => {
expect(() => isMoreOrEqual([],'Matching')).toThrow(TypeError);
    
  });

});