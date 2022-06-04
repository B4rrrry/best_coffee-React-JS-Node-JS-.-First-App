import React from "react";
import { LoadMore, Preview } from "./ArticlesAssets";

const Articles = () => {
  return (
    <>
      <main>
        <section className="articles">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="articles__title title">ЖУРНАЛ О КОФЕ</h1>
                <div className="articles__wrap wrap">
                  <article className="articles__article">
                    <a
                      href="#"
                      className="articles__article-link articles__prev-link"
                    >
                      <img src={Preview} alt="Preview" className="articles__prev" />
                    </a>
                    <div className="articles__info">
                      <a
                        href="#"
                        className="articles__article-link articles__info-link"
                      >
                        <h2 className="articles__info-title">
                          Общие рекомендации по приготовлению кофе
                        </h2>
                        <p className="articles__info-mdesc">
                          Прежде чем готовить кофе, стоит узнать об основных
                          факторах, которые влияют на его вкус. Это поможет
                          лучше понимать любой метод приготовления и
                          экспериментировать с умом. Мы выделяем шесть таких
                          факторов и рассказываем про них в этой статье.
                        </p>
                        <p className="articles__info-info">
                          <span>07 фев 2022</span> -<span>Дмитрий Руденко</span>{" "}
                          - <span>5</span> мин. на чтение
                        </p>
                      </a>
                    </div>
                  </article>
                  <article className="articles__article">
                    <a
                      href="#"
                      className="articles__article-link articles__prev-link"
                    >
                      <img src={Preview} alt="Preview" className="articles__prev" />
                    </a>
                    <div className="articles__info">
                      <a
                        href="#"
                        className="articles__article-link articles__info-link"
                      >
                        <h2 className="articles__info-title">
                          Общие рекомендации по приготовлению кофе
                        </h2>
                        <p className="articles__info-mdesc">
                          Прежде чем готовить кофе, стоит узнать об основных
                          факторах, которые влияют на его вкус. Это поможет
                          лучше понимать любой метод приготовления и
                          экспериментировать с умом. Мы выделяем шесть таких
                          факторов и рассказываем про них в этой статье.
                        </p>
                        <p className="articles__info-info">
                          <span>07 фев 2022</span> -<span>Дмитрий Руденко</span>{" "}
                          - <span>5</span> мин. на чтение
                        </p>
                      </a>
                    </div>
                  </article>
                </div>
                <button className="articles__load">
                  <img src={LoadMore} alt="..." className="articles__load-img" />
                  Загрузить больше
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Articles;
