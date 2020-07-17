import React from "react";
import '../style/header.scss'

export default function Header() {
  return (
    <div className="main-page">
      <div className="header">
        <div id="bgimg" className="header-container layout-max-width">
          <div className="header-container-about">
            <span class="header-container-about__name">Никита Савченко</span>
            <hr className="header-container-about__underline" />
            <div className="header-container-about__info">
              Верстка, логика веб-сайтов.
            </div>
          </div>
          <div className="header-container-contact">
            <a
              className="header-container-contact__email"
              href="mailto:enflaimer@gmail.com"
            >
              nikita.savchenko1997@gmail.com
            </a>
            <br />
            <a className="vk" href="https://vk.com/biscotti">
              <div className="header-container-contact__icons header-container-contact__vk"></div>
            </a>
            <a className="skype" href="skype:zozozp1">
              <div className="header-container-contact__icons header-container-contact__skype"></div>
            </a>
            <a className="telegram" href="https://t.me/enflamer">
              <div className="header-container-contact__icons header-container-contact__telegram"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
