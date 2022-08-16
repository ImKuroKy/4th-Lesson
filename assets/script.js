function FirstTask()
{
    function Sum(x, y) {return (x + y);};
    function Sub(x, y) {return (x - y);};
    function Mult(x, y) {return (x * y);};
    function Div(x, y) {return (x / y);};
    var firstUserValue = prompt("Введите значение первой переменной", "сюда");
    var mathAction = prompt("Введите действие ( + | - | * | / )", "сюда");
    var secondUserValue = prompt("Введите значение второй переменной", "сюда");
    var result = 0;
    switch (mathAction)
    {
        case "+":
            {
                result = parseFloat(Sum(firstUserValue, secondUserValue));
            };
            break;
        case "-":
            {
                result = parseFloat(Sub(firstUserValue, secondUserValue));
            };
            break;
        case "*":
            {
                result = parseFloat(Mult(firstUserValue, secondUserValue));
            };
            break;
        case "/":
            {
                if (secondUserValue != 0) 
                {
                    result = parseFloat(Div(firstUserValue, secondUserValue));
                } 
                else 
                {
                    alert("Обнаружено деление на ноль, повторите ввод");
                    FirstTask();
                };
            };
            break;
        default:
            {
                break;
            };
    };
    document.write(firstUserValue + " " + mathAction + " " + secondUserValue + " = " + result + "<br/>");
};
function SecondTask()
{
    var userNumber = parseFloat(prompt("Введите число для анализа", "сюда"));
    if (Math.sign(userNumber) == 0 || Math.sign(userNumber) == 1) {
        document.write(`Число ${userNumber} положительное.<br/>`);
    } else if (Math.sign(userNumber) == -0 || Math.sign(userNumber) == -1) {
        document.write(`Число ${userNumber} отрицательное.<br/>`);
    };
    var i = 2;
    const limit = Math.sqrt(userNumber);
    while (i <= limit) {
        i +=1;
    };
    if (userNumber % i === 0) {
        document.write(`Число ${userNumber} - составное число.<br/>`);
    } else {
        document.write(`Число ${userNumber} - простое число.<br/>`);
    };
    if (userNumber % 2 == 0) {
        document.write(`Число ${userNumber} делится на 2 без остатка.<br/>`);
    } else {
        document.write(`Число ${userNumber} не делится на 2 без остатка.<br/>`);
    };
    if (userNumber % 3 == 0) {
        document.write(`Число ${userNumber} делится на 3 без остатка.<br/>`);
    } else {
        document.write(`Число ${userNumber} не делится на 3 без остатка.<br/>`);
    };
    if (userNumber % 5 == 0) {
        document.write(`Число ${userNumber} делится на 5 без остатка.<br/>`);
    } else {
        document.write(`Число ${userNumber} не делится на 5 без остатка.<br/>`);
    };
    if (userNumber % 6 == 0) {
        document.write(`Число ${userNumber} делится на 6 без остатка.<br/>`);
    } else {
        document.write(`Число ${userNumber} не делится на 6 без остатка.<br/>`);
    };
    if (userNumber % 9 == 0) {
        document.write(`Число ${userNumber} делится на 9 без остатка.<br/>`);
    } else {
        document.write(`Число ${userNumber} не делится на 9 без остатка.<br/>`);
    };
};
var running = true;
while (running == true)
{
    var userChoise = prompt("Введите номер желаемого задания", "сюда");
    switch (userChoise)
    {
        case "1":
            {
                /*Задание:
                Создайте четыре функции для арифметических действий: (Add – сложение, Sub – вычитание, Mul – 
                умножение, Div – деление). Каждая функция должна принимать два параметра и выводить на экран 
                результат вычисления. Функция деления должна делать проверку деления на ноль. Пользователь 
                вводит значения, над которыми хочет произвести операцию и выбрать саму операцию.*/
                document.write("<H3>Задание 1</H3><br/>");
                FirstTask();
            };
            break;
        case "2":
            {
                /*Напишите функцию, которая будет принимать число и определять: 
                1. Является ли введенное число положительным или отрицательным. 
                2. Является ли оно простым.
                3. Делится ли оно на 2, 5, 3, 6, 9 без остатка.
                */
                document.write("<H3>Задание 2</H3><br/>");
                SecondTask();
            };
            break;
        default:
            {
                running = false;
            };
            break;
    };
};