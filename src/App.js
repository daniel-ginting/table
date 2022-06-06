import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/table/table.component";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://agile-garden-36934.herokuapp.com/")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          item.dateofbirth = item.dateofbirth.slice(0, 10);
        }
        );
        setData(res);
      });
  }, []);
  return (
    <div className="App">
      <Table data={data} />
      {console.log(data)}
    </div>
  );
}

export default App;
