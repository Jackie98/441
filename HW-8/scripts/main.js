// Image class
var imageArray = new Array();

class Images {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theImageSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }
}

function initializeArray()
{
    var image1 = new Images("#image-Id", "images/flower.jpg");
    var image2 = new Images("#image-Id", "images/chair.jpg");
    var image3 = new Images("#image-Id", "images/bridge.jpg");
    var image4 = new Images("#image-Id", "images/bike.jpg");

    imageArray.push(image1);
    imageArray.push(image2);
    imageArray.push(image3);
    imageArray.push(image4);
}

function getRandomIndex(){
    return Math.floor(Math.random() * 4);
}

class Squares {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

// begin Jquery
$(document).ready(function() {

    $("button").click(function(){
        $(imageArray[getRandomIndex()].theImageSelector).attr("src", imageArray[getRandomIndex()].theImagePath).fadeIn().fadeOut();

    });
});

function moveSquare()
{
    for (var i = 0; i < 3; i ++) {
        $("#square1").animate({left:200}).animate({top:350}).animate({left:400}).animate({top:100});
    }

    for (var j = 0; j < 5; j ++) {
        $("#square2").animate({left:500}).animate({top:550}).animate({left:300}).animate({top:155});
    }

    for (var k = 0; k < 7; k ++) {
    $("#square3").animate({left:300}).animate({top:600}).animate({left:100}).animate({top:150});
    }
}
