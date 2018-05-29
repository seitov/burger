const openButton = document.querySelector(".hamburger-menu-link__bars");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openButton.addEventListener("click", function() {
  overlay.open();
});

function createOverlay(template) {
  let fragment = document.createElement('nav');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".hamburger-nav");
  const contentElement = fragment.querySelector(".hamburger-nav__list");
  const closeElement = fragment.querySelector(".hamburger-nav__btn-close");
  
  fragment = null;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  closeElement.addEventListener("click", () => {
    document.body.removeChild(overlayElement);
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  };
}
