
document.addEventListener("scroll", function() {
    var boutonPlus = document.querySelector(".bouton-plus-container");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        boutonPlus.classList.add("scrolled-bottom");
    } else {
        boutonPlus.classList.remove("scrolled-bottom");
    }
});


window.addEventListener('load', function() {
    var loadingPage = document.getElementById('loading-page');
    loadingPage.style.display = 'none';
 });



