const riche = require('../build');

const client = riche.create('your-client-id-here');
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
