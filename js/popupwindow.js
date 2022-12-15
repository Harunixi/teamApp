// $(".demo .demo__circle").click(function () {
//   $(".modal").fadeIn()
//   $(".modal").css("display", "flex")

//   $("#popup").attr("src", src);
//   $(".modal__caption").text(cap);
// })
// $(".modal__section .modal__close").click(function () {
//   $(".modal").css("display", "none")
// })

const modalBtns = document.querySelectorAll(".container__toggle");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal__close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};