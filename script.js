const container = document.querySelector('#container');
container.style.cssText = 'grid-template-columns: repeat(16, auto);';
container.style.cssText = 'grid-template-rows: repeat(16, auto);';



function createSquare(){

const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);
square.addEventListener('mouseenter', function(event){
    event.target.style.cssText = "background-color: black";
})
}

function createGrid(x) {
    for (i = 0; i < x; i++) {
        createSquare();
        for (n = 0; n < x; n++) {
            createSquare();
        }
    }
}

function pen(){
    this.classList.add('pen');
    // square.classList.add('pen');
    console.log('hi');

}

createGrid(16);

// const squares = document.querySelectorAll('.square');
// squares.forEach(square => square.addEventListener('mouseover', pen()));




// document.getElementByClassName("square").addEventListener("mouseover", pen());
