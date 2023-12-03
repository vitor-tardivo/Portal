// ON HOVER CHANGE COLLORS OF lOuKo
function lOuKoChangeColors() {
    let L = document.querySelector('#lOuKo #l')
    let o = document.querySelector('#lOuKo #O')
    let U = document.querySelector('#lOuKo #u')
    let k = document.querySelector('#lOuKo #K')
    let O = document.querySelector('#lOuKo #o')

    L.style.cssText =
        'color: greenyellow;'
    o.style.cssText =
        'color: gold;'
    U.style.cssText =
        'color: paleturquoise;'
    k.style.cssText =
        'color: blueviolet;'
    O.style.cssText =
        'color: red;'
}
function lOuKoBackColors() {
    let L = document.querySelector('#lOuKo #l')
    let o = document.querySelector('#lOuKo #O')
    let U = document.querySelector('#lOuKo #u')
    let k = document.querySelector('#lOuKo #K')
    let O = document.querySelector('#lOuKo #o')

    L.style.cssText =
        'color: red;'
    o.style.cssText =
        'color: blueviolet;'
    U.style.cssText =
        'color: paleturquoise;'
    k.style.cssText =
        'color: gold;'
    O.style.cssText =
        'color: greenyellow;'
}

function eraseListLinks() {// ERASE LINKS OF THE LIST
    let barL = document.querySelector('#barLoading')
    let aShowLinks = document.querySelector('#listLinks')
    let mess = document.querySelector('#message')
    let bList = document.querySelector('#erase')

    barL.style.cssText =
        'width: 100vw; visibility: visible;'

    aShowLinks.innerHTML = ''

    mess.textContent = '...'
    mess.style.cssText =
        'border: 2px solid var(--colorBlack);'

    bList.style.cssText =
        'opacity: 0; pointer-events: none;'

    resetLoadingBar()
}

/*window.onscroll = function() { scrollFunction() }// CALL FUNCTION FOR SCROLLS BUTTONS

function scrollFunction() {// SHOW THE SCROLLS BUTTONS AND FOOTER
    let foot = document.querySelector('footer')
    let lO = document.querySelector('#linklOuKo')

    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 1) {
        foot.style.cssText =
            'opacity: 1; visibility: visible;'

        lO.style.cssText =
            'pointer-events: unset;'
    } else {
        foot.style.cssText =
            'opacity: 0; visibility: hidden;'

        lO.style.cssText =
            'pointer-events: none;'
    }
}*/