
var i = 1;
function Addinlist() {
    var readd = document.querySelector("#IB2I").value;
    if (readd == "") {
        alert("Enter something");
    }
    else {


        var place = document.querySelector("#listArea").cloneNode(true);


        place.style.visibility = "visible";

        place.children[0].innerHTML = i + "." + readd;
        i++;
        var main = document.querySelector("#listBlock");
        main.insertBefore(place, main.firstChild);

        document.querySelector("#IB2I").value = "";
        document.querySelector("#listArea").style.backgroundColor = "white";
    }

}
function enter(e) {
    if (e.keyCode == 13) {
        var readd = document.querySelector("#IB2I").value;
        if (readd == "") {
            alert("Enter something");
        }
        else {

            var place = document.querySelector("#listArea").cloneNode(true);

            place.style.visibility = "visible";
            place.children[0].innerHTML = i + "." + readd;
            i++;

            var main = document.querySelector("#listBlock");
            main.insertBefore(place, main.firstChild);

            document.querySelector("#IB2I").value = "";
            document.querySelector("#listItem").style.color = "black";
            document.querySelector("#listArea").style.backgroundColor = "white";
        }


    }
    else {
        return
    }
}



function deleteitem(del) {

    del.parentElement.remove();
}
function done(don) {

    var x = don;
    x.parentElement.style.backgroundColor = "yellowgreen";

}

