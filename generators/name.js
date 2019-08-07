const {promises: fs} = require('fs');

(async () => {
    const dirPath = 'public/cardsIcon';
    const dir = await fs.readdir(dirPath);
    const pngs = dir.filter(card => card.match(/.png$/));
    pngs.forEach(async png => {
        const content = await fs.rename('public/cardsIcon/' + png, 'public/cardsIcon/' + png.split('-fs8')[0] + png.split('-fs8')[1]);
    })
})()