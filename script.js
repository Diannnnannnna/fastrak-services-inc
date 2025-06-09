document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false, // Keep false for now to prevent jump issues
        initialSlide: 0, // Start from first slide
        autoplay: false, // Initially disable autoplay
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                console.log("Swiper initialized on slide:", this.realIndex);
                this.slideTo(0, 0, false); // Ensure it starts at slide 0
            },
        },
    });

    // Wait 1 second before starting autoplay
    setTimeout(() => {
        console.log("Starting autoplay...");
        swiper.params.autoplay = {
            delay: 3000,
            disableOnInteraction: false,
        };
        swiper.autoplay.start();
    }, 1000);
});



function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}


