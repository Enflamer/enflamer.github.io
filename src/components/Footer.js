import React from "react";
import '../style/footer.scss'
import '../style/header.scss'

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="main-footer-container layout-max-width">
        <div className="main-footer-container__title">Обратная связь</div>
        <div className="main-footer-container__about">
          Для связи предпочитаю почту или телеграм, но вы можете обратится в любую удобную для вас.
        </div>
        <div className="main-footer-container-contacts">
          <a
            className="main-footer-container-contact__email main-footer-container-contacts__email"
            href="mailto:enflaimer@gmail.com"
          >
            nikita.savchenko1997@gmail.com
          </a>
          <br />
          <div className="main-footer-container-contacts-icons">
            <a className="vk" href="https://vk.com/biscotti">
              <div className="main-footer-container-contacts__icons main-footer-container-contacts__vk"></div>
            </a>
            <a className="skype" href="skype:zozozp1">
              <div className="main-footer-container-contacts__icons main-footer-container-contacts__skype"></div>
            </a>
            <a className="telegram" href="https://t.me/enflamer">
              <div className="main-footer-container-contacts__icons main-footer-container-contacts__telegram"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
