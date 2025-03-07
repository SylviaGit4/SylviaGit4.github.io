// POPOUT ONE //
const dialogOne = document.querySelector("#popOutOne");

const openButtonOne = document.querySelector("#openOne");
openButtonOne.addEventListener("click", () => {
    dialogOne.showModal();
});

const closeButtonOne = document.querySelector("#closeOne");
closeButtonOne.addEventListener("click", () => {
    dialogOne.close();
});

// POPOUT TWO //
const dialogTwo = document.querySelector("#popOutTwo");

const openButtonTwo = document.querySelector("#openTwo");
openButtonTwo.addEventListener("click", () => {
    dialogTwo.showModal();
});

const closeButtomTwo = document.querySelector("#closeTwo");
closeButtomTwo.addEventListener("click", () => {
    dialogTwo.close();
});

// POPOUT THREE //
const dialogThree = document.querySelector("#popOutThree");

const openButtonThree = document.querySelector("#openThree");
openButtonThree.addEventListener("click", () => {
    dialogThree.showModal();
});

const closeButtomThree = document.querySelector("#closeThree");
closeButtomThree.addEventListener("click", () => {
    dialogThree.close();
});