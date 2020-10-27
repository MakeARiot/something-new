// 1. Функция – калькулятор. Получает 3 аргумента: первый операнд, оператор (+, -, *, /), второй операнд. 
// Если операнды не являются числами, функция выбрасывает исключение. 
// Если передан неизвестный оператор – функция выбрасывает исключение. Возвращает результат операции.
// 
function calc(num1, operator, num2){
    try{
        if ((typeof(num1) != "number") || (typeof(num2) != "number")) throw new Error("NaN");

        if ((operator != "+") && (operator != "-") && (operator != "*") && (operator != "/")) throw new Error("wrong symbol");
        switch(operator){
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "*": return num1 * num2;
            case "/": return num1 / num2;
        }
    } catch(e){
        console.log(e.message);
    }
}

console.log(calc(1, "+", 2));
console.log(calc("1", "+", 2));

// 2. Функция получает первым параметром массив, каждый элемент которого является строкой. 
// Вторым параметром подстроку для поиска. Возвращает количество элементов массива, которые содержат переданную подстроку.
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function find(str, ...arr){
    let counter = 0;
    arr.forEach((i, item)=>{
        if (i[item] == str) counter++;
        console.log(i[item]);
    })
    return counter;
}

// 3. Функция получает число и возвращает строку с отформатированным значением вида «(-) 00 000 000,00». 
// Разделитель разрядов – пробел, разделитель целой и дробной части - запятая. Количество знаков после запятой – от 0 до 2-х.
//
function num_format(num){
    let str_num = "" + num;
    let counter = 0;
    for(let i=str_num.length-1;i>0;i--){
        if (i % 3 == 0){
            console.log(str_num[i]);
            str_num[i] = " " + str_num[i];
        }
    }
    return str_num;
}

// console.log(num_format(12345678));