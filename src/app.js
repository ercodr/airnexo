const darkmode = document.getElementById('html');
const dark_mode_toggler = document.getElementById('dark-mode-toggler');

dark_mode_toggler.addEventListener('click', () => {
    darkmode.classList.toggle('dark');
    // alert('1')
});