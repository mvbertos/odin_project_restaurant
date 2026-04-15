import "../css/style.css";
import prettyCakeImg from "../assets/img/pretty-cake.jpg";
import dish01 from "../assets/img/dish_01.png";
import dish02 from "../assets/img/dish_02.png";
import dish03 from "../assets/img/dish_03.png";
import contactImg from "../assets/img/contact.png";
import instagramImg from "../assets/img/instagram.png";
import emailImg from "../assets/img/e-mail.png";

 updatePageContent("Home", [
    createCard(
      null,
      "A really nice place for you to visit when you passing by SomeWhere City! Come to taste special Grilled Cheese and Pretty Cake(copyrighted by me). I assure you a magnificent experience!",
      null,
    ),
  ]);

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  updatePageContent("Home", [
    createCard(
      null,
      "A really nice place for you to visit when you passing by SomeWhere City! Come to taste special Grilled Cheese and Pretty Cake(copyrighted by me). I'm assure you a magnificent experience!",
      null,
    ),
  ]);
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  updatePageContent("Menu", [
    createCard(
      "Pink Cake",
      "A pink cake that tastes like sugar, my grandmother tought me how to do it back when I was 10, and every single time it taske more like sugar, and gets pinkier for some reason.",
      dish01,
      "",
      "pixelated medium",
    ),
    createCard(
      "Pudding",
      "I really dislike Pudding, I tried once when I was a kid and I really thought that was the worst desert to exist on earth, but my mother said I am great doing it, so why not to recommend here on my menu!",
      dish02,
      "",
      "pixelated medium",
    ),
    createCard(
      "Pretty Cake",
      "My specialty, I don't really know what I put on it to be so great, but is the best dish on my menu so far! This one is my suggestion for all of those who wants the best of my cooking menu.",
      dish03,
      "",
      "pixelated medium",
    ),
  ]);
});

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  updatePageContent("Contact", [
    createCard(
      null,
      "(12) 34567-8901",
      contactImg,
      "contact Img",
      "small no-border-radius",
    ),
    createCard(
      null,
      "@PrettyBakery",
      instagramImg,
      "instagram Icon",
      "small no-border-radius",
    ),
    createCard(
      null,
      "prettyBakery@PrettyEmail.net",
      emailImg,
      "email Img",
      "small no-border-radius",
    ),
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

function createCard(
  title = null,
  desc = null,
  imgPath = null,
  imgAlt = null,
  imgClasses = "",
) {
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
    imgEl.className = imgClasses;
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
