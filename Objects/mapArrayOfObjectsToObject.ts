type Fruit = {
  name: string;
  price: number;
};

const fruitsArr = [
  { name: 'apple', price: 30 },
  { name: 'mango', price: 50 },
  { name: 'orange', price: 20 },
];

const mapArrayToObj = (arr: Array<Fruit>, key: keyof Fruit) => {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {} as any);
};

const res = mapArrayToObj(fruitsArr, 'name');
console.log('res', res);

/*
{
  "apple": {
    "name": "apple",
    "price": 30
  },
  "mango": {
    "name": "mango",
    "price": 50
  },
  "orange": {
    "name": "orange",
    "price": 20
  }
}
*/
