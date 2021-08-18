import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";

// my first react component

// HTML            vs              JSX
// class                           className
// for                             htmlFor
// inline styles are strings       inline styles are objects, numbers = px
// <!-- comments -->               {/* comments */}
// attributes are kebab-cased      props are camelCased

render(
  <BrowserRouter>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/" exact>
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
