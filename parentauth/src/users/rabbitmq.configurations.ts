import * as amqp from 'amqplib';

export const connectRabbitMQ = async () => {
  try {
    console.log('Connecting to RabbitMQ...');
    const connection = await amqp.connect('amqp://ananth:u7i8o9p0@localhost');
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