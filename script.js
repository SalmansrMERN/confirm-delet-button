// document.getElementById("comment_input").addEventListener("keyup", function () {
//     var commentInput = document.getElementById("comment_input");
//     console.log(commentInput.value)
// })
// ==================== another way ======================

document.getElementsByTagName("button")[0].setAttribute("title", "Disable Button");

document.getElementById("comment_input").addEventListener("keyup", function (event) {
    if (event.target.value == "delete") {
        document.getElementsByTagName("button")[0].removeAttribute("disabled")
    }
    else {
        document.getElementsByTagName("button")[0].setAttribute("disabled", true)
    }
})

// =============== input part ================

document.getElementsByTagName("button")[0].addEventListener("click", function () {
    document.getElementById("comment_part").style.display = "none";
    document.getElementById("comment_input").value = '';
})


