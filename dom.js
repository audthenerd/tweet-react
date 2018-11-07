window.onload = function() {

 var iconRT = document.getElementsByClassName('fas fa-retweet');
 var iconFav = document.getElementsByClassName('far fa-heart');


 for (i in iconRT) {
    iconRT[i].addEventListener("mouseover", turnGreen);
    iconRT[i].addEventListener("mouseout", turnBlack);
    iconFav[i].addEventListener("mouseover", turnRed);
    iconFav[i].addEventListener("mouseout", turnBlack);
};






 function turnGreen(){
    this.style.color = "green";
 };

function turnRed() {
    this.style.color = "red";
    $(this).popover('show');
};

 function turnBlack() {
    this.style.color= "";
    $(this).popover('hide');
 };




};