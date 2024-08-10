function* generatorFunction(num1, num2, num3) {
    yield (num1 + num2)
    yield (num2 + num3)
    yield (num3 * num1)

}

const getSum = generatorFunction(2, 3, 5)

console.log('First yield   :::->>>', getSum.next().value);
console.log('Second yield   :::->>>', getSum.next().value);
console.log('Third yield   :::->>>', getSum.next().value);
console.log('last yield   :::->>>', getSum.next().value);