function createAnimationTick ({ duration, isInverted, onCall, onDone }) {
  let nextTick = null;
  let timeStart = null;
  let timeProgress = null;

  function cancel () {
    window.cancelAnimationFrame(nextTick);

    if (onDone) {
      onDone();
    }
  }

  function callNextTick (timeStamp) {
    if (!timeStart) {
      timeStart = timeStamp;
    }

    timeProgress = Math.max(timeStamp - timeStart, 0);
    if (isInverted) {
      timeProgress = duration - timeProgress;
    }

    const completed = isInverted ? timeProgress <= 0 : timeProgress >= duration;
    const shouldContinue = onCall({ duration, timeStart, timeProgress });

    if (!completed && shouldContinue) {
      nextTick = window.requestAnimationFrame(callNextTick);
    } else {
      cancel();
    }
  }

  nextTick = window.requestAnimationFrame(callNextTick);

  return { cancel };
};

export { createAnimationTick };
