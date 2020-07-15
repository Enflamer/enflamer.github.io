import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-navbar">
          <div className="header-navbar-logo">
            <div className="header-navbar-logo__photo"></div>
            <div className="header-navbar-logo__name">BuhOne</div>
          </div>
          <div className="header-navbar__wrapper">
            <div className="header-navbar-contacts">
              <a
                className="header-navbar-contacts__item header-navbar-contacts__item--phone"
                href="tel:+7(111)222-33-44"
              >
                8(111)222-33-44
              </a>
              <a
                className="header-navbar-contacts__item header-navbar-contacts__item--clock"
                href="#"
              >
                Пн-Пт 10:00-18:00
              </a>
              <a
                className="header-navbar-contacts__item header-navbar-contacts__item--mail"
                href="#"
              >
                order@buhone.ru
              </a>
              <a
                className="header-navbar-contacts__item header-navbar-contacts__item--pointer"
                href="#"
              >
                Невский пр. 130
              </a>
            </div>
            <div className="header-navbar-menu">
              <a className="header-navbar-menu__item" href="#">
                Главная
              </a>
              <a className="header-navbar-menu__item" href="#">
                Услуги
              </a>
              <a className="header-navbar-menu__item" href="#">
                Кейсы
              </a>
              <a className="header-navbar-menu__item" href="#">
                О компании
              </a>
              <a className="header-navbar-menu__item" href="#">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-slider">
        <div className="wrapper">
          <div className="header-slider-content">
            <div className="header-slider-content__name">
              Бухгалтерские услуги в Санкт-Петербурге
            </div>
            <div className="header-slider-content__button">Наша презентация</div>
          </div>
          <div className="header-slider-controls">
            <div className="header-slider-controls-dots">
              <div className="header-slider-controls-dots__circle"></div>
              <div className="header-slider-controls-dots__circle"></div>
              <div className="header-slider-controls-dots__circle"></div>
              <div className="header-slider-controls-dots__circle"></div>
            </div>
            <div className="header-slider-controls-nav">
              <div className="header-slider-controls-nav__button header-slider-controls-nav__button--prev"></div>
              <div className="header-slider-controls-nav__button header-slider-controls-nav__button--next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
