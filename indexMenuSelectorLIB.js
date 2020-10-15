function ImgSwitcher(catagory)
{
    var IMG = `/assets/${catagory}/IMG/`;
    var CAP = `/assets/${catagory}/CAP/`;
    var imgSrcs = [IMG+"00",IMG+"01",IMG+"02",IMG+"03",IMG+"10",IMG+"11",IMG+"12",IMG+"13",IMG+"20",IMG+"21",IMG+"22",IMG+"23"];
    var imgCap = [CAP+"00",CAP+"01",CAP+"02",CAP+"03",CAP+"10",CAP+"11",CAP+"12",CAP+"13",CAP+"20",CAP+"21",CAP+"22",CAP+"23"];
    var i;
    for (i = 0; i < imgSrcs.length; i++)
    {
        ImgEditor(imgSrcs[i], imgCap[i], `Feat-${i+1}`)
    }
}




function ImgEditor(sourceImg, sourceCaption, destination)
{
    document.getElementById(`${destination}`).src = sourceImg;
    document.getElementById(`${destination}-C`).src = sourceCaption;
}