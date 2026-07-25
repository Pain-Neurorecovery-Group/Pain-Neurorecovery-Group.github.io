import PropTypes from 'prop-types';
import React from 'react';

import Hero from './hero-container';
import Links from './links';

import './landing.css';

const Landing = ({
  links,
}) => (
  <Hero
    className="home__landing"
    Tag="section"
  >
    <div>
      <h1>
        Pain & Neurorecovery Group
      </h1>
      <p className="home__landing-description">
        Hammel Neurocenter, Aarhus University
      </p>
      <Links links={links} />
    </div>
  </Hero>
);

Landing.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Landing;
