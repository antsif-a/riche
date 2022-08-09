import RpcConnection from '../connection/RpcConnection';
import IpcRpcConnection from '../connection/ipc/IpcRpcConnection';
import Activity from '../api/activity/Activity';
import PayloadCommand from '../api/payload/PayloadCommand';

export default class RpcClient {
    public static create(clientId: string) {
        return new this(IpcRpcConnection.create(clientId));
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
            nonce: '647d814a-4cf8-4fbb-948f-898abd24f55b',
            args: {
                pid: process.pid,
                activity,
            },
        });
    }
}
