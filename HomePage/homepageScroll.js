function Scroller()
{
    $.getJSON("test.json", function(json) {
        console.log(json);
        RecentPostsSRCs(json);
    });
}




// document.getElementById("recentPostsJS").appendChild(elem);
// elem.src="";

function RecentPostsSRCs(json)
{
    var ImageSRCs = json.RecentPosts.ImageSRCs;
    for(i = ImageSRCs.length - 1; i <= 0; i--)
    {
        var elem = document.createElement("img");
        elem.src = ImageSRCs[i]
        document.getElementById("recentPostsJS").appendChild(elem)
        
    }
}