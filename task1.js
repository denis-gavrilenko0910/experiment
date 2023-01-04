// 1.
// - Запроси у пользователя ввести его возраст в всплывающем окне браузера.
// - Проверь введенные пользователем данные:
// -- если это число от 0 до 18, не включая 18, то выведи в ответ сообщение, что далее он не может пользоваться данным ресурсом,
// -- если это число от 18 включительно и до 65, не включая его, то сообщите, что пользователь может пройти регистрацию,
// -- если число от 65 и выше - предложить пользователю связзаться с центром обслуживания,
// -- если введено не число, вывести сообщение об ошибке.
// let userInput = prompt("enter your age");
// console.log(typeof userInput);
// userInput = Number(userInput);
// if (!userInput) {
//   alert("вы ввели не число");
//   userInput = prompt("enter your age");
// }
// if (userInput < 18) alert("не достаточно взрослый");
// userInput >= 18 && userInput < 65
//   ? alert("можете пройти регистрацию")
//   : alert("свяжитесь с центром обслуживания");

// if (userInput < 18) {
//   alert("не достаточно взрослый");
// } else if (userInput >= 18 && userInput < 65) {
//   alert("можете пройти регистрацию");
// } else {
//   alert("свяжитесь с центром обслуживания");
// }

// =========================================================
// 2.
// Сделай калькулятор.
// - Пусть пользователь вводит выражения типа "2+2" или "5-3" и так далее, а при нажатии на Ok, выводи ему результат выражения:
// -- если его возможно вычислить и сообщение об ошибке,
// -- если выражение было введено не корректно.
// let userInput = prompt("введите выражение");

let userInput = "565.5d * 2";
console.log(userInput);
let res;
if (userInput.includes("+")) {
  let plusIdx = userInput.indexOf("+");

  let firstNumber = parseFloat(userInput.slice(0, plusIdx));
  let lastNumber = parseFloat(userInput.slice(plusIdx + 1));

  res = firstNumber + lastNumber;
  console.log(res);
} else if (userInput.includes("-")) {
  let plusIdx = userInput.indexOf("-");

  let firstNumber = parseFloat(userInput.slice(0, plusIdx));
  let lastNumber = parseFloat(userInput.slice(plusIdx + 1));

  res = firstNumber - lastNumber;
  console.log(res);
} else if (userInput.includes("/")) {
  let plusIdx = userInput.indexOf("/");

  let firstNumber = parseFloat(userInput.slice(0, plusIdx));
  let lastNumber = parseFloat(userInput.slice(plusIdx + 1));

  res = firstNumber / lastNumber;
  console.log(res);
} else if (userInput.includes("*")) {
  let plusIdx = userInput.indexOf("*");

  let firstNumber = parseFloat(userInput.slice(0, plusIdx));
  let lastNumber = parseFloat(userInput.slice(plusIdx + 1));

  res = firstNumber * lastNumber;
  console.log(res);
} else if (userInput.includes("%")) {
  let plusIdx = userInput.indexOf("%");

  let firstNumber = parseFloat(userInput.slice(0, plusIdx));
  let lastNumber = parseFloat(userInput.slice(plusIdx + 1));

  res = firstNumber % lastNumber;
  console.log(res);
} else if (userInput.includes("**")) {
  let plusIdx = userInput.indexOf("**");

  let firstNumber = parseFloat(userInput.slice(0, plusIdx));
  let lastNumber = parseFloat(userInput.slice(plusIdx + 1));

  res = firstNumber ** lastNumber;
  console.log(res);
} else {
  alert("нет мат выражения");
}

// ==========================================================
// 3.
// - Попроси пользователя ввести свое имя и фамилию и выведи ему именное приветствие со значением имени и фамилии в регистре CamelCase или со значением anonymous, если имя не было введено.

// 4.
// Проверь полученную строку на наличие лишних пробелом перед началом, внутри и в конце строки, верни исправленное значение.

// 5.
// Найди и замени все символы "+" в строках на символ пробела:
// hrevtsova+123@yahoo.com
// s.hrevtsova+2453+22@gmail.com

// 6.
// Посчитай и выведи результат, сколько гласных букв в строке:
// - "Есть только две бесконечные вещи: Вселенная и глупость. Хотя насчет Вселенной я не уверен."
// - "Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает… и никто не знает почему!"
// - "Образование — это то, что остаётся после того, как забывается всё выученное в школе."

// 7.
// Попроси пользователя ввести дату рождения в формате: дд.мм.гггг
// - Выведи ответ пользователю с информацией:
// был ли этот год високосным и через сколько лет наступит его год по Восточному календарюю.
// Если пользователь указал дату в неверном формате, попроси его ввести ее снова, если он нажал cancel, то не запрашивай.
