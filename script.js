// navbar 

let navbarIcon = document.getElementById('navbar-icon');
let navLinkContainer = document.getElementById('nav-links')
navbarIcon.addEventListener('click' , () => {
  let parentEle = navbarIcon.closest('.navigation')
  let navLinks = parentEle.querySelector('.nav-links')
  navLinks.classList.toggle('active_links')
})


// this is for when someone click outside the navbar it navlinks automatically closed

let body = document.getElementsByTagName('body');
body[0].addEventListener('click' , (e) => {   
  if(!e.target.closest('.nav-links')){ 
    if(navLinkContainer.classList.contains('active_links') && !e.target.closest('.humberger-icon')){ 
        navLinkContainer.classList.remove('active_links')
    }
  }
})


// banner slider 

$('.slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/previous-arrow.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='./assets/next-arrow.png'>",
  fade: true,
  asNavFor: '.slider-thumbnails'
});
$('.slider-thumbnails').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-main',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});



// video play functionality 

let playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click' , () => {
    let videoOverlay = playBtn.closest('.video_overlay')
    let mainParent = playBtn.closest('.inner-container')
    let video = mainParent.querySelector('video')
    videoOverlay.style.display = "none"
    video.style.opacity = 1
    video.play()


})



// featured slider 

$('.featured-products-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/previous-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/next-arrow.png'>",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//   review slider 

$('.review-slder').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/previous-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/next-arrow.png'>"
  });