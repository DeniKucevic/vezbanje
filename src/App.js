import React, { useEffect, useState } from "react";
import { getProducs } from "./api/dummy-api/dumy-api";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [queryString, setQueryString] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getProducs().then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    if (data.products) {
      const filtered = data.products.filter((item) =>
        item.title.toLowerCase().includes(queryString)
      );
      console.log(filtered);
      setFilteredData(filtered);
    }
  }, [queryString, data.products]);

  return (
    <div className="App">
      <div style={{ marginTop: "2rem" }}>
        <input onChange={(e) => setQueryString(e.target.value)}></input>
        {data.products ? (
          filteredData.map((item) => <p>{item.title}</p>)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
