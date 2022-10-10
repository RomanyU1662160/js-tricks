type Person = {
  fname: string;
  lname: string;
};

const person: Person = {
  fname: 'Romany',
  lname: 'Sefen',
};

var I = 10;

const printI = () => {
  console.log('I  :::->>>', I);
};

const printI2 = () => {
  var I = 20;
  console.log('I in Print2  :::->>>', I);
  printI();
};

printI2();
