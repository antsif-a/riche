/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-example-activity
 */
export default interface ActivityButton {
    /** The text shown on the button (1-32 characters) */
    label: string;

    /** The url opened when clicking the button (1-512 characters) */
    url: string;
}
