
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