import React from "react";
import { Filters, Illu, Kisl, Obzha } from "./HowArticleAssets";


const HowArticle = () => {
  return (
    <>
      <main>
        <section className="how-article">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="how-article__title title">Как выбрать кофе</h1>
                <p className="how-article__text">
                  Наш кофе делится на две основные категории в зависимости от
                  профиля обжарки: для эспрессо и для фильтра. <span></span>{" "}
                  Карточки кофе на сайте визуально обозначают, какой кофе каким
                  способом мы рекомендуем готовить.
                </p>
                <img
                  src={Illu}
                  alt="Карточки кофе"
                  className="how-article__img"
                />
                <p className="how-article__text">
                  Кофе, предназначенный для эспрессо, также отлично подходит для
                  гейзерных кофеварок и турок, а кофе для фильтра идеально{" "}
                  <span></span>
                  раскрывается всеми альтернативными способами заваривания — в
                  капельной кофеварке, френч-прессе, турке, пуровере,{" "}
                  <span></span> аэропрессе или просто чашке.
                </p>
                <p className="how-article__text">
                  Чтобы готовить кофе правильно, мы рекомендуем следовать общим
                  рекомендациям по приготовлению, правильно <span></span>{" "}
                  подбирать размер помола и опираться на наши руководства по
                  приготовлению:
                </p>
                <ul className="how-article__list">
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">эспрессо;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">турка;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">френч-пресс;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">пуровер (V60, Hario);</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">кемекс;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">
                      гейзерная кофеварка(мокка);
                    </p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">капельная кофеварка;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">аэропресс;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">иммерсионная воронка;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">чашка.</p>
                  </li>
                </ul>
                <p className="how-article__text">
                  Чтобы было проще выбрать подходящий кофе, рекомендуем
                  воспользоваться сортировкой:
                </p>
                <img
                  src={Filters}
                  alt="Filters"
                  className="how-article__img"
                />
                <h2 className="how-article__title title">
                  Плотность и кислотность
                </h2>
                <p className="how-article__text">
                  Кофе обладает двумя ключевыми характеристиками вкуса — это
                  плотность и кислотность. Чаще всего кофе выбирают именно по
                  ним.
                </p>
                <p className="how-article__text">
                  Плотность — это то же самое, что насыщенность. Её степень
                  нужно определить для себя <span></span> самостоятельно в
                  зависимости от того, насколько насыщенный кофе вы любите.
                </p>
                <p className="how-article__text">
                  Кислотность — это одна из важнейших характеристик кофе, но не
                  все к ней готовы. Если вы только <span></span> знакомитесь со
                  спешелти кофе, мы рекомендуем заказать кофе с разной степенью
                  кислотности: <span></span>
                  низкой, средней и высокой, и выбрать для себя тот уровень
                  кислотности в кофе, который вам больше <span></span> всего
                  понравится.
                </p>
                <p className="how-article__text">
                  На нашем сайте эти характеристики обозначены в карточке сорта:
                </p>
                <img
                  src={Kisl}
                  alt="Кислотность"
                  className="how-article__img"
                />
                <p className="how-article__text">
                  Уровень кислотности и плотности, как и вкуса кофе в целом,
                  зависит от восьми факторов:
                </p>
                <ul className="how-article__list end__chapter">
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">
                      Терруара: климата, качества почвы и высоты произрастания;
                    </p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">
                      Вида и разновидности кофе;
                    </p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">Способа обработки;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">
                      Правильности хранения и транспортировки;
                    </p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">
                      Цвета и профиля обжарки;
                    </p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">Качества воды;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">Свежести обжарки;</p>
                  </li>
                  <li className="how-article__list-item">
                    <p className="how-article__list-text">
                      Способа и правильности приготовления;
                    </p>
                  </li>
                </ul>
                <h2 className="how-article__title title">Виды кофе</h2>
                <p className="how-article__text">
                  Основные виды кофе: арабика и робуста. Арабика обладает более
                  сложным вкусом, а робуста содержит больше <span></span>{" "}
                  кофеина и отличается очень высокой плотностью, горечью и
                  отсутствием кислотности. Арабика считается более <span></span>{" "}
                  сложным и вкусным кофе, хотя и у робусты есть свои фанаты.
                </p>
                <h2 className="how-article__title title">Цвет обжарки</h2>
                <p className="how-article__text">
                  Существует три основных степени обжарки: светлая, средняя и
                  тёмная. Светлая обжарка подходит для <span></span>{" "}
                  альтернативных способов приготовления: кофе такой обжарки
                  более кислотный и фруктово-ягодный. <span></span> Тёмная
                  обжарка подходит для приготовления классических капучино и
                  латте и тех, кто любит горчинку в эспрессо. <span></span> А
                  кофе средней обжарки — это некий баланс: он содержит
                  фруктово-ягодные ноты вместе с ореховыми или карамельными
                  оттенками в аромате.
                </p>
                <p className="how-article__text">
                  Степень обжарки можно выбрать в панели фильтра
                </p>
                <img
                  src={Obzha}
                  alt="Кислотность"
                  className="how-article__img"
                />
                <h2 className="how-article__title title">
                  Как заказать кофе на сайте
                </h2>
                <p className="how-article__text">
                  Нужно зайти в раздел «кофе», настроить фильтры, исходя из
                  личных вкусовых предпочтений, добавить в корзину выбранный
                  сорт в нужном количестве и оформить заказ: войти в корзину,{" "}
                  <span></span> выбрать способ доставки и оплаты.
                </p>
                <p className="how-article__text">
                  После получения заказа важно правильно хранить кофе дома.{" "}
                  <span></span> Кроме того, рекомендуем наш блог, в котором мы
                  регулярно публикуем статьи о кофе.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HowArticle;
