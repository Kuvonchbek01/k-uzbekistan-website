const button = document.querySelector('.menu-link')
const hiddennav = document.querySelector('.hiddennav')

button.addEventListener('click', function () {
    hiddennav.classList.toggle('showNav')
})

window.addEventListener('resize', function(){
    if(window.innerWidth > 600){
        hiddennav.classList.remove('showNav')
    }
})