// local build folder, replace with require('riche');
const riche = require('../build');

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

// riche's internal client id, replace with your own
const client = riche.create('1006301974075035679');

async function main() {
  await client.connect();
  await client.setActivity(activity);

  console.log('Activity has been set! Check your Discord profile');
}

main();
