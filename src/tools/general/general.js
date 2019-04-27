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

function getPathLength (path) {
  const length = path.getTotalLength();
  const actualWidth = path.getBoundingClientRect().width;
  const realWidth = path.getBBox().width;

  // TODO: This calculation only works if the scale is done by
  // width and height equally.

  const scale = actualWidth / realWidth || 1;

  return length * scale;
}

export { isFn, isNumber, getRandomNumber, getRandomCharacters, getPathLength };
