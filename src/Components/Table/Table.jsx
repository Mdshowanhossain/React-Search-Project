import React, { useState } from "react";
import "./Table.css";
import { FakeData } from "../Fakedata/MOCK_DATA";
const Table = ({ data, query, setQuery }) => {
  //   console.log(data);

  return (
    <>
      <div className="table-container">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
