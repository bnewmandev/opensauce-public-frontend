function GetData() 
{
    $.getJSON('data.json', function(data) 
    {
        console.log(data);
        document.getElementById("caption").textContent=data.ImageCaption;
        document.getElementById("article").textContent=data.AboutParagraph;
    });
};

GetData();