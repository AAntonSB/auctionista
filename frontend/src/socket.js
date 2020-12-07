import cont from "./contexts/MessageContextProvider";

let ws;
let isConnected = false;
let data;
connect();

function connect() {
  // change PORT to your backends PORT
  ws = new WebSocket("ws://localhost:4037/your-socket-route");

  ws.onmessage = (e) => {
    let dataWrapper;
    try {
      dataWrapper = JSON.parse(e.data);
    } catch {
      console.warn("Could not parse: ", e.data);
      return;
    }

    switch (dataWrapper.action) {
      case "message":
        console.log(dataWrapper.payload); // TODO: save this to the context
        data = dataWrapper.payload;
        break;
      case "user-status":
        console.log(dataWrapper.payload);
        break;
      default:
        console.log("Could not read action: ", dataWrapper.action);
    }
  };

  ws.onopen = (e) => {
    send({
      action: "connection",
      payload: "user connected",
    });
    send({
      action: "listen-to",
      payload: "dude",
    });
    send({
      action: "listen-to",
      payload: "dude",
    });
    send({
      action: "listen-to",
      payload: "dude",
    });
    isConnected = true;
  };

  ws.onclose = (e) => {
    console.log("Closing websocket...");
  };

  console.log("Connecting...");
}

function disconnect() {
  if (ws != null) {
    ws.close();
  }
  isConnected = false;
  console.log("Disconnected");
}

function send(data) {
  ws.send(JSON.stringify(data));
}

function sendMessage(message) {
  console.log("i was her");
  send({
    action: "listen-to",
    payload: message,
  });
}

function showSomething(message) {
  console.log(message);
}

export { send, sendMessage, connect, data };
