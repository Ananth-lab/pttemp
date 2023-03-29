const amqp = require("amqplib");

export const receiveMessage = async () => {
  try {
    const connection = await amqp.connect("amqp://ananth:u7i8o9p0@localhost");
    const channel = await connection.createChannel();
    const queue = "parent_tenant";
    await channel.assertQueue(queue, { durable: false });
    console.log("Waiting for messages...");
    channel.consume(
      queue,
      (message) => {
        console.log("Received message:", message.content.toString());
        // Do something with the message here
        channel.ack(message); // acknowledge that the message has been processed
      },
      { noAck: false } // set noAck to false to require manual acknowledgement
    );
  } catch (err) {
    console.error("Failed to connect to RabbitMQ");
    console.error(err);
  }
};
