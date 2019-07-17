const {promises: fs} = require('fs');

(async () => {
    const dirPath = '../public/cards';
    const dir = await fs.readdir(dirPath);
    const cards = dir.map(card => {
        return {
            filename: dirPath + '/' + card,
            name: card.substr(0, card.lastIndexOf("."))
        };
    });
    console.log(cards);
    await fs.writeFile('./cards-data.json', JSON.stringify(cards));
})()