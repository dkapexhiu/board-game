
// Converts from pixel coordinates to bitmap coordinates
function bitmap_position(i) {
    return Math.floor(i/block_size)
}

// Convert from bitmap coordinates to pixel coordinates
function pixel_position(i) {
    return i*block_size;
}

function create_2D_array(rows, cols) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++)
        array[i] = new Array(cols);
    return array;
}

// Draws a rectangle with (x, y) being the top left corner coordinates and 'w' and 'h' being the width and height respectively
function draw_block(x, y, width, height) {
    // Fill block
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();
    context.fill();

    // Draw borders
    context.stroke();
}

function fetch_sprite (sprite_name) {
    switch(sprite_name) {
        case "up":
            return [0, 0, 40, 40];
            break;
        case "down":
            return [30, 0, 40, 40];
            break;
        case "left":
            return [60, 0, 15, 22];
            break;
        case "right":
            return [44, 0, 15, 22];
            break;
        case "star":
            return [0, 0, 40, 40];
            break;
        case "cake":
            return [40, 0, 40, 40];
            break;
        case "bread":
            return [80, 0, 40, 40];
            break;
        case "laser":
            return [120, 0, 40, 40];
            break;
        default:
            console.log("Sprite name invalid");
            break;
    }
}
