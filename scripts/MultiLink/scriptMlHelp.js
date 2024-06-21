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
            link.href = '../styles/MultiLink/mediaQueryMlHelp.css';
            document.head.appendChild(link);
        } else {
            console.log('User is from a Desktop.');
        }    
    } catch (error) {
        alert('ERROR: ' + error.message);
    }
})