document.addEventListener('DOMContentLoaded', () => {
    // --- Home Page Carousel Logic ---
    const homeTrack = document.querySelector('.carousel-track:not(.corporate-track)');
    if (homeTrack) {
        const homeSlides = Array.from(homeTrack.children);
        const homeNextButton = document.querySelector('.carousel-btn.next:not(.corporate-next)');
        const homePrevButton = document.querySelector('.carousel-btn.prev:not(.corporate-prev)');
        let homeIndex = 0;

        const updateHomeCarousel = () => {
            const width = homeSlides[0].getBoundingClientRect().width;
            homeTrack.style.transform = `translateX(-${homeIndex * width}px)`;
        };

        homeNextButton.addEventListener('click', () => {
            homeIndex = (homeIndex + 1) % homeSlides.length;
            updateHomeCarousel();
        });

        homePrevButton.addEventListener('click', () => {
            homeIndex = (homeIndex - 1 + homeSlides.length) % homeSlides.length;
            updateHomeCarousel();
        });

        window.addEventListener('resize', updateHomeCarousel);
        window.addEventListener('load', updateHomeCarousel);
    }

    // --- Corporate Page Carousel Logic ---
    const corpTrack = document.querySelector('.corporate-track');
    if (corpTrack) {
        const corpSlides = Array.from(corpTrack.children);
        const corpNextButton = document.querySelector('.corporate-next');
        const corpPrevButton = document.querySelector('.corporate-prev');
        let corpIndex = 0;

        const updateCorpCarousel = () => {
            const width = corpSlides[0].getBoundingClientRect().width;
            corpTrack.style.transform = `translateX(-${corpIndex * width}px)`;
        };

        corpNextButton.addEventListener('click', () => {
            corpIndex = (corpIndex + 1) % corpSlides.length;
            updateCorpCarousel();
        });

        corpPrevButton.addEventListener('click', () => {
            corpIndex = (corpIndex - 1 + corpSlides.length) % corpSlides.length;
            updateCorpCarousel();
        });

        window.addEventListener('resize', updateCorpCarousel);
        window.addEventListener('load', updateCorpCarousel);
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            } else {
                navLinks.style.display = ''; // Clear inline style to revert to CSS
            }
        });
    }

    // --- Delivery Areas Toggle ---
    const deliveryBtn = document.getElementById('delivery-areas-btn');
    const deliveryList = document.getElementById('delivery-areas-list');

    if (deliveryBtn && deliveryList) {
        deliveryBtn.addEventListener('click', () => {
            if (deliveryList.style.display === 'none') {
                deliveryList.style.display = 'block';
                deliveryBtn.textContent = 'Hide Areas';
            } else {
                deliveryList.style.display = 'none';
                deliveryBtn.textContent = 'here'; // Restore original text
            }
        });
    }
});
