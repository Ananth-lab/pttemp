const amqp = require("amqplib");

export const connectRabbitMQ = async () => {
  try {
    //console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect("amqp://ananth:u7i8o9p0@localhost");
    //console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const queue = "parent_tenant";
    await channel.assertQueue(queue, { durable: false });
    //console.log("RabbitMQ channel and queue created.");
    return { channel, queue };
  } catch (err) {
    console.error("Failed to connect to RabbitMQ");
    console.error(err);
  }
};
