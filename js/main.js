document.addEventListener('DOMContentLoaded', () => {
    // drop log in
    let loginBtn = document.querySelector('.login-btn');
    let dropLogin = document.querySelector('.drop-login');

    loginBtn.onclick = () => {
        dropLogin.classList.toggle("drop-login-open");
    };

    // menu open close
    let menu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        navbar.classList.toggle("move");
    }

    // home swiper
    var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 25000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // accordion
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
        const accordionHeader = item.querySelector('.accordion-header');

        accordionHeader.addEventListener('click', () => {
            const openItem = document.querySelector('.accordion-open');

            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        })
    })

    const toggleItem = (item) => {
        const accordionContent = item.querySelector('.accordion-content');

        if (item.classList.contains('accordion-open')) {
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open')
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            item.classList.add('accordion-open');
        }
    };

    // control swiper
    var swiper = new Swiper(".control-images", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",  // Fixed
            prevEl: ".swiper-button-prev",  // Fixed
        },
    });
});