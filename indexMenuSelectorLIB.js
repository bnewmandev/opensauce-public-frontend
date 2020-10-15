function ImgSwitcher(catagory)
{
    var IMG = `/assets/${catagory}/IMG/`;
    var CAP = `/assets/${catagory}/CAP/`;
    var LNK = `/assets/${catagory}/LNK/`;
    var imgSrcs = [IMG+"00.png",IMG+"01.png",IMG+"02.png",IMG+"03.png",IMG+"10.png",IMG+"11.png",IMG+"12.png",IMG+"13.png",IMG+"20.png",IMG+"21.png",IMG+"22.png",IMG+"23.png"];
    var imgCap = [CAP+"00",CAP+"01",CAP+"02",CAP+"03",CAP+"10",CAP+"11",CAP+"12",CAP+"13",CAP+"20",CAP+"21",CAP+"22",CAP+"23"];
    var imgLNK = [];

    var i;
    for (i = 0; i < imgSrcs.length; i++)
    {
        var caption = "CAPTION NOT FOUND";
        let fileCap = imgCap[i];
        let capRdr = new FileReader();
        capRdr.addEventListener('load', function(e) {
            caption = e.target.result;
        })
        var link = "index.html"
        let fileLnk = imgLnk[i];
        let lnkRdr = new FileReader();
        lnkRdr.addEventListener('load', function(e) {
            link = e.target.result;
        })

        ImgEditor(link, caption, `Feat-${i+1}`)
    }
}

function ImgEditor(sourceImg, sourceCaption, destination)
{
    document.getElementById(`${destination}`).src = sourceImg;
    document.getElementById(`${destination}-C`).src = sourceCaption;

}