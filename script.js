var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openFullImg(pic) {
  fullimgbox.style.display = "flex";
  fullimg.src = pic;
}

function closeFullImg() {
  fullimgbox.style.display = "none";
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})