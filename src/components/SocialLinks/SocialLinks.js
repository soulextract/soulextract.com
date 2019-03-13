import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

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
    onExit: PropTypes.func
  };

  static defaultProps = {
    animateY: true
  };

  componentDidMount () {
    const { sounds } = this.props;
    const linksElements = Array.from(this.element.querySelectorAll('a'));

    linksElements.forEach(linkElement => {
      linkElement.addEventListener('mouseenter', () => sounds.hover.play());
    });
  }

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
      ...etc
    } = this.props;

    return (
      <div
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >
        <a className={classes.item} href='https://www.youtube.com/channel/UCS8LdV8eOeK6XnMMkRP3pXA' target='youtube'>
          <span className='mdi mdi-youtube' />
        </a>
        <a className={classes.item} href='https://open.spotify.com/artist/1cEPAqNFhmARDe0HgKOD3h' target='spotify'>
          <span className='mdi mdi-spotify' />
        </a>
        <a className={classes.item} href='https://soundcloud.com/soulextract' target='soundcloud'>
          <span className='mdi mdi-soundcloud' />
        </a>
        <a className={classes.item} href='https://www.facebook.com/soulextract' target='facebook'>
          <span className='mdi mdi-facebook' />
        </a>
        <a className={classes.item} href='https://twitter.com/soulextract' target='twitter'>
          <span className='mdi mdi-twitter' />
        </a>
        <a className={classes.item} href='https://www.instagram.com/soulextract' target='instagram'>
          <span className='mdi mdi-instagram' />
        </a>
        <a className={classes.item} href='mailto:soulextractmusic@gmail.com' target='email'>
          <span className='mdi mdi-email-outline' />
        </a>
      </div>
    );
  }
}

export { Component };
