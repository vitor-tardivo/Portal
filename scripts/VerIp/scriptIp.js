function isMobile() {//IDENTIFY WITH THE USER IS FROM A PHONE
    const userAgent = navigator.userAgent;
    return /Mobi|Android|iPhone|iPod|iPad|Windows\sPhone|Windows\sCE|BlackBerry|BB10|IEMobile|Opera\sMini|Mobile\sSafari|webOS|Mobile|Tablet|CriOS/i.test(userAgent);
}

let dTimer = 0// VARIABLE TIMER DEBUG

let previousIp = null// VARIABLE PREVIOUS IP

const max = 100// VARIABLE MAX ITENS LIST

let lIp = []// VARIABLE ARRAY LIST

document.addEventListener('DOMContentLoaded', function () {// LOAD LOCAL STORAGE ITENS INTO LIST ON PAGE LOAD AND MEDIA QUERY PHONE
    try {
        if (isMobile()) {
            console.log('User is from a Phone.');
            
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../styles/VerIp/mediaQueryIp.css';
            document.head.appendChild(link);
        } else {
            console.log('User is from a Desktop.');
        }    
        lIp = JSON.parse(localStorage.getItem('ipList')) || []
        renderListIP(max)
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

function showIP(ip) {// SHOW IP ON SCREEN
    try {    
        let Ip = document.querySelector('#IP')

        if (ip === undefined) {
            alert('ERROR: IP is undefined, API interaction code is wrong.' );
            Ip.textContent = `?`
        } else {
            Ip.textContent = `${ip}`
        }
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
}

function verifyRepeatedListIP(ip) {// VERIFY IF THE IP IS REPEATED WITH ANY ITENS ON THE LIST AND SHOW ON SCREEN
    try {
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
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
}

function verifyEqualIPEnterListIp(ip, max) {// VERIFY IF THE IP IS EQUAL WITH THE PREVIOUS IP AND SHOW ON SCREEN
    try {
        let sIcon = document.querySelector('#saveIcon')
        let iconS = document.querySelector('#iconSave')
        let Ip = document.querySelector('#IP')
        let eIp = document.querySelector('#equalIP')
        
        if (previousIp === null || previousIp !== ip) {
            sIcon.style.cssText =
                'animation: borderBlink 0.3s linear infinite;'
            iconS.style.cssText =
                'opacity: 1;'

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

            saveListIP(ip, max)


            setTimeout(function() {
                sIcon.style.cssText =
                    'animation: none;'
                iconS.style.cssText =
                    'opacity: 0.5;'
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
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
}

function saveListIP(ip, max) {// SAVE ITENS INTO THE LOCAL STORAGE
    try {
        if (ip === undefined) {
            ip = `?`
        }

        let date = new Date().toLocaleString().replace(',', ' -')
        
        lIp.unshift({ ip: ip, date: date })

        if (lIp.length > max) {
            lIp.pop()
        }

        localStorage.setItem('ipList', JSON.stringify(lIp))
        
        renderListIP(max)
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
}
function renderListIP(max) {// LOAD ITENS OF LOCAL STORAGE INTO THE IPS LIST
    try {
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
                
                counterT.textContent = `${lIp.length}/${max}`
                
                /*let abbrs = document.querySelector('.abbrS')
                
                abbrs.style.cssText =
                'visibility: visible;'*/
                
                let counterB = document.querySelector('#counterBottom')
                
                counterB.textContent = `${lIp.length}/${max}`
                
                counterB.style.cssText =
                'opacity: 1; pointer-events: unset;'
                
                let bList = document.querySelector('#erase')
                
                bList.style.cssText =
                'opacity: 1; pointer-events: unset;'
            }
        }
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
}
function confirmEraseListItens(max) {// CONFIRM ERASE ITENS OF THE LIST
    try {
        let barL = document.querySelector('#barLoading')
            
        let userConfirmation = confirm('Tem certeza de que deseja apagar a lista?\nsera apagada para sempre.')
            
        let counterT = document.querySelector('#counterTop')

        /*let abbrs = document.querySelector('.abbrS')*/

        let counterB = document.querySelector('#counterBottom')

        let bList = document.querySelector('#erase')

        let Ip = document.querySelector('#IP')
        let eIp = document.querySelector('#equalIP')
        let rIp = document.querySelector('#equalRepeatedListIP')

        if (userConfirmation) {
            barL.style.cssText =
                'height: 3px; visibility: visible;'

            previousIp = null

            lIp = [] 
            
            localStorage.removeItem('ipList')

            counterT.textContent = `?/${max}`

            /*abbrs.style.cssText =
                'visibility: hidden;'*/

            counterB.textContent = `?/${max}`
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
    } catch (error) {
        alert('ERROR: ' + error.message);

        resetLoadingBar()
    }
}

function getIP(max) {// CALL AN EXTERNAL API TO GET YOUR IP AND LOAD ALL THE FUNCTIONS
    let barL = document.querySelector('#barLoading')

    barL.style.cssText =
        'height: 3px; visibility: visible;'
    
    //fetch('https://ipapi.co/json/') Diferent IP
    //https://api.ipify.org?format=json IP
    fetch('https://api.ipify.org?format=json') 
    .then(response => response.json())
    
    .then(data => {
        dTimer++
        console.log(`Previous-IP(${dTimer}): ${previousIp}`)
        console.log(`Actual-IP(${dTimer}): ${data.ip}`)

        console.log(`API Response: ${JSON.stringify(data)}`)

        showIP(data.ip)
        verifyRepeatedListIP(data.ip)
        verifyEqualIPEnterListIp(data.ip, max)
        
        resetLoadingBar()
    })

    .catch(error => {
        alert('ERROR: ' + error.message)

        resetLoadingBar()
    })

}