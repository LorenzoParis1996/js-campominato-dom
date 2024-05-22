const gridSection = document.querySelector('section#grid');
const playButton = document.getElementById('playbtn');
const points = document.querySelector('h3');


playButton.addEventListener('click', function () {
    createNewGrid(100, gridSection);
});

function createNewGrid(squareQuantity, containerNumber) {
    containerNumber.innerHTML = '';


    let points = 0;
    let trackingPoints = 0;
    let bombsArray = [];


    for (let index = 0; index < squareQuantity; index++) {
        const squareArticle = document.createElement('article');
        squareArticle.classList.add('square');



        const numberSquare = document.createElement('span');
        numberSquare.classList.add('number');
        numberSquare.append(index + 1);

        squareArticle.appendChild(numberSquare);



        squareArticle.addEventListener('click', function () {
            if (bombsArray.includes(index + 1)) {
                squareArticle.classList.add('bomb');
            } else {
                squareArticle.classList.add('active');
            }

        });



        gridSection.appendChild(squareArticle);
    };
    while (bombsArray.length < 16) {
        let bomb = getRandomInt(1, 100);
        if (!bombsArray.includes(bomb)) {
            bombsArray.push(bomb);
        }
    };
    console.log(bombsArray);

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


