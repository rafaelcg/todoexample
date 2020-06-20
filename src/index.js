import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Lista, Formulario, Welcome, Header } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route path={"/lista"} component={Lista} />
          <Route path={"/add"} component={Formulario} />
          <Route path={"/"} component={Welcome} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
