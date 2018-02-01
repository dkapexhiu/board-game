// Handle input
function input() {
    document.addEventListener('keydown', function(event) {
        if (!paused)
            switch(event.keyCode) {
                case 37:    // left arrow
                    if(!player[0].endTurn) {player[0].left = true;}
                    break;
                case 38:    // up arrow
                    if(!player[0].endTurn) {player[0].up = true;}
                    break;
                case 39:    // right arrow
                    if(!player[0].endTurn) {player[0].right = true;}
                    break;
                case 40:    // down arrow
                    if(!player[0].endTurn) {player[0].down = true;}
                    break;
                case 65:    // a
                    if(!player[1].endTurn) {player[1].left = true;}
                    break;
                case 87:    // w
                    if(!player[1].endTurn) {player[1].up = true;}
                    break;
                case 68:    // d
                    if(!player[1].endTurn) {player[1].right = true;}
                    break;
                case 83:    // s
                    if(!player[1].endTurn) {player[1].down = true;}
                    break;
                case 84:   // t
                    player[0].endTurn = !player[0].endTurn;
                    player[1].endTurn = !player[1].endTurn;
                    break;
                default:
                    break;
            }
    });

    document.addEventListener('keyup', function(event) {
        switch(event.keyCode) {
            case 37:    // left arrow
                player[0].left = false;
                //player[0].frame["left"] = 0;
                break;
            case 38:    // up arrow
                player[0].up = false;
                //player[0].frame["up"] = 0;
                break;
            case 39:    // right arrow
                player[0].right = false;
                //player[0].frame["right"] = 12;
                break;
            case 40:    // down arrow
                player[0].down = false;
                //player[0].frame["down"] = 0;
                break;
            case 65:    // a
                player[1].left = false;
                //player[1].frame["left"] = 0;
                break;
            case 87:    // w
                player[1].up = false;
                //player[1].frame["up"] = 0;
                break;
            case 68:    // d
                player[1].right = false;
                //player[1].frame["right"] = 12;
                break;
            case 83:    // s
                player[1].down = false;
                //player[1].frame["down"] = 0;
                break;
            case 80:    // p
                console.log("Paused!");
                paused = !paused;
                break;       
            default:
                break;
        }
    });

}
