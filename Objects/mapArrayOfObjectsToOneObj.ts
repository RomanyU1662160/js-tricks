const dimensions = [
  {
    length1: '50',
    angle1: '50',
  },
  {
    length2: '',
    angle2: '',
  },
  {
    length3: '',
    angle3: '',
  },
  {
    length4: '',
    angle4: '',
  },
  {
    length5: '',
    angle5: '',
  },
  {
    length6: '',
    angle6: '',
  },
];

const payload = dimensions.reduce((acc, item) => {
  // Convert string values to numbers and add them to the accumulator
  for (const [key, value] of Object.entries(item)) {
    if (value) {
      acc[key] = Number(value);
    }
  }
  return acc;
}, {});

console.log(payload);
