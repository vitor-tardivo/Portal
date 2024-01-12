document.addEventListener('DOMContentLoaded', function () {// CHECK SCROLL BAR WITH HEADER AND FOOTER
    checkHFSB()

    window.addEventListener('scroll', checkHFSB)
})

// CHANGES BORDER RADIUS OF HEADER AND FOOTER ON ACTIVE SCROLL
function checkHFSB() {
    checkHeaderSB()
    checkFooterSB()
}
function checkHeaderSB() {
    let head = document.querySelector('header')

    if (window.scrollY > 35) {
        head.style.cssText =
            'border-radius: 0px 0px 0px 0px;'
    } else {
        head.style.cssText =
            'border-radius: 0px 0px 50px 0px;'
    }
}
function checkFooterSB() {
    let foot = document.querySelector('footer')
    let lO = document.querySelector('#linklOuKo')

    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 67) {
        foot.style.cssText =
            'opacity: 1; visibility: visible; border-radius: 0px 50px 0px 0px;'

        lO.style.cssText =
            'pointer-events: unset;'
    } else {
        foot.style.cssText =
            'opacity: 0; visibility: hidden; border-radius: 0px 0px 0px 0px;'

        lO.style.cssText =
            'pointer-events: none;'
    }
}

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