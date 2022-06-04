import React, { useState } from "react";

import SubsBg from "../../assets/img/subs/img.png";
import { addSub } from "../../http/subscribersApi";

const SubsForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    checked: false,
  });

  const onChangeInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    try {
      if (inputs.checked) {
        let formData = new FormData();
        formData.append("email", inputs.email);
        console.log(inputs.email);
        addSub(formData)
          .then((data) => alert('Вы успешно подписались на рассылку:)'))
          .catch((res) => alert(res.response.data.message))
      } else {
        alert("Необходимо ваше согласие на обработку персональных данных");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section className="subs">
      <img src={SubsBg} alt="img" className="subs__img" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subs__title title">ПОДПИСКА НА НОВОСТИ</h2>
            <p className="subs__subtitle">
              Подпишитесь на наши новости, чтобы узнавать о новинках, скидках и
              новых статьях
            </p>
            <form
              action=""
              className="subs-form"
              onSubmit={(e) => onSubmitForm(e)}
            >
              <ul className="subs-form__list">
                <li className="subs-form__list-item">
                  <input
                    type="email"
                    name="email"
                    id="subs-email"
                    placeholder="Введите ваш e-mail"
                    className="subs-form__list-input"
                    value={inputs.email}
                    onChange={(e) => onChangeInput("email", e.target.value)}
                  />
                  <input
                    type="submit"
                    value=""
                    className="subs-form__list-sub"
                  />
                </li>
                <li className="subs-form__list-item">
                  <label className="subs-form__list-label" htmlFor="subs-agree">
                    <input
                      className="subs-form__list-checkbox"
                      type="checkbox"
                      name="subs-agree"
                      id="subs-agree"
                      value={inputs.checked}
                      onChange={(e) =>
                        onChangeInput("checked", e.target.checked)
                      }
                    />
                    <span></span>
                  </label>
                  <p className="subs-form__list-text">
                    Согласен с условиями обработки персональных данных и
                    Пользовательского соглашения
                  </p>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsForm;
