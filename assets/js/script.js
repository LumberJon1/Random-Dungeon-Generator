//define global constants
const dungeonGrid = document.getElementById("dungeon-grid-div");
const numTiles = 10;
const activeColor = "#e9d9b0";
const inactiveColor = "white";

//Resize based on hardcoded parameters for now, eventually user input
dungeonGrid.setAttribute("width", "500");
dungeonGrid.setAttribute("height", "500");

//Define tile width and height based on dungeonGrid proportions
const tileWidth = dungeonGrid.getAttribute("width") / numTiles;
const tileHeight = dungeonGrid.getAttribute("height") / numTiles;

//fill the canvas
for (let i = 0; i < numTiles; i++) {
    let col = 0;
    for (let j = 0; j < numTiles; j++) {
        console.log("row "+(i + 1)+", column "+(col + 1));
        //ctx.strokeRect((col * tileWidth), (i * tileHeight), tileWidth, tileHeight);
        col ++;
    }
}