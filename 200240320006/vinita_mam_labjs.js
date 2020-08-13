var count = 0;
var countD = 0;
function likeCount() {
    let x = document.querySelector("#like");
    count++;
    x.innerHTML = "LIKE " + count;
}

function dis() {
    let x = document.querySelector("#Dislike");
    countD--;
    x.innerHTML = "DISLIKE " + countD;
}



function comments() {
    var com = document.querySelector("#ib").value;
    var comarea = document.querySelector("#addComments").cloneNode(true);
    comarea.style.visibility = "visible";
    comarea.children[0].innerHTML = com;
    var area = document.querySelector("#cA");
    area.insertBefore(comarea, area.firstChild);
    document.querySelector("#ib").value = "";
}



function enter(e) {
    if (e.keyCode == 13) {
        var com = document.querySelector("#ib").value;
        var comarea = document.querySelector("#addComments").cloneNode(true);
        comarea.style.visibility = "visible";
        comarea.children[0].innerHTML = com;
        var area = document.querySelector("#cA");
        area.insertBefore(comarea, area.lastChild);
        document.querySelector("#ib").value = "";
    }
    else {
        return;
    }
}

function deleteComment(del) {
    del.parentElement.remove();
}