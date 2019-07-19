const {promises: fs} = require('fs');

(async () => {
    const dirPath = 'generators';
    const dir = await fs.readdir(dirPath);
    const cards = await Promise.all(
        dir.map(async card => {
            const file = await fs.readFile(dirPath + '/' + card);
            const famillyCard = await Promise.all(
                file.toString().split('$').map(async line => {
                    const elements = line.split(';');
                    const dir = await fs.readdir('public/cards');
                    dir.forEach(img => {
                        
                    });
                    return {
                        originalName: elements[0],
                        translatedName: elements[1],
                        translatedText: elements[2]
                    };
                })
            );
            return {
                category: card.replace(/.csv/, ''),
                cards: famillyCard
            };
        })
    );
    console.log(cards);
    await fs.writeFile('src/cards-data.json', JSON.stringify(cards));
})()