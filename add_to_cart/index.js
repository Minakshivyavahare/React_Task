let cartData = [
  {
    id: 1,
    itemName: "Apple Watch SE",
    price: "400$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum eros vel ipsum ultricies, non accumsan tortor cursus. In et pulvinar ex. Curabitur sollicitudin risus felis, quis blandit velit elementum eget.",
  },
  {
    id: 2,
    itemName: "Macbook Pro M1",
    price: "1000$",
    description:
      "Sed et orci vel risus convallis tristique. Sed venenatis vel nisl eget lacinia. Donec viverra eros ut finibus ultricies. Curabitur suscipit risus sit amet cursus consectetur. Vivamus et ipsum quis libero aliquam venenatis ut imperdiet dui. Aliquam dapibus lectus nibh, a placerat lacus aliquam non. Maecenas quam lectus, malesuada et nulla nec, interdum ultrices nulla.",
  },
  {
    id: 3,
    itemName: "Tesla S Plad",
    price: "50000$",
    description:
      "Nulla facilisi. Suspendisse cursus pretium odio vitae facilisis. Mauris molestie neque nec ultrices fringilla. Nulla maximus non urna eu imperdiet.",
  },
  {
    id: 4,
    itemName: "Spaceship",
    price: "1000000$",
    description:
      " Aenean vel nibh nec nulla lobortis cursus sed eget eros. Nulla sapien nulla, pellentesque vel magna volutpat, pulvinar viverra magna. ",
  },
];

const shopContainer = document.querySelector("#shop-container");
const mappedItems = cartData.map((cart) => {
  return `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${cart.itemName}</h5>
                <h6>Price: <span>${cart.price}</span></h6>
                <p class="card-text">${cart.description}</p>
                <button  id=${cart.id} onclick={handleClick(event)}  class="btn btn-info" >Add to cart</button>
            </div>
        </div>`;
});
shopContainer.innerHTML = mappedItems;

// __________________________________________

let cartArr = [];

const handleClick = (e) => {
  const idProduct = e.target.id;

  const cartProduct = cartData.filter((val) => {
    return val.id == idProduct;
  });

  cartArr.push(...cartProduct);
  // cartArr = new Set(cartArr);

  console.log(cartArr);

  const cart = document.getElementsByClassName("cart")[0];
  //---------------------------------------------------
  
    
  const mappedItemsCart = cartArr.map((cart) => {
    return `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${cart.itemName}</h5>
                <h6>Price: <span>${cart.price}</span></h6>
                <p class="card-text">${cart.description}</p>
                <button  id=${cart.id} onclick={handleClick(event)}  class="btn btn-info" >Add to cart</button>
                 
                
            </div>
        </div>`;
  });
    
  cart.innerHTML = mappedItemsCart;
};
