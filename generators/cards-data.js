const {promises: fs} = require('fs');

(async () => {
    const dirPath = 'generators';
    const dir = await fs.readdir(dirPath);
    const cards = await Promise.all(
        dir.filter(card => !card.match(/.js$/)).map(async card => {
            const file = await fs.readFile(dirPath + '/' + card);
            const dir = await fs.readdir('public/cards');
            const famillyCard = file.toString().split('$')
                .filter(line => line.split(';').length >= 3 )
                .map(line => {
                    const elements = line.split(';');
                    const words = elements[0].replace(/\r\n/g, '').split(' ').sort((a, b) => b.length - a.length)
                    let potentialImg = dir.filter(img => {
                        return img.replace('.png', '') === elements[0].replace(/\r\n/g, '').replace('\'', '').replace('.', '').replace(' ', '')
                    });
                    if(potentialImg.length !== 1 && words[0]){
                        potentialImg = dir.filter(img => {
                            return img.includes(words[0].replace('\'', '').replace('.', ''))
                        });
                    }
                    if(potentialImg.length > 1 && words[1]){
                        potentialImg = potentialImg.filter(img => {
                            return img.includes(words[1].replace('\'', '').replace('.', ''))
                        });
                    } else if(potentialImg.length <= 0 && words[1]){
                        potentialImg = dir.filter(img => {
                            return img.includes(words[1].replace('\'', '').replace('.', ''))
                        });
                    }
                    if(potentialImg.length > 1 && words[2]){
                        potentialImg = potentialImg.filter(img => {
                            return img.includes(words[2].replace('\'', '').replace('.', ''))
                        });
                    } else if(potentialImg.length <= 0 && words[2]){
                        potentialImg = dir.filter(img => {
                            return img.includes(words[2].replace('\'', '').replace('.', ''))
                        });
                    }
                    return {
                        originalName: elements[0].replace(/\r\n/g, ''),
                        translatedName: elements[1].replace(/\r\n/g, ''),
                        translatedText: elements[2].replace(/\r\n/g, '').replace(/"/g, ''),
                        img: potentialImg[0]
                    };
                });
            return {
                category: card.replace(/.csv/, ''),
                cards: famillyCard
            };
        })
    );
    //console.log(JSON.stringify(cards));
    await fs.writeFile('src/cards-data.json', JSON.stringify(cards));
})()