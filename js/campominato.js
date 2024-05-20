const gridSection = document.querySelector('section#grid');
const playButton = document.getElementById('playbtn');

playButton.addEventListener('click', function () {
    createNewGrid(100, gridSection);
});

function createNewGrid(squareQuantity, containerNumber) {
    containerNumber.innerHTML = '';
    for (let index = 0; index < squareQuantity; index++) {
        const squareArticle = document.createElement('article');
        squareArticle.classList.add('square');

        gridSection.appendChild(squareArticle);


        const numberSquare = document.createElement('span');
        numberSquare.classList.add('number');
        numberSquare.append(index + 1);

        squareArticle.appendChild(numberSquare);



        squareArticle.addEventListener('click', function () {
            squareArticle.classList.add('active');
        });

    };

}