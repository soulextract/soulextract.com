import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const About = () => (
  <Layout>
    <Header />
    <h2>About</h2>
    <Link to="/">Home</Link>
    <hr />
    <p>
      SoulExtract is a non-profit, charity-driven music project started in 2013
      in hopes of sharing music with the world for a good cause.
    </p>
    <p>
      Instead of paying for this music, I ask that you click the "Charity
      Donation" link on the main page and give any amount.
    </p>
    <p>The charity I have a personal experience with is New Day Foster Home.</p>
    <p>
      New Day takes children in need of medical attention from the Chinese
      orphanages into their care. They shower them with love and attention and
      most of the time, end up saving their lives.
    </p>
    <p>
      My wife and I adopted our daughter back in 2012 from Hohhot, Inner
      Mongolia. She was born with a disorder known as Spina Bifida, where the
      spinal cord grows outside the body.
    </p>
    <p>Very terrible stuff.</p>
    <p>
      We later found that New Day was responsible for repairing her spinal cord.
    </p>
    <p>
      Had it not been for them, she would not have been able to walk and would
      most likely been incontinent. Doctors say it is amazing she can walk at
      all with her condition.
    </p>
    <p>We have New Day to personally thank for that!</p>
    <p>
      Luckily, they still have her picture in the graduates section here:{' '}
      <a href="http://www.newdaycreations.com/foster/children/hh_lydia.htm">
        http://www.newdaycreations.com/foster/children/hh_lydia.htm
      </a>
    </p>
    <p>A bit about the music...</p>
    <p>So what's this "SoulExtract" name all about?</p>
    <p>
      To me, music is a very strange, mysterious force that drives our emotions
      into many directions. It can give us courage, or drive us to tears.
    </p>
    <p>
      In this knowledge, I beleive the music we create is the very essence of
      our being, in its purest form. If our soul was constructed of particles,
      the extracted particles would contain the foundation of who we are.
    </p>
    <p>
      I started the electronic/rock atom smashing back in 1998, armed with a
      puney BOSS DR-202 drum machine, Fender Squier guitar, and a tape recorder.
    </p>
    <p>Just be glad you've never heard these. ;)</p>
    <p>
      Most of the songs for this first album were written many years ago and
      absent of lyrics.
    </p>
    <p>Yes, I am Captain Lazy.</p>
    <p>
      I finally got to a point in 2013 where I was content with the vocals and
      lyrics and decided to start sharing with the world.
    </p>
    <p>
      The album name "Circadian Algorithm" is derived from most of my music
      coming to me when I'm asleep.
    </p>
    <p>
      I hear them in my dreams and sometimes I'm able to wake up and record the
      ideas.
    </p>
    <p>My wife gets very annoyed by this... can you imagine? ;)</p>
    <p>
      Again, if you like this music, please consider donating to the charity on
      the main page.
    </p>
    <p>Thanks so much for your support!!</p>
  </Layout>
);

export default About;
