/*
mixin is to create a superclass form a mix of two other classes , an approach to that is to : 
- create a class (simple class with simple method).
- create a base extends the simple class
- create a a method that takes a class as an argument and return a super class that extends the argument class

*/

class SimpleClass {
  constructor(username) {
    this.username = username;
  }
  greeting() {
    console.log(` From SimpleClass :: Hello ${this.username}`);
  }
}

class BaseClass extends SimpleClass {
  constructor(fname, lname) {
    super(fname, lname);
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    console.log(
      `From  BaseClass:: your full name is ${this.fname} ${this.lname} `
    );
  }
}

const MixinClassFunction = (baseClass) => {
  return class SuperClass extends baseClass {
    constructor(username, fname, lname, email) {
      super(username, fname, lname, email);
      this.email = email;
    }
    getEmail() {
      console.log(`From MixinClassFunction::: your email is ${this.email}`);
    }
  };
};

class MixinClass extends MixinClassFunction(BaseClass) {
  constructor(postCode) {
    super(postCode);
    this.postcode = postCode;
  }
}

let newMixinClass = new MixinClass('Rooma', 'romany', 'Sefen', 'HD45LR');
newMixinClass.greeting();
newMixinClass.getFullName();
newMixinClass.getEmail();
// let NewBaseClass = new BaseClass('romany', 'sefen');
// NewBaseClass.greeting();
// NewBaseClass.getFullName();
