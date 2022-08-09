const { RpcClient } = require('../build');

async function main() {
  const client = RpcClient.create('1006301974075035679');
  await client.connect();
  await client.setActivity({
    state: 'In a Group',
    details: 'Competitive | In a Match',
    timestamps: {
      start: Date.now(),
    },
    assets: {
      large_image: 'https://discord.com/assets/9f6f9cd156ce35e2d94c0e62e3eff462.png',
      large_text: 'Discord',
    },
  });
  console.log('Activity has been set! Check your Discord profile');
}

main();
