{
    function resetBaseSize() {
        let winWidth = window.innerWidth;
        if (document.body) {
            winWidth = document.body.clientWidth;
        }
        if (winWidth >= 1280) {
            return;
        }
        
        let htmlElem = document.querySelector('html');
        
        if (winWidth > 240) {
            let fontSize = winWidth / 1280 * 16;
            htmlElem.style.fontSize = fontSize + 'px';
        }
    }

    resetBaseSize();

    window.onresize = resetBaseSize;
}