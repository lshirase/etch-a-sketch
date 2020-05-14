let lastGrid = 16;
const container = document.querySelector('#container');

const size = document.querySelector('#size');
size.addEventListener('click', (e) => {
    createGrid(prompt("Enter Grid Size!", '16'))
  });


const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {
        createGrid(lastGrid)
    });



function createSquare(){

const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);
square.addEventListener('mouseenter', function(event){
    event.target.style.cssText = "background-color: black";
})
}

function createGrid(n) {
    container.style.cssText = `
    grid-template-columns: repeat(${n}, ${100/n}%);
    grid-auto-rows: ${100/n}%;`;
    while (container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < (n*n); i++) {
        createSquare();
    }

    lastGrid = n;

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
