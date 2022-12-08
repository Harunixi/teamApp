const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3= document.querySelector('.modal3');
const closeBtn = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
// const btn = document.querySelectorAll('.demo__circle');
const btn1 = document.querySelector('.demo__color1');
const btn2 = document.querySelector('.demo__color2');
const btn3 = document.querySelector('.demo__color3');
//for(let i; i<=btn.length;i++){
  btn1.addEventListener('click',function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal1.classList.add('active');
    overlay.classList.add('active');
    // モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function(){
  modal1.classList.remove('active');
  overlay.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function() {
  modal1.classList.remove('active');
  overlay.classList.remove('active');
});
})
// btn1.addEventListener('click', function(e){

//   e.preventDefault();
//   modal1.classList.add('active');
//   overlay.classList.add('active');
// });
// closeBtn.addEventListener('click', function(){
//   modal1.classList.remove('active');
//   overlay.classList.remove('active');
// });
// overlay.addEventListener('click', function() {
//   modal1.classList.remove('active');
//   overlay.classList.remove('active');
// });
//
//
