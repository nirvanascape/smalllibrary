
new fullpage(".fullpage", {
  sectionSelector: '.fullpage-section',
  navigation: true,
  scrollBar: false,
  licenseKey: "gplv3-license",
  onLeave: function (origin, destination, direction, trigger) {
    handleAnimations(destination);
  }
});

const handleAnimations = (destination) => {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    const destinationAnimatedEls = destination.item.querySelectorAll(
      ".animate__animated"
    );
    for (const el of destinationAnimatedEls) {
      const dataset = el.dataset;
      el.classList.add(dataset.animation);
      if (el.classList.contains("last")) {
        el.addEventListener("animationend", () => {
          destination.item.querySelector(".fp-overflow").style.overflow =
            "auto";
        });
      }
    }
  }
};

