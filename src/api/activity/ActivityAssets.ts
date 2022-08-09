/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export default interface ActivityAssets {
    /**
     * Activity asset images are arbitrary strings which usually contain snowflake IDs
     * or prefixed image IDs.
     * Treat data within this field carefully, as it is user-specifiable and not sanitized.
     *
     * To use an external image via media proxy, specify the URL as the field's value when sending.
     * You will only receive the mp: prefix via the gateway.
     *
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-asset-image
     */
    large_image?: string;

    /** Text displayed when hovering over the large image of the activity */
    large_text?: string

    /**
     * Activity asset images are arbitrary strings which usually contain snowflake IDs
     * or prefixed image IDs.
     * Treat data within this field carefully, as it is user-specifiable and not sanitized.
     *
     * To use an external image via media proxy, specify the URL as the field's value when sending.
     * You will only receive the mp: prefix via the gateway.
     *
     * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-asset-image
     */
    small_image?: string;

    /** Text displayed when hovering over the small image of the activity */
    small_text?: string;
}
