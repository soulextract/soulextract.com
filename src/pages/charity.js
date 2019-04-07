import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisFamilyURL from '../images/josh-mullis-family.jpg';
import newDayFosterHomeURL from '../images/new-day-foster-home.jpg';
import newDayFosterHomeLogoURL from '../images/new-day-foster-home-logo.jpg';

const styles = theme => ({
  root: {}
});

class Charity extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <article>
            <header>
              <h1><Text>Charity Donation</Text></h1>
            </header>
            <p><Text>Music has always been a platform for artists to support and raise awareness to causes near and dear to them. Through their creative outlets countless established and aspiring musicians/artists alike have utilized the powerful tool that is a public platform to fuel societal-consciousness of causes that might otherwise go neglected.</Text></p>
            <Fader>
              <img src={joshMullisFamilyURL} alt="Josh Mullis's family" />
            </Fader>
            <p><Fader>For Soul Extract’s Josh Mullis that cause is the <Link href='http://newdayfosterhome.com/foster' target='newdayfosterhome'>New Day Foster Home</Link>, a non-profit organization based in China that’s been providing “life saving surgeries and a loving home” to orphaned children since late 2000. Mullis’ family became involved with New Day in 2011 when they made the life-changing choice to adopt a child from China, which at the time still held a strictly enforced “one child law”.</Fader></p>
            <Fader style={{ display: 'block' }}>
              <Link
                href='http://newdayfosterhome.com/foster'
                target='newdayfosterhome'
                style={{ display: 'block' }}
              >
                <img src={newDayFosterHomeURL} alt='New Day Forster Home' />
              </Link>
            </Fader>
            <Fader>
              <blockquote>
                <p>For Soul Extract’s Josh Mullis that cause is the New Day Foster Home, a non-profit organization based in China that’s been providing “life saving surgeries and a loving home” to orphaned children since late 2000. Mullis’ family became involved with New Day in 2011 when they made the life-changing choice to adopt a child from China, which at the time still held a strictly enforced “one child law”.</p>
                <p>Ansley was born with myelomeningocele, the most severe form of Spina Bifida.  This birth defect affects the spine and spinal cord and many children end up incontinent and/or unable to walk. She is now living a happy, normal life thanks to the New Day Foster Home.</p>
              </blockquote>
              <p>Enlarging their family also broadened the horizons of the Mullis clan and Josh became inspired to direct his craft toward the greater good,</p>
              <blockquote>The whole experience inspired me to dedicate my music project to this organization any way I can.  Whether it be donating partial proceeds or sponsoring a child.</blockquote>
              <p>With a new album, <em>Circadian Algorithm</em>, out next week (November 13th), the sky is the limit for Soul Extract/Mullis, who credits his humanitarian efforts as a continual source of motivation:</p>
              <blockquote>When I become frustrated with the music creation process, this keeps me going and has created a sense of purpose with this project.</blockquote>
              <p>If fans of Soul Extract are looking to get involved with the New Day Foster Home, Mullis definitely has some ideas:</p>
              <blockquote>
                <p>For starters, if you’re listening to <Link href='https://fanlink.to/circalgorithm' target='circalgorithm'>Circadian Algorithm</Link> via streaming outlets or have purchased it, you are helping New Day as partial proceeds are sent directly to them. They also have an awesome Instagram account (<Link href='https://www.instagram.com/newdaycharities' target='@newdaycharities'>@newdaycharities</Link>), where they post regularly on fun things they do with the children, surgery updates, etc.</p>
                <p>I’d say that’s a good place to start and if your heart pulls you in that direction, they have a donation page here:</p>
              </blockquote>
              <Link
                href='http://www.newdayfosterhome.com/en/help-us/one-time-donations'
                target='newdayfosterhome-donation'
              >
                <img src={newDayFosterHomeLogoURL} alt='New Day Foster Home logo' />
              </Link>
              <p>We’re elated to have Soul Extract on the FiXT roster and more than happy to bolster his efforts in making the world a better place, one badass album at a time.</p>
              <p style={{ margin: 0 }}>Source: <Link href='https://www.fixtonline.com/artist-update-feature-soul-extract' target='article-source'>fixtonline.com/artist-update-feature-soul-extract</Link>.</p>
            </Fader>
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Charity);
