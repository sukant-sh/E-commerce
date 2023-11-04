const termsLink = document.getElementById("termsLink");
const popupContainer = document.getElementById("popupContainer");
const closePopup = document.getElementById("closePopup");




termsLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating

  popupContainer.style.display = "block"; // Show the pop-up
});

closePopup.addEventListener("click", function () {
  popupContainer.style.display = "none"; // Hide the pop-up

  
});


function autoScroll() {
    const scrollableContent = popupContainer.querySelector(".popup-content");
    if (scrollableContent) {
      const targetPosition = scrollableContent.scrollHeight;
      scrollableContent.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  }
  
  setTimeout(autoScroll, 3000);  // Scroll down after 5 seconds (adjust the time as needed)