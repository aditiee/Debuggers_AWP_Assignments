var likeCounter = 0;
function commenton() {
    let usercmt = document.querySelector("#inputb").value;
    const addcmt = document.querySelector("#ref-cmt").cloneNode(true);
    addcmt.removeAttribute("id");
    addcmt.style.visibility = "visible";
    addcmt.children[0].innerHTML = usercmt;
    const commentbox = document.querySelector("#cmtbox");
    commentbox.insertBefore(addcmt, commentbox.firstChild);
    document.querySelector("#inputb").value = " ";
}
function likeme() {
    likeCounter++;
    let btnElement = document.querySelector("#btn");
    btnElement.innerHTML = "Like " + likeCounter;
}
function deletecmt(btnElement) {
    btnElement.parentElement.remove();
}