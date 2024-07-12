// Задачка 1
// let name = prompt('Как вас зовут?');
// alert('Привет, ' + name + '!');


// Задачка 2
// let year_of_birth = +prompt('В каком году вы родились? ');
// const this_year = 2024;
// alert('В текущем году вам исполнится ' + (this_year - year_of_birth) + ' лет');


// Задачка 3
// let side = +prompt('Введите длину стороны квадрата: ');
// alert('Периметр квадрата равен: ' + 4 * side);


// Задачка 5
// let distance = +prompt("Введите расстояние между городами в км: ");
// let time = +prompt('За какое время вы хотите преодолеть это расстояние в часах? ');
// alert('Вам необходимо двигаться со средней скоростью '+ distance / time +' км/ч');


// Задачка 6
// const eur = 0.92305;
// let usd = +prompt('Введите количество долларов для обмена: ');
// alert("По текущему курсу при обмене вы получите " + usd * eur +" евро");

// Задачка 7
// const Gb_Mb = 1024;
// const Mb = 820;
// let flash = +prompt('Каков объем вашей флешки в Гб? ');
// let size = (flash * Gb_Mb / Mb);
// alert('На флешку поместится ' + size + ' файлов объемом 820 Мб');


// Задачка 8
// const sum = prompt("Cколько у вас в кошельке денег? ");
// const price = prompt("Сколько стоит одна шоколадка? ");
// let sell = Math.floor(sum / price);
// let change = sum - price * sell;
// alert('Вы получите ' + sell + ' шоколадки, а также сдачу ' + change + ' рублей ');

// Задачка 9
// const num = prompt('Введите трехзначное число: ');
// let a = +(num % 10);
// let b = +((num - a) / 10 % 10);
// let c = +((num - a - b * 10) / 100);
// alert('Результат: ' + (a * 100 + b * 10 + c));



// Задачки от 09.07.
// Задачка 1
// const age = prompt('Сколько Вам лет?');
//     if (age >= 0 && age < 12) {
//         alert('Вы ребенок');
//     } else if (age >= 12 && age < 18) {
//         alert('Вы подросток');
//     } else if (age >= 18 && age < 60) {
//         alert('Вы взрослый');
//     } else if (age >= 60) {
//         alert('Вы пенсионер');
//     }

// Задачка 2
// const num = prompt('Введите число от 0 до 9');
//     switch(num) {
//         case '0':
//             alert('0 - )');
//             break;
//         case '1':
//             alert('1 - !');
//             break;
//         case '2':
//             alert('2 - @');
//             break;
//         case '3':
//             alert('3 - #');
//             break;
//         case '4':
//             alert('4 - $');
//             break;
//         case '5':
//             alert('5 - %');
//             break;
//         case '6':
//             alert('6 - ^');
//             break;
//         case '7':
//             alert('7 - &');
//             break;
//         case '8':
//             alert('8 - *');
//             break;
//         case '9':
//             alert('9 - (');
//             break;
//     }

    
// Задачка 3
// const num = prompt("Введите трехзначное число:");

// if (num.length === 3) {
//     if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2]) {
//         alert("В числе есть одинаковые цифры.");
//     } else {
//         alert("В числе нет одинаковых цифр.");
//     }
// } else {
//     alert("Пожалуйста, введите корректное трехзначное число.");
// }


// Задачка 4
// const year = prompt('Какой сейчас год?');
//     if (year % 4 == 0 && year % 100 !== 0)
//     {
//         alert('Это високосный год');
//     }
//     else
//         alert('Сейчас не високосный год')


// Задачка 5
const userInput = prompt("Введите пятиразрядное число:");
const strNumber = userInput.toString();
if (strNumber.length === 5) {
    if (strNumber === strNumber.split('').reverse().join('')) {
        alert(`${strNumber} является палиндромом.`);
    } else {
        alert(`${strNumber} не является палиндромом.`);
    }
} else {
    alert("Введите корректное пятиразрядное число.");
}