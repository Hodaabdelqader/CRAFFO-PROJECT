const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-hidden');
});
//---------------------Swipper--------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                document.querySelectorAll('.slide-content').forEach(function (content) {
                    content.classList.remove('show');
                });
            },
            slideChangeTransitionEnd: function () {
                const currentSlide = this.slides[this.activeIndex];
                const content = currentSlide.querySelector('.slide-content');
                setTimeout(() => {
                    content.classList.add('show');
                }, 300);
            },
        },
    });
});
//----------------------Links------------------------------------

const contentData = {
    category: `
            <ul class="w-full">
                <li class="font-bold text-lg">PROTECT & CARRY</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone Cases</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">AirPods Cases</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Sleeves</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Accessories</li>
            </ul>
            <ul class="w-full">
                <li class="font-bold text-lg">CABLES</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">USB-A</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">USB-C</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Lightning</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Apple Watch</li>
                                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">View All</li>
            </ul>
            
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/bundles.jpg" alt="Bundles" class="zoom-img"></div></li>
                <li class="font-bold text-lg text-center">IPHONE CASES</li>
                <li class="text-center">Give your iPhone one-of-a-kind character</li>
            </ul>
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/wireless-chargers.webp" alt="Wireless Chargers"class="zoom-img"></div></li>
                <li class="font-bold text-lg text-center">CHARGERS</li>
                <li class="text-center">Solutions to power all your tech</li>
            </ul>
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/iphone-cases.webp" alt="iPhone Cases" width="100%"class="zoom-img"></div></li>
                <li class="font-bold text-lg text-center">BUNDLES</li>
                <li class="text-center">Our essentials at a reduced price</li>
            </ul>
        `,
    device: `
           <ul class="w-full">
                <li class="font-bold text-lg"> IPHONE</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone 12 Mini</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone 12</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone 12 Pro</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone 12 Pro Max</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone 11</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone 11 Pro</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPhone XS Max</li>
            </ul>
            <ul class="w-full">
                <li class="font-bold text-lg">MACBOOK</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">12" MacBooks</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">13" MacBooks</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">14" MacBooks</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">15" MacBooks</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">16" MacBooks</li>
            </ul>
                 <ul class="w-full">
                <li class="font-bold text-lg">IPAD</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPad Pro 11"</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPad Pro 12.9"</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPad (7th & 8th Gen)</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">iPad Air (4th Gen)</li>
            </ul>
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/iphones.webp" alt="Wirepless Chargers" width="100%"class="zoom-img"></div></li>
                <li class="font-bold text-lg py-1 text-center"> IPHONE</li>
                <li class="text-center w-full">Explore all iPhone products, from cases to accessories
</li>
            </ul>
        
        `,
    collections: `
            <ul class="w-full">
                <li class="font-bold text-lg">EXPLORE</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">The Heritage Collection</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Sage Collection</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Work From Home</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Stow Collection</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Classic Leather Collection</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Power Delivery Collection</li>
            </ul>
            <ul class="w-full">
                <li class="font-bold text-lg">COLLABORATIONS</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Maison Kitsuné</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">La Boîte Concept</li>
                <li class="text-gray-900 hover:text-gray-400 duration-100 p-1">Tom Dixon</li>
            </ul>
            
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/heritage-collection.webp" alt="Bundles"class="zoom-img"></div></li>
                <li class="font-bold text-lg text-center uppercase">the heritag collections</li>
            </ul>
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/la-boite-concept.webp" alt="Wireless Chargers"class="zoom-img"></div></li>
                <li class="font-bold text-lg text-center uppercase">la boite concept</li>
            </ul>
            <ul class="w-full">
                <li><div class="zoom-img-container"><img src="./images/tom-dixon (1).webp" alt="iPhone Cases" width="100%"class="zoom-img"></div></li>
                <li class="font-bold text-lg text-center uppercase">tom dixon</li>
            </ul>
        `
};

const links = document.querySelectorAll('.content-link');
const landing = document.querySelector('.landing');
const landingContent = document.getElementById('landing-content');
let timeoutId;

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
        const contentKey = link.getAttribute('data-content');
        landingContent.innerHTML = contentData[contentKey];
        landing.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            if (!landing.matches(':hover')) {
                landing.style.display = 'none';
            }
        }, 300); 
    });
});

landing.addEventListener('mouseleave', () => {
    landing.style.display = 'none';
});

landing.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    landing.style.display = 'block';
});














