
# Part 0
# Part B:  Fundementals of Web Apps

## Client - Server relations:
The client makes a request for an HTML document. That HTML document contains more requests in its header or sometimes body for things such as CSS, and JS files. JS files can contains event handlers that can request and parse information from the server/API to be included in the HTML. 

The client is like a customer, the server is like a waiter and the database is like the kitchen. Exposing the customer directly to the kitchen could present risks. 

Status Codes:
- 302 (URL Redirect) - take you to a page specified in location under response headers.
- 201 - The request has been fulfilled and has resulted in one or more new resources being created. 

Function Codes:

4: The operation is complete

## Single Pages Apps

Comprised of one HTML page fetched from the server whose contents are manipulated with JavaScript executed in the browser.

- SPA apps don't typically send data using traditional HTML form submission, but they do send data using JavaScript-driven request. 

trad: send form data to update JSON on server, url redirect 302 to reload the page with updated note, HTML which triggers scripts again to ALTER the HTML client side NOT BUILD

SPA: submit, update HTML with JS, send JSON data, get 201 confirmation from server

Q&A

Q: Why SHOULD JSON be returned if the client already has the data?

A: Because returning the created resource is a standard REST practice, and it prevents inconsitsencies

Q: Does the JSON on the server get updated after the completion of the POST request?

A: It gets updated during the POST request, before the response is sent.
The 302 is only sent after the update is complete.
The JSON must be updated before the GET triggered by the redirect happens.


Traditional principle: The server constructs the HTML skeleton (head, form, divs, static content) before sending it.

Enhancement via JS: The browser dynamically adds extra content (like the list of notes) after fetching JSON.

CSS: Always applied client-side; styling doesn’t contradict server-rendered HTML.

idempotent: calling multiple times has the same effect on the database as calling once

to manipulate the HTML reference the document which is the top most node of the DOM tree

AJAX (Asynchronous JavaScript and XML): appoach that enabled the fetching of content to web pages using JS included within the HTML, without the need to rerender the page.

Async here means that the browser can keep running while waiting for the server. 

# Part 1
# Part a: Introductino to React

The content of a React component usually needs to contain one root element.
Components are regular JavaScript functions, but their names must start with a capital letter or they won't work.

JSX: code that is written like HTML, but is actually JavaScript under the hood! Allows for embedding markup inside JavaScript.

React lets you create components, reusable UI elements for your app.

React components are regular JavaScript functions except:

Their names always begin with a capital letter.
They return JSX markup.

People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values. 

### JSX

- Keeping a button's rendering logic and markup together ensures that they stay in sync with each other on every edit.

- Return a single root element. To return multiple elements from a component, wrap them with a single parent tag such as div, fragment(<>) or section.

- This is so because JSX elements are treated as objects and only one object can be returned from a function.

### Props
If the value of a prop is achieved using JS it must be wrapped in curly braces.

Props get passed to children from parents in the form "prop = {propVal}"

This creates children text nodes and is incorrect:
That will place text between tags. 
<Content> 
  part1 = {part1} exercises1 = {exercises1}
  part2 = {part2} exercises2 = {exercises2}
  part3 = {part3} exercises3 = {exercises3}
</Content>


The following is correct:
This passes the prop part1 to the component. 
<Content part1={part1} />


You do not have to specify each var that you expecting when taking in props. You can simply just include the word props in the parameters and it will automatically make an object with key value pairs for as many arguments that are passed in. 

### JavaScript
let and const are block scoped
var is function scoped

const prevents reassignment of the data value. However the contents of the data value can be changed such as elements of a list of properties of an object.

Object Literals

There are a few different ways of defining objects in JavaScript. One very common method is using object literals, which happens by listing its properties within braces:

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

inside JSX you must use curly braces {} to insert JavaScript

### function declaration: are fully hoisted and can be called before they appear in the code.

greet()  // works

function greet() {
  console.log("Hello")
}

greet()   // ❌ Error: greet is not a function

const greet = function() {
  console.log("Hello")
}

### function expressions

greet()   // ❌ Error: greet is not a function

const greet = function() {
  console.log("Hello")
}
### terms
using, containing, or denoting expressions in a way that is natural to a native speaker

# Part C: Component state, event handlers

Destructuring syntax is a JS syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

{} is used to destructure objects and [] is used to destructure arrays.

function Component = (props) => {
    name = prop.name
    age = prop.age
}

You can destructure within the parameters or within the function.

### State

Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

When a state modifying function such as setCounter is called, React re-renders the component its in which means that the function body of the component is re-executed. 

When the re-render occurs within a given component the entire component is replaced with a new version. So if you see that the current state was set to const yet it is changing value you must remember that it is an entirely new instance / frame assigning const for the first time with the prev as reference. 

() => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

The value passed to useState(initialValue) is only used on the first render

Think of useState(0) as:

“Give me the state stored for this component.
If the component does not have stored state yet, use 0.”

When setting a buttons onClick behavior in attributes you must only pass in functions or references to functions. Passing a function call will not work and break the app. In such as situation where a function call is used React will render tsx up until the function call and execute it immediately before finishing its current render (reading the rest of the code). This updates state in the middle of a render which is a no-no in React and causes an infinte loop of renders preventing the user from interacting with the page. 

A component must have a pure render function — it should only calculate what the UI looks like, not cause updates. Updating state inside render is like updating the blueprint while you're reading it.

# Part D: A more complex state

Object Spread

{ ...clicks } creates a new object that has copies of all of the properties of the clicks object. When we specify a particular property - e.g. right in { ...clicks, right: 1 }, the value of the right property in the new object will be 1.

### Async vs Sync
Sync

One thing happens at a time.
Each line waits for the previous line to finish before running.

Think: standing in a single-file line.

Async

Multiple things can be in progress at once without blocking the main thread.

Think: ordering food and getting a buzzer. You can walk around while waiting.

The code starts an action but doesn’t wait for it—
it moves on, and the result comes later (via callback, promise, or async/await).

 Sync is in time. Async is out of time. And by time I can also say sync = in order and async = out of order. So it's the same meaning.

 Syntax	Meaning
() => { ... }	Function body with statements
() => ( ... )	Implicit return of expression/JSX