const {promises: fs} = require('fs');

(async () => {
    const dirPath = '../public/cards';
    const dir = await fs.readdir(dirPath);
    const cards = dir.map(card => {
        return {
            filename: 'cards/' + card,
            name: card.substr(0, card.lastIndexOf("."))
        };
    });
    await fs.writeFile('../src/cards-data.json', JSON.stringify(cards));
})()