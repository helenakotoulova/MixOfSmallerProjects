/*
npx create-react-app my-react-app

cd my-react-app
npm start

React creates a VIRTUAL DOM in memory.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory,
 where it does all the necessary manipulating, before making the changes in the browser DOM.
React only changes what needs to be changed!

React uses ES6, and you should be familiar with some of the new features like:

Classes
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator


/* In React, map() can be used to generate lists.
import React from 'react';
import ReactDOM from 'react-dom';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

ReactDOM.render(myList, document.getElementById('root'));

---- output:
apple

banana

orange
*/

/*
REACT JSX!!!!!!!!!!!!!!§
JSX stands for JavaScript XML.
Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

-----
JSX:
const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById('root'));

Without JSX:
const myelement = React.createElement('h1', {}, 'I do not use JSX!');
ReactDOM.render(myelement, document.getElementById('root'));

With JSX you can write EXPRESSIONS inside CURLY BRACES { }.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

-----------------
The HTML code must be wrapped in ONE top level element.
So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
const myelement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

-----------
CLASSNAME
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
Use attribute className instead.
JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

Example:
const myelement = <h1 className="myclass">Hello World</h1>;

--------
CONDITIONS
Option 1:
Write if statements outside of the JSX code:
Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myelement = <h1>{text}</h1>;

Option 2:
Use ternary expressions instead:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

const x = 5;

const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

*/

/*
REACT COMPONENTS
Components are like functions that return HTML elements. 
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

When creating a React component, the component's name MUST start with an upper case letter.

- Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.

Example:
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

- Function Component
Here is the same example as above, but created using a Function component instead.
A Function component also returns HTML, and behaves much the same way as a Class component,
but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

- Rendering a Component
Now your React application has a component called Car, which returns an <h2> element.
To use this component in your application, use similar syntax as normal HTML: <Car />  (with self-closing tag)

Display the Car component in the "root" element:
ReactDOM.render(<Car />, document.getElementById('root'));

- Props
Components can be passed as props, which stands for properties.
Props are like function arguments, and you send them into the component as attributes.
Atributy se tykaji HTML tagů - napr. href="", src="", style="", alt="", title=""...

Example - PROPS and ATTRIBUTES:
Use an attribute to pass a color to the Car component, and use it in the render() function:

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

=> v reactu vytvarim vlastni html komponenty, ktery maji i vlastni atributy -ty pak slouzi k definovani props.

- Components in Components
We can refer to components inside other components:

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

- Components in Files
React is all about re-using code, and it is recommended to split your components into separate files.
To do that, create a new file with a .js file extension and put the code inside it:
Note that the filename must start with an uppercase character.
Example:
This is the new file, we named it "Car.js":

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;

To be able to use the Car component, you have to import the file in your application.

Example:
Now we import the "Car.js" file in the application, and we can use the Car component as if it was created here.

import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';

ReactDOM.render(<Car />, document.getElementById('root'));

*/

/*
REACT PROPS
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties.
React Props are like function arguments in JavaScript and attributes in HTML.
- To send props into a component, use the same syntax as HTML attributes:
Example:
Add a "brand" attribute to the Car element:

const myelement = <Car brand="Ford" />;

- The component receives the argument as a props object:
Example:
Use the brand attribute in the component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

- Pass Data
Props are also how you pass data from one component to another, as parameters.

Example:
Send the "brand" property from the Garage component to the Car component as a STRING.
If you have a VARIABLE to send, and not a string as in the example above, you just put the variable name inside curly brackets

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
  //  return <h2>I am a { props.brand.model }!</h2>; // takhle by to muselo byt pro tu moznost s carInfo (coz je OBJEKT)
}

function Garage() {
    const carName="Ford";
    const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      <Car brand={ carName } />
     // <Car brand={ carInfo } />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

POZN:React Props are read-only! You will get an error if you try to change their value.

DO RETURN DAVAM TO, CO CHCI, ABY SE VYRENDEROVALO NA STRANCE.

*/

/*
REACT EVENTS
React events are written in camelCase syntax: onClick instead of onclick.
React event handlers are written inside curly braces: onClick={shoot}  instead of onClick="shoot()".

React: <button onClick={shoot}>Take the Shot!</button>
HTML: <button onclick="shoot()">Take the Shot!</button>

1. EXAMPLE
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

2. EXAMPLE - To pass an argument to an event handler, use an arrow function.
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

3. REACT EVENT OBJECT
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    //'b' represents the React event that triggered the function, in this case the 'click' event
}
return (
  <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
);
}

ReactDOM.render(<Football />, document.getElementById('root'));

This will come in handy when we look at Form.

<button onClick={clicked()}>Click Me!</button> // tady by to clicked() byla uz primo funkce.
// zatimco u toho 1. examplu: shoot - je const, ve ktere je ta funkce ulozena.

*/

/*
REACT CONDITIONAL RENDERING
In React, you can conditionally render components.

1. IF STATEMENT
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const dalGol = props.isGoal;
  if (dalGol) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);

2. LOGICAL && OPERATOR
If cars.length is equates to true, the expression after && will render:

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
ReactDOM.render(
  <Garage cars={cars} />,
  document.getElementById('root')
);

3. TERNARY OPERATORS
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);

*/

/*
REACT LISTS
In React, you will render lists with some type of loop.
The JavaScript map() array method is generally the preferred method.

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

POZN: When you run this code in your create-react-app, 
it will work but you will receive a warning that there is no "key" provided for the list items.

KEYS
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
Keys need to be unique to each sibling. But they can be duplicated globally.
Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.


Let's refactor our previous example to include keys:

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
*/

/*
REACT FORMS
- Adding forms
Add a form that allows users to enter their name:

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

POZN: This will work as normal, the form will submit and the page will refresh.
But this is generally not what we want to happen in React.
We want to prevent this default behavior and let React control the form.

- Handling Forms
Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the onChange attribute.
We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

import { useState } from "react";
import ReactDOM from 'react-dom';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name you entered was: ${name}') // tohle mam upravene v te komponente Formular.js
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

MULTIPLE INPUT FIELDS
You can control the values of more than one input field by adding a name attribute to each element.
We will initialize our state with an empty object.
To access the fields in the event handler use the event.target.name and event.target.value syntax.
To update the state, use square brackets [bracket notation] around the property name.
import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
/// Note: We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.

TEXTAREA
The textarea element in React is slightly different from ordinary HTML.
In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>.

-HTML:
<textarea>Content of the textarea.</textarea>

-REACT:
In React the value of a textarea is placed in a value attribute.
We'll use the useState Hook to mange the value of the textarea:

import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

SELECT:
A drop down list, or a select box, in React is also a bit different from HTML.
In HTML, the selected value in the drop down list was defined with the selected attribute:
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>

In React, the selected value is defined with a value attribute on the select tag:
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

/*
REACT ROUTER
Create React App doesn't include page routing. React Router is the most popular solution.
To add React Router in your application, run this in the terminal from the root directory of the application:
npm i -D react-router-dom

<Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetups" element={<NewMeetUpsPage />} />
        <Route path="/favorites" element={<Favorites />} />
</Routes>

*/

/*
REACT MEMO
Using memo will cause React to skip rendering a component if its props have not changed.
This can improve performance.

import { memo } from "react";
const Todos = ....
export default memo(Todos);
Now the Todos component only re-renders when the todos that are passed to it through props are updated.
*/

/*
REACT CSS STYLING
1 INLINE STYLING
const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

Note: In JSX, JavaScript expressions are written inside curly braces, 
and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.
Note: Use backgroundColor instead of background-color.

2. CSS STYLESHEETS
Create a new file called "App.css" and insert some CSS code in it. 
Asnd import it in your application.


3. CSS MODULES
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.
Create the CSS module with the .module.css extension, example: my-style.module.css.

*/

/*
REACT HOOKS
Hooks allow function components to have access to state and other React features. 
Because of this, class components are generally no longer needed.
Hooks allow us to "hook" into React features such as state and lifecycle methods.
There are 3 rules for hooks:
Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

1. USESTATE
useState accepts an initial state and returns two values:
- The current state.
- A function that updates the state.


import { useState } from "react"; // Notice that we are destructuring useState from react as it is a named export.
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red"); // Notice that again, we are destructuring the returned values from useState.
  // The first value, color, is our current state.
  //The second value, setColor, is the fuction that is used to update our state.
  // We should never directly update state. Ex: color = "red" is not allowed.
  // We will use a button to update the state:

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
    </>
  );
}
ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

POZN: The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
We could create multiple state Hooks to track individual values:
import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
ReactDOM.render(<Car />, document.getElementById('root'));


Or, we can just use one state and include an object instead!
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  // Since we are now tracking a single object, 
  // we need to reference that object and then the property of that object when rendering the component. (Ex: car.brand)
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

- Updating Objects and Arrays in State
When state is updated, the entire state gets overwritten.
What if we only want to update the color of our car?
If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
We can use the JavaScript spread operator to help us.

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

ReactDOM.render(<Car />, document.getElementById('root'));

2. USEEFFECT
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

EXAMPLE A: Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

ReactDOM.render(<Timer />, document.getElementById('root'));

- Pozn: 
But wait!! I keeps counting even though it should only count once!
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
This is not what we want. There are several ways to control when side effects run.
We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values - if they change, it runs again:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

=>
MOZNOST 2 - empty array
useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  } []); // <- add empty brackets here

MOZNOST 3 - pridani variable.
Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2); // tohle zpusobi, ze count*2 se zapise do calculation.
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));

EFFECT CLEANUP
Some effects require cleanup to reduce memory leaks.
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the useEffect Hook.

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

3. USECONTEXT
React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

The Problem
State should be held by the highest parent component in the stack that requires access to the state.
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
To do this without Context, we will need to pass the state as "props" through each nested component. 
This is called "prop drilling".

Example:
Passing "props" through nested components:

import { useState } from "react";
import ReactDOM from "react-dom";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}
function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}
function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}
function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

ReactDOM.render(<Component1 />, document.getElementById("root"));

Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.

The Solution
The solution is to create context.
To create context, you must Import createContext and initialize it:

import { useState, createContext } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext()

//Next we'll use the Context Provider to wrap the tree of components that need the state Context.
//Wrap child components in the Context Provider and supply the state value.

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
//Now, all components in this tree will have access to the user Context.
//Use the useContext Hook
//In order to use the Context in a child component, we need to access it using the useContext Hook.
//First, include the useContext in the import statement:

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
ReactDOM.render(<Component1 />, document.getElementById("root"));


// DALE EXISTUJI I DALSI REACT HOOKS.
*/