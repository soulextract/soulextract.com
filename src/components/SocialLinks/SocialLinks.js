import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';

class Component extends React.PureComponent {
  static displayName = 'SocialLinks';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    animateY: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    animateY: true
  };

  enter () {
    const { energy, sounds, animateY, onEnter } = this.props;
    const { duration } = energy;

    sounds.fade.play();

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 1, duration: duration.enter / 3 },
        { opacity: 0, duration: duration.enter / 5 },
        { opacity: 1, duration: duration.enter / 2 }
      ],
      complete: () => onEnter && onEnter()
    });

    if (animateY) {
      anime({
        targets: this.element,
        easing: 'easeOutCubic',
        translateY: [-10, 0],
        duration: duration.enter
      });
    }
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const { duration } = energy;

    sounds.fade.play();

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 0, duration: duration.exit / 3 },
        { opacity: 1, duration: duration.exit / 5 },
        { opacity: 0, duration: duration.exit / 2 }
      ],
      complete: () => onExit && onExit()
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      animateY,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    const A = elprops => (
      <Link
        className={classes.item}
        onLinkStart={onLinkStart}
        onLinkEnd={onLinkEnd}
        onMouseEnter={() => sounds.hover.play()}
        {...elprops}
      />
    );

    return (
      <div
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >
        <A href='https://www.youtube.com/channel/UCS8LdV8eOeK6XnMMkRP3pXA' target='youtube'>
          <span className='mdi mdi-youtube' />
        </A>
        <A href='https://open.spotify.com/artist/1cEPAqNFhmARDe0HgKOD3h' target='spotify'>
          <span className='mdi mdi-spotify' />
        </A>
        <A href='https://soundcloud.com/soulextract' target='soundcloud'>
          <span className='mdi mdi-soundcloud' />
        </A>
        <A href='https://www.facebook.com/soulextract' target='facebook'>
          <span className='mdi mdi-facebook' />
        </A>
        <A href='https://twitter.com/soulextract' target='twitter'>
          <span className='mdi mdi-twitter' />
        </A>
        <A href='https://www.instagram.com/soulextract' target='instagram'>
          <span className='mdi mdi-instagram' />
        </A>
        <A href='mailto:soulextractmusic@gmail.com' target='email'>
          <span className='mdi mdi-email-outline' />
        </A>
      </div>
    );
  }
}

export { Component };
