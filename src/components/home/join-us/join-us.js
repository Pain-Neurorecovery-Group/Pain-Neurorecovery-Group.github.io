/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './join-us.css';

const JoinUs = ({
  html,
}) => (
  <section
    className="join-us"
    id="join-us"
  >
    <h2>
      <FontAwesomeIcon icon={faUserPlus} />
      Join us
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
);

JoinUs.propTypes = {
  html: PropTypes.node.isRequired,
};

export default JoinUs;