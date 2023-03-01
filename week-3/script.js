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

    const box = document.createElement("div");
    box.id = "content";
    box.classList.add("content");
    main.appendChild(box);
    
    const bild = document.createElement("div");

    bild.classList.add("bild");
    bild.classList.add(person.imgur);

    const h = document.createElement("h1");

    h.innerHTML = person.name;
    const p = document.createElement("p");
    p.innerHTML = person.desc

    box.appendChild(bild);
    box.appendChild(h);
    box.appendChild(p);
});



// persons.forEach(myFunc)

// function myFunc() {
//     document.addeLEMENT
// }