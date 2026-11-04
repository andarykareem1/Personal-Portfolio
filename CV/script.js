
const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function () {
    const isCurrentlyHidden = contactInfo.hidden;

    contactInfo.hidden = !isCurrentlyHidden;

    if (isCurrentlyHidden) {
        contactButton.textContent = "Hide Contact Details";
    } else {
        contactButton.textContent = "Show Contact Details";
    }
});
