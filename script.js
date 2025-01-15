// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offset = 80; // Adjust this value to match your navbar height
    const targetPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Fade-in Animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('light-mode', isLightMode);
  darkModeToggle.textContent = isLightMode ? '☀️' : '🌙';
});

// Check for saved light mode preference
const savedLightMode = localStorage.getItem('light-mode');
if (savedLightMode === 'true') {
  body.classList.add('light-mode');
  darkModeToggle.textContent = '☀️';
} else {
  darkModeToggle.textContent = '🌙';
}
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.nav-links').classList.remove('active');
  });
});