import "../css/style.css";
import prettyCakeImg from "../assets/img/pretty-cake.jpg";
import { div } from "three/tsl";

//setup header

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  updatePageContent("Home", [createCard(null, null, prettyCakeImg)]);
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  updatePageContent("Menu", [
    createCard("Moka", null, prettyCakeImg),
    createCard("Cake", null, prettyCakeImg),
    createCard("Pretty Bread", null, prettyCakeImg),
  ]);
});

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  updatePageContent("Contact", [
    createCard(null, "(12) 34567-8901", prettyCakeImg),
    createCard(null, "@PrettyBakery", prettyCakeImg),
    createCard(null, "prettyBakery@PrettyEmail.net", prettyCakeImg),
  ]);
});

function updatePageContent(title = null, elements = []) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const titleEl = document.createElement("h1");
  titleEl.textContent = title;
  content.appendChild(titleEl);

  elements.forEach((e) => {
    content.appendChild(e);
  });
}

function createCard(title = null, desc = null, imgPath = null, imgAlt = null) {
  const cardEl = document.createElement("div");
  cardEl.id = "card";

  if (title != null) {
    const titleEl = document.createElement("h2");
    titleEl.textContent = title;
    cardEl.appendChild(titleEl);
  }

  const contentEl = document.createElement("div");
  cardEl.appendChild(contentEl);

  if (imgPath != null) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;
    imgEl.alt = imgAlt;
    contentEl.appendChild(imgEl);
  }

  const descEl = document.createElement("p");
  if (desc == null) {
    descEl.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else {
    descEl.textContent = desc;
  }
  contentEl.appendChild(descEl);

  return cardEl;
}
