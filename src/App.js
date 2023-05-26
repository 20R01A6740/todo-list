import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Mycomponents/Header.js";
import { Todos } from "./Mycomponents/Todos.js";
import { Footer } from "./Mycomponents/Footer.js";
import { AddTodo } from "./Mycomponents/AddTodo.js";
import { About } from "./Mycomponents/About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="content">
      <Router>
      <Header title="Todo" Search={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
