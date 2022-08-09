export default class RpcError extends Error {
    private static readonly errorCodes = {
        1000: 'UNKNOWN_ERROR',
        1001: 'SERVICE_UNAVAILABLE',
        1002: 'TRANSACTION_ABORTED',
        4000: 'INVALID_PAYLOAD',
        4002: 'INVALID_COMMAND',
        4003: 'INVALID_GUILD',
        4004: 'INVALID_EVENT',
        4005: 'INVALID_CHANNEL',
        4006: 'INVALID_PERMISSIONS',
        4007: 'INVALID_CLIENTID',
        4008: 'INVALID_ORIGIN',
        4009: 'INVALID_TOKEN',
        4010: 'INVALID_USER',
        4011: 'INVALID_INVITE',
        4012: 'INVALID_ACTIVITY_JOIN_REQUEST',
        4013: 'INVALID_LOBBY',
        4014: 'INVALID_LOBBY_SECRET',
        4015: 'INVALID_ENTITLEMENT',
        4016: 'INVALID_GIFT_CODE',
        5000: 'OAUTH2_ERROR',
        5001: 'SELECT_CHANNEL_TIMED_OUT',
        5002: 'GET_GUILD_TIMED_OUT',
        5003: 'SELECT_VOICE_FORCE_REQUIRED',
        5004: 'CAPTURE_SHORTCUT_ALREADY_LISTENING',
        5005: 'INVALID_ACTIVITY_SECRET',
        5006: 'NO_ELIGIBLE_ACTIVITY',
        5007: 'LOBBY_FULL',
        5008: 'PURCHASE_CANCELED',
        5009: 'PURCHASE_ERROR',
        5010: 'UNAUTHORIZED_FOR_ACHIEVEMENT',
        5011: 'RATE_LIMITED',
    };

    constructor(code: keyof typeof RpcError.errorCodes, message: string) {
        super(`${RpcError.errorCodes[code]}: ${message}`);
    }
}
