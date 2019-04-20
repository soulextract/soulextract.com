import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';
import { Text } from '../Text';
import { Fader } from '../Fader';
import { Secuence } from '../Secuence';

class Component extends React.Component {
  static displayName = 'Post';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      link: PropTypes.string,
      image: PropTypes.string
    })
  };

  enter () {
    const { energy, sounds } = this.props;
    const duration = energy.duration.enter;

    sounds.deploy && sounds.deploy.play();

    anime({
      targets: this.lineTopEl,
      duration: duration,
      easing: 'easeOutCubic',
      width: ['0%', '100%'],
      complete: () => sounds.deploy && sounds.deploy.stop()
    });
  }

  exit () {
    const { energy, sounds } = this.props;
    const duration = energy.duration.exit;

    sounds.deploy && sounds.deploy.play();

    anime({
      targets: this.lineTopEl,
      duration: duration,
      easing: 'easeOutCubic',
      width: ['100%', '0%'],
      complete: () => sounds.deploy && sounds.deploy.stop()
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
      children,
      data,
      ...etc
    } = this.props;

    const messageTexts = data.message
      .split('\n')
      .map((fragment, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <br />}
          <Text audio={audio}>{fragment}</Text>
        </React.Fragment>
      ));

    return (
      <article className={cx(classes.root, className)} {...etc}>
        <div
          className={classes.lineTop}
          ref={ref => (this.lineTopEl = ref)}
        />
        <Secuence stagger>
          <Link
            className={classes.link}
            href={data.link}
            target='_blank'
            onMouseEnter={() => sounds.hover && energy.entered && sounds.hover.play()}
          >
            <Fader
              node='div'
              className={classes.media}
              audio={audio}
            >
              <div
                className={classes.image}
                style={{ backgroundImage: data.image && `url(${data.image})` }}
              />
            </Fader>
            <div className={classes.info}>
              <h1 className={classes.title}>
                <Text audio={audio}>
                  {data.title}
                </Text>
              </h1>
              <p className={classes.message}>
                {messageTexts}
              </p>
            </div>
          </Link>
        </Secuence>
      </article>
    );
  }
}

export { Component };
