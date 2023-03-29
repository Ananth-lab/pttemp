"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveMessage = void 0;
const amqp = require("amqplib");
const receiveMessage = async () => {
    try {
        const connection = await amqp.connect("amqp://ananth:u7i8o9p0@localhost");
        const channel = await connection.createChannel();
        const queue = "parent_tenant";
        await channel.assertQueue(queue, { durable: false });
        console.log("Waiting for messages...");
        channel.consume(queue, (message) => {
            console.log("Received message:", message.content.toString());
            channel.ack(message);
        }, { noAck: false });
    }
    catch (err) {
        console.error("Failed to connect to RabbitMQ");
        console.error(err);
    }
};
exports.receiveMessage = receiveMessage;
//# sourceMappingURL=rabbitmq.receiver.js.map