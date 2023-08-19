const COUNT = 200;

const SIZES = [
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--l',
    'rainDrop--l'
];

const EMOJIS = [
    '🌀',
    '☀️',
    '🌩️',
    '🌕',
    '⭐'
];

const rainContainer = document.querySelector('.rain-container');
const genRainDrop = (size, xStart, xEnd, yStart, emoji)=>{


    const r = document.createElement('div');
    r.innerText = emoji;
    r.classList.add('rainDrop', size);
    r.style.setProperty('--x-start', xStart + 'vw');
    r.style.setProperty('--x-end', xEnd + 'vw');
    r.style.setProperty('--y-start', yStart + 'vh');
    r.style.setProperty('--y-end', yStart + 200 + 'vh');

    return r;
}

for(let i=0; i<COUNT; i++){

    const size = randFromList(SIZES);

    const xStart = getRamdomArbitrary(0,100);   

    const xEnd = getRamdomArbitrary(xStart - 20, xStart + 20);

    const emoji = randFromList(EMOJIS);

    const yStart = getRamdomArbitrary(-100,0);
    
    rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji));

}

function randFromList(items){
    return items[Math.floor(Math.random()*items.length)];
}

function getRamdomArbitrary(min,max) {
    return Math.random() * (max - min) + min;
}