// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check and apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    themeToggle.textContent = savedTheme === 'dark-theme' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.className = 'dark-theme';
        themeToggle.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.className = 'light-theme';
        themeToggle.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light-theme');
    }
});

// Add projects dynamically
const projects = [
    { title: "Project 1", description: "Gamified-habit-tracker", link: "https://github.com/dedeepya1308/gamified-habit-tracker" },
    { title: "Project 2", description: "Font-previewer", link: "https://github.com/dedeepya1308/font-previewer" },
];

const gallery = document.querySelector('.project-gallery');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    gallery.appendChild(projectCard);
});

// Contact form submission (basic validation)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
