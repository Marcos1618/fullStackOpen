
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