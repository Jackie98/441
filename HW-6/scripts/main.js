// since you only had 6 images on your HW6Game, you only need 6 imageNames here.
// also, you have to make sure there are no spaces in the names (look at image 5, image 6)
//var imageNames = ["image1", "image2", "image3", "image4", "image 5", "image 6", "image 7", "image 8", "image 9", "image 10", "image 11", "image 12"];
var imageNames = ["image1", "image2", "image3", "image4", "image5", "image6"];
var blankImagePath = "imgs/gofish.png";
var firstNumber = -1;
var secondNumber = -1;

//JSON declaration
var player = {"firstname":"", "lastname":"", "age":""};
var actualImages = new Array();


function printBlanks()
{
   // make random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageNames.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageNames[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{
    // create an array of actual images
    // since you have only 6 images on the main page, you need only 3 in this array
    // if you want to add more, you just need to create more images on the HW6Game page.
    // also, the sun.jpg wasn't working quite right for some reason.
    //var actualImagePath = ["imgs/sun.jpg", "imgs/moon.jpg", "imgs/venus.jpg", "imgs/mars.jpg"];
    var actualImagePath = ["imgs/mars.jpg", "imgs/moon.jpg", "imgs/venus.jpg"];
    // create another array to make sure the images only get added twice

    // in this case, you only need 3 in this array because you are checking
    // to see if each image (from the actualImagePath) is added twice
    //var count = [0,0,0,0,0,0,0,0,0,0,0,0];
    var count = [0,0,0];
    // create a while statement to check to see if our actual image array is full
    // since you have only 3 images, you only have to check up to 10
    //while(actualImages.length < 12)
    while(actualImages.length < 6)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added < 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }

}

function flipImage(number)
{

    // make the second image appear
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];

    }

    // check to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 500); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }



}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    //console.log(firstName);
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HW6Game.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);


}
