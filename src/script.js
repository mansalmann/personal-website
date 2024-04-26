// Hamburger
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#menu-navbar");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-on");
  navbarMenu.classList.toggle("hidden");
});

const header = document.querySelector("header");
const NavbarFixed = header.offsetTop; // jarak dari posisi header thd bagian paling atas dari halaman (nilainya nol)
const navigateHome = document.querySelector("#navigate-home");
// Navbar

window.onload = () => {
  if (window.scrollY > NavbarFixed) {
    header.classList.add("navbar-fixed");
    navigateHome.classList.remove("hidden");
    navigateHome.classList.add("flex");
    navbarMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-on");
  } else {
    header.classList.remove("navbar-fixed");
    navigateHome.classList.remove("flex");
    navigateHome.classList.add("hidden");
  }
};

window.onscroll = function () {
  if (window.scrollY > NavbarFixed) {
    header.classList.add("navbar-fixed");
    navigateHome.classList.remove("hidden");
    navigateHome.classList.add("flex");
    navbarMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-on");
  } else {
    header.classList.remove("navbar-fixed");
    navigateHome.classList.remove("flex");
    navigateHome.classList.add("hidden");
  }
};

// supaya navbar hilang ketika terjadi event click di window (pada kondisi mobile)
window.onclick = (dataEvent) => {
  if (dataEvent.target !== hamburger && dataEvent.target !== navbarMenu) {
    hamburger.classList.remove("hamburger-on");
    navbarMenu.classList.add("hidden");
  }
};

// dark mode toggle
// supaya dark mode dapat berjalan
const darkModeToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

// supaya jadi mode gelap seutuhnya
darkModeToggle.onclick = () => {
    if (darkModeToggle.checked) {
      html.classList.add("dark"); // wajib
      localStorage.theme = "dark";
  } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
      
    }
  };

// menggerakkan toggle berdasarkan kondisi tema
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkModeToggle.checked = true;
} else {
  darkModeToggle.checked = false;
}
