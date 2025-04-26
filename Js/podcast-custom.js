document.addEventListener('DOMContentLoaded', function() {
    // تهيئة Swiper مع خاصية centeredSlides
    var podcastsSlider = new Swiper('.podcasts-slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        effect: 'slide',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        }
    });

    // تحسين تأثير blur-load للصور
    const blurLoads = document.querySelectorAll('.blur-load');
    blurLoads.forEach(function(blurLoad) {
        const img = blurLoad.querySelector('img');
        
        function loaded() {
            blurLoad.classList.add('loaded');
        }

        if (img.complete) {
            loaded();
        } else {
            img.addEventListener('load', loaded);
        }
    });
});