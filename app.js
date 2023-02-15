let shoes = [
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Kaloshebi",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 200,
    category: "women",
    quantity: 0,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "high heels",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 230,
    category: "women",
    quantity: 25,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Ketebi",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 125,
    category: "women",
    quantity: 12,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Tufli",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 430,
    category: "men",
    quantity: 342,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Valinkebi",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 337,
    category: "kids",
    quantity: 44,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Plosti",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 99,
    category: "women",
    quantity: 37,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Taigerebi",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 175,
    category: "men",
    quantity: 29,
  },
  {
    shoeUrl:
      '"https://img.mytheresa.com/258/258/33/jpeg/catalog/product/46/P00240490.jpg"',
    title: "Suramelebi",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia? Quam assumenda nesciunt veritatis qui",
    price: 199,
    category: "men",
    quantity: 54,
  },
];

let newValue = [...shoes];

let cart = [];

const renderItem = (shoe) => {
  return `<div class="card">
        <div class="img-container">
          <img
            src=${shoe.shoeUrl}
            alt="images goes here"
            class="image"
          />
        </div>

        <div class="card-info">
          <h3 class="card-title">${shoe.title}</h3>
          <p class="card-subtitle">
            ${shoe.subTitle}
          </p>

          <p class="card-price">Price:${shoe.price}</p>
          <p class="quantity">Quantity: ${shoe.quantity}</p>
          <button id='cardbutton' class="addutton">Add to Cart</button>
        </div>
      </div>`;
};

const cardContainer = document.getElementById("posteri");

// Filter buttons block
const btn = document.querySelectorAll(".btn");
const btns = [...btn];

// Search input block
const searchInput = document.getElementById("someInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  console.log(searchInput.value);
});

const cartTitle = document.getElementById("card-title");

cardContainer.innerHTML = shoes.map((shoe) => renderItem(shoe)).join("");

// Card addButton block
const cardBtns = document.getElementsByClassName("addButton");
let cardBtn = [...cardBtns];

// reusable(only for this scenario) function that adds listener to card buttons
const addCardButtons = () => {
  const cardBtns = document.getElementsByClassName("addButton");
  let cardBtn = [...cardBtns];
  // console.log(">>>>> BUTTONS", cardBtn);

  cardBtn.forEach((card, idx) => {
    card.addEventListener("click", () => {
      // console.log(">>>>> SINGLE BUTTON", card);
      // console.log(">>>>> SINGLE BUTTON IDX", idx);
      // console.log(">>>>> TITLE", newValue[idx].title);
      cart.push(newValue[idx].title);
      cartTitle.innerHTML = cart.length;
      // console.log(">>>>>>>>>>> CART", cart);
    });
  });
};

addCardButtons();
cartTitle.innerHTML = cart.length;

// Category Filter buttons

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(">>>>>> textContent", btn.textContent);
    if (btn.textContent === "all") {
      newValue = [...shoes];
      cardContainer.innerHTML = newValue
        .map((item) => renderItem(item))
        .join("");
      addCardButtons();
      return;
    }

    // filtering shoes array by incoming string from filter buttons
    let filtered = shoes.filter(
      (shoe) => shoe.category === (btn.textContent || searchInput.value)
    );

    // console.log(">>>>>>> SHOES ARRAY", shoes);
    // console.log(">>>>>>> FILTERED ARRAY", filtered);
    newValue = [...filtered];

    // render filtered content
    let filteredArray = filtered.map((shoe) => renderItem(shoe)).join("");
    cardContainer.innerHTML = filteredArray;

    addCardButtons();
  });
});
