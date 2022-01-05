// ASSIGNING THE DOM ELEMENTS TO VARIABLES
let darkmode = document.getElementById('html');
let themeToggler = document.getElementById('toggle-btn');
let icon = document.getElementById('icon');
let year = document.getElementById('year');
let contactForm = document.getElementById('contact-form');
let getInTouch = document.getElementById('getInTouch');
let closeContactForm = document.getElementById('closeContactForm');
let closeSentNotice = document.getElementById('closeSentNotice');

// CALLING FUNCTIONS
getTheme();
iconTheme();

// SETTING DARK MODE ON FIRST VISIT
if(getTheme() != 'dark' && getTheme() != 'light'){
    localStorage.setItem('theme', 'dark');
    darkmode.classList.add(localStorage.getItem('theme'));
    iconTheme();
}

// LISTENING TO THE THEME TOGGLE BUTTON CLICK
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

// GETTING THEME CLASS NAME FROM LOCALSTORAGE
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

// ADDING A THEME CLASS
darkmode.classList.add(getTheme());

// CUURENT YEAR
let currentdate = new Date();
year.innerText = currentdate.getFullYear();


// PROJECTS LINK
function doojie(){
    window.open("http://dooje.epizy.com/");
}
function getTips(){
    window.open("https://gettips.w3spaces.com/");
}
function getNews(){
    window.open("https://ercodr.github.io/getnews/");
}
function hostels(){
    window.open("https://ercodr.github.io/hostels.com/");
}


// CONTACT FORM

let slide = 'translate-y-full';

getInTouch.addEventListener('click', () => {
    contactForm.classList.toggle(slide);
});

closeContactForm.addEventListener('click', () => {
    contactForm.classList.toggle(slide);
});

// closeSentNotice.addEventListener('click', () => {
//     contactForm.classList.toggle(slide);
// });



const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    send_mail();
});

function send_mail() {
    var templateParams = {
        from_name: document.getElementById('name').value,
        to_name: "Trapcy",
        message: document.getElementById('message').value
    };

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // setTimeout(() => {
    //     document.getElementById('contact-form').innerHTML = `
    //     <h1 class="flex flex-col justify-center items-center gap-4 mx-auto text-white">
    //         <i class="fa fa-check-circle" style="font-size: 120px;"></i>
    //         <span class="font-bold">E-MAIL SENT!</span>
    //     </h1>
    //     `
    // }, 500);
    
    emailjs.send('service_qst8txo', 'template_77h5nq8', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setTimeout(() => {
                document.getElementById('contact-form').innerHTML = `                
                <h1 class="flex flex-col justify-center items-center gap-4 mx-auto text-white">
                    <i class="fa fa-check-circle" style="font-size: 120px;"></i>
                    <span class="font-bold">E-MAIL SENT!</span>
                </h1>
                `
            }, 1);
            // alert('MESSAGE SENT!')
        }, function(error) {
            console.log('FAILED...' + error);
            alert(`FAILED: ${error}`);
        });
}