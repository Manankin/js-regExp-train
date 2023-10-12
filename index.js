// Завдання 1
/** Функція `replaceText` замінює всі входження певного слова у тексті на задану фразу.
 *  word - Слово для заміни.
 *  replacement - Фраза, якою треба замінити слово.
 *  text - Текст, у якому треба здійснити заміну. */
function replaceText(word, replacement, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'g' (глобальний пошук).
  let regexp = new RegExp(word, 'gm');
  // Використання методу `replace` регулярного виразу для заміни слова на фразу у тексті.
  // text.replaceAll(regexp, replacement);
  // Повернення заміненого тексту.
  return text.replace(regexp, replacement);
}
// Перевірка
console.log("Завдання 1 ==============================");
console.log(
  replaceText("example", "sample text","This is an example sentence. Another example is here.")
);
// Виведе This is an sample text sentence. Another sample text is here.


// Завдання 2
/** Функція `checkWord` перевіряє, чи міститься певне слово у тексті.
 *  word - Слово для перевірки.
 *  text - Текст, який треба перевірити. */
function checkWord(word, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'i' (регістронезалежний пошук).
  const regexp = RegExp(word, 'i')
  // Використання методу `test` регулярного виразу для перевірки наявності слова у тексті.
  // Повернення результату перевірки.
  return regexp.test(text)
}
// Перевірка
console.log("Завдання 2 ==============================");
console.log(checkWord("example", "This is an example sentence."));
// Виведе true


// Завдання 3
/** Функція `extractTextInParentheses` вилучає текст, який знаходиться в круглих дужках, з рядка.
 *  str - Рядок, з якого треба вилучити текст. */
function extractTextInParentheses(str) {
  // Створення регулярного виразу з використанням зворотніх посилань для пошуку тексту в круглих дужках /\((.*?)\)/g.
  const regexp = /\(.*?\)/g
  // Використання методу `matchAll` для отримання всіх збігів регулярного виразу.
  // Створення масиву зі знайденими текстами.
  let result = str.match(regexp);
  // console.log(result);
  // Повернення масиву вилучених текстів.
  const newResult = [];
  result.map((item) => { newResult.push(item.slice(1, item.length - 1)) });
  return newResult;
}
// Перевірка
console.log("Завдання 3 ==============================");
console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Виведе [ 'text', 'parentheses' ]


// Завдання 4
/** Функція `countEmails` знаходить та підраховує кількість email-адрес у рядку.
 *  str - Рядок, в якому потрібно знайти email-адреси. */
function countEmails(str) {
  // Створення регулярного виразу для пошуку email-адрес /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.
  const regexp = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
  // Використання методу `match` для отримання всіх збігів регулярного виразу.
  const result = str.match(regexp);
  // console.log(result);
  // Підрахунок кількості email-адрес.
  // Повернення кількості email-адрес.
  return result.length;
}
// Перевірка
console.log("Завдання 4 ==============================");
console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Виведе  3


// Завдання 5
/** Функція `findWordOccurrences` знаходить всі входження заданого слова у рядок з урахуванням ігнорування регістру.
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 *  Повертає масив з індексами всіх входжень слова у рядок. */
function findWordOccurrences(str, word) {
  // Створення регулярного виразу для пошуку слова з флагами 'g та 'i',
  const regexp = new RegExp(word, 'gi');
  console.log(regexp);
  // Створюємо пустий масив matches, та змінну match без значення
  let result = [];
  let match;
  // За допомогою циклу whild створюємо ітерацію поки рядок містить збіги з регулярним виразом, та змінній match присвоюємо збіги
  // while (regexp.test(str)) {
    match = regexp.exec(str);
    console.log(match);
    result.push(match.index);
    regexp.lastIndex = match.index + 1;
  // }
  // match = regexp.exec(str);
  // console.log(match);
  // matches.push(match.index);
  
  // Додавання індексу поточного входження слова у масив.
  // Оновлення lastIndex,присвоєюмо йому значення  match.index + 1, щоб продовжити пошук з наступного символу
  // Повертаємо масив
  return result;
}
// Перевірка
// console.log("Завдання 5 ==============================");
// console.log(
//   findWordOccurrences(
//     "The quick brown fox jumps over the lazy dog. The Fox is quick.",
//     "fox"
//   )
// );
// Виведе  [ 16, c49 ]


// Завдання 6
/** Функція `checkRegexFlags` перевіряє регулярний вираз на наявність флагів 'g' та 'm'.
 *  regex - Регулярний вираз, який потрібно перевірити.
 * Повертає  - true, якщо флаги 'g' та 'm' присутні, інакше - false. */
function checkRegexFlags(regex) {
  // Отримуємо всі флаги регулярного виразу.
  let flags = regex.flags
  // Перевіряємо наявність флагів 'g' та 'm' за допомогою методу `includes`.
  return (flags.includes('g') && flags.includes('m')) ? true : false;
  // Повертаємо  - true, якщо флаги 'g' та 'm' присутні, інакше - false
}
// Перевірка
console.log("Завдання 6 ==============================");
console.log(checkRegexFlags(/pattern/gm));
// Виведе true


// Завдання 7
/** Функція `replaceWordOccurrences` замінює всі входження заданого слова у рядку на нове слово.
 *  str - Рядок, в якому потрібно замінити входження слова.
 *  word - Слово, яке потрібно замінити.
 *  newWord - Нове слово, яким потрібно замінити.
 * Повертає  - Результат заміни входжень слова у рядку. */
function replaceWordOccurrences(str, word, newWord) {
  // Створюємо регулярний вираз зі словом, використовуючи флаг 'g' для глобального пошуку всіх входжень.
  let regexp = new RegExp(word, 'g');
  // Заміняємо всі входження слова у рядку на нове слово.
  let result = str.replace(regexp, newWord);
  // Повертаємо результат
  return result;
}
// Перевірка
console.log("Завдання 7 ==============================");
console.log(
  replaceWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "fox",
    "cat"
  )
);
// Виведе The quick brown cat jumps over the lazy dog. The cat is quick.


// Завдання 8
/** Функція `checkFlags` перевіряє, які флаги використовуються в заданому регулярному виразі.
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив флагів, які використовуються у регулярному виразі.  */
function checkFlags(regex) {
  // Створюємо масив для зберігання використаних флагів.
  let result = [];
  let string = regex.source;
  // console.log(string);
  let flags = regex.flags.split('');
  flags.forEach((flag) => {
    // Перевіряємо, чи використовується флаг 'i' (ignoreCase) у регулярному виразі.
    // Додаємо флаг ignoreCase до масиву, якщо він використовується.
    switch (flag) {
      case 'g': result.push('global');
        break;
      case 'i': result.push('ignoreCase');
        break;
      case 'm': result.push('multiline');
        break;
      case 's': result.push('singleLine');
        break;
      case 'x': result.push('ignore whitespaces');
        break;
      case 'u': result.push('match Unicode');
        break;
      case 'y': result.push('sticky search');
        break;
      default: ;
    }
  })
  // Отримуємо вихідний код регулярного виразу за допомогою властивості `source`.
  // Додаємо вихідний код до масиву
  result.push(string);
  // Повертаємо масив використаних флагів.
  return result;
}
// Приклад використання:
console.log("Завдання 8 ==============================");
console.log(checkFlags(/pattern/gimsy));
// Виведе[ 'ignoreCase', 'pattern' ]


// Завдання 9
/** Функція `checkRegexMethods` перевіряє, які методи використовуються в заданому регулярному виразі.
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив методів, які використовуються у регулярному виразі. */
function checkRegexMethods(regex) {
  // Створюємо масив для зберігання використаних методів.
  let methods = regex.flags;
  let result = [];
  // Перевіряємо, чи використовується метод `dotAll`.
  if (methods.includes('s')) {
    result.push('dotAll')
  }
  // Перевіряємо, чи використовується метод `multiline`.
  if (methods.includes('m')) {
    result.push('multiline')
  }
  // Перевіряємо, чи використовується метод `sticky`.
  if (methods.includes('y')) {
    result.push('sticky')
  }
  // Повертаємо масив використаних методів.
  return result;
}
// Приклад використання:
console.log("Завдання 9 ==============================");
console.log(checkRegexMethods(/test/msy));
// Виведе [ 'dotAll', 'multiline', 'sticky' ]


// Завдання 10
/** Функція `findWord` знаходить перше входження заданого слова у рядок за допомогою методу `search`.
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 * Повертає  - Індекс першого входження слова у рядок або -1, якщо слово не знайдено. */
function findWord(str, word) {
  // Створення регулярного виразу для пошуку слова.
  const regexp = new RegExp(word, 'gmi');
  // Використання методу `search` для пошуку першого входження слова.
  return (str.search(regexp));
}
// Приклад використання:
console.log("Завдання 10 ==============================");
console.log(
  findWord(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "quick"
  )
);
// Виведе: 4




// створення регулярного виразу (або pattern) через просте присвоєння
const regexp = /(?<group1>.e) (?<group2>st)/gmsi;
const testString = 'It is test string for testing all methods in Regular Expression'
// console.log(regexp);

// створення регулярного виразу (або pattern) через конструктор
const newRegexp = new RegExp('test', 'g');
const newRegexp_2 = RegExp('hello', 'gm')
// console.log(newRegexp_2);

// вбудована властивість виводу флагів
// console.log(newRegexp.flags);

// вбудована перевірка на наявність флага 'g' - global, або флага 'm' - multiline
// console.log(regexp.global);
// console.log(regexp.multiline);

// вбудована вдастивість перевірки переносу на новий рядок 's' - dotAll
// console.log(regexp.dotAll);

// вбудована властивість перевірки ігнорування регистру при пошуку 'i' - ignoreCase
// console.log(regexp.ignoreCase);

// вбудована властивість пошуку regexp у рядку та повертає масив що містить збіги (або підгрупи збігів)
// 'exec' - gerexp.exec(string)
// console.log(regexp.exec(testString));

// вбудована властивість перевірки входження regexp у рядок; повертає true або false
// 'test' - regexp.test(string)
// console.log(regexp.test(testString));

// вбудована властивість яка повертає шаблон у вигляді рядка
// 'source'
// console.log(regexp.source);

// вбудована властивість яка вказує останній індекс з якого проводити операції з regexp далі, за default це 0 і далі міняється
// 'lastIndex' - regexp.lastIndex = n;

// вбудована функція для заміни regexp на інший рядок в початковому рядку
// 'replace' або 'replaceAll' - str.replace(regexp, insStr)

// вбудована функція для пошуку regexp у рядку, повертає індекс першого входження або -1 у разі відсутності входження
// str.search(regexp)

// вбудована функція для пошуку збігів у рядку
// 'match' - повертає масив із збігами або 'matchAll' - повертає об'єкт-ітератор із збігами
// str.match(regexp) 