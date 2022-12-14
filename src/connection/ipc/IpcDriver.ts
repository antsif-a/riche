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
        return JSON.parse(buffer.subarray(8).toString());
    }

    public static getIpcPath(id = 0) {
        if (process.platform === 'win32') {
            return `\\\\?\\pipe\\discord-ipc-${id}`;
        }

        const tmpDir = process.env.XDG_RUNTIME_DIR
            || process.env.TMPDIR
            || process.env.TMP
            || process.env.TEMP
            || '/tmp';

        return `${tmpDir}/discord-ipc-${id}`;
    }
}
