import React from 'react';
import PropTypes from 'prop-types';

import circadianAlgorithmImageURL from '../images/circadian-algorithm.jpg';
import filamentsImageURL from '../images/filaments.jpg';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Link } from '../components/Link';

const styles = theme => ({
  root: {},
  albums: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  album: {
    padding: [0, 0, 20],
    width: '100%'
  },
  albumCover: {
    display: 'block',
    margin: [0, 0, 20],
    width: '100%',

    '& img': {
      margin: 0,
      width: '100%',
      maxWidth: '100%'
    }
  },
  albumFrame: {
    display: 'block',
    width: '100%'
  },

  '@media screen and (min-width: 768px)': {
    album: {
      padding: 10,
      width: '50%'
    }
  }
});

class Music extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <h1><Text>Music</Text></h1>
          <div className={classes.albums}>
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link href='https://fanlink.to/circalgorithm' target='circalgorithm'>
                  <img
                    alt='Soul Extract Circadian Algorithm album cover'
                    src={circadianAlgorithmImageURL}
                  />
                </Link>
              </Fader>
              <Fader className={classes.albumFrame}>
                <iframe
                  src='https://open.spotify.com/embed/album/0dQsfbQTdfy0yP8QavV91a'
                  width='100%'
                  height='700'
                  frameBorder='0'
                  allowtransparency='true' // eslint-disable-line react/no-unknown-property
                  allow='encrypted-media'
                />
              </Fader>
            </div>
            <div className={classes.album}>
              <Fader className={classes.albumCover}>
                <Link href='https://fanlink.to/filaments' target='filaments'>
                  <img
                    alt='Soul Extract Filaments album cover'
                    src={filamentsImageURL}
                  />
                </Link>
              </Fader>
              <Fader className={classes.albumFrame}>
                <iframe
                  src='https://open.spotify.com/embed/album/4xLepvKZqUkktVJkWmmgqX'
                  width='100%'
                  height='515'
                  frameBorder='0'
                  allowtransparency='true' // eslint-disable-line react/no-unknown-property
                  allow='encrypted-media'
                />
              </Fader>
            </div>
          </div>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Music);
