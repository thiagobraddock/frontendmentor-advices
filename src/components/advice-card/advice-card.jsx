import React, { useEffect, useState } from 'react';
import dice from '../../assets/images/icon-dice.svg';
import desktopImg from '../../assets/images/pattern-divider-desktop.svg';
import mobileImg from '../../assets/images/pattern-divider-mobile.svg';
import { fetchRandomAdvice } from '../../services/advice-api';
import style from './advice-card.module.css';
function AdviceCard() {
  console.log('RENDER');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newAdvice, setNewAdvice] = useState(false);

  useEffect(() => {
    async function fetchAdvice() {
      setLoading(true);
      const response = await fetchRandomAdvice();
      setData(response);
      setLoading(false);
    }
    fetchAdvice();
  }, [newAdvice]);

  if (loading) return <p className={style.loading}>Loading...</p>;

  return (
    <div className={style.card}>
      <div className={style.card__content}>
        <p className={style.advice__id}>ADVICE # {data?.slip.id}</p>
        <h1 className={style.advice}>{data?.slip.advice}</h1>
        <picture>
          <source media="(max-width: 540px)" srcSet={mobileImg} />
          <img src={desktopImg} alt="Separator image" />
        </picture>
        <button
          className={style.dice}
          onClick={() => setNewAdvice((prev) => !prev)}
        >
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
