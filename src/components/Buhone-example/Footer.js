import React from "react";

export default function Footer() {
  return (
    <div className="buhone-footer">
      <div className="wrapper">
        <div className="buhone-footer-content">
          <div className="buhone-footer-content-info">
            <div className="buhone-footer-content-info__name">Связь с нами</div>
            <div className="buhone-footer-content-info__about">
              У вас остались вопросы? Напишите нам - мы ответим в ближайшее
              время!
            </div>
            <div className="buhone-footer-content-info-contacts">
              <div className="buhone-footer-content-info-contacts__item buhone-footer-content-info-contacts__item--phone">
                +7 (111) 222-33-44
              </div>
              <div className="buhone-footer-content-info-contacts__item buhone-footer-content-info-contacts__item--mail">
                order@bu-one.ru
              </div>
            </div>
          </div>
          <div className="buhone-footer-content-letter">
            <div className="buhone-footer-content-letter__item">
              <div className="buhone-footer-content-letter-item__name">Имя</div>
              <label>
                <input
                  className="buhone-footer-content-letter-item__first-name"
                  type="text"
                  placeholder="Иван"
                />
              </label>
            </div>
            <div className="buhone-footer-content-letter__item">
              <div className="buhone-footer-content-letter-item__name">Фамилия</div>
              <label>
                <input
                  className="buhone-footer-content-letter-item__second-name"
                  type="text"
                  placeholder="Иванов"
                />
              </label>
            </div>
            <div className="buhone-footer-content-letter__item buhone-footer-content-letter__item--last">
              <div className="buhone-footer-content-letter-item__name">Сообщение</div>
              <label>
                <textarea
                  className="buhone-footer-content-letter-item__message"
                  type="text"
                  rows="3"
                  placeholder="Ваше сообщение"
                ></textarea>
              </label>
            </div>
            <div className="buhone-footer-content-letter__button">
              Отправить сообщение
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
