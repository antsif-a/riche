# riche

## About

**riche** [/ʀiʃ/] (fr. rich) is a powerful [Node.js](https://nodejs.org) module
that allows you to interact with Discord Rich Presence.

- :hammer_and_wrench: Made with [TypeScript](https://www.typescriptlang.org/)
- :comet: Object-oriented
- :package: No dependencies
- :fire: Fast and secure

## Installation

Use your favourite package manager to install riche:
```shell
# npm
npm install riche

# yarn
yarn add riche

# pnpm
pnpm add riche
```

## Example usage

To use Rich Presence Discord requires for you to create a new [Discord application](https://discord.com/developers/applications).
After that navigate to `OAuth2` tab and copy `Client ID`.
Alternatively, you can use riche's internal id for testing: `1006301974075035679`.

```javascript
const riche = require('riche');

const client = riche.create('your-client-id');
client.connect().then(() => {
  client.setActivity({
    state: 'In a Group',
    details: 'Competitive | In a Match',
    timestamps: {
      start: Date.now(),
    },
    assets: {
      large_image: 'https://discord.com/assets/9f6f9cd156ce35e2d94c0e62e3eff462.png',
      large_text: 'Discord',
    },
  }).then(() => console.log('Activity has been set! Check your Discord profile'));
});
```

See more examples [here](examples).