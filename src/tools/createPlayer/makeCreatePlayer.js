function makeCreatePlayer ({ Howl }) {
  return function createPlayer (settings) {
    const player = new Howl(settings);
    return player;
  };
}

export { makeCreatePlayer };
