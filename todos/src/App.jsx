import React, { useState } from "react";
import "./App.css";
// import CancelIcon from "@material-ui/icons/Cancel";

const App = () => {
  const [change, Ochange] = useState("");

  const [item, setitem] = useState([]);
  const Change = (event) => {
    Ochange(event.target.value);
  };
  const listofitem = () => {
    setitem((olditem) => {
      return [...olditem, change];
    });
    Ochange(" ");
  };

  const deleteitem = () => {
    console.log("delete");
  };
  return (
    <>
      <div className="div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder=" Add a Item"
            onChange={Change}
            value={change}
          />
          <button onClick={listofitem}> +</button>

          <ol>
            {item.map((itemval, index) => {
              return (
                <>
                  <div className=" todo-style">
                    <i
                      className="fas fa-times-square"
                      aria-hidden="true"
                      onClick={deleteitem}
                    />
                    <li>{itemval}</li>;
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
