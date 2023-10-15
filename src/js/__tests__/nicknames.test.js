import Validator from '../app';

test('Корректное имя', () => {
  const description = new Validator('Name');
  const result = 'Name';
  expect(description.validateUsername('Name')).toEqual(result);
});

test('Имя не должно содержать знак нижнего подчеркивания _ в начале', () => {
  function test() {
    const description = new Validator('_Name');
    return (description.validateUsername('_Name'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать знак нижнего подчеркивания _ в конце', () => {
  function test() {
    const description = new Validator('Name_');
    return (description.validateUsername('Name_'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать знак тире - в начале', () => {
  function test() {
    const description = new Validator('-Name');
    return (description.validateUsername('-Name'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать знак тире - в конце', () => {
  function test() {
    const description = new Validator('Name-');
    return (description.validateUsername('Name-'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать цифру в начале', () => {
  function test() {
    const description = new Validator('9Name');
    return (description.validateUsername('9Name'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать цифру в конце', () => {
  function test() {
    const description = new Validator('Name9');
    return (description.validateUsername('Name9'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать 3 цифры подряд', () => {
  function test() {
    const description = new Validator('Na999me');
    return (description.validateUsername('Na999me'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя должно содержать только латинские буквы', () => {
  function test() {
    const description = new Validator('Naпаme');
    return (description.validateUsername('Naпаme'));
  }
  expect(test).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});
