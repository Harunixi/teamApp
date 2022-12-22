const modalBtns = document.querySelectorAll(".container__toggle");
console.log(modalBtns)
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal__close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};