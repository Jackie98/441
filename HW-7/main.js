var myViewFinderArray = new Array();

var artImg = ['imgs/chiarabautistasky.jpg', 'imgs/Chrysanthemum.jpg', 'imgs/Desert.jpg', 'imgs/Hydrangeas.jpg', 'imgs/cabin.jpg',];



class ViewFinder
{
    constructor(title, author, year, description)
    {
        this.Title = Title;
        this.Author = Author;
        this.Year = Year;
        this.Description = Description;

    }

    toStringTitle(){
  		return this.Title;
  	}
  	toStringAuthor(){
  		return "Artist: " + this.Author;
  	}
  	toStringYear(){
  		return "Year: " + this.Year;
  	}
  	toStringDescription(){
  		return "Description: " + this.Description;
  	}
  }


function initializeArray()
{
    var myViewFinder0 = new ViewFinder("Sky and Pilot Romance", "2006", "A painting of the SKy falling in love with a pilot");
    var myViewFinder1 = new ViewFinder("Chrysanthemum", "2003", "A beautiful photo of a Chrysanthemum");
    var myViewFinder2 = new ViewFinder("Desert", "2010", "A lovely depiction of some faraway desert");
    var myViewFinder3 = new ViewFinder("Hydrangeas", "2013", "A handful of sweet hydrangea flowers");
    var myViewFinder4 = new ViewFinder("Cabin", "2017", "A secret hideout in the woods");

    myViewFinderArray.push(myViewFinder0, myViewFinder1, myViewFinder2, myViewFinder3, myViewFinder4);

}

function accessInformation() {
  var x = Math.floor((Math.random() * 5) +1 );

      document.getElementById("Artwork").src= artImg[x];
      document.getElementById("Title").innerHTML = myViewFinderArray[x].toStringTitle();
  	document.getElementById("Author").innerHTML = myViewFinderArray[x].toStringAuthor();
  	document.getElementById("Year").innerHTML = myViewFinderArray[x].toStringYear();
  	document.getElementById("Description").innerHTML = myViewFinderArray[x].toStringDescription();

  }
}
