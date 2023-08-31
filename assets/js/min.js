// Menu List
const menuItem = document.querySelectorAll('.menu-list');
const miniMenuItem = document.querySelectorAll('.mini-menu-list');

menuItem.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        menuItem.forEach(item => {
        item.classList.remove('active');

        });

        item.classList.add('active');

    });

});







// Toggle menu bar
const menuIcon = document.getElementsByClassName('toggle-bar')[0];
const fullSidebar = document.getElementsByClassName('sidebar')[0];
const miniSidebar = document.getElementsByClassName('sidebar-mini')[0];
const headerTop = document.getElementsByClassName('header-top')[0];

menuIcon.addEventListener('click', function() {

    if(fullSidebar.style.display !== 'none'){
        fullSidebar.style.display = 'none';
        miniSidebar.style.display = 'block';
        headerTop.style.width = '96.3vw'
    } else {
        miniSidebar.style.display = 'none';
        fullSidebar.style.display = 'block';
        headerTop.style.width = '85.5vw'
    }

});








