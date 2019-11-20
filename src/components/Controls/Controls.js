// Core
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Controls.module.css';

const Controls = ({ indexPublication, onBack, onForward }) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onBack}
      disabled={indexPublication === 0}
      className={styles.button}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={onForward}
      disabled={indexPublication > 10}
      className={styles.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  indexPublication: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
};

export default Controls;
