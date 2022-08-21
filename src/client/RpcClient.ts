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
    private pid: number = process.pid;

    constructor(connection: RpcConnection) {
        this.connection = connection;
        this.connection.onError(console.error);
    }

    private sendCommand(command: PayloadCommand, args: any) {
        return this.connection.send({
            cmd: command,
            nonce: randomNonce(),
            args,
        });
    }

    public connect() {
        return this.connection.open();
    }

    public setPID(pid: number) {
        this.pid = pid;
    }

    public setActivity(activity: Activity) {
        return this.sendCommand(PayloadCommand.SetActivity, {
            pid: this.pid,
            activity,
        });
    }
}
