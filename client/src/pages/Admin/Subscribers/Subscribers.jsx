import React, { useEffect, useState } from "react";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";
import { Table } from "react-bootstrap";
import { fetchSubs } from "../../../http/subscribersApi";

const Subscribers = () => {
  const [subs, setSubs] = useState([]);
  useEffect(() => {
    document.title = "Подписчки на новостную рассылку ";
    fetchSubs().then((data) => setSubs([...data]));
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
                    Подписчики на новостную рассылку
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>E-mail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subs.length ? (
                        subs.map((sub) => {
                          return (
                            <tr key={sub.id}>
                              <td>{sub.id}</td>
                              <td>{sub.email}</td>
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
};

export default Subscribers;
