// const amqp = require('amqplib');


// export const connectRabbitMQ = async () => {
//   try {
//     console.log('Connecting to RabbitMQ...');
//     const connection = await amqp.connect('amqp://localhost');
//     console.log('Connection to RabbitMQ established.');
//     const channel = await connection.createChannel();
//     const queue = 'user.create';
//     await channel.assertQueue(queue, { durable: false });
//     console.log('RabbitMQ channel and queue created.');
//     return { channel, queue };
//   } catch (err) {
//     console.error('Failed to connect to RabbitMQ');
//     console.error(err);
//   }
// };

import * as amqp from 'amqplib';

export const connectRabbitMQ = async () => {
  try {
    console.log('Connecting to RabbitMQ...');
    const connection = await amqp.connect('amqp://localhost');
    console.log('Connection to RabbitMQ established.');
    const channel = await connection.createChannel();
    const exchange = 'user_exchange';
    await channel.assertExchange(exchange, 'direct', { durable: true });
    console.log('RabbitMQ channel and exchange created.');
    return { channel, exchange };
  } catch (err) {
    console.error('Failed to connect to RabbitMQ');
    console.error(err);
  }
};
