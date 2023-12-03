let previousIp = null// VARIABLE PREVIOUS IP

document.addEventListener('DOMContentLoaded', function () {// LOAD LOCAL STORAGE ITENS INTO LIST ON PAGE LOAD
    lIp = JSON.parse(localStorage.getItem('ipList')) || []
    renderListIP()
})

let lIp = []// VARIABLE LIST

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
    
    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 200) {
        sBottom.style.cssText =
            'opacity: 0; pointer-events: none; visibility: hidden;'
    } else {
        sBottom.style.cssText =
            'opacity: 1; pointer-events: unset; visibility: visible;'
    }
    
    let sTop = document.querySelector("#scrollT")

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 420) {
        sTop.style.cssText =
            'opacity: 1; pointer-events: unset; visibility: visible;'
    } else {
        sTop.style.cssText =
            'opacity: 0; pointer-events: none; visibility: hidden;'
    }

    let foot = document.querySelector('footer')
    let lO = document.querySelector('#linklOuKo')

    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 57) {
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

// ON HOVER BUTTON SEE CHANGE COLORS OF THE IP SHOWED
function getBlue() {
    let Ip = document.querySelector('#IP')

    Ip.style.cssText =
        'border-left: 2px solid var(--colorBlue); border-right: 2px solid var(--colorBlue);'
}
function getWhite() {
    let Ip = document.querySelector('#IP')

    Ip.style.cssText =
        'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
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

function showIP(ip) {// SHOW IP ON SCREEN
    let Ip = document.querySelector('#IP')

    Ip.textContent = `${ip}`
}

function verifyRepeatedListIP(ip) {// VERIFY IF THE IP IS REPEATED WITH ANY ITENS ON THE LIST AND SHOW ON SCREEN
    let rIp = document.querySelector('#equalRepeatedListIP')
    
    if (lIp.some(entry => entry.ip === ip)) {
        rIp.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        setTimeout(function() {
            rIp.style.cssText =
                'border-left: 2px solid var(--colorRed); border-right: 2px solid var(--colorRed);'
        }, 300)

        rIp.textContent = 'Repetido'
    } else {
        rIp.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        setTimeout(function() {
            rIp.style.cssText =
                'border-left: 2px solid var(--colorGreen); border-right: 2px solid var(--colorGreen);'
        }, 300)

        rIp.textContent = 'Não Repetido'
    }
}

function verifyEqualIPEnterListIp(ip) {// VERIFY IF THE IP IS EQUAL WITH THE PREVIOUS IP AND SHOW ON SCREEN
    let sIcon = document.querySelector('#saveIcon')
    let Ip = document.querySelector('#IP')
    let eIp = document.querySelector('#equalIP')
    
    if (previousIp === null || previousIp !== ip) {
        sIcon.textContent = 'SALVANDO'
        sIcon.style.cssText =
            'color: var(--colorWhite); animation: borderBlink 0.3s linear infinite;'

        eIp.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        setTimeout(function() {
            eIp.style.cssText =
                'border-left: 2px solid var(--colorGreen); border-right: 2px solid var(--colorGreen);'
        }, 300)

        Ip.style.cssText =
            'border-left: 2px solid var(--colorBlue); border-right: 2px solid var(--colorBlue);'
        setTimeout(function() {
            Ip.style.cssText =
                'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        }, 300)

        eIp.textContent = 'Mudou'

        previousIp = ip

        saveListIP(ip)

        setTimeout(function() {
            sIcon.textContent = 'SALVADO'
            sIcon.style.cssText =
                'color: rgb(110, 110, 110); animation: none;'
        }, 300)
    } else {
        eIp.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        setTimeout(function() {
            eIp.style.cssText =
                'border-left: 2px solid var(--colorRed); border-right: 2px solid var(--colorRed);'
        }, 300)
        
        Ip.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        
        eIp.textContent = 'Não mudou'

    }
}

function saveListIP(ip) {// SAVE ITENS INTO THE LOCAL STORAGE
    let date = new Date().toLocaleString().replace(',', ' -')
    
    lIp.unshift({ ip: ip, date: date })

    if (lIp.length > 100) {
        lIp.pop()
    }

    localStorage.setItem('ipList', JSON.stringify(lIp))
    
    renderListIP()
}
function renderListIP() {// LOAD ITENS OF LOCAL STORAGE INTO THE IPS LIST
    let list = document.querySelector('table tbody')
    
    list.innerHTML = ''

    if (lIp.length === 0) {
        let row = list.insertRow(-1)

        let cell1 = row.insertCell(0)
        
        cell1.textContent = '? - ?'

        let cell2 = row.insertCell(1)

        cell2.textContent = '?'
    } else {
        for (let entry of lIp) {
            let row = list.insertRow(-1)
            
            let cell1 = row.insertCell(0)
            
            cell1.textContent = entry.date
            
            let cell2 = row.insertCell(1)
            
            cell2.textContent = entry.ip

            
            let counterT = document.querySelector('#counterTop')
            
            counterT.textContent = `${lIp.length}/100`
            
            /*let abbrs = document.querySelector('.abbrS')

            abbrs.style.cssText =
                'visibility: visible;'*/
            
            let counterB = document.querySelector('#counterBottom')
            
            counterB.textContent = `${lIp.length}/100`

            counterB.style.cssText =
                'opacity: 1; pointer-events: unset;'
            
            let bList = document.querySelector('#erase')

            bList.style.cssText =
                'opacity: 1; pointer-events: unset;'
        }
    }
}
function confirmEraseListItens() {// CONFIRM ERASE ITENS OF THE LIST
    let barL = document.querySelector('#barLoading')

    let userConfirmation = confirm('Tem certeza de que deseja apagar a lista?\nsera apagada para sempre.')
    
    let sIcon = document.querySelector('#saveIcon')

    let counterT = document.querySelector('#counterTop')

    /*let abbrs = document.querySelector('.abbrS')*/

    let counterB = document.querySelector('#counterBottom')

    let bList = document.querySelector('#erase')

    let Ip = document.querySelector('#IP')
    let eIp = document.querySelector('#equalIP')
    let rIp = document.querySelector('#equalRepeatedListIP')

    if (userConfirmation) {
        barL.style.cssText =
            'width: 100vw; visibility: visible;'

        previousIp = null

        lIp = [] 
        
        localStorage.removeItem('ipList')

        sIcon.textContent = '?'

        counterT.textContent = '?/100'

        /*abbrs.style.cssText =
            'visibility: hidden;'*/

        counterB.textContent = '?/100'
        counterB.style.cssText =
            'opacity: 0; pointer-events: none;'

        bList.style.cssText =
            'opacity: 0; pointer-events: none;'

        Ip.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        Ip.textContent = '?'
        
        eIp.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        eIp.textContent = '?'
        
        rIp.style.cssText =
            'border-left: 2px solid var(--colorWhite); border-right: 2px solid var(--colorWhite);'
        rIp.textContent = '?'
        
        renderListIP()

        setTimeout(function() {
            alert('Lista apagada.')
        }, 300)
    } else {
        renderListIP()
    }

    resetLoadingBar()
}

function getIP() {// CALL AN EXTERNAL API TO GET YOUR IP AND LOAD ALL THE FUNCTIONS
    let barL = document.querySelector('#barLoading')

    barL.style.cssText =
        'width: 100vw; visibility: visible;'
    
    fetch('https://api.ipify.org?format=json') 
    .then(response => response.json())
    
    
    .then(data => {
        showIP(data.ip)
        verifyRepeatedListIP(data.ip)
        verifyEqualIPEnterListIp(data.ip)
        
        resetLoadingBar()
    })

    .catch(error => {
        alert('ERROR: ' + error.message)
    })

}