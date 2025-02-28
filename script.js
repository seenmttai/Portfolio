document.addEventListener('DOMContentLoaded', function() {

    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.getElementById('loading-text');

    const loadingMessages = [
        'Initializing framework...',
        'Loading portfolio data...',
        'Configuring dynamic components...',
        'Compiling project modules...',
        'Preparing interactive elements...',
        'Optimizing animations...',
        'Launching Manan\'s portfolio...'
    ];

    let i = 0;
    let interval = setInterval(() => {
        loadingText.textContent += loadingMessages[i] + '\n';
        i++;
        if (i >= loadingMessages.length) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');

                document.body.style.overflow = 'auto';

                animateOnScroll();

                initializeComponents();
            }, 1000);
        }
    }, 500);

    document.body.style.overflow = 'hidden';

    function initializeComponents() {

        initCursor();

        initNavigation();

        initMatrixAnimation();

        initSkillsSphere();

        initProjectShowcase();

        initCompilerDemo();

        initContactCanvas();

        initScrollObserver();

        initParticles();

        initLottieAnimations();

        initSkillTagAnimations();

        initShowcaseDots();
    }

    function initCursor() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 80);
        });

        const hoverElements = document.querySelectorAll('a, button, .project-card, .showcase-control');

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.border = '2px solid rgba(3, 218, 198, 0)';
                cursorFollower.style.backgroundColor = 'rgba(98, 0, 234, 0.1)';
            });

            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.border = '2px solid var(--secondary)';
                cursorFollower.style.backgroundColor = 'transparent';
            });
        });

        document.addEventListener('mouseout', function(e) {
            if (e.relatedTarget === null) {
                cursor.style.opacity = '0';
                cursorFollower.style.opacity = '0';
            }
        });

        document.addEventListener('mouseover', function() {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '0.5';
        });
    }

    function initNavigation() {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navLinkItems = document.querySelectorAll('.nav-link');
        const floatingNav = document.querySelector('.floating-nav');
        const floatingNavToggle = document.querySelector('.floating-nav-toggle');
        const floatingNavItems = document.querySelectorAll('.floating-nav-item');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        navLinkItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        floatingNavToggle.addEventListener('click', () => {
            floatingNav.classList.toggle('active');
        });

        const sections = document.querySelectorAll('.section');

        function setActiveNav() {
            let scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {

                    navLinkItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });

                    floatingNavItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${sectionId}`) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', setActiveNav);
        setActiveNav(); 
    }

    function initMatrixAnimation() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const cols = Math.floor(canvas.width / 20);
        const ypos = Array(cols).fill(0);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#BB86FC';
            ctx.font = '15pt monospace';

            for (let i = 0; i < cols; i++) {
                const char = String.fromCharCode(Math.floor(Math.random() * 95) + 33);
                const x = i * 20;
                const y = ypos[i] * 20;

                ctx.fillText(char, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    ypos[i] = 0;
                } else {
                    ypos[i]++;
                }
            }
        }

        setInterval(drawMatrix, 100);

        window.addEventListener('resize', () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });
    }

    function initSkillsSphere() {
        if (!document.getElementById('skills-sphere')) return;

        const skillsArray = [
            'Python', 'JavaScript', 'C', 'Dart', 'Kotlin',
            'Flutter', 'Android Studio', 'TensorFlow', 'Django',
            'AI/ML', 'Ethical Hacking', 'Web Scraping',
            'Cloudflare', 'Supabase', 'Firebase', 'AWS', 'Azure',
            'HTML5', 'CSS3', 'React', 'Node.js', 'REST API',
            'Git', 'Docker', 'MongoDB', 'SQL', 'NoSQL'
        ];

        const container = document.querySelector('.skill-sphere-container');
        const options = {
            radius: 250,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true,
            useContainerInlineStyles: false
        };

        const colors = ['#BB86FC', '#03DAC6', '#6200EA', '#018786', '#FFFFFF'];

        const coloredTexts = skillsArray.map((text, i) => {
            const color = colors[i % colors.length];
            return `<span style="color: ${color}; font-weight: ${i % 3 === 0 ? 'bold' : 'normal'}">${text}</span>`;
        });

        try {
            TagCloud(container, coloredTexts, options);
        } catch (e) {
            console.error("TagCloud initialization failed:", e);

            if (container) {
                container.innerHTML = '<div class="skills-fallback">' + 
                    skillsArray.map(skill => `<span class="skill-tag">${skill}</span>`).join('') + '</div>';
            }
        }
    }

    function initProjectShowcase() {
        const prevButton = document.getElementById('prev-project');
        const nextButton = document.getElementById('next-project');
        const showcaseItems = document.querySelectorAll('.showcase-item');
        const progressBar = document.querySelector('.progress-bar');

        if (!prevButton || !nextButton || showcaseItems.length === 0) return;

        let currentIndex = 0;
        let autoplayInterval;

        function showProject(index) {
            showcaseItems.forEach(item => item.classList.remove('active'));
            showcaseItems[index].classList.add('active');

            if (progressBar) {
                progressBar.style.width = `${(index + 1) / showcaseItems.length * 100}%`;
            }

            const dots = document.querySelectorAll('.showcase-dot');
            if (dots.length) {
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % showcaseItems.length;
            showProject(currentIndex);
            resetAutoplay();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + showcaseItems.length) % showcaseItems.length;
            showProject(currentIndex);
            resetAutoplay();
        });

        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % showcaseItems.length;
                showProject(currentIndex);
            }, 8000);
        }

        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }

        startAutoplay();

        const showcaseContainer = document.querySelector('.showcase-container');
        if (showcaseContainer) {
            showcaseContainer.addEventListener('mouseenter', () => {
                clearInterval(autoplayInterval);
            });

            showcaseContainer.addEventListener('mouseleave', () => {
                startAutoplay();
            });
        }
    }

    function initShowcaseDots() {
        const showcaseContainer = document.querySelector('.showcase-container');
        const showcaseItems = document.querySelectorAll('.showcase-item');
        const dotsContainer = document.querySelector('.showcase-dots');

        if (!dotsContainer || !showcaseItems.length) return;

        showcaseItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('showcase-dot');
            if (index === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                const items = document.querySelectorAll('.showcase-item');
                items.forEach(item => item.classList.remove('active'));
                items[index].classList.add('active');

                document.querySelectorAll('.showcase-dot').forEach((d, i) => {
                    d.classList.toggle('active', i === index);
                });

                const progressBar = document.querySelector('.progress-bar');
                if (progressBar) {
                    progressBar.style.width = `${(index + 1) / items.length * 100}%`;
                }
            });

            dotsContainer.appendChild(dot);
        });
    }

    function initCompilerDemo() {
        const compileButton = document.getElementById('compileButton');
        const outputElem = document.getElementById('compilerOutput');
        const cCodeArea = document.getElementById('cCode');

        if (!compileButton || !outputElem || !cCodeArea) return;

        compileButton.addEventListener('click', async () => {
            const code = cCodeArea.value;
            outputElem.textContent = "Compiling...";

            try {
                const response = await fetch('https://c-compile.deno.dev/compile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: code,
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const outputText = await response.text();
                outputElem.textContent = outputText || "Program finished without output.";
            } catch (error) {
                outputElem.textContent = "Compilation error:\n" + error.message;
                console.error(error);
            }
        });
    }

    function initContactCanvas() {
        const canvas = document.getElementById('contact-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 70 + 240}, 100%, 70%)`,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.speedX *= -1;
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.speedY *= -1;
                }
            });

            ctx.strokeStyle = 'rgba(187, 134, 252, 0.1)';
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        drawParticles();

        window.addEventListener('resize', () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });
    }

    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.highlight-box, .skills-container, .contact-info, .fade-in, .fade-in-left, .fade-in-right, .scale-in, .rotate-in, .timeline-icon, .timeline-content');

        animatedElements.forEach(element => {

            if (!element.classList.contains('highlight-box') && 
                !element.classList.contains('skills-container') && 
                !element.classList.contains('contact-info') && 
                !element.classList.contains('timeline-icon') && 
                !element.classList.contains('timeline-content')) {
                element.classList.add('fade-in');
            }
        });
    }

    function initScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('highlight-box') || 
                        entry.target.classList.contains('skills-container') || 
                        entry.target.classList.contains('contact-info')) {
                        entry.target.classList.add('animate');
                    } else if (entry.target.classList.contains('timeline-icon') || 
                               entry.target.classList.contains('timeline-content')) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.add('visible');
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        const elements = document.querySelectorAll('.highlight-box, .skills-container, .contact-info, .fade-in, .fade-in-left, .fade-in-right, .scale-in, .rotate-in, .timeline-icon, .timeline-content');
        elements.forEach(element => {
            observer.observe(element);
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill out all fields');
                return;
            }

            const submitButton = contactForm.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;

            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitButton.style.backgroundColor = '#27c93f';

            contactForm.reset();

            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);
        });
    }

    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: '#bb86fc' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#bb86fc',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'grab' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        }
    }

    function initLottieAnimations() {
        if (typeof lottie !== 'undefined') {
            const animationContainers = document.querySelectorAll('.lottie-container');

            animationContainers.forEach((container, index) => {
                const animationPath = container.dataset.animationPath || 'https://assets5.lottiefiles.com/packages/lf20_UJNc2t.json';

                lottie.loadAnimation({
                    container: container,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: animationPath
                });
            });
        }
    }

    function initSkillTagAnimations() {
        const skillTags = document.querySelectorAll('.skill-tag');

        skillTags.forEach((tag, index) => {
            tag.style.setProperty('--animation-order', index);
        });
    }
});