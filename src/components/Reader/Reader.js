// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Reader.module.css';

// Components
import Publication from '../Publication';
import Controls from '../Controls';
import Counter from '../Counter';

class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    publications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
    step: PropTypes.number,
  };

  state = {
    indexPublication: 0,
  };

  forwardHandler = () => {
    this.setState(currentState => ({
      indexPublication: currentState.indexPublication + this.props.step,
    }));
  };

  backHandler = () => {
    this.setState(currentState => ({
      indexPublication: currentState.indexPublication - this.props.step,
    }));
  };

  render() {
    const { indexPublication } = this.state;
    const { publications } = this.props;
    const totalValue = publications.length;

    return (
      <div className={styles.reader}>
        <Controls
          indexPublication={indexPublication}
          onBack={this.backHandler}
          onForward={this.forwardHandler}
        />

        <Counter
          indexPublication={indexPublication + 1}
          totalValue={totalValue}
        />

        <Publication
          publication={publications[indexPublication]}
          indexPublication={indexPublication + 1}
        />
      </div>
    );
  }
}

export default Reader;
