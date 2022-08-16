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
                document.write("<H3>Задание 2</H3><br/>");
                
            };
            break;
        default:
            {
                running = false;
            };
            break;
    };
};