const isFn = data => typeof data === 'function';
const isNumber = data => typeof data === 'number';

const getRandomCharacters = (length, characters) => {
  let string = '';

  for (let index = 0; index < length; index++) {
    const characterIndex = Math.round(Math.random() * (characters.length - 1));
    string += characters[characterIndex];
  }

  return string;
};

export { isFn, isNumber, getRandomCharacters };
