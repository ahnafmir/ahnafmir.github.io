/*===== MENU & NAV LOGIC =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('show-menu'));
}

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => navMenu.classList.remove('show-menu');
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== ACTIVE LINK ON SCROLL =====*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false // Animations repeat only once
});

sr.reveal('.home__data, .about__img, .skills__subtitle', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {delay: 200}); 
sr.reveal('.home__social-icon', {interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input', {interval: 100});

/*===== DARK/LIGHT THEME TOGGLE =====*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*===== DYNAMIC TYPING EFFECT =====*/
new Typed('#typed-profession', {
    strings: ['Cyber Security Enthusiast', 'AI Enthusiast', 'Software Engineer'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

/*===== WORK MODAL POP-UP LOGIC =====*/
// Define your project data here
const projectData = {
    1: {
        title: "Project Alpha",
        description: "This is a detailed description of Project Alpha. It uses advanced technologies to solve a complex problem in the industry.",
        image: "assets/img/work1.jpg",
        link: "#"
    },
    2: {
        title: "Project Beta",
        description: "This is a detailed description of Project Beta. Focused on user experience and seamless integration.",
        image: "assets/img/work2.jpg",
        link: "#"
    },
    // Add data for projects 3, 4, 5, 6 here...
    3: { title: "Project Gamma", description: "Description for project 3.", image: "assets/img/work3.jpg", link: "#" },
    4: { title: "Project Delta", description: "Description for project 4.", image: "assets/img/work4.jpg", link: "#" },
    5: { title: "Project Epsilon", description: "Description for project 5.", image: "assets/img/work5.jpg", link: "#" },
    6: { title: "Project Zeta", description: "Description for project 6.", image: "assets/img/work6.jpg", link: "#" }
};

const workItems = document.querySelectorAll('.work__img');
const modal = document.getElementById('work-modal');
const modalClose = document.getElementById('modal-close');

workItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project-id');
        const data = projectData[projectId];
        
        document.getElementById('modal-img').src = data.image;
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-description').textContent = data.description;
        document.getElementById('modal-link').href = data.link;

        modal.classList.add('show-modal');
    });
});

modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));

// Close modal if user clicks outside the content area
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal');
    }
});


/*===== FOOTER YEAR =====*/
document.getElementById('year').textContent = new Date().getFullYear();


/*===== PARTICLES.JS CONFIG =====*/
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 60, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#00BFFF"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.5, "random": true},
    "size": {"value": 3, "random": true},
    "line_linked": {"enable": true, "distance": 150, "color": "#00BFFF", "opacity": 0.4, "width": 1},
    "move": {"enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out"}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}, "resize": true},
    "modes": {"grab": {"distance": 140, "line_linked": {"opacity": 1}},"push": {"particles_nb": 4}}
  },
  "retina_detect": true
});