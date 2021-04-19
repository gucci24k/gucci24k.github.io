/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link"),
  navMenu = document.getElementById("nav-menu");

function linkAction() {
  /*Remove menu mobile*/
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};



var sourceSwap = function () {
  var $this = $(this);
  var newSource = $this.data("alt-src");
  $this.data("alt-src", $this.attr("src"));
  $this.attr("src", newSource);
};

$(function () {
  $("img[data-alt-src]")
    .each(function () {
      new Image().src = $(this).data("alt-src");
    })
    .hover(sourceSwap, sourceSwap);
});

$(function () {
  var search_button = $(".search__svg"),
    close_button = $(".close"),
    input = $(".input");
  search_button.on("click", function () {
    $(this).parent().addClass("open");
    close_button.fadeIn(500);
    input.fadeIn(500);
  });

  close_button.on("click", function () {
    search_button.parent().removeClass("open");
    close_button.fadeOut(500);
    input.fadeOut(500);
  });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
      button.classList.toggle('added');
  });
});
