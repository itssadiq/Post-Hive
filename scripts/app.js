import { retrieveSession, signoutUser } from "../backend/backend.js";

checkAuthentication();

// Toggle between messages page and main feed
document.getElementById("messages-icon").addEventListener("click", function () {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("messages-page").style.display = "block";
});

document.getElementById("back-to-feed").addEventListener("click", function () {
  document.getElementById("messages-page").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
});

document.getElementById("home-icon").addEventListener("click", function () {
  document.getElementById("messages-page").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
});

// Toggle logout modal
document.getElementById("logout-btn").addEventListener("click", function () {
  document.getElementById("logout-modal").style.display = "flex";
});

document.querySelector(".logout-cancel").addEventListener("click", function () {
  document.getElementById("logout-modal").style.display = "none";
});

document
  .querySelector(".logout-confirm")
  .addEventListener("click", async function () {
    try {
      const data = await signoutUser();

      if (!data) {
        window.location.href = "index.html";
      }
    } catch (error) {
      console.log("Error", error.message);
    }
    document.getElementById("logout-modal").style.display = "none";
  });

// Like functionality
const likeButtons = document.querySelectorAll(".post-btn:first-child");
likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("i");
    const text = this.querySelector("span");

    if (this.classList.contains("liked")) {
      this.classList.remove("liked");
      icon.classList.remove("fas");
      icon.classList.add("far");
      text.textContent = "Like";
    } else {
      this.classList.add("liked");
      icon.classList.remove("far");
      icon.classList.add("fas");
      text.textContent = "Liked";
    }
  });
});

// Conversation selection
const conversations = document.querySelectorAll(".conversation");
conversations.forEach((conversation) => {
  conversation.addEventListener("click", function () {
    conversations.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
  });
});

async function checkAuthentication() {
  const data = await retrieveSession();

  if (data.session == null) {
    window.location.href = "index.html";
  }
}
