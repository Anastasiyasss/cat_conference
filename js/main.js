//слайдеры
$('.conf__slider-inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.idea__slider-inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.more__slider-inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
           responsive: [
              {
                breakpoint:1177,
                settings:{
                  slidesToShow:3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint:891,
                settings:{
                  slidesToShow:2,
                  slidesToScroll:2,
                }
              },
              {
                breakpoint:620,
                settings:{
                  dots: false,
                  slidesToShow:2,
                  slidesToScroll:2,
                }
              },
                {
                breakpoint:600,
                settings:{
                  dots: false,
                  slidesToShow:1,
                  slidesToScroll: 1,
                }
              }
            ]
  });

  //Кннопка вверх
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();


//Переход по страницам(секциям)
const navElements = document.querySelectorAll('a[href^="#"]');
navElements.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});

//Бургер-меню
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


let burger = document.getElementById("vopros");
let names = document.getElementById("names");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [
      vopros,names,phone
    ].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [
          vopros,names,phone
        ].forEach(item => {
            item.value = ""
        });

        alert("Спасибо! Мы скоро свяжемся с вами!");
    }
}
