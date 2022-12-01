import "./assets/app.css";
import "./src/js/faqs.js";
import "./src/js/theme.js";
import "./src/js/solutions.js";

const links = document.querySelectorAll(".nav-link");
const toggler = document.querySelector('#hbr')

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  toggler.removeAttribute('checked')
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}