let persons = [
    {
    "name": "Alejandro",
    "imgur": "bild1",
    "desc": "detta är inte min vän",


    },
    {
        "name": "Sam smitten",
        "desc": "inte för att blandas ihop med smitten dating",
        "imgur": "bild2",
    },
    {
        "name": "Shrek",
        "desc": "Yeah baby shrek yeah plz plz plz.",
        "imgur": "bild3",
    },
    {
        "name": "Alexander von sydow",
        "desc": "Mästare inom datorteater samt tiktok.",
        "imgur": "bild4",
    }
]

const main = document.getElementById("main");

persons.forEach(person => {

    const api_url = "https://randomuser.me/api/";

    async function getUser() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data.results[0].location.city);

        const box = document.createElement("div");
    box.id = "content";
    box.classList.add("content");
    main.appendChild(box);
    
    const bild = document.createElement("img");

    bild.classList.add("bild");
    bild.src = data.results[0].picture.medium;

    const h = document.createElement("h1");

    h.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    const p = document.createElement("p");
    p.innerHTML = data.results[0].location.country + " " + data.results[0].location.state + " " + data.results[0].location.city;

    box.appendChild(bild);
    box.appendChild(h);
    box.appendChild(p);
    }

    getUser()

    
});



// persons.forEach(myFunc)

// function myFunc() {
//     document.addeLEMENT
// }