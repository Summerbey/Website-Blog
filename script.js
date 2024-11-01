window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 27, 75, 0.95)';
    } else {
        navbar.style.background = 'rgba(26, 27, 75, 0.8)';
    }
});

{
    document.querySelectorAll('.expand-post').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const post = button.closest('.blog-post');
            post.classList.toggle('expanded');
            button.textContent = post.classList.contains('expanded') ? 'show less' : 'Read More';
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sidebar = document.querySelector('.sidebar');
if (sidebar) {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.checkList.toggle('visible');
        });
    }
}

const sidebarLinks = sidebar.querySelectorAll('a[href^="#"]');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetID = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    });
});