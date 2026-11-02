
const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function () {
    const isHidden = contactInfo.hidden;

    contactInfo.hidden = !isHidden;

    if (isHidden) {
        contactButton.textContent = "Hide Contact Information";
    } else {
        contactButton.textContent = "Show Contact Information";
    }
});
