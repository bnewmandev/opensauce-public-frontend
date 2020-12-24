    const url='https://api.opensauce.vercel.app/api/user/get/ToddHoward';
    async function fetchData() {
    const data = await fetch(url).then(response => response.json()).then(data => { return data }); 
    return data
    }
    let currentUser;
    fetchData().then(data => { 
    if (data.error) data = { 
        username: "ToddHoward",
        avatar: "https://cdn.opensauce.uk/assets/testingfiles/todd.jpg",
        created_at: "1604508483",
        name: "Todd Howard",
        role: "Writer",
        email: "todd@opensauce.uk",
        bio: "testing",
        favorites: [
            {
                Type: "Author",
                Name: "peter_bread_testing",
                Picture: "https://cdn.opensauce.uk/assets/testingfiles/peter.jpg",
                Link: "http://www.example.com",
                Position: 1
            },
            {
                Type: "Ingredient",
                Name: "Tomato",
                Picture: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
                Link: "https://www.healthline.com/nutrition/foods/tomatoes",
                Postion: 2
            },
            {
                Type: "Recipe",
                Name: "Sourdough",
                Picture: "https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg",
                Link: "https://www.theclevercarrot.com/2014/01/sourdough-bread-a-beginners-guide/",
                Position: 3
                }
            ]
    }
    currentUser = {   
    Username: data.username,
    ProfilePicture: data.avatar,
    Datejoined: data.created_at,
    Name: data.name,
    Email: data.email,
    Type: data.role,
    Bio: data.biography,
    Favorites: data.favorites 
    }
})
var account = document.getElementById("account-button");
var isWindowOpen = false;
account.onclick = function(){AccountButtonClicked()};

function AccountButtonClicked()
{
    if(isWindowOpen)
    {
        CloseWindow();
        updateBio();
        isWindowOpen = false;
    }
    else
    {
        OpenWindow();
        isWindowOpen = true;
    }
}

function OpenWindow()
{
    document.getElementById("account-page").style.display = "initial";
    var image = document.getElementById("account-image")
    image.src = currentUser.ProfilePicture;
    document.getElementById("account-name").innerText = currentUser.Name;
    document.getElementById("account-email").innerText = currentUser.Email;
}

function CloseWindow()
{
    document.getElementById("account-page").style.display = "none";
}
async function updateBio() {
    let bio = document.getElementById("account-bio")
    if (bio.value.length !== 0 && bio.value !== currentUser.Bio) {
        // Authorization wouldn't be here normally but is sent to demostrate the API in use, the user has no administrative permissions.
        fetch("https://api.opensauce.vercel.app/api/user/edit", {
        "method": "PUT",
        "headers": {
        "Content-Type": "application/json",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRkY2I4ZTAxNzc2YzAwMDk5Yzk2M2QiLCJuYW1lIjoiVG9kZCBIb3dhcmQiLCJ1c2VybmFtZSI6IlRvZGRIb3dhcmQiLCJlbWFpbCI6InRvZGRAb3BlbnNhdWNlLnVrIiwiY3JlYXRlZF9hdCI6MTYwODM3MTA4NjE0MSwiZmF2b3JpdGVzIjpbeyJUeXBlIjoiQXV0aG9yIiwiTmFtZSI6InBldGVyX2JyZWFkX3Rlc3RpbmciLCJQaWN0dXJlIjoiaHR0cHM6Ly9jZG4ub3BlbnNhdWNlLnVrL2Fzc2V0cy90ZXN0aW5nZmlsZXMvcGV0ZXIuanBnIiwiTGluayI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20iLCJQb3NpdGlvbiI6MX0seyJUeXBlIjoiSW5ncmVkaWVudCIsIk5hbWUiOiJUb21hdG8iLCJQaWN0dXJlIjoiaHR0cHM6Ly9pbWFnZXMtcHJvZC5oZWFsdGhsaW5lLmNvbS9obGNtc3Jlc291cmNlL2ltYWdlcy9BTl9pbWFnZXMvdG9tYXRvZXMtMTI5Nng3MjgtZmVhdHVyZS5qcGciLCJMaW5rIjoiaHR0cHM6Ly93d3cuaGVhbHRobGluZS5jb20vbnV0cml0aW9uL2Zvb2RzL3RvbWF0b2VzIiwiUG9zdGlvbiI6Mn0seyJUeXBlIjoiUmVjaXBlIiwiTmFtZSI6IlNvdXJkb3VnaCIsIlBpY3R1cmUiOiJodHRwczovL3d3dy50aGVjbGV2ZXJjYXJyb3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzEyL3NvdXJkb3VnaC1icmVhZC1yb3VuZC0xLW9mLTEuanBnIiwiTGluayI6Imh0dHBzOi8vd3d3LnRoZWNsZXZlcmNhcnJvdC5jb20vMjAxNC8wMS9zb3VyZG91Z2gtYnJlYWQtYS1iZWdpbm5lcnMtZ3VpZGUvIiwiUG9zaXRpb24iOjN9XSwiYXZhdGFyIjoiaHR0cHM6Ly93d3cud29vbGhhLmNvbS9tZWRpYS8yMDIwLzAzL2ZsdXR0ZXItY2lyY2xlYXZhdGFyLW1pbnJhZGl1cy1tYXhyYWRpdXMuanBnIiwicm9sZSI6IldyaXRlciIsImlhdCI6MTYwODM4ODE4N30.zpdwxenasYg4hHxKnJosB-jUzDbJmNbV_SJBenyzL7U"
  },
  "body": `{\"biography\":\"${bio.value}\",\"avatar\":\"${currentUser.ProfilePicture}\"}`
}).then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });

    }
}
function ToggleFavorites(idel)
{
    let element = document.getElementById("account-favorites");
    let style = getComputedStyle(element);
    if (style.display == "none")
    {
        idel.style.border = "1px solid black";
        element.style.display = "flex";
        GetFavorites();
    }
    else
    {
        idel.style.border = "none";
        element.style.display = "none";
        var node = document.getElementById("favorites-js");
        while (node.firstChild)
        {
            node.removeChild(node.lastChild);
        }
    }
}


function ToggleSettings(idel)
{
    let element = document.getElementById("account-settings-menu");
    let style = getComputedStyle(element);
    if (style.display == "none")
    {
        idel.style.border = "1px solid black";
        element.style.display = "initial";
        GetAccountSettings();
    }
    else
    {
        idel.style.border = "none";
        element.style.display = "none";
    }
}



function GetAccountSettings()
{
    document.getElementById("account-bio").innerText = currentUser.Bio;
    document.getElementById("account-image-upload").src = currentUser.ProfilePicture;
}


function GetFavorites()
{
        currentUser.Favorites.forEach((object) => {
        nodeA = document.createElement("a");
        nodeA.href = object.Link;

        nodeI = document.createElement("img");
        nodeI.src = object.Picture;
        nodeI.alt = object.Name;
        nodeI.title = object.Name;

        nodeA.appendChild(nodeI);
        document.getElementById("favorites-js").appendChild(nodeA);
    });
}

function AccountLeft() {
    document.getElementById("favorites-js").scrollLeft -= 500;
  }
  
  function AccountRight() {
    document.getElementById("favorites-js").scrollLeft += 500;
    return 200;
  };