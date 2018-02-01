function Player(sprite_sheet, number, x, y, endTurn) {
    this.sprite_sheet = sprite_sheet;
    this.number = number;

    this.x = x;
    this.y = y;

    this.alive = true;

    this.velocity = 3;

    this.sprite_width = null;
    this.sprite_height = null;

    // Indicated whether player is moving in a certain direction
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    // Sprite animation
    //this.frame = new Array(4);
    //this.frame["left"] = 0;
    //this.frame["up"] = 0;
    //this.frame["right"] = 0;
    //this.frame["down"] = 0;

    // Movement direction
    this.direction = "down";

    // Strength
    this.strength = 25;

    //find the adjacent player
    this.adjacentTo = [[0, 0], [0, 0]];
    this.adjacentToPlayer = [false, false];

    //turns
    this.endTurn = endTurn;

    //starting position
    this.startingPosition = [x,y];
    console.log(this.startingPosition);

}

Player.prototype.move = function(player_coordinates) {

    // Update position
    if (this.left)
        this.x -= this.velocity;
    else if (this.right)
        this.x += this.velocity;
    else if (this.up)
        this.y -= this.velocity;
    else if (this.down)
        this.y += this.velocity;

    // Collision detection (rectifies coordinates)
    var board_x_left = bitmap_position(this.x);
    var board_x_right = bitmap_position(this.x+this.sprite_width-1);
    var board_y_up = bitmap_position(this.y);
    var board_y_down = bitmap_position(this.y+this.sprite_height-1);

    var top_left_collision = board.level[board_y_up][board_x_left] >= 1;
    var top_right_collision = board.level[board_y_up][board_x_right] >= 1;
    var bottom_left_collision = board.level[board_y_down][board_x_left] >= 1;
    var bottom_right_collision = board.level[board_y_down][board_x_right] >= 1;

    for (var i = player_coordinates.length - 1; i >= 0; i--) {
        if (i === this.number) continue;
        this.adjacentTo[i] = [Math.abs(player_coordinates[this.number][0] - player_coordinates[i][0]),
            Math.abs(player_coordinates[this.number][1] - player_coordinates[i][1])];
    }
      
    for (var i = this.adjacentTo.length - 1; i >= 0; i--) {
        if (this.adjacentTo[i][0] <= 60 && this.adjacentTo[i][1] <= 60) {
            this.adjacentToPlayer[i] = true;
        }
        else {
            this.adjacentToPlayer[i] = false;
        }
    }

    if (this.left) {
        if (top_left_collision || bottom_left_collision) {
            this.x += this.velocity;
            board_x_left = bitmap_position(this.x);
        }
    }

    else if (this.right) {
        if (top_right_collision || bottom_right_collision) {
            this.x -= this.velocity;
            board_x_right = bitmap_position(this.x+this.sprite_width-1);
        }
    }

    else if (this.up) {
        if (top_left_collision || top_right_collision) {
            this.y += this.velocity;
            board_y_up = bitmap_position(this.y);
        }
    }

    else if (this.down) {
        if (bottom_left_collision || bottom_right_collision) {
            this.y -= this.velocity;
            board_y_down = bitmap_position(this.y+this.sprite_height-1);
        }
    }

    // Slide on corners
    if (this.left) {
        if (top_left_collision) {
            if (board.level[board_y_up+1][board_x_left] == 0 && board.level[board_y_up+1][board_x_left-1] == 0)
                this.y++;
        }

        else if (bottom_left_collision) {
            if (board.level[board_y_down-1][board_x_left] == 0 && board.level[board_y_down-1][board_x_left-1] == 0)
                this.y--;
        }
    }

    else if (this.right) {
        if (top_right_collision) {
            if (board.level[board_y_up+1][board_x_right] == 0 && board.level[board_y_up+1][board_x_right+1] == 0)
                this.y++;
        }

        else if (bottom_right_collision) {
            if (board.level[board_y_down-1][board_x_right] == 0 && board.level[board_y_down-1][board_x_right+1] == 0)
                this.y--;
        }
    }

    else if (this.up) {
        if (top_left_collision) {
            if (board.level[board_y_up][board_x_left+1] == 0 && board.level[board_y_up-1][board_x_left+1] == 0)
                this.x++;
        }

        else if (top_right_collision) {
            if (board.level[board_y_up][board_x_right-1] == 0 && board.level[board_y_up-1][board_x_right-1] == 0)
                this.x--;
        }
    }

    else if (this.down) {
        if (bottom_left_collision) {
            if (board.level[board_y_down][board_x_left+1] == 0 && board.level[board_y_down+1][board_x_left+1] == 0)
                this.x++;
        }

        else if (bottom_right_collision) {
            if (board.level[board_y_down][board_x_right-1] == 0 && board.level[board_y_down+1][board_x_right-1] == 0)
                this.x--;
        }
    }

    // Update player coordinates in array
    player_coordinates[this.number] = [this.x, this.y];
    this.startingPosition = [this.x, this.y];
    console.log(this.startingPosition);

    //log players positions
    if(this.left || this.right || this.up || this.down) {
        console.log(this.adjacentToPlayer);
        if(this.adjacentToPlayer[0] == true && this.adjacentToPlayer[1] == true){
            window.location.href = '../battle-system/index.html';
        }
    }

    Math.getDistance = function( x1, y1, x2, y2 ) {
        var xs = x2 - x1, ys = y2 - y1;        
        xs *= xs;
        ys *= ys;     
        return Math.sqrt( xs + ys );
    };
    console.log(Math.getDistance(this.x, this.y, this.startingPosition[0], this.startingPosition[1]));

    return player_coordinates;

}

Player.prototype.draw = function() {

    var sprite = [];

    switch (this.direction) {
        case "left":
            sprite = fetch_sprite("left");
            break;
        case "up":
            sprite = fetch_sprite("up");
            break;
        case "right":
            sprite = fetch_sprite("right");
            break;
        case "down":
            sprite = fetch_sprite("down");
            break;
        default:
            sprite = fetch_sprite("down");
            break;
    }

    this.sprite_width = Math.floor(sprite[2]*(block_size/sprite[3]));
    this.sprite_height = block_size;
    context.drawImage(this.sprite_sheet, sprite[0], sprite[1], sprite[2], sprite[3], this.x, this.y, this.sprite_width, block_size);
}

Player.prototype.add_weapon = function(weapon) {
    switch(weapon) {
        case 1:
            // Increases strength by 3
            console.log('strength+3');
            this.strength + 3;
            break;
        case 2:
            // Increases strength by 5
            console.log('strength+5');
            this.strength + 5;
            break;
        case 3:
            // Increases strength by 7
            console.log('strength+7');
            this.strength + 7;
            break;
        case 4:
            // Increases strength by 10
            console.log('strength+10');
            this.strength + 10;
            break;
    }
}
