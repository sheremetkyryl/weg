// let userName = "Kyryl";
// let counter = 10n;

// let isLogin = true;//boolean


// let age; //underfine
// const userChoice=null;//null

// const bigNumber = 10n;//bigint

// const key = Symbol("mykey")//Symbol
// const key2 = Symbol("mykey")//Symbol


// console.log(age);

// const str = "Привіт";
// const num = 123;
// const flag = true;
// const txt = "true";

// console.log("в змінній str тип данних:", typeof str);
// console.log("в змінній num тип данних:", typeof num)
// console.log("в змінній flag тип данних:", typeof flag)
// console.log("в змінній txt тип данних:", typeof txt)

// //№2 

// const cardNumber = "2345 5432 8765 1234";
// const userAge = 18;
// const isRed = true;
// const bigNumber = 24n;
// const cart = null;

// let userName = "Kyryl";
// let price = 199;
// let age;
// let id = Symbol();
// let userEmail = "user213@gmail.com";

//№3

// const myAge = 14;
// const friendAge = 15;
// const sumOfAge = myAge + friendAge;
// console.log(sumOfAge, це сума мого віку плюс віку мого друга)


//№4

// const a = 1488;
// const b = 2017;
// const product = a * b;
// console.log("Добуток :", product);

//№5

// const group = "FE_39_23_Students_G1";
// console.log("Я навчаюся в GoITeens в групі:", group);

//№6

// const name = "McBook Pro 13"
// let price = 100000;

// console.log("Обрано", name ,"ціна за штуку", price , "кредитів")

// price = 20000

// console.log("Обрано", name ,"ціна за штуку", price , "кредитів")

//№7

// const product = "iPhone 15";
// let quantity = 5;

// console.log("На складі є", product, "у кількості", quantity);

// quantity = 10;

// console.log("На складі є", product, "у кількості", quantity);


// console.log(3 ** 2);
// console.log(3 + 2);
// console.log(3 - 2);
// console.log(3 * 2);
// console.log(3 / 2);
// console.log(5 % 2); //остача від ділення


// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 === 0); //сувора рівність
// console.log(1 == 0); // рівність
// console.log(2 !== 1); //сувора нерівність
// console.log(1 >= 0); //більше рівне


// console.log(typeof Number.parseInt("5.5px"));
// console.log(typeof Number.parseFloat("5.5px"));

// console.log(Number.isNaN("qwer"))


// console.log(Math.PI);

// console.log(Math.pow(5, 2));//Піднесення до степення 
// console.log(Math.floor(2.999999));//відкидає дробову частину
// console.log(Math.round(2.5)); //математичне заокруглення
// console.log(Math.ceil(3.00001)); //закруглення до більшого

// console.log (Math.min(222, 3, 5, 6, 8, 9, 65, 43, 123, 53));
// console.log (Math.max(222, 3, 5, 6, 8, 9, 65, 43, 123, 53));

// console.log (Math.random() * (10 - 5) + 5);

// function myRandom(min,max) {
//     return Math.random() * ( max- min) + min;
// }
// console.log(myRandom(10, 100));

// console.log(0.1 + 0.2) * 10; 




//1 

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// //вивід
// console.log('Результат = ${a1}');
// console.log('Результат = ${a2}');
// console.log('Результат = ${a3}');
// console.log('Результат = ${a4}');


//2

// const a5 = 5 % 3;
// const a6 = 3 % 5;
// const a7 = 5 + 3;
// const a8 = "5" - 3;
// const a9 = 75 + "кг"

// alert

//3

// const min = 1;
// const max = 10;
// const randomNumber = Math.random( ) * (max - min) + min;
// console.log(randomNumber);

//4

// const firstNumber = Number.parseFloat(prompt("Введіть перше число"));
// const secondNumber = Number.parseFloat(prompt("Введіть друге число"));
// const sum = firstNumber + secondNumber;

// alert(sum);

//11

// const heightCircus = 10;
// const diametrCircus = 4;

// const volumCircus = Math.PI * heightCircus * diametrCircus;
// console.log("Об'єм циліндру :", volumCircus.toFixed)



//рядки 

// const string = "JavaScript";
// console.log(string.length) //довжина рядка  

// console.log(string.toLowerCase()); //приводіть всі символи в нижній регістор

// console.log(string.toUpperCase()); //приводить всі символи в верхній регістер

// console.log(string.indexOf("m")); //повертає індекс першого збігу від рядка
// console.log(string.toLocaleLowerCase9.indexOf("script"));
// console.log(string.includes("Java"));//повертає тру або фолс в залежності від того чи містить наш рядок підрядок

// console.log(string.startsWith("Script")); //чи починаєтся рядок з "підрядка"
// console.log(string.endsWith("cript !")); //чи закінчується рядок з "підрядка"

// console.log(string.trim().length); // метод trim прибирає пробіли на початку та у кінці підрядку

// const stringNumber = "10";
// console.log(stringNumber.padStart(3, "0")) 


// const userName = "Vlad";

// const welcomeMessage = `Привіт, ${userName}`;
// console.log(welcomeMessage)



//N1

// const userName = "Kyryl Sheremet";
// console.log(userName.length);

// //N2

// const myName = "Kyryl";
// const myNameToUpperCase = myName.toUpperCase();
// console.log(myNameToUpperCase);

// //N3

// const fullName = "Kyryl";
// console.log(fullName.charAt(0))

// //N4 

// let myFullName = "Kyryl Sheremet";
// let spacePositionOnName = myFullName.indexOf(" ");
// console.log(spacePositionOnName)

// //5 

// const stringName = "Kyryl";
// const stringUserName = stringName.replace("K", "@")
// console.log(stringUserName);

// //6

// const textString = "JavaScript";
// console.log(textString.substring(0,4));

// //7

// const customerName = "Kyryl";
// const customerSurName = "Sheremet";
// const time = 17.00;
// const roomNumber = 26;
// const message = `Гість $(customerName) $(customerSurName) посиляється $(time) номер $(roomNumber)`;
// console.log(message)

// //8


// //9

// const newMessage = "Ваш баланс поповнено на 10000";
// console.log(newMessage.length);

// //11

// const blackListedWord1 = "спам";
// const blackListedWord2 = "розпродаж";

// const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
// const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
// const string3 = "Рекламна кампанія #jsIsAwesome";

// console.log(`Рядок ${string1} включає слово ${blackListedWord1} - ${string1.toLocaleLowerCase().includes(blackListedWord1)}`);


// let number = 10;

// if (number) {
//     console.log("Перший блок коду");
// } else if (number === 0) {
//     console.log(number);
// } else if (number > 10) {
//     console.log("Число більше 10");
// } else{
//     console.log("Щось інше!");
// }

// const userAge = prompt("Вкажіть свій вік");
// console.log(userAge);

// if (userAge) {
//     console.log(`Ваш вік ${userAge}`);
// } else if (userAge) {
//     alert("Ви ввели некоректні дані!");
// } else {
//     alert("Ви не ввели дані!");
// }

// const num1 = 10;
// const num2 = 15;

// const bigestNumber = num1 > num2 ? num1 : num1 === num2 ? "Числа рівні"

// let secondBigestNumber;
// if (num1 > num2) {
//     secondBigestNumber = num1;
// } else {
//     secondBigestNumber = num2;
// }


// //2

// const userAnswer = prompt ("Яка “офіційна” назва JavaScript?");

// if (userAnswer.toLocaleLowerCase() === ecmascript) {
//     alert("Правильно!");
// } else {
//     alert("Ви не знаєте? ECMAScript");
// }

// //3

// const number = Number.promt("Введіть ваше число :");
// if (number > 0) {
//     console.log("1");
// } else if (number < 0) {
//     console.log(-1);
// } else {
//     console.log("0");
// }
// console.log(typeoff number);

//4 
// const a = 1;
// const b = 2;
// const result = (a + b < 4) ? 'Нижче' : 'Вище';
// console.log(result);

// //5
// const x1 = 10;
// const x2 = 30;
// const number = 45;

// if (number < x1) {
//     alert("До x1");
// } else if (number > x1) {
//     alert("Після x1");
// } else if (number > x1 && number < x2) {
//     alert("від x1 до x2");
// } else if (number < x1 && number > x2) {
//     alert("до x1 або після x2");
// }

// //6

// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// if (isFriend && isOnline && isDnd){
//     console.log("open chat");
// }

// //7
// const subscriptionType = "free";
// if(subscriptionType == "pro" || subscriptionType === "vip") {
//     console.log("Доступ дозволено")
// } else {
//     console.log("Доступ заборонено");
// }


// //8
// const balance = Number.prompt("Який у вас баланс");
// const payment = Number(prompt("Сума покупки"));
// alert("Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку");
// if (payment < balance){
//     balance = balance - payment;
//     alert(`На рахунку залишилося ${balance} кредитів`);
// } else {
//     alert("на рахунку недостатньо коштів для проведення оплати");
// } 
// alert("Операція завершена");


//yrok 5


let cost;
const sub = "vip";

if (true) {
    const cost = 10;
    console.log(cost);
}
console.log(cost)