var canvas= new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update()
{
fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80')
    {
        console.log("P+shift");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height
    }

    if(e.shiftKey==true&&keyPressed=='77')
    {
        console.log("M+shift");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keyPressed=='72')
    {
        new_image('hulk_face.png');
        console.log("head");
    } 

    if(keyPressed=='82')
    {
        new_image('thor_right_hand.png');
        console.log("right hand");
    }

    if(keyPressed=='76')
    {
        new_image('captain_america_left_hand.png');
        console.log("left hand");
    }

    if(keyPressed=='66')
    {
        new_image('ironman_body.png');
        console.log("body");
    }

    if(keyPressed=='70')
    {
        new_image('spiderman_legs.png');
        console.log("W");
    }

    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }

    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }

    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }

    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}

