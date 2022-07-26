const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            document.body.style.transition = `background-color 350ms linear`;
            resolve();
        }, delay)
    })
}

/*
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

*/

async function rainbow() {
    await delayedColorChange('red', 300)
    await delayedColorChange('orange', 300)
    await delayedColorChange('yellow', 300)
    await delayedColorChange('green', 300)
    await delayedColorChange('blue', 300)
    await delayedColorChange('indigo', 300)
    await delayedColorChange('violet', 300)
    return 'All done!';
}

// rainbow().then(() => console.log('End of rainbow!'))
async function printRainbow() {
    await rainbow();
    console.log('End of rainbow!');
}