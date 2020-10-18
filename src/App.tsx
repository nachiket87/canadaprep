import React from "react";
import "./App.css";
import Form from "./components/form";

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>SHOULD I APPLY TO IMMIGRATE TO CANADA UNDER EXPRESS ENTRY?</h2>
      <Form />
      <ol style={{ color: "red", listStyle: "none" }}>
        <h2>This form assumes the following:</h2>
        <li> You don't speak French </li>
        <li> You've never worked in Canada </li>
        <li> You haven't completed a Bachelors / Masters degree in Canada </li>
        <li> You do not have a valid job offer</li>
      </ol>
      <React.Fragment>
        <a href={`https://www.linkedin.com/in/nachiketpusalkar`}>
          {" "}
          Add me on LinkedIN{" "}
        </a>
      </React.Fragment>
    </div>
  );
};

export default App;
