/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
 */
export default interface ActivitySecrets {
    /** The secret for joining a party */
    join?: string;

    /** The secret for spectating a game */
    spectate?: string;

    /** The secret for a specific instanced match */
    match?: string;
}
