function makeItem(title, price, imgUrl) {
  return {
    title,
    price,
    imgUrl,
  };
}

let itemList = [
  makeItem("Nike shoes 1", "100", "./img/item1.png"),
  makeItem("Nike shoes 2", "120", "./img/item2.png"),
  makeItem("Nike shoes 3", "150", "./img/item3.png"),
  makeItem("Nike shoes 4", "90", "./img/item1.png"),
  makeItem("Nike shoes 5", "200", "./img/item2.png"),
  makeItem("Nike shoes 6", "350", "./img/item3.png"),
];

const display = document.querySelector(".item-container");

for (let i = 0; i < itemList.length; i++) {
  display.innerHTML += `
        <div class="item">
                <div class="item-img">
                    <img src="${itemList[i].imgUrl}" alt="item picture">
                </div>
                <div class="rating"> &#9733; &#9733; &#9733; &#9733; &#9733; </div>
                <div class="item-title"> ${itemList[i].title} </div>
                <div class="item-price"> <strong> $${itemList[i].price} </strong></div>

        </div>
    `;
}

////

const input = document.querySelectorAll("input");
const inputName = document.querySelector(".input-name");
const inputPrice = document.querySelector(".input-price");
const inputImage = document.querySelector(".input-image");
const addItem = document.querySelector(".add-btn");

addItem.addEventListener("click", () => {
  if (!inputName.value || !inputPrice.value || !inputImage.value) {
    return;
  }

  const newItem = makeItem(inputName.value, inputPrice.value, inputImage.value);

  itemList.push(newItem);

  for (let j = itemList.length - 1; j < itemList.length; j++) {
    display.innerHTML += `
              <div class="item">
                      <div class="item-img">
                          <img src="${itemList[j].imgUrl}" alt="item picture">
                      </div>
                      <div class="rating"> &#9733; &#9733; &#9733; &#9733; &#9733; </div>
                      <div class="item-title"> ${itemList[j].title} </div>
                      <div class="item-price"> <strong> $${itemList[j].price} </strong></div>
      
              </div>
          `;
    input.value = "";
  }
});
