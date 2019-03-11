// I would like to use a grid with progressing shapes which
// play a tone when there are two shapes in one grid square.

// Right now, i've drawn the grid and have a moving ellipse,
// I think I want to create an array that will populate with
// shapes with randomized motion properties, which then will
// overlap at unpredictable but regular intervals.

// So far there is no sound element built.

var squares = [];

var ball = {
    x: 400 / 16,
    y: 400 / 16,
    r: 20
}


function setup() {
    createCanvas(400, 400);
    frameRate(10);
    background(230);

    for (x = 0; x < width; x += width / 8) {
        for (y = 0; y < height; y += height / 8) {
            squares.push({
                x: x,
                y: y,
                xlength: width / 8,
                ylength: height / 8,
                corner: 10,
                color: 190,
            });
        }
    }

    for (i = 0; i < squares.length; i++) {
        let square = squares[i];

        stroke(230);
        strokeWeight(3);
        fill(square.color);
        rect(square.x, square.y, square.xlength, square.ylength, square.corner);


    }
}

function draw() {
    push();
    translate(width+1, 0);
    rotate(radians(90));
    
    noStroke();
    fill(50);
    ellipse(ball.x, ball.y, ball.r);
    
    stroke(230);
	strokeWeight(3);
    fill(190);
    rect(ball.x-width*3/16, ball.y-height/16, width/8, width/8, 10);
    rect(ball.x+width-width*3/16, ball.y-height*3/16, width/8, width/8, 10);
    rect(ball.x+width-width*3/16, ball.y+height-height*3/16, width/8, width/8, 10);
    
    ball.x += width / 8;
    
    if (ball.x >= width) {
        ball.y += height / 8;
        ball.x = width / 16;
    }
    
    if (ball.y >= height) {
        ball.x = width / 16;
        ball.y = height / 16;
    }
    pop();
}
