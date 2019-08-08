const {promises: fs} = require('fs');

(async () => {
    const dirPath = 'generators';
    const dir = await fs.readdir(dirPath);
    let dir2 = await fs.readdir('public/cards');
    const cards = await Promise.all(
        dir.filter(card => !card.match(/.js$/)).map(async card => {
            const file = await fs.readFile(dirPath + '/' + card);
            const famillyCard = file.toString().split('$')
                .filter(line => line.split(';').length >= 3 )
                .sort()
                .map(line => {
                    const elements = line.split(';');
                    const words = elements[0].replace(/\r\n/g, '').split(' ').sort((a, b) => b.length - a.length)
                    let potentialImg = dir2.filter(img => {
                        return img.replace('.png', '') === elements[0].replace(/\r\n/g, '').replace('\'', '').replace('.', '').replace(' ', '')
                    });
                    if(potentialImg.length !== 1 && words[0]){
                        potentialImg = dir2.filter(img => {
                            return img.includes(words[0].replace('\'', '').replace('.', ''))
                        });
                    }
                    if(potentialImg.length > 1 && words[1]){
                        potentialImg = potentialImg.filter(img => {
                            return img.includes(words[1].replace('\'', '').replace('.', ''))
                        });
                    } else if(potentialImg.length <= 0 && words[1]){
                        potentialImg = dir2.filter(img => {
                            return img.includes(words[1].replace('\'', '').replace('.', ''))
                        });
                    }
                    if(potentialImg.length > 1 && words[2]){
                        potentialImg = potentialImg.filter(img => {
                            return img.includes(words[2].replace('\'', '').replace('.', ''))
                        });
                    } else if(potentialImg.length <= 0 && words[2]){
                        potentialImg = dir2.filter(img => {
                            return img.includes(words[2].replace('\'', '').replace('.', ''))
                        });
                    }
                    const imgs = [potentialImg[0]];
                    dir2 = dir2.filter(img => img !== potentialImg[0]);
                    let curimg = potentialImg[0]; let count = 2;
                    if(!curimg){
                        console.log(elements);
                    }
                    while (dir2.includes(curimg.replace('.png','') + count + '.png')) {
                        imgs.push(curimg.replace('.png','') + count + '.png');
                        dir2 = dir2.filter(img => img !== (curimg.replace('.png','') + count + '.png'));
                        count += 1;
                    }
                    return {
                        originalName: elements[0].replace(/\r\n/g, ''),
                        translatedName: elements[1].replace(/\r\n/g, ''),
                        translatedText: elements[2].replace(/\r\n/g, '<br/>').replace(/"/g, ''),
                        translatedTextMonster: elements[3].replace(/\r\n/g, '<br/>').replace(/"/g, ''),
                        img: imgs
                    };
                });
            return {
                category: card.replace(/.csv/, ''),
                cards: famillyCard
            };
        })
    );
    if(dir2.length){
        cards.push({
            category: 'Non traduit',
            cards: dir2.sort().map(card => {
                return {
                    img: card
                }
            })
        });
    }
    //console.log(JSON.stringify(dir2));
    await fs.writeFile('src/cards-data.json', JSON.stringify(cards));
})()