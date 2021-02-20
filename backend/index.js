const EventEmitter = require('eventemitter3');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');


const emitter = new EventEmitter();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const chatHistory = [];
const clients = [];

app.get('/message', (req, res) => {

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive"
  });

  const onMessage = data => {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
  };

  clients.push({
    res
  })
  // onMessage('hello from server')

  req.on("close", function() {
    emitter.removeListener("message", onMessage)
  });
});

// function sendEventsToAll(newNest) {
//   clients.forEach(c => c.res.write(data: ${JSON.stringify(newNest)}\n\n))
// }

const sendEventsToAll = (message) => {
  clients.forEach(c => c.res.write(`data: ${JSON.stringify(message)}\n\n`))
}
app.post('/message', (req, res) => {
  
  res.json({
    message: "successful"
  })
  return sendEventsToAll(req.body.message)
});

app.listen(5000, () => {
  console.log('app listening on port 5000...');
})