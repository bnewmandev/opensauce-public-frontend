var configJSON = require('./assets/index/menuConfig.json')

function ImgSwitcher(catagory)
{
    var IMG = `/assets/index/${catagory}/IMG/`;
    var imgSrcs = [IMG+"00.png",IMG+"01.png",IMG+"02.png",IMG+"03.png",IMG+"10.png",IMG+"11.png",IMG+"12.png",IMG+"13.png",IMG+"20.png",IMG+"21.png",IMG+"22.png",IMG+"23.png"];
    
    for (i in configJSON[catagory+".links"])
    {
        JSONLnks += configJSON[catagory+".links"][i];
    }
    for (i in configJSON[catagory+".captions"])
    {
        JSONCaps += configJSON[catagory+".captions"][i];
    }

    for (i in imgSrcs)
    {
        ImgEditor(imgSrcs[i], JSONCaps[i], JSONLnks[i], i);
    }

}

function ImgEditor(newImg, caption, link, id)
{
    idOfImg = `Feat-${id}`;
    idOfCap = idOfImg+"-C";
    idOfLnk = idOfImg+"-L"

    document.getElementById(idOfImg).src = newImg;
    document.getElementById(idOfCap).innerHTML = caption;
    document.getElementById(idOfLnk).src = link;
}