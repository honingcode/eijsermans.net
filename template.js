 // scroll behaviour navigation

 const templateNavLink1 = document.getElementById('template-nav-link1')
 // const templateTextBlock1 = document.getElementById('template-text-block1')
 const templateNavLink2 = document.getElementById('template-nav-link2')
 // const templateTextBlock2 = document.getElementById('template-text-block2')
 const templateMainContainer = document.getElementById('template-main-container')
 
 
 
 templateNavLink1.addEventListener('click', function() {
   templateMainContainer.scrollIntoView({behavior: "smooth"})
 })
 
 templateNavLink2.addEventListener('click', function() {
   templateMainContainer.scrollIntoView({behavior: "smooth"})
 })
 
 