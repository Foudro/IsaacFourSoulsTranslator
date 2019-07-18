const {promises: fs} = require('fs');

(async () => {
    const dirPath = 'generators';
    const dir = await fs.readdir(dirPath);
    const csvs = dir.filter(card => card.match(/.csv$/));
    csvs.forEach(async csv => {
        const content = await fs.readFile('generators/' + csv);
        console.log(content.toString());
    })
})()