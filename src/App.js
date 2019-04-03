import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "4a4e671f48280eff146434b2b53bed84";


class App extends React.Component {

  render() {
    return(

      <div>
        <Titles />
        <Form />npm
        <Weather />
      </div>

    );
  }
};

export default App;