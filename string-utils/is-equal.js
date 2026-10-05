export function isEqual (a, b) {
if (typeof a !== 'string' || typeof b !== 'string') { //1. сначала проверка на ошибку, строка не строка
throw new TypeError ('Аргументы должны быть строго строками');
} 

if (a.length !== b.length) { //2. сравниваем длину строк теперь (разность количества букв)
return false; 
}

for(let i = 0; i < a.length; i++) { //3. проверка на то что каждая буква одинакова посимвольно, если нет то выходим ошибка, иначе правильно
if (a[i] !== b[i]) {
return false;
    }
  }

return true; 
   
}