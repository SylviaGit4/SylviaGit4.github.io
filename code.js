const titleText = document.querySelector(".title");

titleText.innerHTML = "Test";


const dialog = document.querySelector(".popOut");

const openButton = document.querySelector(".openButton");
openButton.addEventListener("click", () => {
    dialog.showModal();
});

const closeButton = document.querySelector(".closeButton");
closeButton.addEventListener("click", () => {
    dialog.close();
});