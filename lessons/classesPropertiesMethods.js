// ES6
class HumanES6 {
  constructor() {
    this.gender = 'Male';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

// ES7
class HumanES7 {
    gender = 'Male';
  
  printGender = () => {
    console.log(this.gender);
  }
}

class PersonES6 extends HumanES6 {
  constructor() {
    super(); // a keyword, executes parent constructor
    this.name = 'Ian';
    this.gender = 'non-binary unicorn snowflake'
  }
  
  printMyName() {
    console.log(this.name);
  }
}
class PersonES7 extends HumanES7 {
  constructor() {
    super(); // a keyword, executes parent constructor
    this.name = 'Ian';
    this.gender = 'non-binary unicorn snowflake'
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const personES6 = new PersonES6();
personES6.printMyName();
personES6.printGender();

const personES7 = new PersonES7();
personES7.printMyName();
personES7.printGender();