export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const allowedSymbols = /^[a-zA-Z]+([a-zA-Z0-9_-]*)+[a-zA-Z]$/;
    const threeDigits = /\d{4,}/;

    return (allowedSymbols.test(this.name) && !threeDigits.test(this.name));
  }
}
