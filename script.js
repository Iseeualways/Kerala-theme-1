// ✅ Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


// ✅ Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {


  gsap.from(".search-subtitle", {
    scrollTrigger: {
      trigger: ".search-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".search-box", {
    scrollTrigger: {
      trigger: ".search-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
  });

  // -----------------
  // CTA Section Animation
  // -----------------
  gsap.from(".cta-title", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".cta-subtitle", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".cta-buttons", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
  });

  // -----------------
  // Expand / Collapse Nav
  // -----------------
  const nav = document.getElementById("nav");
  const hero = document.getElementById("hero");
  const btn = document.getElementById("collapseBtn");
  const btnE = document.getElementById("enquiry-btn");

  if (nav && hero && btn && btnE) {
    // Expand on enquiry button click
    btnE.addEventListener("click", () => {
      gsap.to(nav, { height: "100vh", duration: 1.2, ease: "power4.inOut" });
      gsap.to(hero, { opacity: 1, delay: 1, duration: 0.8 });
      gsap.to(btn, { opacity: 1, delay: 1.2, duration: 0.6 });
    });

    // Collapse on collapse button click
    btn.addEventListener("click", () => {
      gsap.to(hero, { opacity: 0, duration: 0.5 });
      gsap.to(btn, { opacity: 0, duration: 0.5 });
      gsap.to(nav, { height: "70px", duration: 1, ease: "power4.inOut", delay: 0.3 });
    });
  }

  // -----------------
  // Hero Content Load Animation
  // -----------------
  gsap.from(".content-right h1", {
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".content-right p", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".content-right .btn", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2,
    ease: "power3.out"
  });

});



const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 150, // smaller depth
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});



