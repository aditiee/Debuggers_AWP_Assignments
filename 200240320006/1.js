var cmt = 1;
var likess = 1;
function comments() {

    let c1 = document.createElement("div");
    c1.textContent = "comment" + cmt;
    c1.style.background = "red";
    c1.style.margin = "4px";
    c1.style.width = "100px";
    let c1p = document.querySelector("#comment");
    c1p.appendChild(c1);

    cmt = cmt + 1;
}

function likes() {
    likess++;

    document.querySelector("#lik").innerHTML = "liked " + likess + "times";


}
