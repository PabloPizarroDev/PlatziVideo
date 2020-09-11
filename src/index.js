import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./assets/styles/App.scss";

//render recibe dos parametros el componente, el otro donde voy a empujar este componente
ReactDOM.render(<App />, document.getElementById("app"));
