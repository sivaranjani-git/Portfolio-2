/*=========menu icon navbar=========*/
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuicon.oneclick =() => {
  menuicon.classList.toggle('bx bx-x');
  navbar.classList.toggle('active');
  
};


/*========= scroll sections active link =========*/
let sections = document.queryselectorAll('section');
let navlinks = document.queryselectorAll('header nav a');

window.onscroll = ()  => {
      Sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >=offset &&  top < offset + height  ) {
            navlinks.forEach(links => {
              links.classList.remove('active');
              document.queryselector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
      });




/*============== sticky navbar===============*/
let header = document.querySelector('.header');

header.classList.toggle('stricky',window.scrollY > 100);


/*===========remove menu icon navbar when click navbar  link (scroll)=============*/
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
};


/*========= swiper =========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   });

/*========= dark light mode =========*/
let darkmodeIcon = document.queryselector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}; 

/*===================dark light mode====================*/
ScrollReveal({ 
  reset: true,
  distance:'80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form',{ orgin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img img',{ orgin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{ orgin: 'right' });
