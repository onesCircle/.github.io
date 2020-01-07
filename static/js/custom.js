(function() {
    var menuToggle = document.querySelector('#menu-toggle');
    var menu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function(e) {
        menuToggle.classList.toggle('toggled-on');

        if (menu.style.display) {
            menu.style.display = '';
        } else {
            menu.style.display = 'block';
        }
    });
})();
