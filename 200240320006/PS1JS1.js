


function para4() {
    document.getElementById("txt").setAttribute("style", "color :red");
}

function fun() {
    document.getElementById("txt").setAttribute("style", "font-size : 50px");
}

document.getElementById("text").addEventListener("mouseenter", para4);

document.getElementById("text").addEventListener("mouseleave", fun)