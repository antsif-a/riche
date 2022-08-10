import Payload from '../../api/payload/Payload';
import OpCode from './OpCode';

export default class IpcDriver {
    public static encode(op: OpCode, data: object) {
        const str = JSON.stringify(data);
        const len = Buffer.byteLength(str);
        const packet = Buffer.alloc(8 + len);
        packet.writeInt32LE(op, 0);
        packet.writeInt32LE(len, 4);
        packet.write(str, 8, len);
        return packet;
    }

    public static decode(buffer: Buffer): Payload {
        return JSON.parse(buffer.slice(8).toString());
    }

    public static getIpcPath(id = 0) {
        switch (process.platform) {
            case 'linux':
                return `${process.env.XDG_RUNTIME_DIR}/discord-ipc-${id}`;
            case 'win32':
                return `\\\\?\\pipe\\discord-ipc-${id}`;
            case 'darwin':
                return `${process.env.TMPDIR}/discord-ipc-${id}`;
            default:
                throw new Error(`Platform '${process.platform}' is not supported at the moment`);
        }
    }
}
