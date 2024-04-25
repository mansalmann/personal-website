// Hamburger 
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#menu-navbar")
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("hamburger-on");
    navbarMenu.classList.toggle("hidden")
})

// Navbar
window.onscroll = function(){
    const header = document.querySelector("header");
    const NavbarFixed = header.offsetTop; // jarak dari posisi header thd bagian paling atas dari halaman (nilainya nol)

    if(window.scrollY > NavbarFixed){
        header.classList.add("navbar-fixed");
    }else{
        header.classList.remove("navbar-fixed")
    }
}