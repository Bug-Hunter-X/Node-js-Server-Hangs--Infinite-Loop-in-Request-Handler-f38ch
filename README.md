# Node.js Server Hang: Infinite Loop Example

This repository demonstrates a common error in Node.js applications: blocking the event loop with an infinite loop inside the request handler of an HTTP server. This leads to the server becoming unresponsive and effectively crashing.

## The Problem
The `bug.js` file contains a simple HTTP server. However, the request handler contains an infinite `while` loop.  This loop prevents the event loop from processing other events, such as sending responses to clients.  As a result, any requests to the server will never receive a response, and the server appears to hang.

## The Solution
The `bugSolution.js` file demonstrates the correct approach. The infinite loop is removed, and the request handler now processes the request and sends a response. This ensures the server remains responsive and handles requests efficiently.

## How to reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Try to access `http://localhost:3000` in your browser. You will observe that the server doesn't respond.
5. Now run `node bugSolution.js` and try accessing `http://localhost:3000` again. You should get a response.

This example highlights the importance of avoiding blocking operations in Node.js request handlers to maintain server responsiveness and prevent crashes.