function makeItem(title, price, imgURL) {
  return {
    title,
    price,
    imgURL,
  };
}

let itemList = [
  makeItem("Nike shoes 1", "$100", "./img/item1.png"),
  makeItem("Nike shoes 2", "$120", "./img/item2.png"),
  makeItem("Nike shoes 3", "$150", "./img/item3.png"),
  makeItem("Nike shoes 4", "$90", "./img/item1.png"),
  makeItem("Nike shoes 5", "$200", "./img/item2.png"),
  makeItem("Nike shoes 6", "$350", "./img/item3.png"),
];

const display = document.querySelector(".item_container");

for (let i = 0; 1 < itemList.length; i++) {
  display.innerHTML += `
        <div class="item">
                <div class="item-img">
                    <img src="${itemList[i].imgURL}" alt="item picture">
                </div>
                <div class="rating"> &#9733; &#9733; &#9733; &#9733; &#9733; </div>
                <div class="item-title"> ${itemList[i].title} </div>
                <div class="item-price"> <strong> ${itemList[i].price} </strong></div>

        </div>
    `;
}
