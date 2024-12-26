const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug lies.  The event loop is blocked, and no responses are sent.
  while (true) {}; // Infinite loop
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});