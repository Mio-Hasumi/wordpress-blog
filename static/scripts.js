if (typeof window !== "undefined") {
    console.log("✅ scripts.js is executing!");

    setTimeout(() => {
        console.log("✅ Scripts.js Loaded!");

        // ✅ Top Bar Scroll Effect
        window.addEventListener('scroll', () => {
            const topBar = document.querySelector('.top-bar');
            if (window.scrollY > 10) {
                topBar.classList.add('scrolled');
            } else {
                topBar.classList.remove('scrolled');
            }
        });

        // ✅ Ensure Navbar Exists
        const navbar = document.querySelector(".navbar");
        if (!navbar) {
            console.error("❌ Navbar not found!");
            return;
        }

        // ✅ Show Navbar on Scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("show");
                navbar.classList.remove("hide");
            } else {
                navbar.classList.add("hide");
                navbar.classList.remove("show");
            }
        });

        // ✅ Smooth Scroll for Navbar Buttons
        document.querySelectorAll('.navbar button').forEach(button => {
            button.addEventListener('click', () => {
                const target = document.querySelector(`.${button.dataset.target}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });

                    // Highlight the active button
                    document.querySelectorAll('.navbar button').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                }
            });
        });

        // ✅ Q&A Toggle Functionality
        document.querySelectorAll('.qna-title').forEach(title => {
            title.addEventListener('click', () => {
                const content = title.nextElementSibling;
                const arrow = title.querySelector('.arrow');

                content.classList.toggle('open');
                title.classList.toggle('active');
            });
        });

        // ✅ Show & Handle Join Input
        const showInputButton = document.getElementById('show-input-btn');
        if (showInputButton) {
            showInputButton.addEventListener('click', () => {
                const inputWrapper = document.getElementById('input-wrapper');
                inputWrapper.classList.toggle('hidden');
            });
        }

        // ✅ Join Button Click Event (Email Validation)
        const joinButton = document.getElementById('join-btn');
        if (joinButton) {
            joinButton.addEventListener('click', () => {
                const userInput = document.getElementById('user-input').value;
                if (userInput.trim() !== '') {
                    console.log("✅ Email Submitted:", userInput);
                } else {
                    alert('Please enter a valid email account.');
                }
            });
        }

        // ✅ CTA Buttons Scroll to Signup
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', () => {
                const ctaSection = document.querySelector('.cta-section');
                if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                    const inputWrapper = document.getElementById('input-wrapper');
                    if (inputWrapper) {
                        inputWrapper.classList.remove('hidden');
                        document.getElementById('user-input').focus();
                    }
                }
            });
        });

        // ✅ Navbar Highlight on Scroll
        const sections = document.querySelectorAll('section');
        const navButtons = document.querySelectorAll('.navbar button');

        window.addEventListener('scroll', () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
                    currentSection = section.className.split(' ')[0];
                }
            });

            navButtons.forEach(button => {
                button.classList.remove('active');
                if (button.dataset.target === currentSection) {
                    button.classList.add('active');
                }
            });
        });

    }, 500);
}
