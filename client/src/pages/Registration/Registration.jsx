import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { registration } from "../../http/userApi";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { MAIN } from "../../utils/consts";
const Registration = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const [inputs, setInputs] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    flat: "",
    index: "",
    password: "",
    repeatPassword: "",
  });
  const [successReg, setSuccessReg] = useState(false);

  const checkStatusReg = (error = "") => {
    if (!successReg) {
      alert(error);
    }
  };

  const onChangeInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };
  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      let data = await registration(inputs).then((data) => data);
      user.setUserRole(data.token.role);
      console.log(data.favId,'favId')
      setSuccessReg(true);
      user.setIsAuth(true);
      user.setAboutUser({ fName: data.fName, sName: data.sName });
      user.setUserId(data.token.id)
      user.setFavUserId(data.favId);
      user.setFavUserId(data.basketId)
      localStorage.setItem('firstName',data.fName)
      localStorage.setItem('secondName',data.sName)
      localStorage.setItem('id', data.token.id)
      localStorage.setItem('favId', data.favId);
      localStorage.setItem('basketId', data.basketId)
      alert(
        `${user.aboutUser}, вы успешно зарегистрировались!`
      );
      history.push(MAIN);
    } catch (e) {
      checkStatusReg(e.response.data.message);
    }
  };

  return (
    <>
      <main>
        <section className="reg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="reg__title title">Регистрация</h1>
                <form
                  action=""
                  className="reg__form"
                  onSubmit={(e) => onSubmitForm(e)}
                >
                  <div className="reg__form-wrap">
                    <p className="reg__form-title">Основные данные</p>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Имя"
                        value={inputs.firstName}
                        onChange={(e) =>
                          onChangeInput("firstName", e.target.value)
                        }
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Фамилия"
                        value={inputs.secondName}
                        onChange={(e) =>
                          onChangeInput("secondName", e.target.value)
                        }
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Отчество"
                        value={inputs.lastName}
                        onChange={(e) =>
                          onChangeInput("lastName", e.target.value)
                        }
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={inputs.email}
                        onChange={(e) => onChangeInput("email", e.target.value)}
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="phone"
                        placeholder="Телефон"
                        value={inputs.phone}
                        onChange={(e) => onChangeInput("phone", e.target.value)}
                        className="reg__form-input"
                      />
                    </label>
                  </div>
                  <div className="reg__form-wrap">
                    <p className="reg__form-title">Ваш адрес</p>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Город"
                        value={inputs.city}
                        onChange={(e) => onChangeInput("city", e.target.value)}
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Улица, номер дома"
                        value={inputs.street}
                        onChange={(e) =>
                          onChangeInput("street", e.target.value)
                        }
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Квартира"
                        value={inputs.flat}
                        onChange={(e) => onChangeInput("flat", e.target.value)}
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="text"
                        placeholder="Индекс"
                        value={inputs.index}
                        onChange={(e) => onChangeInput("index", e.target.value)}
                        className="reg__form-input"
                      />
                    </label>
                  </div>
                  <div className="reg__form-wrap">
                    <p className="reg__form-title">Ваш пароль</p>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="password"
                        placeholder="Пароль"
                        value={inputs.password}
                        onChange={(e) =>
                          onChangeInput("password", e.target.value)
                        }
                        className="reg__form-input"
                      />
                    </label>
                    <label htmlFor="" className="reg__form-label">
                      <input
                        type="password"
                        placeholder="Повторите пароль"
                        value={inputs.repeatPassword}
                        onChange={(e) =>
                          onChangeInput("repeatPassword", e.target.value)
                        }
                        className="reg__form-input"
                      />
                    </label>
                    <input
                      type="submit"
                      value="Зарегистрироваться"
                      className="reg__form-sub"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default Registration;
