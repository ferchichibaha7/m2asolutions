const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const links = navbar.querySelectorAll(".nav-link");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
});

function clickHandler(e) {
    const href = this.getAttribute("href");
    !href.includes("/") ? e.preventDefault() : null;
    const offsetTop = document.querySelector(href).offsetTop;
    navbar.classList.remove("navbar-active");
    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}
