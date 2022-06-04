import React, { useEffect, useState } from "react";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";
import CustomInput from "../../../components/CustonInput/CustomInput";
import Rate from "../../../assets/img/product/rate.svg";
import Com from "../../../assets/img/product/com.svg";
import Comp from "../../../assets/img/product/comp.svg";
import Fav from "../../../assets/img/product/fav.svg";
import { observer } from "mobx-react-lite";
import { fetchRubrics } from "../../../http/rubricsApi";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { addAccessory } from "../../../http/accessoriesApi";

const AddAccessories = observer(() => {
  const [inputs, setInputs] = useState({
    category: "",
    name: "",
    img: "",
    description: "",
    price: "",
  });
  const [rubrics, setRubrics] = useState([]);
  useEffect(() => {
    document.title = "Добавление аксессуара ";
    fetchRubrics().then((data) => setRubrics(data));
  }, []);

  const selectFile = (e) => {
    console.log(e.target.files[0]);
    setInputs({ ...inputs, img: e.target.files[0] });
  };

  const onChangeInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("rubricId", inputs.category);
      formData.append("name", inputs.name);
      formData.append("img", inputs.img);
      formData.append("description", inputs.description);
      formData.append("price", inputs.price);
      console.log(formData);
      addAccessory(formData).then((data) => data);
      alert('Аксессуар успешно добавлен')
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
                  <form
                    onSubmit={(e) => onSubmitHandler(e)}
                    action=""
                    className="accessories-form"
                  >
                    <h2 className="accessories-form__title title">
                      Добавление аксессуара
                    </h2>
                    <div className="card-item product-card__item">
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
                        <h3 className="product-card__body-name">
                          <CustomInput
                            style={{ width: 240, marginBottom: 10 }}
                            placeholder={"Название"}
                            onChange={(e) =>
                              onChangeInput("name", e.target.value)
                            }
                            value={inputs.name}
                          />
                        </h3>
                        <CustomInput
                          type={"file"}
                          style={{
                            width: 240,
                            display: "block",
                            margin: "0 auto 10px",
                          }}
                          onChange={(e) => selectFile(e)}
                          placeholder={"Изображение"}
                        />
                        <p className="product-card__body-desc">
                          <CustomInput
                            style={{
                              width: 240,
                              display: "block",
                              margin: "0 auto 10px",
                            }}
                            value={inputs.description}
                            onChange={(e) =>
                              onChangeInput("description", e.target.value)
                            }
                            placeholder={"Описание"}
                          />
                        </p>
                      </div>
                      <div className="product-card__stats"></div>
                      <div className="product-card__count">
                        <button className="product-card__count-btn">
                          <span></span>
                        </button>
                        <p className="product-card__count-count">1</p>
                        <button className="product-card__count-btn product-card__count-btn--plus">
                          <span></span>
                        </button>
                      </div>
                      <div className="product-card__bottom">
                        <ul className="product-card__price">
                          <li
                            style={{ display: "flex", alignItems: "center" }}
                            className="product-card__price-item"
                          >
                            <CustomInput
                              style={{
                                width: 100,
                                display: "block",
                                margin: "0 auto",
                              }}
                              value={inputs.price}
                              onChange={(e) =>
                                onChangeInput("price", e.target.value)
                              }
                              placeholder={"Цена"}
                            />
                            <p className="product-card__price-price">₽</p>
                          </li>
                        </ul>
                        <button className="product-card__buy">Добавить</button>
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

export default AddAccessories;
