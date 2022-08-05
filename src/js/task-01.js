const ul = document.querySelector("#categories").children.length;
const title = [].concat(...document.querySelectorAll("h2"));
const insideLi = [].concat(...document.querySelectorAll("li>ul"));
console.log(`Number of categories: ${ul}`);
title.forEach((value, index) => {
  console.log(
    `Category: ${value.textContent} \nElements:${insideLi[index].children.length}`
  );
});
