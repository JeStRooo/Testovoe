import React from 'react';

import Slider from "./Slider/Slider";

import classes from "./Main.module.scss";

import hospital from "../../../assets/images/hospital.svg";

const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <div className={classes.main__hospital}>
        <img src={hospital}
             alt="Больница"
             className={classes.main__hospital__hospitalImage}
        />
        <div className={classes.main__hospital__info}>
          <section className={classes.main__hospital__info__wrapper}>
            <h2 className={classes.main__hospital__info__title}>
              Многопрофильная
              клиника для детей
              и взрослых
            </h2>
            <p className={classes.main__hospital__info__subTitle}>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
          </section>
        </div>
      </div>

      <Slider />
    </main>
  );
};

export default Main;