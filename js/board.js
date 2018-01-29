
function Board(width, height, level_number) {

    // Board dimensions
    this.width = width;
    this.height = height;

    // Load white and blue blocks of the specified level
    this.level = level[level_number];

    this.weapons = {
        1: "star",
        2: "cake",
        3: "bread",
        4: "laser"
    }

    // Create 2D array that will store generated weapons (same dimensions as board of blocks)
    this.board_weapons = create_2D_array(height, width);

    // Randomly distribute weapons across board
    this.load_weapons();

}

// Generate weapons
Board.prototype.load_weapons = function() {
    for (var i = 0; i < this.height; i++)
        for (var j = 0; j < this.width; j++)
            if (Math.floor(Math.random()*15) == 0 && this.level[i][j] == 0)
                this.board_weapons[i][j] = Math.floor(Math.random()*4)+1;
            else
                this.board_weapons[i][j] = 0;
}
