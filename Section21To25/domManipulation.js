const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
    img.src = "https://lafeber.com/pet-birds/wp-content/uploads/Silkie-Chickens.jpg";
}

const squareImages = document.getElementsByClassName("square");

for (let squareImg of squareImages) {
    squareImg.src = "https://lafeber.com/pet-birds/wp-content/uploads/Silkie-Chickens.jpg";
}
const allLinks = document.querySelectorAll("a");

for (link of allLinks) {
    link.style.color = "#006c86";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

const allLinks2 = document.querySelectorAll('a');
const rgbNumGen = () => {
    const numArr = [];
    for (let i = 0; i < 3; i++)
        numArr.push(Math.floor(Math.random() * 255));
    return numArr;
}

allLinks2.style.color = `rgb(${rgbNumGen().toString()})`;
