//define global constants
const dungeonGrid = document.getElementById("dungeon-grid-div");
const numTiles = 10;
const dungeonLength = 10;
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
        let tile = document.createElement("div");
        tile.style.border = "1px solid black";
        tile.style.position = "absolute";
        tile.style.left = (col * tileWidth)+"px";
        tile.style.top = (i * tileHeight)+"px";
        tile.style.width = (tileWidth)+"px";
        tile.style.height = (tileHeight)+"px";
        tile.setAttribute("id", (i.toString())+(col.toString()));
        dungeonGrid.appendChild(tile);
        col ++;
    }
}

//tile styling algorithm
let startingTile = Math.floor(Math.random() * (numTiles ** 2)).toString();
if (startingTile < 10) {
    startingTile = "0"+startingTile;
};
console.log(startingTile);
let startingTileEl = document.getElementById(startingTile);
startingTileEl.setAttribute("class", "active branch-tip");

//Keep track of the number of dungeon tiles activated
let numActive = 0;

//As long as active < dungeonLength, run a loop to evaluate the algorithm.
//This needs to be done for every active branch.
if (numActive < dungeonLength) {

    let branchTips = document.getElementsByClassName("branch-tip");
    for (let i = 0; i < branchTips.length; i++) {
        //Decide which direction to branch...
        //Define the ID of each of the possible directions
        let up = parseInt(branchTips[i].getAttribute("id")) - numTiles;
        console.log(up);
        let right = parseInt(branchTips[i].getAttribute("id")) + 1;
        console.log(right);
        let down = parseInt(branchTips[i].getAttribute("id")) + numTiles;
        console.log(down);
        let left = parseInt(branchTips[i].getAttribute("id")) - 1;
        console.log(left);
        //Exclude a direction if it would result in a merged active path
        
        //Exclude a direction if it would end outside the grid section
        
        //Add the classes "active", "branch-tip" to the branched ends

    };

    //Down: += numTiles;
    //Left: -= 1;
    //Right: += 1;
    //Up: -= numTiles;

}

