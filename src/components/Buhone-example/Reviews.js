import React from "react";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="wrapper">
        <div className="reviews-slider">
          <div className="reviews-slider-content">
            <div className="reviews-slider-content__name">Отзывы</div>
            <div className="reviews-slider-content__about">
              Ваши благодарности
            </div>
            <div className="reviews-slider-content-clients">
              <div className="reviews-slider-content-clients__review">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне.
              </div>
              <div className="reviews-slider-content-clients-profile">
                <div className="reviews-slider-content-clients-profile__photo"></div>
                <div className="reviews-slider-content-clients-profile__name">
                  Екатерина Иванова
                  <div className="reviews-slider-content-clients-profile__org">
                    Директор ООО “Раз-два”
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews-slider-controls">
            <div className="reviews-slider-controls-dots">
              <div className="reviews-slider-controls-dots__circle"></div>
              <div className="reviews-slider-controls-dots__circle"></div>
              <div className="reviews-slider-controls-dots__circle"></div>
              <div className="reviews-slider-controls-dots__circle"></div>
            </div>
            <div className="reviews-slider-controls-nav">
              <div className="reviews-slider-controls-nav__button reviews-slider-controls-nav__button--prev"></div>
              <div className="reviews-slider-controls-nav__button reviews-slider-controls-nav__button--next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
