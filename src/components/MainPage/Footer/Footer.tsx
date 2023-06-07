import React from 'react';

import classes from "./Footer.module.scss";

import logoWhite from "../../../assets/images/logo_white.svg";
import whatsUpIcon from "../../../assets/images/whats_up_icon.svg";
import instagramIcon from "../../../assets/images/instagramIcon.svg";
import telegramIcon from "../../../assets/images/telegram.svg";


const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
        <div className={classes.footer__content}>
          <div className={classes.footer__content__mainInfo}>
            <img src={logoWhite} alt="Лого" />
            <nav className={classes.footer__content__mainInfo__navigation}>
              <ul className={classes.footer__content__mainInfo__navigation__list}>
                <li><a href="#">О клинике</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Специалисты</a></li>
                <li><a href="#">Цены</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </nav>
          </div>
          <div className={classes.footer__content__social}>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={whatsUpIcon} alt="What`s Up" />
            </a>
            <a href="#">
              <img src={telegramIcon} alt="Telegram" />
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;