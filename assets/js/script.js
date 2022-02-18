//define global constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const numTiles = 10;
const activeColor = "#e9d9b0";
const inactiveColor = "white";

//Resize based on hardcoded parameters for now, eventually user input
canvas.setAttribute("width", "500");
canvas.setAttribute("height", "500");

//Define tile width and height based on canvas proportions
const tileWidth = canvas.getAttribute("width") / numTiles;
const tileHeight = canvas.getAttribute("height") / numTiles;

//fill the canvas
for (let i = 0; i < numTiles; i++) {
    let col = 0;
    for (let j = 0; j < numTiles; j++) {
        console.log("row "+(i + 1)+", column "+(col + 1));
        ctx.strokeRect((col * tileWidth), (i * tileHeight), tileWidth, tileHeight);
        col ++;
    }
}