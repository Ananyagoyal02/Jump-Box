var canvas;
var music;
var surface1,surface2,surface3,surface4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(50,590,200,10)
    surface1.shapeColor="blue"
    surface2=createSprite(260,590,200,10)
    surface2.shapeColor="yellow"
    surface3=createSprite(470,590,200,10)
    surface3.shapeColor="orange"
    surface4=createSprite(680,590,200,10)
    surface4.shapeColor="green"

    //create box sprite and give velocity
    box=createSprite(80,200,20,20)
    box.shapeColor="red"
    box.velocityX=5
    box.velocityY=5
    box.shapeColor="white"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites()
    box.bounceOff(edges)

  drawSprites()
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)) 
    {
        box.shapeColor=surface1.shapeColor
         
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2))
    {
        box.shapeColor=surface2.shapecolor
        music.play()
        
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3))
    {
        box.shapeColor=surface3.shapeColor
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4))
    {
        box.shapeColor=surface4.shapeColor
    }

    
}
