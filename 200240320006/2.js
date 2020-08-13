
var likess = 1;
var lc = 1;
function likes() {
    likess++;

    document.querySelector("#likkk").innerHTML = "liked " + likess + "times";


}
function li() {
    lc++;

    document.querySelector("#l").innerHTML = "liked " + lc + "times";


}
function com() {
    let x = likess;

    let c1 = document.createElement("div");

    if (x == 1) {
        c1.textContent = "Good";
    }
    else if (x == 2) {
        c1.textContent = "Great";
    }
    else if (x == 3) {
        c1.textContent = "Awesome";
    }
    else if (x == 4) {
        c1.textContent = "***Fab***";
    }
    else {
        c1.textContent = "***bs kar de bhai***";
    }

    c1.style.background = "red";
    c1.style.margin = "4px";
    c1.style.width = "100px";
    let c1p = document.querySelector("#comments1");
    c1p.appendChild(c1);


}


function comm() {
    let x = lc;

    let c1 = document.createElement("div");
    if (x == 1) {
        c1.textContent = "Kadak ";
    }
    else if (x == 2) {
        c1.textContent = "Bhai Bhai";
    }
    else if (x == 3) {
        c1.textContent = "Kehar";
    }
    else if (x == 4) {
        c1.textContent = "***Gang With Kalin Bhaiya***";
    }

    c1.style.background = "red";
    c1.style.margin = "4px";
    c1.style.width = "100px";
    let c1p = document.querySelector("#comments2");
    c1p.appendChild(c1);


}







