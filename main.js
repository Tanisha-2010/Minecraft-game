var canvas = new fabric.Canvas("myCanvas");
block_height = 30;
block_width = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;
        player_object.scaleToHeight(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(img) {
        block_image_object = img;

        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "80" && e.shiftKey == true) {
        console.log("Shift and P is pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if (keyPressed == "77" && e.shiftKey == true) {
        console.log("Shift and M is pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if (keyPressed == "67") {
        new_image("cloud.jpg");
        console.log("c");
    }

    if (keyPressed == "68") {
        new_image("dark_green.png");
        console.log("d");
    }

    if (keyPressed == "71") {
        new_image("ground.png");
        console.log("g");
    }

    if (keyPressed == "76") {
        new_image("light_green.png");
        console.log("l");
    }

    if (keyPressed == "82") {
        new_image("roof.jpg");
        console.log("r");
    }

    if (keyPressed == "84") {
        new_image("trunk.jpg");
        console.log("t");
    }

    if (keyPressed == "85") {
        new_image("unique.png");
        console.log("u");
    }

    if (keyPressed == "87") {
        new_image("wall.jpg");
        console.log("w");
    }

    if (keyPressed == "89") {
        new_image("yellow_wall.png");
        console.log("y");
    }

    if (keyPressed == "37") {
        console.log("left");
        left();
    }

    if (keyPressed == "38") {
        console.log("top");
        up();
    }

    if (keyPressed == "39") {
        console.log("right");
        right();
    }

    if (keyPressed == "40") {
        console.log("down");
        down();
    }
}

function up() {
    if (player_y > 0) {
        player_y = player_y - block_height;
        console.log("player y=" + player_y + "player x=" + player_x);
        console.log("block height=" + block_height);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() {
    if (player_y < 500) {
        player_y = player_y + block_height;
        console.log("player y = " + player_y + "player x =" + player_x);
        console.log("block height=" + block_height);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_width;
        console.log("player x =" + player_x + "player y=" + player_y);
        console.log("block width=" + block_width);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right() {
    if (player_x < 900) {
        player_x = player_x + block_width;
        console.log("player x = " + player_x + "player y=" + player_y);
        console.log("block width=" + block_width);
        canvas.remove(player_object);
        playerUpdate();
    }
}