console.log("Javascript is connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzlePiecesDiv = document.querySelector(".puzzle-pieces");

//functions
function changeBGImage() {
  puzzleBoard.style.backgroundImage = `url('./images/backGround${this.dataset.bgref}.jpg')`;
  puzzlePieces.forEach((piece) => puzzlePiecesDiv.appendChild(piece));
}

function handleStartDrag(event) {
  console.log(`started dragging ${this}`);
  event.dataTransfer.setData("draggedElement", this.id);
}

function handleOver(e) {
  e.preventDefault();
  console.log("Dragged Over");
}

function handleDrop(e) {
  e.preventDefault();
  let droppedElementId = e.dataTransfer.getData("draggedElement");
  console.log(droppedElementId);

  //using the if and return statement the problem is going to fix

  if (this.children.length > 0) {
    console.log("This drop zone already has a puzzle piece.");
    return;
  }
  this.appendChild(document.querySelector(`#${droppedElementId}`));
}

//eventListeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", handleOver);
  zone.addEventListener("drop", handleDrop);
});
