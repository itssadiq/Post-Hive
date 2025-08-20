document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const formContents = document.querySelectorAll(".form-content");
  const signupLinks = document.querySelectorAll(".signup-link a");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");

      // Update tabs
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Update forms
      formContents.forEach((form) => {
        form.classList.remove("active");
        if (form.id === `${tabName}-form`) {
          form.classList.add("active");
        }
      });
    });
  });

  signupLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const tabName = this.getAttribute("data-tab");

      // Update tabs
      tabs.forEach((t) => t.classList.remove("active"));
      document
        .querySelector(`.tab[data-tab="${tabName}"]`)
        .classList.add("active");

      // Update forms
      formContents.forEach((form) => {
        form.classList.remove("active");
        if (form.id === `${tabName}-form`) {
          form.classList.add("active");
        }
      });
    });
  });
});
