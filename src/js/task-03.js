const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

///////////// Var 1 ////////////////////////

// const galleryListEl = document.querySelector("ul");
// const element = images
//   .map(function ({ url, alt }) {
//     return `<li><img src = '${url}' alt = '${alt}' width="320"></li>`;
//   })
//   .join("");
// galleryListEl.insertAdjacentHTML("afterbegin", element);

// document.body.style.margin = "0px";

// galleryListEl.style.cssText = `display: flex;
//   align-items: center;
//   justify-content: center;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   `;

///////////// Var 2 /////////////////////

// const galleryImages = document.querySelector(".gallery");

// const newImages = images.map(
//   ({ url, alt }) =>
//     `<li class="gallery-item"><img class="item_image" src='${url}' alt='${alt}'></li>`
// );

// galleryImages.insertAdjacentHTML("beforebegin", newImages);

//////////// Var 3 ////////////////////
// const gallery = document.querySelector(".gallery");
// const imgGallery = images
//   .map(({ url, alt }) => {
//     console.log(alt);
//     return `<li><img alt='${alt}'; src='${url}';></li>`;
//   })
//   .join(" ");
// gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`);

/////////////// Var 4 ///////////////

const galleryList = document.querySelector(".gallery");

const itemEl = images.map(
  ({ url, alt }) => `<li><img src=${url}, alt=${alt}, width='360'</li>`
);

galleryList.insertAdjacentHTML("beforeEnd", itemEl);

galleryList.style.cssText = ` display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
  `;
