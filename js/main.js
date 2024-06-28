console.log("Javascript is connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");

//functions
function changeBGImage() {
  puzzleBoard.style.backgroundImage = `url('./images/backGround${this.dataset.bgref}.jpg')`;
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
  this.appendChild(document.querySelector(`#${droppedElementId}`));
}

//eventListeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);

// dropZones.forEach((zone) => zone.addEventListener("dragover", handleOver));

// dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", handleOver);
  zone.addEventListener("drop", handleDrop);
});
