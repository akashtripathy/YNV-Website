// Showing Hamburger
var menu = document.getElementById('menu');
var openMenu = document.getElementById('openMenu');

openMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// for sticky navbar
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Sliding Gallary
var count = 1;
setInterval(function () {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 3) {
        count = 1;
    }
}, 5000);