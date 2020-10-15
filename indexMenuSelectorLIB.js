function ImgSwitcher(catagory)
{
    var IMG = `/assets/${catagory}/IMG/`;
    var CAP = `/assets/${catagory}/CAP/`;
    var imgSrcs = [IMG+"00"];
    var imgCap = [];
}




function ImgEditor(sourceImg, sourceCaption, destination)
{
    document.getElementById(`${destination}`).src = sourceImg;
    document.getElementById(`${destination}-C`).src = sourceCaption;
}