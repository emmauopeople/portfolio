(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
  }

  var rotator = document.querySelector("[data-role-rotator]");
  if (rotator) {
    var roles = (rotator.getAttribute("data-roles") || "").split("|").filter(Boolean);
    var index = 0;

    if (roles.length > 1) {
      window.setInterval(function () {
        index = (index + 1) % roles.length;
        rotator.classList.remove("is-sliding");
        window.requestAnimationFrame(function () {
          rotator.textContent = roles[index];
          rotator.classList.add("is-sliding");
        });
      }, 2600);
    }
  }

  var printButton = document.querySelector("[data-print]");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }
}());
