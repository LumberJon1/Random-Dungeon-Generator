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
        let num = parseInt(branchTips[i].getAttribute("id"));
        let numString = num.toString();
        if (num < 10) {
            numString = "0"+num.toString();
        };
        let num0 = parseInt(numString[0]);
        let num1 = parseInt(numString[1]);

        let up = num - numTiles;
        console.log("up id: "+up);
        let right = num + 1;
        console.log("right id: "+right);
        let down = num + numTiles;
        console.log("down id: "+down);
        let left = num - 1;
        console.log("left id: "+left);

        //Send direction IDs to an array
        let directions = [up, right, down, left];
        console.log("Directions before splice: "+directions);
        
        //Exclude a direction if it would end outside the grid section
        console.log("numString: "+numString, "num0: "+num0, "num1: "+num1);
        if (num1 === (numTiles - 1)) {
            console.log("Cannot go right.");
            directions.splice(1, 1);
        };
        if (num1 === 0) {
            console.log("Cannot go left.");
            directions.splice(3, 1);
        };
        if (num0 === (numTiles - 1)) {
            console.log("Cannot go down.");
            directions.splice(2, 1)
        };
        if (num0 === 0) {
            console.log("Cannot go up.");
            console.log(up);
            console.log(directions[up]);
            directions.splice(0, 1);

        }

        console.log(directions);

        //Select which direction to branch from out of the list of possible directions

        for (let i = 0; i < directions.length; i++) {
            console.log("Directions[i]: "+directions[i]);
            let direction = directions[i];
            if (direction < 10) {
                direction = "0"+direction;
            }
            if (document.getElementById(direction).classList.contains("active")) {
                console.log("Cannot merge with active tile");
            }
        }

        let selected = directions.splice(Math.floor(Math.random() * directions.length), 1);
        console.log(selected);

        //Remove the branch-tip class
        document.getElementById(numString).setAttribute("class", "active");
        //Add the classes "active", "branch-tip" to the branched ends
        document.getElementById(selected).setAttribute("class", "active branch-tip");

    };

    //Down: += numTiles;
    //Left: -= 1;
    //Right: += 1;
    //Up: -= numTiles;

}

