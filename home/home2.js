$.getJSON('home/scroller-data.json', function(data)
{
    function SetMenu(menu)
    {
        const recentPostsDict = 
        {
            menuID: "recent-posts-js",
            pageLinks: data.Recent.pageLinks,
            imgLinks: data.Recent.imgLinks,
            altTexts: data.Recent.altTexts
        };

        const ingredientsDict = 
        {
            menuID: "ingredients-js",
            pageLinks: data.Ingredients.pageLinks,
            imgLinks: data.Ingredients.imgLinks,
            altTexts: data.Ingredients.altTexts
        };

        const recipesDict = 
        {
            menuID: "recipes-js",
            pageLinks: data.Recipes.pageLinks,
            imgLinks: data.Recipes.imgLinks,
            altTexts: data.Recipes.altTexts
        };

        if (menu == "recent")
        {
            return recentPostsDict;
        }
        else if (menu == "ingredients")
        {
            return ingredientsDict;
        }
        else if (menu == "recipes")
        {
            return recipesDict;
        }
    }

    function UpdateMenu(menu)
    {
//        console.log("UpdateMenu called")
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
        //AppendNav(dict.menuID,"NavButton");

    }

    function AppendLink(menuID, pageLink, imgLink, altText)
    {
        // console.log("Append Link Function Called")
        var nodeA = document.createElement("a");
        nodeA.href = pageLink;
        nodeA.className = "scroller-general-image";
        nodeA.className = "tooltip";

        var nodeI = document.createElement("img");
        nodeI.src = imgLink;
        nodeI.alt = altText;
        nodeI.title = altText;

        var nodeT = document.createElement("span");
        nodeT.innerHTML = altText;
        nodeT.className = "tooltiptext";

        nodeA.appendChild(nodeT);
        nodeA.appendChild(nodeI);
        console.log(menuID)
        document.getElementById(menuID).appendChild(nodeA);

 //       console.log(nodeA);
    }



//    console.log("Loaded JS File");
    UpdateMenu("recent");
    UpdateMenu("ingredients");
    UpdateMenu("recipes");

});