export class PasswordService {
    static getRandomLowerCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
  
    static getRandomUpperCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
  
    static getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
  
    static getRandomSymbol() {
      let symbolStr = "!@#$%^*(){}[]/";
      return symbolStr[Math.floor(Math.random() * symbolStr.length)];
    }
  
    static getPasswordObj(state) {
      let passwordObj = {};
      for (let key of Object.keys(state)) {
        if (typeof state[key] === "boolean" && state[key]) {
          passwordObj = {
            ...passwordObj,
            [key]: state[key],
          };
        }
      }
      return passwordObj;
    }
    static generatePassword(passwordObj,passwordlength){
        let thepassword='';
        for(let i=0;i<Number(passwordlength);i+= Object.keys(passwordObj).length){
            if(passwordObj.lower)  thepassword+= `${this.getRandomLowerCase()}`;
            if(passwordObj.upper)  thepassword+= `${this.getRandomUpperCase()}`;
            if(passwordObj.symbols)  thepassword+= `${this.getRandomSymbol()}`;
            if(passwordObj.numbers)  thepassword+= `${this.getRandomNumber()}`;

        }
return thepassword.substring(0,Number(passwordlength));
    }
  }