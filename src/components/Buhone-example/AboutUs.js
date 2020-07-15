import React from "react";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="wrapper">
        <div className="about-us-wrapper">
          <div className="about-us-info">
            <div className="about-us-info__about">О нас</div>
            <div className="about-us-info__name">
              Компания <p>ИвановПром</p>
            </div>
            <div className="about-us-info__text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн.
            </div>
          </div>
          <div className="about-us-content">
            <div className="about-us-content-item">
              <div className="about-us-content-item__count">90</div>
              <p>Завершено крупных сделок</p>
              <a href="#" className="about-us-content-item__case">
                Все кейсы
              </a>
            </div>
            <div className="about-us-content-item">
              <div className="about-us-content-item__count">90</div>
              <p>Завершено крупных сделок</p>
              <a href="#" className="about-us-content-item__case">
                Все кейсы
              </a>
            </div>
            <div className="about-us-content-item">
              <div className="about-us-content-item__count">90</div>
              <p>Завершено крупных сделок</p>
              <a href="#" className="about-us-content-item__case">
                Все кейсы
              </a>
            </div>
            <div className="about-us-content-item">
              <div className="about-us-content-item__count">90</div>
              <p>Завершено крупных сделок</p>
              <a href="#" className="about-us-content-item__case">
                Все кейсы
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
