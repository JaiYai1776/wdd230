document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".lazy-load");

    const lazyLoad = function() {
        images.forEach(img => {
            if (img.offsetTop < window.innerHeight + window.pageYOffset) {
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
            }
        });
    }

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
});
