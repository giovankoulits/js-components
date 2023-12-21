document.querySelector("fieldset").addEventListener("change", () => {
  alert("hi");
});

//Navbar

const hamburger = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");
const navHeight = document.querySelector(".my-navbar").scrollHeight;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 991) {
    navLinks.classList.remove("clicked");
    navLinks.classList.remove("closed");
    hamburger.classList.remove("clicked");
  } else {
    const container = document.querySelector(".container .my-navbar");
    const containerPadding = container.style.paddingTop;
    console.log(containerPadding);
  }
});

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("clicked");
  if (navLinks.classList.contains("clicked")) {
    navLinks.classList.remove("clicked");
    navLinks.classList.add("closed");
  } else {
    navLinks.classList.remove("closed");
    navLinks.classList.add("clicked");
  }
});

//Accordion

const accordionTitles = document.querySelectorAll(".my-accordion-item-title");
const accordionItemBodies = document.querySelectorAll(
  ".my-accordion-item-body"
);

accordionTitles.forEach((title) => {
  title.addEventListener("click", function (e) {
    //add code below for collapsing the other items on item click

    accordionItemBodies.forEach((body) => (body.style.maxHeight = "0px"));
    accordionTitles.forEach((title) => {
      if (title !== e.currentTarget) {
        title.classList.remove("active");
      }
    });

    const bodyHeight = title.nextElementSibling.scrollHeight;
    title.classList.toggle("active");
    if (title.classList.contains("active")) {
      title.nextElementSibling.style.maxHeight = bodyHeight + "px";
    } else {
      title.nextElementSibling.style.maxHeight = "0px";
    }
  });
});
