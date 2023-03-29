export declare const connectRabbitMQ: () => Promise<{
    channel: any;
    queue: string;
}>;
