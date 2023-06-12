import React, {useState} from 'react';

import MediaQuery from 'react-responsive';

import Modal from "../../UI/ModalForm/ModalForm";

import {useModalFormProvider} from "../../ModalFormProvider/ModalFormProvider";

import classes from "./Header.module.scss";

import logoGreen from "../../../assets/images/logo_green.svg";
import whatsUpIcon from "../../../assets/images/whats_up_icon.svg";
import locationIcon from "../../../assets/images/location.svg";

const Header: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const {isModal, isShowModal} = useModalFormProvider()

  const isShowClass = isShowMenu ? classes.header__navigationMobile__menuButtonActive
                                  : classes.header__navigationMobile__menuButton

  const openMaps = () => {
    const encodedAddress = encodeURIComponent('ул. Ленина, 2БЛенинаван, Ростовская обл., 346818\n');
    const href = `https://www.google.com/maps/place/${encodedAddress}`;
    window.open(href, '_blank');
  };

  return (
    <header className={classes.header}>
        <section className={classes.header__wrapper}>
          <nav className={classes.header__navigationMobile}>
            <button className={isShowClass}
                    onClick={() => setIsShowMenu(!isShowMenu)}
            >
          <span
            className={classes.header__navigationMobile__barTop}
          >
          </span>
              <span
                className={classes.header__navigationMobile__barMid}
              >
          </span>
              <span
                className={classes.header__navigationMobile__barBot}
              >
          </span>
            </button>
            {isShowMenu && (
              <ul className={classes.header__navigationMobile__menu}>
                <li><a href="#">О клинике</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Специалисты</a></li>
                <li><a href="#">Цены</a></li>
                <li><a href="#">Контакты</a></li>
                <li>
                  <a href="#" onClick={isShowModal}>Записаться на приём</a>
                </li>
              </ul>
            )}
            {isModal && (
              <Modal open={isModal} handleModal={isShowModal} />
            )}
          </nav>
          <div className={classes.header__ourLocation}>
            <img src={logoGreen} alt="Лого" width="62px"/>
            <MediaQuery minWidth={1024}>
              <div className={classes.header__ourLocation__findUs}
                   onClick={openMaps}
              >
                <div className={classes.header__ourLocation__findUs__city}>
                  <img src={locationIcon} alt="Наше местоположение" />
                  <p className={classes.header__ourLocation__findUs__city__cityName}>
                    Ростов-на-Дону
                  </p>
                </div>
                <p className={classes.header__ourLocation__findUs__address}>
                  ул. Ленина 2Б
                </p>
              </div>
            </MediaQuery>
          </div>
          <div className={classes.header__contacts}>
            <MediaQuery minWidth={1024}>
              <a href="#">
                <img src={whatsUpIcon} alt="What`s Up"/>
              </a>
            </MediaQuery>
            <h4 className={classes.header__contacts__tel}>
              +7(863) 000 00 00
            </h4>
            <p className={classes.header__contacts__city}>
              Ростов-на-Дону
            </p>
            <MediaQuery minWidth={1024}>
              <button type="submit"
                      className={classes.header__buttonEnroll}
                      onClick={isShowModal}
              >
                Записатьтся на приём
              </button>
            </MediaQuery>
          </div>
        </section>
      <nav className={classes.header__menuBackground}>
        <section className={classes.header__wrapper}>
          <ul className={classes.header__menuBackground__menu}>
            <li><a href="#">О клинике</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Специалисты</a></li>
            <li><a href="#">Цены</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;