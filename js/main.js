// Initialize Swiper
new Swiper(".swiper-landing", {
  parallax: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  speed: 1400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".swiper-works", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
new Swiper(".swiper-customer", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// scroll to top btn
if (document.getElementById("up-btn")) {
  const upBtn = document.getElementById("up-btn");
  window.addEventListener("scroll", () =>
    window.scrollY >= 300
      ? upBtn.classList.add("show")
      : upBtn.classList.remove("show")
  );
  upBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  );
}


// function activateSlide(slideId) {
//   var slides = document.querySelectorAll('.slide');
//   slides.forEach(function(slide) {
//     slide.classList.remove('active');
//   });

//   var activeSlide = document.getElementById(slideId);
//   if (activeSlide) {
//     activeSlide.classList.add('active');
//   }
// }

// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const slideInterval = 3000; // الوقت بالمللي ثانية (هنا كل 3 ثوانٍ)

// function showNextSlide() {
//   // إزالة الفئة 'active' من الصورة الحالية
//   slides[currentIndex].classList.remove('active');

//   // حساب الفهرس للصورة التالية
//   currentIndex = (currentIndex + 1) % slides.length;

//   // إضافة الفئة 'active' للصورة الجديدة
//   slides[currentIndex].classList.add('active');
// }

// // بدء التشغيل التلقائي للسلايدر
// setInterval(showNextSlide, slideInterval);

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 3000; // الوقت بالمللي ثانية (هنا كل 3 ثوانٍ)
let interval;

// دالة لتفعيل السلايد التالي تلقائيًا
function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// بدء التشغيل التلقائي للسلايدر
function startSlider() {
  interval = setInterval(showNextSlide, slideInterval);
}

// إيقاف السلايدر التلقائي
function stopSlider() {
  clearInterval(interval);
}

// دالة لتفعيل السلايد عند الوقوف على أيقونة
function activateSlide(slideId) {
  stopSlider(); // إيقاف التبديل التلقائي مؤقتًا
  slides.forEach(slide => slide.classList.remove('active'));
  const activeSlide = document.getElementById(slideId);
  if (activeSlide) {
    activeSlide.classList.add('active');
    currentIndex = Array.from(slides).indexOf(activeSlide); // تحديث الفهرس الحالي
  }
  startSlider(); // إعادة تشغيل السلايدر بعد التفاعل
}

// إضافة الحدث للأيقونات
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', function() {
    const slideId = this.getAttribute('data-slide-id');
    activateSlide(slideId);
  });
});

// تشغيل السلايدر في البداية
startSlider();
