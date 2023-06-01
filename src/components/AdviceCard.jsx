import styles from './AdviceCard.module.css';
import React, {Component} from 'react';
import mobileDivider from '../assets/images/divider-mobile.svg';
import desktopDivider from '../assets/images/divider-desktop.svg';
import dice from '../assets/images/icon-dice.svg';
import { fetchData } from '../services/advice-api';

class AdviceCard extends Component {
  state = {
    data: null,
    loading: true,
  };

  fetchAdvice = async () => {
    this.setState({ loading: true });
    const response = await fetchData();

    this.setState({ data: response, loading: false });
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchNewAdvice = () => {
    this.fetchAdvice();
  };

  render() {
    const { data, loading } = this.state;
    if (loading) return <p className={ styles.loading }>Loading...</p>;

    return (
      <div className={ styles.container }>
        <div className={ styles.card__content }>
          <p className={ styles.advice__id }>{`advice #${data?.slip.id}`}</p>
          <h1 className={ styles.advice }>
            {`"${data?.slip.advice}"`}
          </h1>
          <picture>
            <source media="(max-width: 540px)" srcSet={ mobileDivider } />
            <img src={ desktopDivider } alt="Divisor" />
          </picture>
          <button className={ styles.dice } onClick={ this.fetchNewAdvice }>
            <img src={ dice } alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default AdviceCard;
