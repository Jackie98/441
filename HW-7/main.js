var myViewFinderArray = new Array();


class ViewFinder
{
    constructor(title, year, description, imagePath, author)
    {
        this.title = title;
        this.year = year;
        this.description = description;
        this.imagepath = imagePath;
        this.author = author;
    }

    toString()
    {
        return "Title: " + this.title;
        return "Year: " + this.year;
        return "Description :" + this.description;
        return "Image :" + this.imagePath;
        return "Author :" + this.author;
    }


    get theTitle()
    {
        return this.title;

    }

    get theYear()
    {
    return this.year;

  }
    get theDescription()
    {
      return this.description;
    }
    get theImage()
    {
      return this.imagePath;
    }
    get theAuthor()
    {
      return this.author;
    }
}


function initializeArray();
{
    var myViewFinder = new ViewFinder("Sky and Pilot Romance");
    var myViewFinder1 = new ViewFinder("2005");
    var myViewFinder2 = new ViewFinder("A painting of the sky falling in love with a pilot");
    var myViewFinder3 = new ViewFinder();
    var myViewFinder4 = new ViewFinder("Chiara Bautista");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

}
function accessInformation();
{

    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    document.getElementById("title").innerHTML = myViewFinderArray[0].toString();
    document.getElementById("year").innerHTML = myViewFinderArray[1].toString();
    document.getElementById("description").innerHTML = myViewFinderArray[2].toString();
    document.getElementById("imagePath").innerHTML = myViewFinderArray[3].tostring();
    document.getElementById("author").innerHTML = myViewFinderArray[4].tostring();

}

function getARandomNumber(min, max)
  {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  document.write(getARandomNumber(0,4));
}
