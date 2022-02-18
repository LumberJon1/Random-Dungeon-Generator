//define global constants
const dungeonGrid = document.getElementById("dungeon-grid-div");
const numTiles = 10;
const activeColor = "#e9d9b0";
const inactiveColor = "white";

//Resize based on hardcoded parameters for now, eventually user input
dungeonGrid.style.width = "500px";
dungeonGrid.style.height = "500px";

//Convert style elements from pixels to ints so they can drive other values
const gridWidth = (dungeonGrid.style.width).split("px")[0];
const gridHeight = (dungeonGrid.style.height).split("px")[0];

//Define tile width and height based on dungeonGrid proportions
const tileWidth = gridWidth / numTiles;
const tileHeight = gridHeight / numTiles;

//fill the canvas
for (let i = 0; i < numTiles; i++) {
    let col = 0;
    for (let j = 0; j < numTiles; j++) {
        console.log("row "+(i + 1)+", column "+(col + 1));
        let tile = document.createElement("div");
        tile.style.border = "1px solid black";
        tile.style.position = "absolute";
        tile.style.left = (col * tileWidth)+"px";
        tile.style.top = (i * tileHeight)+"px";
        tile.style.width = (tileWidth)+"px";
        tile.style.height = (tileHeight)+"px";
        tile.setAttribute("id", (i.toString())+(col.toString()));
        dungeonGrid.appendChild(tile);
        console.log(tile.style.left, tile.style.top);
        col ++;
    }
}