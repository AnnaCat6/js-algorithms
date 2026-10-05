export function len(str) {

if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой');
}

return str.length;

}