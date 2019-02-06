import { Howl } from 'howler';
import { makeCreatePlayer } from './makeCreatePlayer';

const createPlayer = makeCreatePlayer({ Howl });

export { createPlayer };
