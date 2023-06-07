import React, {useState} from 'react';

import SliderCard from "./SliderCard/SliderCard";

import {sliderCards} from "../../../../mockData/sliderCards";

import classes from "./Slider.module.scss";

import arrow from "../../../../assets/images/green_arrow_next.svg";

const Slider: React.FC = () => {
  const [offsetCard, setOffsetCard] = useState({currentCard: 1, offset: 0})

  const nextButtonClick = () => {
    setOffsetCard(prevState => {
      const newOffset = prevState.offset - 100
      const currentCard = prevState.currentCard + 1
      //взависимости от количества карточек, будет возврат к первой карточке
      //умножаем на 100, потому что мы передвигаем карточку на 100%
      if (newOffset === -((sliderCards.length) * 100)) {
        return { currentCard: 1, offset: 0 }
      } else {
        return {...prevState, offset: newOffset, currentCard: currentCard}
      }
    })
  }

  const prevButtonClick = () => {
    setOffsetCard(prevState => {
      const newOffset = prevState.offset + 100
      const currentCard = prevState.currentCard - 1

      if (newOffset === 100) {
        return { currentCard: sliderCards.length, offset: -((sliderCards.length - 1) * 100) }
      } else {
        return {...prevState, offset: newOffset, currentCard: currentCard}
      }
    })
  }

  return (
    <div className={classes.slider}>
      <div className={classes.slider__line}>
        {sliderCards.map(card =>
          <div className={classes.slider__line__container}
               style={{transform: `translateX(${offsetCard.offset}%)`}}
               key={card.id}
          >
            <SliderCard
              card={card}
            />
          </div>
        )}
      </div>
      <div className={classes.slider__sliderHandler}>
        <img
          src={arrow}
          alt="Назад"
          className={classes.slider__sliderHandler__prev}
          onClick={prevButtonClick}
        />
        <div className={classes.slider__sliderHandler__numeration}>
          <span className={classes.slider__sliderHandler__numeration__currentCard}>
            {offsetCard.currentCard}
          </span>
          /{sliderCards.length}
        </div>
        <img
          src={arrow}
          alt="Вперёд"
          className={classes.slider__sliderHandler__next}
          onClick={nextButtonClick}
        />
      </div>
    </div>
  );
};

export default Slider;