const hamburgerIcon = document.querySelector('.mobile-menu')
const mobileMenu = document.querySelector('.mobile-menu-container')
let currentDisplay = false


console.log('i here')

function openMenu() {
    console.log('click')
    if (currentDisplay == false) {
        mobileMenu.style.display = 'flex'
        currentDisplay = true
    } else {
        mobileMenu.style.display = 'none'
        currentDisplay = false
    }
}

hamburgerIcon.addEventListener('click', openMenu)
