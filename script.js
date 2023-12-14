//Navbar

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
