const shopList = document.querySelector('.shop-list');
const basket = document.querySelector('.basket');

const totalProducts = [];

export const test = 5;

fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    shopList.innerHTML = createContent(data);
    console.log(data);
  })
  .catch(error => console.log('ERROR:', error));

shopList.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.currentTarget === event.target) return;
  const currentProduct = event.target.closest('.shop-list-item');
  const currentPrice = currentProduct.querySelector(
    '.shop-list-item-price'
  ).textContent;
  totalProducts.push(currentProduct);
  console.log(totalProducts);
  console.log(currentProduct);
  console.log(currentPrice);
}

function createContent(arr) {
  const markup = arr
    .map(
      elem => ` <li class="shop-list-item">
            <h2>${elem.title}</h2>
            <p class="shop-list-item-price">${elem.price}</p>
            <p>${elem.category}</p>
        </li>`
    )
    .join('');
  return markup;
}
