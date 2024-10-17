// Contactformular
function validateEmail() {
    const vorname = document.getElementById(' Vorname: ').value.trim();
    const nachname = document.getElementById(' Nachname: ').value.trim();
    const email = document.getElementById(' Email-Adresse: ').value.trim();

    // Fehlermeldungen abrufen
    const vornameError = document.getElementById('vorname-error');
    const nachnameError = document.getElementById('nachname-error');
    const emailError = document.getElementById('email-error');

    // Validierungsregeln
    const namePattern = /^[a-zA-ZäöüÄÖÜß\s\-]{2,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;

    // Vorname validieren
    if (!namePattern.test(vorname)) {
        vornameError.style.display = 'block';
        valid = false;
    } else {
        vornameError.style.display = 'none';
    }

    // Nachname validieren
    if (!namePattern.test(nachname)) {
        nachnameError.style.display = 'block';
        valid = false;
    } else {
        nachnameError.style.display = 'none';
    }

    // E-Mail validieren
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    return valid; // Wenn alles validiert ist, wird das Formular abgeschickt
}
//contactformular <768px
function validateEmail2() {
    const vorname = document.getElementById(' Vorname2: ').value.trim();
    const nachname = document.getElementById(' Nachname2: ').value.trim();
    const email = document.getElementById(' Email-Adresse2: ').value.trim();

    // Fehlermeldungen abrufen
    const vornameError = document.getElementById('vorname-error2');
    const nachnameError = document.getElementById('nachname-error2');
    const emailError = document.getElementById('email-error2');

    // Validierungsregeln
    const namePattern = /^[a-zA-ZäöüÄÖÜß\s\-]{2,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;

    // Vorname validieren
    if (!namePattern.test(vorname)) {
        vornameError.style.display = 'block';
        valid = false;
    } else {
        vornameError.style.display = 'none';
    }

    // Nachname validieren
    if (!namePattern.test(nachname)) {
        nachnameError.style.display = 'block';
        valid = false;
    } else {
        nachnameError.style.display = 'none';
    }

    // E-Mail validieren
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    return valid; // Wenn alles validiert ist, wird das Formular abgeschickt
}
// Smooth scroll behavior für die Seite setzen
document.documentElement.style.scrollBehavior = 'smooth';

// Füge Event-Listener für die Navigationslinks hinzu
const navLinks = document.querySelectorAll('.m2-nav-button-body a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Verhindert das sofortige Springen
        const targetID = this.getAttribute('href');  // Holt den Anchor (z.B. "#Home")
        const targetElement = document.querySelector(targetID);

        // Scrollen zum Ziel mit smooth scrolling
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    });
});

//Model View
// Modal 1 öffnen und schließen
document.getElementById("openModal1").onclick = function(event) {
    event.preventDefault(); // Verhindert das Springen beim Klicken auf den Link
    document.getElementById("myModal1").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal1").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal1")) {
        document.getElementById("myModal1").style.display = "none";
    }
}

// Modal 2 öffnen und schließen
document.getElementById("openModal2").onclick = function(event) {
    event.preventDefault();
    document.getElementById("myModal2").style.display = "block";
}

document.getElementsByClassName("close")[1].onclick = function() {
    document.getElementById("myModal2").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal2")) {
        document.getElementById("myModal2").style.display = "none";
    }
}

// Modal 3 öffnen und schließen
document.getElementById("openModal3").onclick = function(event) {
    event.preventDefault();
    document.getElementById("myModal3").style.display = "block";
}

document.getElementsByClassName("close")[2].onclick = function() {
    document.getElementById("myModal3").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal3")) {
        document.getElementById("myModal3").style.display = "none";
    }
}

// Modal 4 öffnen und schließen
document.getElementById("openModal4").onclick = function(event) {
    event.preventDefault();
    document.getElementById("myModal4").style.display = "block";
}

document.getElementsByClassName("close")[3].onclick = function() {
    document.getElementById("myModal4").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal4")) {
        document.getElementById("myModal4").style.display = "none";
    }
}

// Modal 5 öffnen und schließen
document.getElementById("openModal5").onclick = function(event) {
    event.preventDefault();
    document.getElementById("myModal5").style.display = "block";
}

document.getElementsByClassName("close")[4].onclick = function() {
    document.getElementById("myModal5").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal5")) {
        document.getElementById("myModal5").style.display = "none";
    }
}

// Modal 6 öffnen und schließen
document.getElementById("openModal6").onclick = function(event) {
    event.preventDefault();
    document.getElementById("myModal6").style.display = "block";
}

document.getElementsByClassName("close")[5].onclick = function() {
    document.getElementById("myModal6").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal6")) {
        document.getElementById("myModal6").style.display = "none";
    }
}

// Modal Views für Datenschutz und Rechte
// Modal Impressum öffnen und schließen
document.getElementById("openModalImpressum").onclick = function(event) {
    event.preventDefault(); // Verhindert das Springen beim Klicken auf den Link
    document.getElementById("myModalImpressum").style.display = "block";
}

document.getElementsByClassName("closeImpressum")[0].onclick = function() {
    document.getElementById("myModalImpressum").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModalImpressum")) {
        document.getElementById("myModalImpressum").style.display = "none";
    }
}

// Modal Datenschutz öffnen und schließen
document.getElementById("openModalDatenschutz").onclick = function(event) {
    event.preventDefault(); // Verhindert das Springen beim Klicken auf den Link
    document.getElementById("myModalDatenschutz").style.display = "block";
}

document.getElementsByClassName("closeDatenschutz")[0].onclick = function() {
    document.getElementById("myModalDatenschutz").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModalDatenschutz")) {
        document.getElementById("myModalDatenschutz").style.display = "none";
    }
}

// Modal AGB öffnen und schließen
document.getElementById("openModalAGB").onclick = function(event) {
    event.preventDefault(); // Verhindert das Springen beim Klicken auf den Link
    document.getElementById("myModalAGB").style.display = "block";
}

document.getElementsByClassName("closeAGB")[0].onclick = function() {
    document.getElementById("myModalAGB").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModalAGB")) {
        document.getElementById("myModalAGB").style.display = "none";
    }
}




// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownLinks = document.querySelectorAll('.dropdown-link'); // Alle Links im Dropdown

// Smooth scroll behavior für die Seite setzen
document.documentElement.style.scrollBehavior = 'smooth';

menuToggle.addEventListener('click', function() {
    dropdownMenu.style.display = 'block';
    document.body.classList.add('no-scroll');  // Disable scrolling
});

const closeMenuButton = document.querySelector('.w3-button.w3-display-topright');
closeMenuButton.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
    document.body.classList.remove('no-scroll');  // Re-enable scrolling
});

// Menü schließen, wenn ein Link geklickt wird
dropdownLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Verhindert das sofortige Springen
        const targetID = this.getAttribute('href');  // Holt den Anchor (z.B. "#Seite1")
        const targetElement = document.querySelector(targetID);

        // Scrollen zum Ziel mit smooth scrolling
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Menü schließen
        dropdownMenu.style.display = 'none';
        document.body.classList.remove('no-scroll');  // Scrollen wieder aktivieren
    });
});

// Close menu on window resize
window.addEventListener('resize', function() {
    dropdownMenu.style.display = 'none';
    document.body.classList.remove('no-scroll');  // Re-enable scrolling
});

/*
function scrollToClass(className) {
    const element = document.querySelector('.' + className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
}

function closeMenu() {
    document.getElementById('dropdown-menu').style.display = 'none';
}
*/

// ONEPAGER SCRIPT
window.onload = () => {

    const Slider = function (pages, pagination) {
        let slides = [],
            btns = [],
            count = 6,
            current = 0,
            touchstart = 0,
            animation_state = false;

        const init = () => {
            slides = pages.children;
            count = slides.length;
            for (let i = 0; i < count; i++) {
                slides[i].style.bottom = -(i * 100) + '%';
                let btn = document.createElement('li');
                btn.dataset.slide = i;
                btn.addEventListener('click', btnClick);
                btns.push(btn);
                pagination.appendChild(btn);
            }
            btns[0].classList.add('active');
        }

        const gotoNum = (index) => {
            if ((index != current) && !animation_state) {
                animation_state = true;
                setTimeout(() => animation_state = false, 500);
                btns[current].classList.remove('active');
                current = index;
                btns[current].classList.add('active');
                for (let i = 0; i < count; i++) {
                    slides[i].style.bottom = (current - i) * 100 + '%';
                }
            }
        }

        const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
        const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));


        // Verhindert Seitenwechsel durch Scrollen, erlaubt aber Scrollen innerhalb der aktuellen Seite
        pages.addEventListener('wheel', (e) => {
            const activePage = slides[current];
            const atTop = activePage.scrollTop === 0;
            const atBottom = activePage.scrollTop + activePage.clientHeight >= activePage.scrollHeight;

            if ((e.deltaY > 0 && atBottom) || (e.deltaY < 0 && atTop)) {
                e.preventDefault(); // Verhindert Seitenwechsel bei Scrollen
            }
        });
        /* pages.addEventListener('touchmove', (e) => {
            const activePage = slides[current];
            const atTop = activePage.scrollTop === 0;
            const atBottom = activePage.scrollTop + activePage.clientHeight >= activePage.scrollHeight;

            if ((e.changedTouches[0].screenY < 0 && atBottom) || (e.changedTouches[0].screenY > 0 && atTop)) {
                e.preventDefault(); // Verhindert Seitenwechsel bei Touch-Gesten
            }
        }); */

        // touchstart und touchend für mobile Geräte;
        pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
        pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();
        init();
    }
            let pages = document.querySelector('.pages');
            let pagination = document.querySelector('.pagination');
            let slider = new Slider(pages, pagination);
}