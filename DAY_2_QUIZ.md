1. What is react?
  - A library for making UIs, with components
2. What is the benefit of doing client-side Development?
  - Don't have to be dependent on all APIs being up, and you on-site / on the vpn
3. What is JSX? How does it differ from HTML?
  - a user-friendly way to have javascript make html elements. small differences like class vs className.
4. What are props? What is its data type?
  - props are what are passed to a component. object
5. What does JSX compile down to?
  - jsx compiles down to javascript
6. What is create react app?
  - a tool made by facebook to bootstrap a project with eslint, jest, webpack, babel, and some starter code
7. What tools does create react app use behind the scenes and why?
  - babel, webpack, react-scripts. To minify the code for speed, to make newer js features work on older browsers
8. What command do you use to start the application?
  - npm run start
9. Where is the script you’re running declared?
  - in the package.json, specifically in node_modules in the react-scripts package
10. Are there alternatives to create react app? If so how would you find them and why would you consider them?
 - javascriptstuff.com shows alternatives. Next, Gatsby, Redwood. If you wanted server side rendering
11. What does the curly brace mean inside JSX?
 - {} means javascript is starting here
12. How do you handle public vs private in JavaScript modules?
 - exporting to make public
13. What folder does node install dependencies into?
 - node_modules
14. What language are those files written then? Can you view them?
 - javascript, yes they're viewable
15. Where are our apps dependencies declared?
 - in package.json
16. What is the syntax for importing a component called Hello from the same directory?
 - import { Hello } from './Hello';
17. What is the name for that syntax?
 - ES import syntax
18. What if I want to import a specific portion of a file?
 - use a named import
19. When do we use a relative path in import?
 - when we're importing from a local file, and not from a dependency
20. What if we omit the path in an import?
 - it will look for a dependency with that name
21. What does that syntax look like?
 - import { React } from 'react';
22. What is that style of import called?
 - named import? not sure
23. What JavaScript feature did we use with useState to create variables from elements in an array?
 - destructuring
24. What tool are we using to format our code?
 - prettier
25. What is a key? When an why is it useful? What value should we set it to?
 - something unique for each array element of the data we're presenting. For being able to delete one element withou    t redrawing the whole list below that. We should set it to a unique value in the data, preferably an id
26. What is a pure function? Why is it useful?
 - a function that always returns the same result for a value given to it. To be able to have consistent results?
27. What is the useEffect hook? Why is it useful?
 - useEffect will refresh the component. Useful to be able to refresh just one component.
28. What does the 2nd param to useEffect do?
 - tells how often to refresh it? (give an empty array to prevent a infinite loop)
29. What is useState hook? Why is it useful?
 - useState will refresh a component when the state changes
30. How do you declare a default with the useState hook?
 - useState([]);
31. What package are we using to mock APIs?
 - json-server
32. What native browser feature are we using to make an HTTP request?
 - the fetch api
33. What is the impact of adding the async keyword to a function?
 - to signal that we'll need to await the result
34. What is a key? Why is it useful? What’s a good one? A bad one?
 - a key is the index of the items you're displaying. To be able to refresh just one part of the data you're showing    . A good one would be an id. A bad one would be some other field that the data shares, that isn't unique, or also     the array index.
35. What array method did we use to iterate over an array and display data for each element?
 - map
36. What array method did we use to create a new array with an element removed?
 - filter
37. Extra credit: Why should React’s state be treated as immutable?
 - so that you refresh the component whenever the data in the state changes
