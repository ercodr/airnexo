var darkmode = document.getElementById('html');
var themeToggler = document.getElementById('toggle-btn');
var icon = document.getElementById('icon');

getTheme();
iconTheme();

if(getTheme() != 'dark' && getTheme() != 'light'){
    localStorage.setItem('theme', 'dark');
    darkmode.classList.add(localStorage.getItem('theme'));
    iconTheme();
}

themeToggler.addEventListener('click', () => {

    if(getTheme() == 'light'){
        darkmode.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        darkmode.classList.add(getTheme());
        iconTheme();
    } else {
        darkmode.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        darkmode.classList.add(getTheme());
        icon.classList.toggle('text-slate-900');
        iconTheme();
    }
});

function getTheme(){
    return  String(localStorage.getItem('theme'));
}


function iconTheme(){
    if(getTheme() == 'dark'){
        themeToggler.classList.remove('text-slate-900');
    } else {
        themeToggler.classList.add('text-slate-900');
    }    
}

darkmode.classList.add(getTheme());