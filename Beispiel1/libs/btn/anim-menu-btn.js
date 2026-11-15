/**
 * anim-menu-btn.js (CodyHouse / WebDesign Master)
 */
(function () {
    var menuBtns = document.getElementsByClassName('anim-menu-btn');
    if (menuBtns.length > 0) {
        for (var i = 0; i < menuBtns.length; i++) {
            (function (i) {
                initMenuBtn(menuBtns[i]);
            })(i);
        }

        function initMenuBtn(btn) {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                var status = !btn.classList.contains('anim-menu-btn--state-b');
                btn.classList.toggle('anim-menu-btn--state-b', status);
                // Emit custom event
                var customEvent = new CustomEvent('anim-menu-btn-clicked', { detail: status });
                btn.dispatchEvent(customEvent);
            });
        }
    }
})();
