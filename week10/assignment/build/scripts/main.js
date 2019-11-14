(function() {
    var menuButton = document.getElementById('toggle-menu');
    menuButton.addEventListener('click', function(event) {
      event.preventDefault();
      var menu = document.getElementById('main-menu');
      menu.classList.toggle('is-open');
    });
  })();