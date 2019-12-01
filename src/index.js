/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let returnValue = fn(array[i], i, array);
        result.push(returnValue);
    }
    return result;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */

function reduce(array, fn, initial) {
    let result = initial || array[0],
        i = initial ? 0 : 1;
    for (; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }
    return result;
}
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    return Object.keys(obj).map(str => str.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    const validDate = (range, length) => (range >= 0 ? range : length + range);
    const resultArray = [];
    const validFrom = validDate(from, array.length);
    const validTo = validDate(to, array.length) - 1;

    for (let i = 0; i < array.length; i++) {
        if (i < validFrom || i > validTo) {
            continue;
        }
        const element = array[i];

        resultArray.push(element);
    }

    return resultArray;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    const proxyObj = new Proxy(obj,{
        set(target, prop, value) {
            target[prop] = value * value;
            return this;
        },
    });
    return proxyObj;
}
export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
