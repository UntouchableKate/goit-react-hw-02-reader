// Core
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Counter.module.css';

const Counter = ({ indexPublication, totalValue }) => (
  <p className={styles.counter}>
    {indexPublication}/ {totalValue}
  </p>
);

Counter.propTypes = {
  totalValue: PropTypes.number.isRequired,
  indexPublication: PropTypes.number.isRequired,
};

export default Counter;
