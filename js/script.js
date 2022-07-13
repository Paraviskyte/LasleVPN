const swiper = new Swiper(".swiper", {
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 1,
  observer: true,
  pagination: {
    el: "#reviews-swiper-control-paginator",
  },
  navigation: {
    nextEl: "#reviews-swiper-control-button-next",
    prevEl: "#reviews-swiper-control-button-prev",
  },
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: "3",
    },
    // when window width is >= 850px
    850: {
      slidesPerView: "2",
    },
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: false,
});


let body = document.querySelector("body");
//insert logo ,auth button and navigation to mobile menu
const logo_node_clone = document.querySelector("#header_logo").cloneNode(true);
const user_auth_node_clone = document
  .querySelector("#universal-user-auth-button")
  .cloneNode(true);
const navigation_node_clone = document
  .querySelector("#header-navigation")
  .cloneNode(true);
const mobile_menu_node = document.querySelector("#mobile_menu");
mobile_menu_node.querySelector(".mobile_menu__header").appendChild(logo_node_clone);
mobile_menu_node.querySelector(".mobile_menu__header").appendChild(user_auth_node_clone);
mobile_menu_node.appendChild(navigation_node_clone);



//mobile menu open\\close functionality
function toggle_nav_menu() {
  mobile_menu_node.classList.toggle("mobile-menu-active");
  body.classList.toggle("body-lock");
}
document
  .querySelector("#header-open-hamburger-menu")
  .addEventListener("click", toggle_nav_menu);
  mobile_menu_node
  .addEventListener("click", toggle_nav_menu);