

let lCounter = 0;
function likes() {

    let likec = document.querySelector("#btn1");
    lCounter++;

    document.querySelector("#btn1").innerHTML = "Like number " + lCounter;


}
function dislike() {
    lCounter--;

    if (lCounter <= 0) {

    }
    else {
        document.querySelector("#btn1").innerHTML = "Like number (D) " + lCounter;
    }
}
