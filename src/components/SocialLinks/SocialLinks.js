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
    className: PropTypes.any
  };

  enter () {
    const { duration } = this.props.energy;
    const links = this.element.querySelectorAll('a');

    anime({
      targets: links,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 1, duration: duration.enter / 3 },
        { opacity: 0, duration: duration.enter / 5 },
        { opacity: 1, duration: duration.enter / 2 }
      ],
      delay: (link, index) => index * duration.stagger
    });
  }

  exit () {
    const { duration } = this.props.energy;
    const links = this.element.querySelectorAll('a');

    anime({
      targets: links,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 0, duration: duration.exit / 3 },
        { opacity: 1, duration: duration.exit / 5 },
        { opacity: 0, duration: duration.exit / 2 }
      ],
      delay: (link, index) => index * duration.stagger
    });
  }

  render () {
    const { theme, classes, energy, className, ...etc } = this.props;

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
