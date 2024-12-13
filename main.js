// <!--* Navbar => JS -->
const navLis = document.querySelectorAll(".navbar-links .main-li");

addActiveClass(navLis);
// SECTION - Add & Remove Active Class.
function addActiveClass(nodeList) {
  nodeList.forEach((a) => {
    a.addEventListener("click", (e) => {
      nodeList.forEach((a) => {
        a.classList.remove("active");
      });
      a.classList.add("active");
    });
  });
}

// *SECTION - animating line
let mainSection = document.querySelector("#main-section");

window.addEventListener("load", () => {
  // Set the height of the ::before pseudo-element dynamically
  mainSection.style.setProperty("--before-height", "89.5%");
});

// *SECTION - Animating Sections
let Sections = document.querySelectorAll("section");
let currentSection;

window.addEventListener("scroll", () => {
  // console.log("scrollY->" + window.scrollY);
  Sections.forEach((section) => {
    if (window.scrollY >= (section.offsetTop - section.clientHeight)) {
      // document.querySelector(`#${section.id} .pic img`).classList.add("fade-up");
      // document.querySelector(`#${section.id} .pic img`).classList.add("fade-right");
      let sectionImg= document.querySelector(`#${section.id} .pic img`);
      let sectionH2= document.querySelector(`#${section.id} .info h2`);
      let sectionP= document.querySelector(`#${section.id} .info .text`);
      if( sectionH2 || sectionP){
        addAnimation(sectionH2, "fade-up");
        addAnimation(sectionP, "fade-up");
        if(sectionImg){
          console.log(sectionImg.dataset.dir);
          if(sectionImg.dataset.dir =="left"){
            addAnimation(sectionImg, "fade-left");
          } else{
            addAnimation(sectionImg, "fade-right");
          }
        }
      }
    }
  });
});

function addAnimation(el,className){
  el.classList.add(className);
}