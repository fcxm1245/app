window.h=function(){
    document.addEventListener('DOMContentLoaded', function() {
        var navbar = document.getElementById("navbar2");
        var sticky = navbar.offsetTop;
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
        window.onscroll = function() {
            myFunction()
        };
    });

}