function resetLoadingBar() {// RESET LOADING BAR WORK
    let barL = document.querySelector('#barLoading')
    if (barL) {
        setTimeout(function() {
            barL.style.cssText =
            'height: 0px;'
            setTimeout(function() {
                barL.style.cssText =
                'visibility: hidden;'
            }, 300)
        }, 600)
    }
}