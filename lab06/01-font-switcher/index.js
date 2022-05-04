let currentFontSize = 1.0;


const makeBigger = () => {
   currentFontSize += 0.2;
   setFontSize();
};

const makeSmaller = () => {
   currentFontSize -= 0.2;
   setFontSize();
};

const setFontSize = () => {
   document.querySelector("p").style.fontSize = `${currentFontSize}em`;
   document.querySelector("h1").style.fontSize = `${currentFontSize + 1.0}em`;
}


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

