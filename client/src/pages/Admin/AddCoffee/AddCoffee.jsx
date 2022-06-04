import React, { useEffect, useState } from "react";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";
import CustomInput from "../../../components/CustonInput/CustomInput";
import Rate from "../../../assets/img/product/rate.svg";
import Com from "../../../assets/img/product/com.svg";
import Comp from "../../../assets/img/product/comp.svg";
import Fav from "../../../assets/img/product/fav.svg";

import { observer } from "mobx-react-lite";
import { addProduct } from "../../../http/productsApi";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { fetchRubrics } from "../../../http/rubricsApi";
import { fetchTypes } from "../../../http/typesApi";
import { fetchForWhat } from "../../../http/forWhatApi";

const AddCoffee = observer(() => {
  const [inputs, setInputs] = useState({
    category: "",
    name: "",
    variant: "",
    img: "",
    description: "",
    acidity: "",
    density: "",
    for250g: "",
    for1000g: "",
    forWhat: "",
    forMilk: false,
    forTurk: false,
    forMachine: false,
    forHorn: false,
  });
  const [rubrics, setRubrics] = useState([]);
  const [types, setTypes] = useState([]);
  const [forWhat, setForWhat] = useState([]);

  const selectFile = (e) => {
    console.log(e.target.files[0]);
    setInputs({ ...inputs, img: e.target.files[0] });
  };

  useEffect(() => {
    document.title = "Добавление кофе ";
    fetchRubrics().then((data) => setRubrics(data));
    fetchTypes().then((data) => setTypes(data));
    fetchForWhat().then((data) => setForWhat(data));
  }, []);

  const onChangeInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("rubricId", inputs.category);
      formData.append("forWhatId", inputs.forWhat);
      formData.append("name", inputs.name);
      formData.append("typeId", inputs.variant);
      formData.append("img", inputs.img);
      formData.append("description", inputs.description);
      formData.append("acidity", inputs.acidity);
      formData.append("density", inputs.density);
      formData.append("for250g", inputs.for250g);
      formData.append("for1000g", inputs.for1000g);
      formData.append("forMilk", inputs.forMilk);
      formData.append("forHorn", inputs.forHorn);
      formData.append("forMachine", inputs.forMachine);
      formData.append("forTurk", inputs.forTurk);
      console.log(formData);
      addProduct(formData).then((data) => data);
      alert('Товар успешно добавлен')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <main className="admin-main">
        <section className="accessories">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="accessories-wrap wrap">
                  <AdminMenu />
                  <form action="" className="accessories-form">
                    <h2 className="accessories-form__title title">
                      Добавление кофе
                    </h2>
                    <div className="card-item product-card__item">
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch />}
                            label="Для молочных напитков"
                            onChange={() =>
                              setInputs(({ forMilk }) => ({
                                ...inputs,
                                forMilk: !forMilk,
                              }))
                            }
                          />
                          <FormControlLabel
                            control={<Switch />}
                            label="Для рожковых кофеварок"
                            onChange={() =>
                              setInputs(({ forHorn }) => ({
                                ...inputs,
                                forHorn: !forHorn,
                              }))
                            }
                          />
                          <FormControlLabel
                            control={<Switch />}
                            label="Для турки"
                            onChange={() =>
                              setInputs(({ forTurk }) => ({
                                ...inputs,
                                forTurk: !forTurk,
                              }))
                            }
                          />
                          <FormControlLabel
                            control={<Switch />}
                            label="Для кофемашины"
                            onChange={() =>
                              setInputs(({ forMachine }) => ({
                                ...inputs,
                                forMachine: !forMachine,
                              }))
                            }
                          />
                        </FormGroup>
                      </div>
                      <div className="product-card-top">
                        <ul className="product-card__info">
                          <li className="product-card__info-item">
                            <img
                              src={Rate}
                              alt="rate"
                              className="product-card__info-img"
                            />
                            <p className="product-card__info-value product-card__info-value--rate"></p>
                          </li>
                          <li className="product-card__info-item">
                            <img
                              src={Com}
                              alt="comments"
                              className="product-card__info-img"
                            />
                            <p className="product-card__info-value product-card__info-value--comm"></p>
                          </li>
                          <li className="product-card__info-item">
                            <img
                              src={Comp}
                              alt="compare"
                              className="product-card__info-img"
                            />
                          </li>
                          <li className="product-card__info-item">
                            <img
                              src={Fav}
                              alt="favorites"
                              className="product-card__info-img"
                            />
                          </li>
                        </ul>
                        <Box sx={{ minWidth: 140 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Категория
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={inputs.category}
                              label="Категория"
                              onChange={(e) =>
                                onChangeInput("category", e.target.value)
                              }
                            >
                              {rubrics.map((rubric) => {
                                return (
                                  <MenuItem key={rubric.id} value={rubric.id}>
                                    {rubric.name}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div className="product-card__body">
                        <Box sx={{ minWidth: 140, marginBottom: 3 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Тип товара
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={inputs.forWhat}
                              label="Тип товара"
                              onChange={(e) =>
                                onChangeInput("forWhat", e.target.value)
                              }
                            >
                              {forWhat.map((item) => {
                                return (
                                  <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Box>
                        <h3 className="product-card__body-name">
                          <CustomInput
                            onChange={(e) =>
                              onChangeInput("name", e.target.value)
                            }
                            style={{ width: 240, marginBottom: 10 }}
                            placeholder={"Название"}
                          />
                        </h3>
                        <Box sx={{ minWidth: 140, marginBottom: 3 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Способ обработки
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={inputs.variant}
                              label="Способ обработки"
                              onChange={(e) =>
                                onChangeInput("variant", e.target.value)
                              }
                            >
                              {types.map((type) => {
                                return (
                                  <MenuItem key={type.id} value={type.id}>
                                    {type.name}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Box>
                        <CustomInput
                          onChange={(e) => selectFile(e)}
                          type={"file"}
                          style={{
                            width: 240,
                            display: "block",
                            margin: "0 auto 10px",
                          }}
                        />
                        <p className="product-card__body-desc">
                          <CustomInput
                            onChange={(e) =>
                              onChangeInput("description", e.target.value)
                            }
                            style={{
                              width: 240,
                              display: "block",
                              margin: "0 auto 10px",
                            }}
                            placeholder={"Описание"}
                          />
                        </p>
                      </div>
                      <div className="product-card__stats">
                        <ul className="product-card__stats-list">
                          <li className="product-card__stats__item">
                            <CustomInput
                              onChange={(e) =>
                                e.target.value > 0 && e.target.value <= 100
                                  ? onChangeInput("acidity", e.target.value)
                                  : null
                              }
                              placeholder={"Кислотность"}
                              style={{ marginBottom: 10 }}
                            />
                            <div className="product-card__stats-line">
                              <span
                                style={{ width: `${inputs.acidity}px` }}
                              ></span>
                            </div>
                            <p className="product-card__stats-name">
                              Кислотность
                            </p>
                          </li>
                          <li className="product-card__stats__item">
                            <CustomInput
                              onChange={(e) =>
                                e.target.value > 0 && e.target.value <= 100
                                  ? onChangeInput("density", e.target.value)
                                  : null
                              }
                              placeholder={"Плотность"}
                              style={{ marginBottom: 10 }}
                            />
                            <div className="product-card__stats-line">
                              <span
                                style={{ width: `${inputs.density}px` }}
                              ></span>
                            </div>
                            <p className="product-card__stats-name">
                              Плотность
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="product-card__count">
                        <button className="product-card__count-btn">
                          <span></span>
                        </button>
                        <p className="product-card__count-count">1</p>
                        <button className="product-card__count-btn product-card__count-btn--plus">
                          <span></span>
                        </button>
                      </div>
                      <div
                        style={{ display: "flex", flexWrap: "wrap" }}
                        className="product-card__bottom"
                      >
                        <ul className="product-card__price">
                          <li className="product-card__price-item">
                            <p className="product-card__price-weight">250 Г.</p>
                            <CustomInput
                              onChange={(e) =>
                                onChangeInput("for250g", e.target.value)
                              }
                              placeholder={"Цена за 250г"}
                              style={{ marginBottom: 10, width: 150 }}
                            />
                          </li>
                          <li className="product-card__price-item">
                            <p className="product-card__price-weight">
                              1000 г.
                            </p>
                            <CustomInput
                              onChange={(e) =>
                                onChangeInput("for1000g", e.target.value)
                              }
                              placeholder={"Цена за 1000г"}
                              style={{ marginBottom: 10, width: 150 }}
                            />
                          </li>
                        </ul>
                        <button
                          style={{ marginLeft: "auto" }}
                          className="product-card__buy"
                          onClick={(e) => onSubmitHandler(e)}
                        >
                          Добавить
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default AddCoffee;
