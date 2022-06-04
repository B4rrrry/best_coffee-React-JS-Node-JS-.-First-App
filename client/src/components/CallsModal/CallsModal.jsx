import React, { useState } from "react";
import { addCall } from "../../http/backCallsApi";

const CallsModal = ({callsModal, setCallsModal}) => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
  });
 
  const onChangeInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("phone", inputs.phone);
      addCall(formData)
        .then((data) => alert("Вам перезвонят в течении 2 часов :)"))
        .catch((res) => alert(res.response.data.message));
    } catch (e) {
      console.log(e.message);
    }
  };
  
  return (
    <div className={callsModal ? "modal-request modal-request--active" : "modal-request"}>
      <p className="modal-request__title">Свяжитесь со мной</p>
      <div className="modal-request__close" onClick={() => setCallsModal(false)}>
        <span></span>
      </div>
      <form
        action=""
        className="modal-request__form"
        onSubmit={(e) => onSubmitForm(e)}
      >
        <label htmlFor="" className="modal-request__label">
          <input
            type="text"
            placeholder="Имя"
            className="modal-request__input"
            value={inputs.name}
            onChange={(e) => onChangeInput("name", e.target.value)}
          />
        </label>
        <label htmlFor="" className="modal-request__label">
          <input
            type="phone"
            placeholder="Телефон"
            className="modal-request__input"
            value={inputs.phone}
            onChange={(e) => onChangeInput("phone", e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Отправить запрос"
          className="modal-request__sub"
        />
        <p className="modal-request__text">
          Мы перезваниваем в рабочее время в течение 2 часов
        </p>
      </form>
    </div>
  );
};

export default CallsModal;
