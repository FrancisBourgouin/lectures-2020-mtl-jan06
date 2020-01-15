//Let's use the net module that is natively in node.
const net = require("net");

//Store the object created by net.createServer in the constant server.
const server = net.createServer();
const clientList = [];

server.on("connection", client => {
  client.id = clientList.length;
  clientList.push(client);
  console.log("Someone did connect");
  client.setEncoding("utf-8");
  client.on("data", data => {
    console.log("Hey ! We received data");
    console.log("Data", data);

    // client.write(`Hey you wrote : ${data}`);

    for (const currentClient of clientList) {
      if (client.id !== currentClient.id) {
        currentClient.write(`Client #${client.id} said ${data}`);
      }
    }
  });
});

server.listen(3000);
