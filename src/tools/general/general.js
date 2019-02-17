const isFn = data => typeof data === 'function';
const isNumber = data => typeof data === 'number';

const getRandomNumber = (min = 0, max = 1, decimal) => {
  let random = Math.random() * (max - min);
  if (!decimal) {
    random = Math.round(random);
  }
  return min + random;
};

const getRandomCharacters = (length, characters) => {
  let string = '';

  for (let index = 0; index < length; index++) {
    const characterIndex = Math.round(Math.random() * (characters.length - 1));
    string += characters[characterIndex];
  }

  return string;
};

export { isFn, isNumber, getRandomNumber, getRandomCharacters };
