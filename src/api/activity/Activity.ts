import ActivityType from './ActivityType';
import ActivityTimestamps from './ActivityTimestamps';
import ActivityEmoji from './ActivityEmoji';
import ActivityParty from './ActivityParty';
import ActivityAssets from './ActivityAssets';
import ActivitySecrets from './ActivitySecrets';
import ActivityFlags from './ActivityFlags';
import ActivityButton from './ActivityButton';

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object
 */
export default interface Activity {
    /** Activity name */
    name?: string;

    /** Activity type */
    type?: ActivityType;

    /** Stream url, is validated when type is 1 */
    url?: string,

    /** Unix timestamp (in milliseconds) of when the activity was added to the user's session  */
    created_at?: number;

    /** Unix timestamps for start and/or end of the game */
    timestamps?: ActivityTimestamps;

    /** Application id for the game */
    application_id?: string;

    /** What the player is currently doing */
    details?: string;

    /** The user's current party status */
    state?: string;

    /** The emoji used for a custom status */
    emoji?: ActivityEmoji;

    /** Information for the current party of the player */
    party?: ActivityParty;

    /** Images for the presence and their hover texts */
    assets?: ActivityAssets;

    /** Secrets for Rich Presence joining and spectating */
    secrets?: ActivitySecrets;

    /** Whether the activity is an instanced game session */
    instance?: boolean;

    /** Describes what the payload includes */
    flags?: ActivityFlags[];

    /** The custom buttons shown in the Rich Presence (max 2) */
    buttons?: [ActivityButton?, ActivityButton?];
}
