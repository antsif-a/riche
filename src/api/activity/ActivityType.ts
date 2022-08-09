/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
enum ActivityType {
    /** Playing {name} */
    Game,

    /** Streaming {details} */
    Streaming,

    /** Listening to {name} */
    Listening,

    /** Watching {name} */
    Watching,

    /** {emoji} {name} */
    Custom,

    /** Competing in {name} */
    Competing,
}

export default ActivityType;
