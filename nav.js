let activeMenu = "#Snacks"; // Initializes active menu with snacks as default
let JSONLnksG = null;

BackgroundUpdate();


function OnLoad() // Runs when <body> tag is loaded
{
    NavButton("Snacks")
}

function NavButton(id) // Runs on menu button press
{
    let selector = document.querySelector(activeMenu); // selects "active menu" (default is snacks)
    selector.style.backgroundColor = "#FFFFFF"; // changes background colour of active menu to white
    //ImgSwitcher(id);
    //ClassedImageSwitch(id);
    activeMenu = "#"+id; // Changes the active menu to the button pressed
    BackgroundUpdate();
}

function BackgroundUpdate() // Changes the background of the active menu to grey
{
    let selector = document.querySelector(activeMenu); // selects "active menu" (default is snacks)
    selector.style.backgroundColor = "#707070"; //sets background to grey
}


function CatagoryDebug()
{
    const Snacks = new Catagory("Snacks")
}

class Catagory 
{
    constructor(name) {
        this.jsonLoc = ""
        this.name = name;
        this.IMG = `/assets/index/${this.name}/IMG/`;
        this.imageSrcs = [this.IMG+"00.png",this.IMG+"01.png",this.IMG+"02.png",this.IMG+"03.png",this.IMG+"10.png",this.IMG+"11.png",this.IMG+"12.png",this.IMG+"13.png",this.IMG+"20.png",this.IMG+"21.png",this.IMG+"22.png",this.IMG+"23.png"];
    }

    get captions()
    {
        return this.jsonQuery("captions")
    }

    get links()
    {
        return this.jsonQuery("links")
    }
    

    jsonQuery(type)
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            return eval(`myObj.${this.name}.${type}`)
          }
        };
        xmlhttp.open("GET", this.jsonLocation, true);
        xmlhttp.send(); 
    }


    SwitchTo() 
    {
        for (i=0; i < 12; i++)
        {
            idOfImg = `Feat-${i}`;
            idOfCap = idOfImg+"-C";
            idOfLnk = idOfImg+"-L"
        
            document.getElementById(idOfImg).src = imgSrcs[i];
            document.getElementById(idOfCap).innerHTML = captions[i];
            document.getElementById(idOfLnk).src = links[i];
        }
    }

}