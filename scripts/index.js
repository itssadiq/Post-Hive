import { createNewUser, signInUser } from "../backend/backend.js";

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

const signupFormEl = document.querySelector(".signup-form");
const signupNameEl = document.querySelector(".signup-name");
const signupEmailEl = document.querySelector(".signup-email");
const signupPasswordEl = document.querySelector(".signup-password");

signupFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = signupNameEl.value;
  let email = signupEmailEl.value;
  let password = signupPasswordEl.value;

  try {
    const data = await createNewUser(name, email, password);

    if (data) {
      alert("Account Created Successfully");
    }

    signupNameEl = "";
    signupEmailEl = "";
    signupPasswordEl = "";
  } catch (error) {
    console.log("Error", error.message);
  }
});

const loginFormEl = document.querySelector(".login-form");
const loginEmailEl = document.querySelector(".login-email");
const loginPasswordEl = document.querySelector(".login-password");

loginFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = loginEmailEl.value;
  let password = loginPasswordEl.value;

  try {
    const data = await signInUser(email, password);

    if (data) {
      loginEmailEl.value = "";
      loginPasswordEl.value = "";

      window.location.href = "app.html";
    }
  } catch (error) {
    console.log("Error", error.message);
  }
});
