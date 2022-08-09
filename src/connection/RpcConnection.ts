import Payload from '../api/payload/Payload';

export default interface RpcConnection {
    isOpen(): boolean;
    onError(handler: (error: Error) => void): void;
    open(): Promise<void>;
    close(): Promise<void>;
    send(data: Payload): Promise<void>;
}
