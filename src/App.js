import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/table/table.component";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://agile-garden-36934.herokuapp.com/")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
