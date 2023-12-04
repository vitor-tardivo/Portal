function resetLoadingBar() {// RESET LOADING BAR WORK
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

window.onscroll = function() { scrollFunction() }// CALL FUNCTION FOR SCROLLS BUTTONS

function scrollFunction() {// SHOW THE SCROLLS BUTTONS AND FOOTER
    let sBottom = document.querySelector("#scrollB")
    
    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 190) {
        sBottom.style.cssText =
            'opacity: 0; pointer-events: none; visibility: hidden;'
    } else {
        sBottom.style.cssText =
            'opacity: 1; pointer-events: unset; visibility: visible;'
    }
    
    let sTop = document.querySelector("#scrollT")

    if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 220) {
        sTop.style.cssText =
            'opacity: 1; pointer-events: unset; visibility: visible;'
    } else {
        sTop.style.cssText =
            'opacity: 0; pointer-events: none; visibility: hidden;'
    }

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
function bottomScroll() {// ON CLICK GO TO THE BOTTOM OF THE PAGE
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    const targetScroll = document.body.scrollHeight - window.innerHeight
    const scrollDifference = targetScroll - currentScroll
    const duration = 100

    let startTime

    function scrollStep(timestamp) {
        if (!startTime) {
            startTime = timestamp
        }

        const progress = Math.min((timestamp - startTime) / duration, 1)

        document.documentElement.scrollTop = currentScroll + scrollDifference * progress
        document.body.scrollTop = currentScroll + scrollDifference * progress

        if (progress < 1) {
            requestAnimationFrame(scrollStep)
        }
    }

    requestAnimationFrame(scrollStep)
}
function topScroll() {// ON CLICK GO TO THE TOP OF THE PAGE
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    const targetScroll = 0
    const scrollDifference = targetScroll - currentScroll
    const duration = 100

    let startTime;

    function scrollStep(timestamp) {
        if (!startTime) {
            startTime = timestamp
        }

        const progress = Math.min((timestamp - startTime) / duration, 1)

        document.documentElement.scrollTop = currentScroll + scrollDifference * progress
        document.body.scrollTop = currentScroll + scrollDifference * progress

        if (progress < 1) {
            requestAnimationFrame(scrollStep)
        }
    }

    requestAnimationFrame(scrollStep)
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

document.addEventListener('DOMContentLoaded', function () {// THE KEYBOARD KEY ENTER ACTIVE THE BUTTON OPEN AND SHIFT+ENTER DO THE BREAK ROW INSTEAD
    const areaLinks = document.querySelector('#pasteLinks')

    areaLinks.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            if (event.shiftKey) {
                const cursorPosition = areaLinks.selectionStart
                const textBefore = areaLinks.value.substring(0, cursorPosition)
                const textAfter = areaLinks.value.substring(cursorPosition)

                areaLinks.value = textBefore + '\n' + textAfter

                event.preventDefault()
            } else {
                event.preventDefault()
                document.querySelector('#open').click()
            }
        }
    })
})

function showInicialMessage() {
    let mess = document.querySelector('#message')

    mess.textContent = 'Verifique se os Links estão em cada linha!'
    mess.style.cssText =
        'border: 2px solid var(--colorBlack);'
}

function eraseListLinks() {// ERASE LINKS OF THE LIST
    let barL = document.querySelector('#barLoading')
    let areaLinks = document.querySelector('#pasteLinks')
    let aShowLinks = document.querySelector('#listLinks')
    let mess = document.querySelector('#message')
    let bList = document.querySelector('#erase')

    barL.style.cssText =
        'width: 100vw; visibility: visible;'

    areaLinks.value = ''

    aShowLinks.innerHTML = ''

    mess.textContent = '...'
    mess.style.cssText =
        'border: 2px solid var(--colorBlack);'

    bList.style.cssText =
        'opacity: 0; pointer-events: none;'

    resetLoadingBar()
}


function openLinks() {// ON CLICK OPEN THE PASTED LINKS AND MORE INFORMATION ABOUT IT
    try {
        let mess = document.querySelector('#message')
        let barL = document.querySelector('#barLoading')
        let titleL = document.querySelector('#titleLinks')
        let areaLinks = document.querySelector('#pasteLinks')
        let aShowLinks = document.querySelector('#listLinks')
        let bList = document.querySelector('#erase')
        let links = areaLinks.value.split('\n')

        aShowLinks.innerHTML = ''

        if (areaLinks.value.trim() === '') {
            mess.textContent = 'Insira os Links para poder abri-los!'
            mess.style.cssText =
                'border: 2px solid var(--colorRed);'
        } else {
            const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:[/?].*)?$/

            for (let i = 0; i < links.length; i++) {
                let link = links[i].trim()

                let listElement = document.createElement('li')
                if (link !== '') {
                    if (!/^https?:\/\//i.test(link)) {
                        link = "http://" + link
                    }

                    if (!urlRegex.test(link)) {
                        mess.innerHTML = `Link INVALIDO: ${link}, clique no ❗️, para Ajuda.`
                        mess.style.cssText =
                            'border: 2px solid var(--colorRed);'
                    } else {
                        mess.innerHTML = 'Se ocorrer algum problema clique no ❗️, na lateral direita da tela para Ajuda.'
                        mess.style.cssText =
                            'border: 2px solid var(--colorRed);'

                        barL.style.cssText =
                            'width: 100vw; visibility: visible;'

                        bList.style.cssText =
                            'opacity: 1; pointer-events: unset;'
                            
                        areaLinks.style.cssText =  
                            'border-radius: 5px 5px 5px 5px;'
                        titleL.style.cssText =  
                            'opacity: 1; visibility: visible;'

                        listElement.innerHTML = `<abbr title="Link colado"><a href="${link} rel="noopener noreferrer" referrerpolicy="no-referrer" target="_blank">&#128279; ${link}</a></abbr>` 
                        aShowLinks.appendChild(listElement)
                        
                        window.open(link, '_blank')   
                    }
                }
                resetLoadingBar()
            }
        }
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
}