export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const myreq = /^[a-z][\w-]+[a-z]$/igm;
    const myreq2 = /\d{3,3}/;
    if (myreq.test(this.name) && !myreq2.test(this.name)) {
      return this.name;
    }
    throw Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). \n Имя не должно содержать: \n - подряд более трёх цифр; \n - начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  }
}
