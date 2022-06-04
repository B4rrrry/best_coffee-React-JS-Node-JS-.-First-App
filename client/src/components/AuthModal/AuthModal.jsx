import React, { useContext, useState } from "react";
import { Context } from "../..";
import { login } from "../../http/userApi";

const AuthModal = ({ authModal, setAuthModal }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [successAuth, setSuccessAuth] = useState(false);

  const { user } = useContext(Context);

  const onChangeInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const checkStatusAuth = (error = "") => {
    if (!successAuth) {
      alert(error);
    }
  };

  const onAuthHandler = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      let data = await login(inputs.email, inputs.password);
      console.log("data", data);
      user.setUserRole(data.token.role);
      setSuccessAuth(true);
      setAuthModal(false);
      user.setIsAuth(true);
      user.setAboutUser({ fName: data.fName, sName: data.sName });
      localStorage.setItem("firstName", data.fName);
      localStorage.setItem("secondName", data.sName);
      localStorage.setItem("favId", data.favId);
    } catch (e) {
      checkStatusAuth(e.response.data.message);
    }
  };

  return (
    <div className={authModal ? "modal-auth modal-auth--active" : "modal-auth"}>
      <p className="modal-auth__title">Вход на сайт</p>
      <div className="modal-auth__close" onClick={() => setAuthModal(false)}>
        <span></span>
      </div>
      <form
        onSubmit={(e) => onAuthHandler(e)}
        action=""
        className="modal-auth__form"
      >
        <label htmlFor="" className="modal-auth__label">
          <input
            type="text"
            placeholder="E-mail"
            value={inputs.email}
            onChange={(e) => onChangeInput("email", e.target.value)}
            className="modal-auth__input"
          />
        </label>
        <label htmlFor="" className="modal-auth__label">
          <input
            type="password"
            placeholder="Пароль"
            value={inputs.password}
            onChange={(e) => onChangeInput("password", e.target.value)}
            className="modal-auth__input"
          />
        </label>
        <input type="submit" value="Войти" className="modal-auth__sub" />
      </form>
    </div>
  );
};

export default AuthModal;
