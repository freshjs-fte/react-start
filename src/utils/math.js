
/* 
    напишите три функции
    1) умножения двух чисел
    2) квадратный корень
    3) синуса угла
    используйте встроенный в js класс Math
*/

function mult(a, b) {
    return a * b
}

function sqrt(a) {
    return Math.sqrt(a)
}

function pow(a, b) {
    return Math.pow(a, b)
}

function sin(a) {
    return Math.sin(a)
}

function cos(a) {
    return Math.cos(a)
}

/* 
    экспортируйте все функции
    сохраняя их как свойства экспорта
*/

// named export
// module.exports.mult = ...
export { mult, sqrt, sin, pow, cos }

/*
    импортируйте все функции
    в компоненте Header
    и вызовите их с числами
    результат каждой залогируйте в консоль
*/
