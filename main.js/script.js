// header slider 
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
    pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
    on: {
    autoplayTimeLeft(s, time, progress) {
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  }
  }
});

// review slider 
var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// counting number
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".count-num-wrap");
let started = false;

function startCount(event){
  let goal = event.dataset.goal;
  let count = setInterval(()=>{
    event.textContent++;
    if(event.textContent == goal){
      clearInterval(count);
    }
  },1000/goal)
}




//change active state 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
window.onscroll = () => {
  if(window.scrollY > section.offsetTop-700){
    if(!started){
      nums.forEach((num)=>{startCount(num)});
    }
    started = true;
  }
    sections.forEach(sec => {
        if(window.scrollY >= sec.offsetTop-200 && window.scrollY< sec.offsetTop-200 + sec.offsetHeight) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar-nav .nav-item a[href*=' + sec.getAttribute('id') + ']').classList.add('active');
            });
        };
    });
};



window.addEventListener("scroll", function(){
  const nav = document.getElementById("nav");
  nav.classList.toggle("sticky", window.scrollY > 0)
})

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})