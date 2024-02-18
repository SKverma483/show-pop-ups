"use script";
const togglingTheModals = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
const showingTheModals = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closingTheModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", showingTheModals);
}
closeModal.addEventListener("click", togglingTheModals);
overlay.addEventListener("click", togglingTheModals);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // closingTheModal();
    if (!modal.classList.contains("hidden")) {
      togglingTheModals();
    }
  }
});
