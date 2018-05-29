const popapOpen = document.querySelector(".reviews__btn");
const popap = document.querySelector("#reviewsPopap").innerHTML;
const popapOverlay = createOverlay(popap);

popapOpen.addEventListener("click", function() {
  popapOverlay.open();
  popapOverlay.setContent(contentElement);
});

function createOverlay(popap) {
  let fragment = document.createElement('div');

  fragment.innerHTML = popap;

  const overlayElement = fragment.querySelector(".popapContainer");
  const contentElement = fragment.querySelector(".popapContent");
  const closeElement = fragment.querySelector(".popapClose");
  
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

// попап 2