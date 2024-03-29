import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/table/table.component";
import Form from "./components/form/form.component";
import AuthForm from "./components/auth-form/auth-form.component";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState("form");

  // useEffect(() => {
  //   fetch("https://agile-garden-36934.herokuapp.com/students")
  //     // fetch("http://localhost:3000/students")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res);
  //     });
  // }, []);

  const submitHandler = (code) => {
    fetch(
      "https://students-list-server.herokuapp.com/students",
      // "http://localhost:3000/students",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (typeof res === "object") {
          setData(res);
          setRoute("authenticated");
          window.sessionStorage.setItem("authenticated", true)
        }
      });
  };

  useEffect(() => {
    fetch(
      "https://students-list-server.herokuapp.com/students",
      // "http://localhost:3000/students",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: '1234',
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (typeof res === "object") {
          setData(res);
        }
      });
  }, [])

  const renderRoute = () => {
    if (
      route === "authenticated" ||
      window.sessionStorage.getItem("authenticated")
    ) {
      
      return (
        <div className="main-page">
          <h1>Students List</h1>
          <Form setLoading={setLoading} />
          <Table data={data} setLoading={setLoading} loading={loading} />
          {console.log(1234)}
        </div>
      );
    } else if (route === "form") {
      return <AuthForm submitHandler={submitHandler} />;
    }
  };
  return (
    <div className="App" style={{ cursor: loading ? "progress" : "default" }}>
      {renderRoute()}
    </div>
  );
}

export default App;
