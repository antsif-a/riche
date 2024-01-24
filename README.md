<div align="center">
    <h1>riche</h1>
    <a href="https://www.npmjs.com/package/riche">
        <img alt="version" src="https://img.shields.io/npm/v/riche"/>
    </a>
    <a href="https://www.npmjs.com/package/riche">
        <img alt="size" src="https://img.shields.io/bundlephobia/min/riche"/>
    </a>
    <a href="https://github.com/antsif-a/riche/actions/workflows/eslint.yml">
        <img alt="eslint" src="https://img.shields.io/github/actions/workflow/status/antsif-a/riche/eslint.yml?label=eslint"/>
    </a>
</div>

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

const activity = {
  state: 'Signed in',
  details: 'Using Discord',
  timestamps: {
    start: Date.now(),
  },
  assets: {
    large_image: 'https://discord.com/assets/9f6f9cd156ce35e2d94c0e62e3eff462.png',
    large_text: 'Discord',
  },
};

const client = riche.create('your-client-id');

client.connect()
  .then(() => client.setActivity(activity))
  .then(() => console.log('Activity has been set! Check your Discord profile'));
```

See more examples [here](https://github.com/antsif-a/riche/tree/main/examples).
