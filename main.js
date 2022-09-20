let count = document.querySelector(".count");
let button = document.querySelector(".notification-reader");
let activeNotification = document.querySelectorAll(".active");
let redDot = document.querySelectorAll(".red-dot");

button.addEventListener("click", function(){
    count.innerHTML = "0";
    for(let i = 0; i < activeNotification.length; i++){
        activeNotification[i].classList.remove("active");
        
    }
    for(let i = 0; i < 3; i++){
        redDot[i].style.display = "none";
    }
});