import { render } from 'react-dom';
import { App } from "./App";

// my first react component

// HTML            vs              JSX
// class                           className
// for                             htmlFor
// inline styles are strings       inline styles are objects, numbers = px
// <!-- comments -->               {/* comments */}
// attributes are kebab-cased      props are camelCased

render(<App />, document.getElementById("root"));


