function makeCreatePlayer ({ Howl }) {
  return function createPlayer (settings) {
    const player = new Howl(settings);

    const play = player.play.bind(player);
    let lastPlay;

    player.play = function (...args) {
      if (lastPlay) {
        this.stop(lastPlay);
      }
      lastPlay = play(...args);
      return lastPlay;
    };

    return player;
  };
}

export { makeCreatePlayer };
