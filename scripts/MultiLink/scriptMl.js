function isMobile() {//IDENTIFY WITH THE USER IS FROM A PHONE
    const userAgent = navigator.userAgent;
    return /Mobi|Android|iPhone|iPod|iPad|Windows\sPhone|Windows\sCE|BlackBerry|BB10|IEMobile|Opera\sMini|Mobile\sSafari|webOS|Mobile|Tablet|CriOS/i.test(userAgent);
}

document.addEventListener('DOMContentLoaded', function () {// LOAD MEDIA QUERY PHONE
    try {
        if (isMobile()) {
            console.log('User is from a Phone.');
            
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../styles/MultiLink/mediaQueryMl.css';
            document.head.appendChild(link);
        } else {
            console.log('User is from a Desktop.');
        }    
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
})

window.onscroll = function() { scrollFunction() }// CALL FUNCTION FOR SCROLLS BUTTONS

function scrollFunction() {// SHOW THE SCROLLS BUTTONS AND FOOTER
    let sBottom = document.querySelector("#scrollB")

    if (sBottom) {
        if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 190) {
            sBottom.style.cssText =
                'opacity: 0; pointer-events: none; visibility: hidden;'
        } else {
            sBottom.style.cssText =
                'opacity: 1; pointer-events: unset; visibility: visible;'
        }
    }
    
    let sTop = document.querySelector("#scrollT")

    if (sTop) {
        if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 220) {
            sTop.style.cssText =
                'opacity: 1; pointer-events: unset; visibility: visible;'
        } else {
            sTop.style.cssText =
                'opacity: 0; pointer-events: none; visibility: hidden;'
        }
    }

    let head = document.querySelector('header')
    
    if (window.scrollY > 35) {
        head.style.cssText =
            'border-radius: 0px 0px 0px 0px;'
    } else {
        head.style.cssText =
            'border-radius: 0px 0px 50px 0px;'
    }

    let foot = document.querySelector('footer')
    let lO = document.querySelector('#linklOuKo')
    
    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 55) {
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

document.addEventListener('DOMContentLoaded', function () {// THE KEYBOARD KEY (ENTER) NOW ACTIVE THE BUTTON OPEN AND (SHIFT+ENTER) NOW DO THE BREAK ROW INSTEAD TOO 
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

    if (mess.textContent !== '...') {
        return
    }

    mess.textContent = 'Verifique se os Links estão em cada linha!'
    mess.style.cssText =
        'border: 2px solid var(--colorBlack);'
}

function eraseListLinks() {// ERASE LINKS OF THE LIST
    try {
        let barL = document.querySelector('#barLoading')
        let mess = document.querySelector('#message')
        let areaLinks = document.querySelector('#pasteLinks')
        let titleL = document.querySelector('#titleLinks')
        let aShowLinks = document.querySelector('#listLinks')
        let bList = document.querySelector('#erase')

        barL.style.cssText =
            'height: 3px; visibility: visible;'
            
        mess.textContent = '...'
        mess.style.cssText =
            'border: 2px solid var(--colorBlack);'
            
        areaLinks.value = ''
        areaLinks.style.cssText =  
            'border-radius: 5px 5px 15px 15px;'

        titleL.style.cssText =  
            'opacity: 0; visibility: hidden;'

        aShowLinks.innerHTML = ''

        bList.style.cssText =
            'opacity: 0; pointer-events: none;'

        resetLoadingBar()
    } catch (error) {
        resetLoadingBar()

        mess.innerHTML = `ERROR.`
        mess.style.cssText =
            'border: 2px solid var(--colorRed);'

        alert('ERROR: ' + error.message);
    }
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
                        areaLinks.style.cssText =  
                            'border-radius: 5px 5px 15px 15px;'
        
                        titleL.style.cssText =  
                            'opacity: 0; visibility: hidden;'
                    } else {
                        mess.innerHTML = 'Se ocorrer algum problema clique no ❗️, na lateral direita da tela para Ajuda.'
                        mess.style.cssText =
                            'border: 2px solid var(--colorRed);'

                        barL.style.cssText =
                            'height: 3px; visibility: visible;'

                        areaLinks.style.cssText =  
                            'border-radius: 5px 5px 5px 5px;'

                        titleL.style.cssText =  
                            'opacity: 1; visibility: visible;'

                        bList.style.cssText =
                            'opacity: 1; pointer-events: unset;'
                        
                        listElement.innerHTML = `<abbr title="Link colado"><a href="${link} rel="noopener noreferrer" referrerpolicy="no-referrer" target="_blank">&#128279; ${link}</a></abbr>` 
                        aShowLinks.appendChild(listElement)
                        
                        window.open(link, '_blank')   
                    }
                }
                resetLoadingBar()
            }
        }
    } catch (error) {
        resetLoadingBar()

        mess.innerHTML = `ERROR.`
        mess.style.cssText =
            'border: 2px solid var(--colorRed);'

        alert('ERROR: ' + error.message);
    }
}