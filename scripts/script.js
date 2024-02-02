
function onClickMenu(){
 document.getElementById("btn-menu").classList.toggle("active");
 document.getElementById("ul-menu").classList.toggle("active");
 document.getElementById("btn-image").classList.toggle("active");
}

// let swiper = new Swiper(".mySwiper-masters", {
//     slidesPerView: 1,
//     spaceBetween: 7.5,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       color: white,
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 7.5,
//       },
//       768: {
//         slidesPerView: 4,
//         spaceBetween: 7.5,
//       },
//       1024: {
//         slidesPerView: 6,
//         spaceBetween: 7.5,
//       },
//     },
//   });

new Swiper(".mySwiper-masters", {
    slidesPerView: 1,
    spaceBetween: 7.5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        481: {
        slidesPerView: 2,
        spaceBetween: 7.5,
        },
        620: {
            slidesPerView: 3,
            spaceBetween: 7.5,
            },
        768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
            }
    },
});

new Swiper(".mySwiper-reviews", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
        slidesPerView: 'auto',
        spaceBetween: 7.5,
        }
    }
});