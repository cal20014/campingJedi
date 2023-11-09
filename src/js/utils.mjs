import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function getCartCount() {
  const count = getLocalStorage("so-cart")?.length ?? 0;
  return count;
}

export function renderHeaderFooter() {
  new MainHeader({
    target: document.querySelector("#main-header"),
    props: {},
  });

  new MainFooter({
    target: document.querySelector("#main-footer"),
    props: {},
  });
}

// breadcrumb.js

// export function createBreadcrumb(category, itemCount) {
//   const header = document.querySelector("#main-header");
//   const breadcrumbContainer = document.createElement("div");
//   breadcrumbContainer.id = "breadcrumb-container";

//   let breadcrumbHTML = "";

//   if (category) {
//     breadcrumbHTML += `<nav aria-label="breadcrumb"><ol class="breadcrumb">`;
//     breadcrumbHTML += `<li class="breadcrumb-item"><a href="/?category=${category}">${category}</a></li>`;

//     if (itemCount !== undefined) {
//       breadcrumbHTML += `<li class="breadcrumb-item active" aria-current="page">${itemCount} items</li>`;
//     }

//     breadcrumbHTML += `</ol></nav>`;
//   }

//   breadcrumbContainer.innerHTML = breadcrumbHTML;

//   header.insertAdjacentElement("afterend", breadcrumbContainer);
// }

export function createBreadcrumb(category, itemCount) {
  const header = document.querySelector("#main-header");
  const breadcrumbContainer = document.createElement("nav");
  breadcrumbContainer.setAttribute("aria-label", "breadcrumb");
  breadcrumbContainer.id = "breadcrumb-container";
  breadcrumbContainer.classList.add("breadcrumb");

  let breadcrumbHTML = `<span class="breadcrumb-item"><a href="/">Home</a></span>`;

  if (category) {
    breadcrumbHTML += `<span class="breadcrumb-separator">></span>`;
    breadcrumbHTML += `<span class="breadcrumb-item"><a href="/?category=${category}">${category}</a></span>`;
  }

  if (itemCount !== undefined) {
    breadcrumbHTML += `<span class="breadcrumb-separator">></span>`;
    breadcrumbHTML += `<span class="breadcrumb-item active" aria-current="page">${itemCount} items</span>`;
  }

  breadcrumbContainer.innerHTML = breadcrumbHTML;

  // Insert the breadcrumb container right after the header
  header.insertAdjacentElement("afterend", breadcrumbContainer);
}
