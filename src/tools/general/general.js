const isFn = data => typeof data === 'function';
const isNumber = data => typeof data === 'number';

const getRandomNumber = (min, max) => min + Math.round(Math.random() * (max - min));

const getRandomCharacters = (length, characters) => {
  let string = '';

  for (let index = 0; index < length; index++) {
    const characterIndex = Math.round(Math.random() * (characters.length - 1));
    string += characters[characterIndex];
  }

  return string;
};

export { isFn, isNumber, getRandomNumber, getRandomCharacters };
