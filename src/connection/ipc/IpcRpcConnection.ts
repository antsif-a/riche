import { Socket } from 'node:net';
import Payload from '../../api/payload/Payload';
import PayloadCommand from '../../api/payload/PayloadCommand';
import PayloadEvent from '../../api/payload/PayloadEvent';
import RpcConnection from '../RpcConnection';
import IpcDriver from './IpcDriver';
import OpCode from './OpCode';
import RpcError from '../RpcError';

export default class IpcRpcConnection implements RpcConnection {
    public static create(clientId: string): RpcConnection {
        return new this(new Socket(), clientId);
    }

    private readonly socket: Socket;
    private readonly clientId: string;

    private isConnectionOpen: boolean = false;
    private errorHandler: (error: Error) => void = () => {};

    constructor(socket: Socket, clientId: string) {
        this.socket = socket;
        this.socket.on('error', (err) => this.errorHandler(err));
        this.clientId = clientId;
    }

    public isOpen() {
        return this.isConnectionOpen;
    }

    public onError(handler: (error: Error) => void) {
        this.errorHandler = handler;
    }

    public open(): Promise<void> {
        if (this.isConnectionOpen) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            this.socket.on('data', (buffer) => {
                const payload = IpcDriver.decode(buffer);
                switch (payload.evt) {
                    case PayloadEvent.Ready:
                        if (payload.cmd === PayloadCommand.Dispatch) {
                            this.isConnectionOpen = true;
                            resolve();
                        }
                        break;
                    case PayloadEvent.Error:
                        this.socket.emit('error', new RpcError(payload.data.code, payload.data.message));
                        break;
                    default:
                        break;
                }
            });

            this.socket.connect(IpcDriver.getIpcPath(), () => {
                this.socket.write(IpcDriver.encode(OpCode.Handshake, {
                    v: 1,
                    client_id: this.clientId,
                }));
            });
        });
    }

    public close(): Promise<void> {
        if (!this.isConnectionOpen) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            this.socket.once('close', () => {
                this.isConnectionOpen = false;
                resolve();
            });
            this.socket.destroy();
        });
    }

    public send(data: Payload): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.write(IpcDriver.encode(OpCode.Frame, data), (error) => {
                if (error) {
                    reject(error);
                }

                resolve();
            });
        });
    }
}
