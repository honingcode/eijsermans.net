// const merkContainer = document.getElementById('merk-container') 
// const merkBeschrijving = document.getElementById('merk-beschrijving') 

// merkContainer.addEventListener('mouseenter', function() {
//     merkBeschrijving.classList.add('display-merk-beschrijving')
// })


// merkContainer.addEventListener('mouseleave', function() {
//     merkBeschrijving.classList.remove('display-merk-beschrijving')
// })



let alleMerkContainer = document.getElementsByClassName('merk-en-bescrhrijving-container')
let merkBeschrijving = document.getElementsByClassName('merk-beschrijving')


for (let i = 0; i < alleMerkContainer.length; i++) {
    alleMerkContainer[i].addEventListener('mouseenter', function() {
        merkBeschrijving[i].classList.add('display-merk-beschrijving')
    })
}


for (let i = 0; i < alleMerkContainer.length; i++) {
    alleMerkContainer[i].addEventListener('mouseleave', function() {
        merkBeschrijving[i].classList.remove('display-merk-beschrijving')
    })
}

for (let i = 0; i < alleMerkContainer.length; i++) {
    alleMerkContainer[i].addEventListener('touchstart', function() {
        merkBeschrijving[i].classList.add('display-merk-beschrijving')
    })
}


for (let i = 0; i < alleMerkContainer.length; i++) {
    alleMerkContainer[i].addEventListener('touchleave', function() {
        merkBeschrijving[i].classList.remove('display-merk-beschrijving')
    })
}


