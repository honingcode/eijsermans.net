// FAQ 

let faqQuestions = document.getElementsByClassName('faq-question')
let faqAnswer = document.getElementsByClassName('faq-answer')
let iconUp = document.getElementsByClassName('icon-up')
let iconDown = document.getElementsByClassName('icon-down')


for (let i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener('click', function() {
    faqAnswer[i].classList.toggle('active-faq')
    iconUp[i].classList.toggle('active-faq')
    iconDown[i].classList.toggle('icon-down-on-click')
  })
}



// SIDE NAVIGATION 

/* Set the width of the side navigation to 450px */
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
  document.getElementById("mySidenav").style.maxWidth = "100%";
  document.getElementById("overlay").style.width = "100%";
  document.body.style.overflow = "hidden";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.width = "0";
  document.body.style.overflow = "visible";
}




  const body = document.body; 
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up")
      body.classList.add("scroll-down")
    }  

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down")
      body.classList.add("scroll-up")
    }  


    lastScroll = currentScroll; 
  })










