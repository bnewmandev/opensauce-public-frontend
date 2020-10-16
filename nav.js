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
    ClassedImageSwitch(id);
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

