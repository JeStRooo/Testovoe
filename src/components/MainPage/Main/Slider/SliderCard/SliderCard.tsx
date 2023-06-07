import React from 'react';

import ModalForm from "../../../../UI/ModalForm/ModalForm";

import {useModalFormProvider} from "../../../../ModalFormProvider/ModalFormProvider";

import {SliderCardType} from "../../../../../types/slider";

import classes from "./SliderCard.module.scss";

interface SliderCardPropsType {
  card: SliderCardType
}

const SliderCard: React.FC<SliderCardPropsType> = ({card}) => {
  const {isModal, isShowModal} = useModalFormProvider()

  return (
    <div className={classes.slider__card}>
      <img src={card.icon}
           className={classes.slider__card__image}
           alt="Услуга"
      />
      <div className={classes.slider__card__info}>
        <h2 className={classes.slider__card__info__title}>
          {card.title}
        </h2>
        <p className={classes.slider__card__info__sex}>
          для мужчин
        </p>
        <ul className={classes.slider__card__info__list}>
          {card.services.map(service =>
            <li key={service}>
              {service}
            </li>
          )}
        </ul>
        <div className={classes.slider__card__info__prices}>
          <p className={classes.slider__card__info__prices__currentPrice}>
            Всего {card.currentPrice}₽
          </p>
          <p className={classes.slider__card__info__prices__previousPrice}>
            {card.previousPrice}₽
          </p>
        </div>
        <div className={classes.slider__card__info__moreInfo}>
          <button type="submit"
                  className={classes.slider__card__info__moreInfo__buttonEnroll}
                  onClick={isShowModal}
          >
            Записатьтся
          </button>
          <a href="#" className={classes.slider__card__info__moreInfo__link}>
            Подробнее
          </a>
          {isModal && (
            <ModalForm
              open={isModal}
              handleModal={isShowModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;