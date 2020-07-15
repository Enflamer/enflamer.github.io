import React from "react";

export default function OurClients() {
  return (
    <div className="our-clients">
      <div className="wrapper">
        <div className="our-clients-slider">
          <div className="our-clients-slider-content">
            <div className="our-clients-slider-content__name">Наши клиенты</div>
            <div className="our-clients-slider-content__about">
              Наша презентация
            </div>
            <div className="our-clients-slider-content-clients">
              <div className="our-clients-slider-content-clients__client"></div>
              <div className="our-clients-slider-content-clients__client"></div>
              <div className="our-clients-slider-content-clients__client"></div>
              <div className="our-clients-slider-content-clients__client"></div>
            </div>
          </div>
          <div className="our-clients-slider-controls">
            <div className="our-clients-slider-controls-dots">
              <div className="our-clients-slider-controls-dots__circle"></div>
              <div className="our-clients-slider-controls-dots__circle"></div>
              <div className="our-clients-slider-controls-dots__circle"></div>
              <div className="our-clients-slider-controls-dots__circle"></div>
            </div>
            <div className="our-clients-slider-controls-nav">
              <div className="our-clients-slider-controls-nav__button our-clients-slider-controls-nav__button--prev"></div>
              <div className="our-clients-slider-controls-nav__button our-clients-slider-controls-nav__button--next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
