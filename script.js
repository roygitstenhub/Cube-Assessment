const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});


// Shop Now button functionality (header)
const headerShopBtn = document.querySelector('.shop-now-btn');
if (headerShopBtn) {
    headerShopBtn.addEventListener('click', () => {
        alert('Redirecting to shop page...');
        // In real implementation: window.location.href = '/shop';
    });
}


const heroShopBtn = document.querySelector('.btn-primary');
if (heroShopBtn) {
    heroShopBtn.addEventListener('click', () => {
        alert('Opening product collection...');
        
    });
}


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});



 document.addEventListener('DOMContentLoaded', function () {
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                const icon = item.querySelector('.accordion-icon i');

                header.addEventListener('click', function () {
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.accordion-icon i').className = 'fas fa-plus';
                        }
                    });

                    const isActive = item.classList.contains('active');

                    if (isActive) {
                        item.classList.remove('active');
                        icon.className = 'fas fa-plus';
                    } else {
                        item.classList.add('active');
                        icon.className = 'fas fa-plus';
                    }
                });
            });

            const exploreBtn = document.querySelector('.explore-btn');
            exploreBtn.addEventListener('click', function () {
                alert('Exploring our Signature Scents collection...');

                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });