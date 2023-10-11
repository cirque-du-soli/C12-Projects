/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- MidtermTodo
2023-10-04
*/

// IMPORTS
import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

// COMPONENTS

// MAIN
function App() {
  ///////////////////////////////// Authentication ///////////////////////////////////////
  // States
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  ///////////////////////////////// Authentication ///////////////////////////////////////

  // STATES
  const [todoTask, setTodoTask] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoIsDone, setTodoIsDone] = useState(0);
  const [todoList, setTodoList] = useState([]);

  // HOOKS
  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setTodoList(response.data);
    });
  }, []);

  ////////////////////////////////////////////////////////////////////////// CxUD FUNCTIONS /////
  // C.1: Create one
const createTodo = () => {
 
  Axios.post("http://localhost:3001/api/action/", {
    todoDate: todoDate,
    todoTask: todoTask,
    todoIsDone: 0
  }).then(() => {
    //FIXME: Try-catch for errors
     Axios.get("http://localhost:3001/").then((response) => {
      setTodoList(response.data);
    });
  });
};
  // U.1: Update by id
  const updateTodo = (id) => {
    Axios.put(`http://localhost:3001/api/action/${id}`, {
      todoTask: todoTask,
      todoDate: todoDate,
      todoIsDone: todoIsDone,
    });

    setTodoTask("");
    setTodoDate("");
    setTodoIsDone(0);
  };

  // D.1: Delete by id
  const deleteTodo = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  };

  ///////////////////////////////////////////////////////////////////// END: CRUD FUNCTIONS /////

  return (
    <div className="App">
      <div className="container pageContainer">
        <div className="row mainHeader">
          <div className="col-12">
            <h1>Soli's Todo App</h1>
          </div>
        </div>

        <div className="row mainBanner row">
          <div className="col"></div>
          <div className="col">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="col">
            <button className="btn btn-danger">Logout</button>
          </div>
          <div className="col"></div>
        </div>

        <div className="row newTodoRow d-flex">
          <div className="col my-auto">
            <h2>Create A Todo:</h2>
          </div>
          <div className="col-8 my-auto form">
            <label for="newTodoTask">Task:</label>
            <input
              type="text"
              id="newTodoTask"
              onChange={(e) => {
                setTodoTask(e.target.value);
              }}
            />
            <label for="newTodoDate">Date:</label>
            <input
              type="date"
              id="newTodoDate"
              onChange={(e) => {
                setTodoTask(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={createTodo}>Create</button>
          </div>
        </div>

        <div className="row todoListContainer">
          {todoList.map((val) => {
            return (
              <div className="todoCard mx-auto form">
                <h1>
                  {"Todo # " +
                    val.id +
                    " by user # " +
                    val.ownerId}
                </h1>
                <p>{val.task}</p>
                <input
                  type="text"
                  id="updateTodoTask"
                  placeholder={val.task}
                  onChange={(e) => {
                    setTodoTask(e.target.value);
                  }}
                />
                <label for="updateTodoDate">Date</label>
                <input
                  type="date"
                  id="updateTodoDate"
                  placeholder={val.date}
                  onChange={(e) => {
                    setTodoTask(e.target.value);
                  }}
                />

                <label for="updateTodoIsDone">Done?</label>
                <input
                  type="checkbox"
                  id="updateTodoIsDone"
                  onChange={(e) => {
                    setTodoIsDone(e.target.value ? 1 : 0);
                  }}
                />

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    updateTodo(val.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div> // END: main <div> "App"
  ); // END: main return()
} // END: App()

export default App;
