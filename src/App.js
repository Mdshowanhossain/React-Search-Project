import React, { useState } from "react";
import "./App.css";
import { FakeData } from "./Components/Fakedata/MOCK_DATA";

import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";

const App = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    // console.log(data);
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <div className="main-container">
        <Search setQuery={setQuery} />
        <Table data={search(FakeData)} />
      </div>
    </>
  );
};

export default App;
