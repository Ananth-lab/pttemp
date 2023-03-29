"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRabbitMQ = void 0;
const amqp = require("amqplib");
const connectRabbitMQ = async () => {
    try {
        const connection = await amqp.connect("amqp://ananth:u7i8o9p0@localhost");
        const channel = await connection.createChannel();
        const queue = "parent_tenant";
        await channel.assertQueue(queue, { durable: false });
        return { channel, queue };
    }
    catch (err) {
        console.error("Failed to connect to RabbitMQ");
        console.error(err);
    }
};
exports.connectRabbitMQ = connectRabbitMQ;
//# sourceMappingURL=rabbitmq.configurations.js.map