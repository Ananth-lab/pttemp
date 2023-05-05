"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRabbitMQ = void 0;
const amqp = require("amqplib");
require("dotenv").config();
const connectRabbitMQ = async () => {
    try {
        console.log('Connecting to RabbitMQ...');
        const connection = await amqp.connect(process.env.rabbitMqUrl);
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
//# sourceMappingURL=rabbitMq.sender.js.map