import React from "react";
import Tg from '../../assets/img/socials/tg.svg';
import Yt from '../../assets/img/socials/yt.svg';
import Vk from '../../assets/img/socials/vk.svg';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-wrap wrap">
                  <nav>
                    <ul className="footer__nav">
                      <li className="footer__nav-item">
                        <p className="footer__nav-title">Помощь</p>
                      </li>
                      <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                          Как выбрать кофе?
                        </a>
                      </li>
                      <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                          Как приготовить кофе?
                        </a>
                      </li>
                    </ul>
                    <ul className="footer__nav">
                      <li className="footer__nav-item">
                        <p className="footer__nav-title">Каталог</p>
                      </li>
                      <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                          Кофе
                        </a>
                      </li>
                      <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                          Чай
                        </a>
                      </li>
                      <li className="footer__nav-item">
                        <a href="#" className="footer__nav-link">
                          Аксессуары
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="footer-contacts">
                    <a href="tel:88003334980" className="footer-contacts__phone">
                      8 (800) 333-49-80
                    </a>
                    <p className="footer-contacts__phone-text">
                      Бесплатный звонок по России
                    </p>
                    <ul className="socials">
                      <li className="socials__item">
                        <a href="#" className="socials__link">
                          <img
                            src={Tg}
                            alt="Telegram"
                            className="socials__img"
                          />
                        </a>
                      </li>
                      <li className="socials__item">
                        <a href="#" className="socials__link">
                          <img
                            src={Yt}
                            alt="YouTube"
                            className="socials__img"
                          />
                        </a>
                      </li>
                      <li className="socials__item">
                        <a href="#" className="socials__link">
                          <img
                            src={Vk}
                            alt="VK"
                            className="socials__img"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-bot">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__wrap wrap">
                  <p className="footer__date">© 2022 «Best Coffee»</p>
                  <ul className="footer-links">
                    <li className="footer-links__item">
                      <a href="#" className="footer-links__link">
                        Политика конфиденциальности
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href="#" className="footer-links__link">
                        Пользовательское соглашение
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href="#" className="footer-links__link">
                        Публичная оферта
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
