const container = document.querySelector('.container');
const text = document.querySelector('#text');

const breatheTime = 4000; // milliseconds
const holdTime = 2000;
const totalTime = holdTime + breatheTime * 2;

console.log('Welcome!');

function breatheAnimation() {
    text.innerHTML = 'Breathe In';

    setTimeout(() => {
        text.innerHTML = 'Hold';
        setTimeout(() => {
            text.innerHTML = 'Breathe Out';
        }, holdTime)
    }, breatheTime);
}

breatheAnimation();

setInterval(breatheAnimation, totalTime);