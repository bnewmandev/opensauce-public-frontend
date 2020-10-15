let activeMenu = "#Snacks";
BackgroundUpdate();

function OnLoad()
{
    NavButton("Snacks")
}

function NavButton(id)
{
    let selector = document.querySelector(activeMenu);
    selector.style.backgroundColor = "#FFFFFF";

    activeMenu = "#"+id;
    BackgroundUpdate();
}

function BackgroundUpdate()
{
    let selector = document.querySelector(activeMenu);
    selector.style.backgroundColor = "#707070";
}