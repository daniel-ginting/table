import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/table/table.component";
import Form from "./components/form/form.component";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://agile-garden-36934.herokuapp.com/students")
    // fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div className="App" style={{ cursor: loading ? "progress" : "default" }}>
      <h1>Students List</h1>
      <Form setLoading={setLoading}/>
      <Table data={data} setLoading={setLoading} loading={loading}/>
    </div>
  );
}

export default App;
