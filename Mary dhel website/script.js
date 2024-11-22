document.getElementById('menu-toggle').addEventListener('click', function (event) {
    event.preventDefault();
    const menuContent = document.querySelector('.Menu_Content');
    
    // Toggle the visibility of the menu
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});
