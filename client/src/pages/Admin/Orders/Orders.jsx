import React, { useEffect, useState } from "react";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";
import { Table } from "react-bootstrap";
import { fetchOrders } from "../../../http/ordersApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    document.title = "Заказы ";
    fetchOrders().then(data => setOrders([...data]))
  }, []);
  return (
    <main className="admin-main">
      <section className="subscribers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribers-wrap wrap">
                <AdminMenu />
                <div className="subscribers-info">
                  <h2 className="accessories-form__title title">
                    Заказы
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>ФИО</th>
                        <th>Адрес</th>
                        <th>Стоимость</th>
                        <th>Дата заказа</th>
                        <th>Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                    {orders.length ? (
                        orders.map((order) => {
                          return (
                            <tr>
                            <td>1</td>
                            <td>Руденко Дмитрий Андреевич</td>
                            <td>г. Омск, ул.Майорова 31, кв 14</td>
                            <td>2000</td>
                            <td>31.05.2022</td>
                            <td>Доставлен</td>
                          </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>Отсуствуют :(</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Orders;
