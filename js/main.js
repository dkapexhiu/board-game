// Canvas
var context;
var width;
var height;

// Board
var board;
var block_size = 40;

// Array of players
var player = [];

// Array of players coordinates
var player_coordinates = [];

// Sprites
var player1;
var player2;
var weapons;

init(); //initialize the game
main(); //game loop

// Initialize everything
function init() {
    // Get a reference to the canvas and indicate that we'll be working in 2D
    var canvas = document.getElementById("game");
    context = canvas.getContext("2d");

    // Get canvas dimensions
    width = canvas.width;
    height = canvas.height;

    // Black borders (default)
    context.strokeStyle = "black";

    // For some reason, the canvas dimensions differ by one pixel when zooming in or out
    if (width != 600)
        width = 600;
    if (height != 600)
        height = 600;

    // Disable smoothness for pixelated effect
    context.webkitImageSmoothingEnabled = false;

    // Load level map
    board = new Board(15, 15, 1);

    // Load sprites
    player1 = new Image();
    player2 = new Image();
    weapons_sprite = new Image();

    player1.src = '../img/player1.png';
    player2.src = '../img/player2.png';
    weapons_sprite.src = '../img/tileset.png';

    // Initialize players
    player[0] = new Player(player1, 0, block_size, block_size, false);
    player[1] = new Player(player2, 1, width-2*block_size, height-2*block_size, true);

    // Initialize players coordinates
    for (var i = player.length - 1; i >= 0; i--) {
        player_coordinates.push([player[i].x, player[i].y]);
    }

    paused = false;

    input();
}

// Game loop
function main() {
    requestAnimationFrame(main);
    update();
    draw();
    if (paused) {
        var pause_width = 140;
        var pause_height = 30;
        context.fillStyle = "rgba(100, 100, 100, 1)";
        draw_block((width-pause_width)/2, (height-pause_height)/2, pause_width, pause_height);

        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.font="25px Open Sans";
        context.fillText("PAUSE", (width-pause_width)/2+30, (height-pause_height)/2+25, 500);
    }
}

// Update game state
function update() {
    for (var i = 0; i < player.length; i++) {

        if (player[i].alive) {

            // Update player position
            player_coordinates =  player[i].move(player_coordinates);

            // Check if player is stepping on a weapon and have him pick it up
            var board_x = bitmap_position(player[i].x + player[i].sprite_width/2);
            var board_y = bitmap_position(player[i].y + player[i].sprite_height/2);
            var weapon = board.board_weapons[board_y][board_x];
            if (weapon != 0) {
                board.board_weapons[board_y][board_x] = 0;
                player[i].add_weapon(weapon);
            }

        }
    }
}

//draw the game
function draw() {

    // Clear screen (erase everything)
    context.clearRect(0, 0, width, height);

    // Fill background with pitch white
    context.fillStyle = "rgba(255, 255, 255, 1)";
    draw_block(0, 0, width, height);

    // Draw weapons
    for (var i = 0; i < board.height; i++)
        for (var j = 0; j < board.width; j++) {
            var weapon = board.board_weapons[i][j];
            if (weapon != 0 && board.level[i][j] == 0) {
                var sprite = fetch_sprite(board.weapons[weapon]);
                context.drawImage(weapons_sprite, sprite[0], sprite[1], sprite[2], sprite[3], pixel_position(j), pixel_position(i), sprite[2]*(block_size/sprite[3]), block_size);
            }
        }

    // Draw blocks
    for (var i = 0; i < 15; i++)
        for (var j = 0; j < 15; j++)
            if (board.level[j][i] == 1) {
                context.fillStyle = "rgba(255, 255, 255, 1)";
                draw_block(pixel_position(i), pixel_position(j), block_size, block_size);
            }
            else if (board.level[j][i] == 2) {
                context.fillStyle = "rgba(0, 255, 255, 1)";
                draw_block(pixel_position(i), pixel_position(j), block_size, block_size);
            }

    // Draw players
    for (var i = 0; i < player.length; i++)
        if (player[i].alive == true)
            player[i].draw();

}


