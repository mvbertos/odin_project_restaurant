import "../css/style.css";

//setup header
const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  const titleEl = document.createElement("h1");
  titleEl.textContent = "Home";
  
  const descEl = document.createElement("p");
  descEl.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  content.append(titleEl,descEl);
});

const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
