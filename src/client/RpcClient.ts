import * as crypto from 'node:crypto';
import RpcConnection from '../connection/RpcConnection';
import IpcRpcConnection from '../connection/ipc/IpcRpcConnection';
import Activity from '../api/activity/Activity';
import PayloadCommand from '../api/payload/PayloadCommand';

function randomNonce() {
    return crypto.randomBytes(16).toString('hex');
}

export default class RpcClient {
    public static create(clientId: string) {
        return new RpcClient(IpcRpcConnection.create(clientId));
    }

    private readonly connection: RpcConnection;

    constructor(connection: RpcConnection) {
        this.connection = connection;
        this.connection.onError(console.error);
    }

    public connect() {
        return this.connection.open();
    }

    public setActivity(activity: Activity) {
        if (!this.connection.isOpen()) {
            throw new Error('Connection is closed');
        }

        return this.connection.send({
            cmd: PayloadCommand.SetActivity,
            nonce: randomNonce(),
            args: {
                pid: process.pid,
                activity,
            },
        });
    }
}
