//MAKING THE SCROLL TO TOP BUTTON
const buttonScrollToTop = document.querySelector("#buttonScrollToTop");

buttonScrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    });

});

//MODAL
var modal1 = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

//MOD
var modal2 = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
