const teachers = [
    { name: "VIKAS SIR", emoji: "👨‍🏫" },
    { name: "UMESH SIR", emoji: "📖" },
    { name: "ANKIT SIR", emoji: "🎓" },
    { name: "SHIVANSH SIR", emoji: "👔" },
    { name: "VISHNU SIR", emoji: "🏆" }
];

const appreciationMessages = [
    "We love your caring behavior and the way you guide us every day! Your support means everything to us! ❤️",
    "Your teaching and guidance are the greatest treasures of our lives! Thank you for being amazing! 📚✨",
    "You're not just a teacher, but our life mentor and inspiration. Thank you Sir for everything! 🙏",
    "Your caring nature and endless patience help us learn and grow every single day! 💫",
    "Your supportive attitude makes us confident and motivated! We truly love you Sir! 💖",
    "Your teaching style is absolutely amazing! You make even the hardest topics easy to understand! 🌟",
    "Your encouragement boosts our confidence every day. You're simply the best teacher ever! 🏆",
    "You are our role model and hero. Your dedication inspires us to work harder every day! 🚀",
    "Your love and respect keep us motivated always. Thank you for being such an incredible teacher! 🌈",
    "Because of you, studying becomes fun and interesting. You make learning an amazing journey! 🎊",
    "Your wisdom and knowledge light up our minds like bright stars in the sky! We're so grateful! ⭐",
    "We deeply admire your passion for teaching and your dedication to helping us succeed! 💪"
];

let currentSlide = 0;
const carouselContainer = document.getElementById('carouselContainer');
const progressBar = document.getElementById('progressBar');
const appreciationText = document.getElementById('appreciationText');

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

function showRandomAppreciation() {
    const randomIndex = Math.floor(Math.random() * appreciationMessages.length);
    appreciationText.textContent = appreciationMessages[randomIndex];
}

function createTeacherSlides() {
    teachers.forEach((teacher, index) => {
        const slide = document.createElement('div');
        slide.className = 'teacher-slide';
        if (index === 0) slide.classList.add('active');

        slide.innerHTML = `
                    <div class="teacher-name">${teacher.name}</div>
                    <div class="teacher-emoji">${teacher.emoji}</div>
                `;

        carouselContainer.appendChild(slide);
    });
}

function createProgressDots() {
    teachers.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (index === 0) dot.classList.add('active');
        progressBar.appendChild(dot);
    });
}

function updateCarousel() {
    const slides = document.querySelectorAll('.teacher-slide');
    const dots = document.querySelectorAll('.progress-dot');

    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        dots[index].classList.remove('active');

        if (index === currentSlide) {
            slide.classList.add('active');
            dots[index].classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        }
    });
}

function startCarousel() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % teachers.length;
        updateCarousel();
    }, 3500);
    setInterval(showRandomAppreciation, 7000);
}

function init() {
    createParticles();
    createTeacherSlides();
    createProgressDots();
    showRandomAppreciation();
    startCarousel();
}

window.addEventListener('load', init);