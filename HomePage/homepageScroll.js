$.getJSON('homepageData.json', function(data)
{
    function SetMenu(menu)
    {
        const recentPostsDict = 
        {
            menuID: "recentPostsJS",
            pageLinks: data.Recent.pageLinks,
            imgLinks: data.Recent.imgLinks,
            altTexts: data.Recent.altTexts
        };

        const ingredientsDict = 
        {
            menuID: "ingredientsJS",
            pageLinks: data.Ingredients.pageLinks,
            imgLinks: data.Ingredients.imgLinks,
            altTexts: data.Ingredients.altTexts
        };

        const authorsDict = 
        {
            menuID: "authorsJS",
            pageLinks: data.Authors.pageLinks,
            imgLinks: data.Authors.imgLinks,
            altTexts: data.Authors.altTexts
        };

        if (menu == "recent")
        {
            return recentPostsDict;
        }
        else if (menu == "ingredients")
        {
            return ingredientsDict;
        }
        else if (menu == "authors")
        {
            return authorsDict;
        }
    }

    function UpdateMenu(menu)
    {
        console.log("UpdateMenu called")
        let dict = SetMenu(menu);
        let i = 0;
        length = Object.keys(dict.pageLinks).length
        console.log(length);
        while (i < length)
        {
            AppendLink(
                dict.menuID,
                dict.pageLinks[i],
                dict.imgLinks[i],
                dict.altTexts[i]
            );
            i++;
        }
    }

    function AppendLink(menuID, pageLink, imgLink, altText)
    {
        // console.log("Append Link Function Called")
        var nodeA = document.createElement("a");
        nodeA.href = pageLink;
        nodeA.className = "ScrollerGeneralImage";

        var nodeI = document.createElement("img");
        nodeI.src = imgLink;
        nodeI.alt = altText;

        nodeA.appendChild(nodeI);
        document.getElementById(menuID).appendChild(nodeA);

        console.log(nodeA);
    }
    console.log("Loaded JS File");
    UpdateMenu("recent");
    UpdateMenu("ingredients");
    UpdateMenu("authors");

});