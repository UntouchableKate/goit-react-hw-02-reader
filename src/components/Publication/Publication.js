// Core
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Publication.module.css';

const Publication = ({ publication, indexPublication }) => (
  <article className={styles.publication}>
    <h2 className={styles.title}>
      {indexPublication}.{publication.title}
    </h2>
    <p className={styles.text}>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  indexPublication: PropTypes.number.isRequired,
};

export default Publication;
