let temp;

function handleMouseOver(Str) {
    var id2Element = document.querySelector(Str);
    id2Element.style.background = "blue";
    id2Element.style.color = "black";

    id2Element.innerHTML = "Hello Element Selector!!";
}

function handleMouseOut() {
    let id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "black";
    id2Element.style.color = "white";

    id2Element.innerHTML = "Hello World";
}