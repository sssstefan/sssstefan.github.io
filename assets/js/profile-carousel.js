// Rotate the profile photos on the about page; each photo's caption switches together with it.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".profile-carousel").forEach(function (carousel) {
    const photos = carousel.querySelectorAll(".profile-carousel-photos .profile-carousel-slide");
    const captions = carousel.querySelectorAll(".profile-carousel-captions .profile-carousel-slide");
    const dots = carousel.querySelectorAll(".profile-carousel-dot");
    if (photos.length < 2) return;

    const delay = 5000;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let timer = null;
    let hovered = false;
    let focused = false;

    function show(index) {
      current = (index + photos.length) % photos.length;
      [photos, captions, dots].forEach(function (items) {
        items.forEach(function (item, i) {
          item.classList.toggle("is-active", i === current);
        });
      });
      dots.forEach(function (dot, i) {
        dot.setAttribute("aria-current", i === current ? "true" : "false");
      });
    }

    // Autoplay, paused while the mouse is over the carousel, a dot has keyboard focus, or the tab is in the background.
    function schedule() {
      clearTimeout(timer);
      if (reduceMotion || hovered || focused || document.hidden) return;
      timer = setTimeout(function () {
        show(current + 1);
        schedule();
      }, delay);
    }

    function go(index) {
      show(index);
      schedule();
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        go(i);
      });
    });

    // Swipe left / right on touch screens.
    let touchX = null;
    let touchY = null;
    carousel.addEventListener(
      "touchstart",
      function (event) {
        touchX = event.touches[0].clientX;
        touchY = event.touches[0].clientY;
      },
      { passive: true }
    );
    carousel.addEventListener(
      "touchend",
      function (event) {
        if (touchX === null) return;
        const dx = event.changedTouches[0].clientX - touchX;
        const dy = event.changedTouches[0].clientY - touchY;
        touchX = null;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(current + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );

    carousel.addEventListener("pointerenter", function (event) {
      if (event.pointerType !== "mouse") return;
      hovered = true;
      schedule();
    });
    carousel.addEventListener("pointerleave", function (event) {
      if (event.pointerType !== "mouse") return;
      hovered = false;
      schedule();
    });
    carousel.addEventListener("focusin", function (event) {
      focused = event.target.matches(":focus-visible");
      schedule();
    });
    carousel.addEventListener("focusout", function () {
      focused = false;
      schedule();
    });
    document.addEventListener("visibilitychange", schedule);

    carousel.querySelector(".profile-carousel-dots").hidden = false;
    schedule();
  });
});
