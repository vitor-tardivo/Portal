window.onscroll = function() { scrollFunction() } // CALL FUNCTION FOR SCROLLS BUTTONS

function resetLoadingBar() { // RESET LOADING BAR WORK
    let barL = document.querySelector('#barLoading')

    setTimeout(function() {
        barL.style.cssText =
            'width: 0vw;'
        setTimeout(function() {
            barL.style.cssText =
                'visibility: hidden;'
        }, 300)
    }, 300)
}

function scrollFunction() { // SHOW THE SCROLLS BUTTONS AND FOOTER
    let foot = document.querySelector('footer')
    let lO = document.querySelector('#linklOuKo')

    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 55) {
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

function showLinks() {
    let aShowLinks = document.querySelector('aside')
    let linksElement = document.createElement('p')

    linksElement.textContent = link
    aShowLinks.appendChild(linksElement)
}

function openLinks() {
    let areaLinks = document.querySelector('#links')
    let links = areaLinks.value.split('\n')
    let barL = document.querySelector('#barLoading')

    barL.style.cssText =
        'width: 100vw; visibility: visible;'

    for (let i = 0; i < links.length; i++) {
        let link = links[i].trim()

        if (link !== '') {
            window.open(link, '_blank')

            showLinks()

        }
        resetLoadingBar()
    }
}