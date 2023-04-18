export declare const connectRabbitMQ: () => Promise<{
    channel: any;
    exchange: string;
}>;
