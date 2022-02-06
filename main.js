import paintings from "./config.js";

const gallery = document.getElementById("gallery");
const template = document.getElementById("template");

/*
 * This array function prints appends each painting item in the main tag.
 */
paintings.forEach(({ title, image, was, now }) => {
  const article = template.content.cloneNode(true);
  article.querySelector("[data-title]").textContent = title;
  const img = new Image();
  img.src = image;
  article.querySelector("[data-image]").appendChild(img);
  article.querySelector("[data-was-price]").textContent = `A$${was}`;
  article.querySelector("[data-now-price]").textContent = `now A$${now}`;

  gallery.append(article);
});
