"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRabbitMQ = void 0;
const amqp = require("amqplib");
const connectRabbitMQ = async () => {
    try {
        console.log('Connecting to RabbitMQ...');
        const connection = await amqp.connect('amqp://localhost');
        console.log('Connection to RabbitMQ established.');
        const channel = await connection.createChannel();
        const exchange = 'user_exchange';
        await channel.assertExchange(exchange, 'direct', { durable: true });
        console.log('RabbitMQ channel and exchange created.');
        return { channel, exchange };
    }
    catch (err) {
        console.error('Failed to connect to RabbitMQ');
        console.error(err);
    }
};
exports.connectRabbitMQ = connectRabbitMQ;
//# sourceMappingURL=rabbit.js.map