
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-linkd").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);
// blurry navbar
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('.navbar').addClass('scroll');
  } else {
    $('.navbar').removeClass('scroll');
  }
});

