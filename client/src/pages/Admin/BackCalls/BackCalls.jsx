import React, { useEffect, useState } from "react";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";
import { Table } from "react-bootstrap";
import { fetchCalls } from "../../../http/backCallsApi";

const BackCalls = () => {
  const [calls, setCalls] = useState([]);
  useEffect(() => {
    document.title = "Заявки на обратный звонок ";
    fetchCalls().then((data) => setCalls([...data]));
  }, []);
  return (
    <main className="admin-main">
      <section className="backcalls">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="backcalls-wrap wrap">
                <AdminMenu />
                <div className="backcalls-info">
                  <h2 className="accessories-form__title title">
                    Заявки на обратный звонок
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Телефон</th>
                        <th>Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calls.length ? (
                        calls.map((call) => {
                          return (
                            <tr key={call.id}>
                              <td>{call.id}</td>
                              <td>{call.name}</td>
                              <td>{call.phone}</td>
                              <td>{call.status}</td>
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

export default BackCalls;
