import PayloadCommand from './PayloadCommand';
import PayloadEvent from './PayloadEvent';

/**
 * @see https://discord.com/developers/docs/topics/rpc#payloads-payload-structure
 */
export default interface Payload {
    /** Payload command */
    cmd: PayloadCommand;

    /**
     * Command arguments.
     * Present in commands sent to the server
     * @todo Just a plain object right now: add dynamic type based on PayloadCommand
     */
    args?: any;

    /**
     * Unique string used once for replies from the server.
     * Present in responses to commands (not subscribed events)
     */
    nonce?: string;

    /**
     * Subscription event.
     * Present in subscribed events, errors, and (un)subscribing events
     */
    evt?: PayloadEvent;

    /**
     * Event data.
     * Present in responses from the server
     * @todo Just a plain object right now: add dynamic type based on PayloadEvent
     */
    data?: any;
}
