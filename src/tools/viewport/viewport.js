import { getViewportSize } from '@helcor/window-sizes';

const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';

function getViewportRangeStatus (status) {
  return { [status]: true, status };
}

function getViewportRange () {
  const { width } = getViewportSize();

  if (width < 768) {
    return getViewportRangeStatus(SMALL);
  }

  if (width < 1025) {
    return getViewportRangeStatus(MEDIUM);
  }

  return getViewportRangeStatus(LARGE);
}

export { getViewportRange };
