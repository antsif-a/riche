/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export default interface ActivityParty {
    /** The id of the party */
    id?: string;

    /** Used to show the party's current and maximum size */
    size?: [number, number];
}
