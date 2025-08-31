// Scroll-triggered branding behavior
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    const scrollThreshold = 130;

    // Create the logo element if it doesn't exist
    if (navbarBrand && !document.querySelector('.navbar-brand-logo')) {
        const logoElement = document.createElement('div');
        logoElement.className = 'navbar-brand-logo';
        logoElement.innerHTML = '<img src="assets/stat133_logo-small.svg" alt="STAT 133 Logo">';
        navbarBrand.appendChild(logoElement);
    }

    function updateNavbarBranding() {
        const scrollY = window.scrollY;
        
        if (scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Add scroll event listener with throttling for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateNavbarBranding();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial check in case page loads scrolled
    updateNavbarBranding();
});