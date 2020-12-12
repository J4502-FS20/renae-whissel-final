"use strict";

let qs = (selector, context = document) => context.querySelector(selector);
let qsa = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

function openLightbox(e) {
  const gitem = e.currentTarget,
    itemimg = qs("img", gitem),
    itemtext = qs(".gallery-item-text", gitem),
    itemUrl = itemtext.dataset.url;

  const lightbox = qs(".lightbox"),
    lightboximg = qs(".lb-img", lightbox),
    lightboxtext = qs(".lb-text", lightbox),
    lightboxDataURL = qs(".lb-url", lightbox);
  lightboximg.onload = () => {

    lightboxtext.innerHTML = itemtext.innerHTML;
    lightboxDataURL.setAttribute("href", itemUrl);
    lightbox.classList.add("open");
  };

  lightboximg.setAttribute("src", itemimg.getAttribute("src"));
}
function closeLightbox(e) {
  e.preventDefault();
  const lightbox = e.currentTarget.closest(".lightbox");
  lightbox.classList.remove("open");
}
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = qs(".lightbox.preload");
  if (lightbox) lightbox.classList.remove("preload");
  const gitems = qsa(".gallery-item");
  gitems.forEach((el) => el.addEventListener("click", openLightbox));
  const lbclose = qs(".lightbox .close");
  if (lbclose) lbclose.addEventListener("click", closeLightbox);
});
