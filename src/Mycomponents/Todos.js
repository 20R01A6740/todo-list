import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center text-primary">
        <b>
          <u>Todos List</u>
        </b>
      </h3>
      {props.todos.length === 0 ? (
        <div className="no-todos">No Todos to display</div>
      ) : (
        props.todos.map((todo) => {
          return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
        })
      )}
    </div>
  );
};
