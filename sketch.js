const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var boxes = [];
var secondBoxes = [];
var thirdBoxes = [];
var fourthBoxes = [];
var ground1, ground2, ground3;
var goal1, goal2, goal3;
function preload() {
    bg = loadImage("download.jpeg");
}

function setup() {
    canvas = createCanvas(900, 900);
    colorMode(HSB)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    // box1 = new Box(230, 200, 20, 20);

}

function mouseClicked() {

}

function draw() {
    background(0);
    boxes.push(new Box(230, 200, random(6, 11)));
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
    secondBoxes.push(new Box(230, 200, random(6, 11)));
    for (let b = 0; b < secondBoxes.length; b++) {
        secondBoxes[b].display();
    }
    thirdBoxes.push(new Box(230, 200, random(6, 11)));
    for (let a = 0; a < thirdBoxes.length; a++) {
        thirdBoxes[a].display();
    }
    fourthBoxes.push(new Box(230, 200, random(6, 11)));
    for (let c = 0; c < fourthBoxes.length; c++) {
        fourthBoxes[c].display();
    }
    // fourthBoxes
}

