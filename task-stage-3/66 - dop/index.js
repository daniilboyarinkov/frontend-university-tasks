import {
    getCategories,
    getProducts,
    fetchGetProductsByCategory,
    fetchSearchByProducts,
} from './requests.js';

const products = document.querySelector('.js-products');
const select = document.querySelector('.js-select');
const search = document.querySelector('.js-search');

getProducts().then(renderProducts)
getCategories().then(renderCategories)

const priceFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function renderProducts(data) {
    // clear products
    products.innerHTML = '';

    const productsData = data.products;

    // fill products
    productsData.forEach((product) => {
        const price = priceFormatter.format(product.price);
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = createProductHTML({ ...product, price: price });
        products.appendChild(productElement);
    });
}

function renderCategories(data) {
    const appendElement = (element) => {
        const category = document.createElement('option');
        category.text = element;
        select.append(category);
    }
    appendElement('');

    data.forEach(appendElement)
}

function searcByProducts() {
    search.value
        ? fetchSearchByProducts(search.value).then(renderProducts)
        : getProducts().then(renderProducts);
}

function selectProductsByCateory() {
    select.value
        ? fetchGetProductsByCategory(select.value).then(renderProducts)
        : getProducts().then(renderProducts);
}

search.addEventListener('input', searcByProducts);
select.addEventListener('change', selectProductsByCateory);

function createProductHTML(product) {
    const { thumbnail, price, title, description, brand, category, rating } = product;

    return `
      <img class="product__img" src="${thumbnail}" alt="">
      <div class="product__body">
        <p class="product__price">${price}</p>
        <h2 class="product__title">${title}</h2>
        <p class="product__descr">${description}</p>
        <p class="product__brand">Brand: <span>${brand}</span></p>
        <p class="product__category">Category: <span>${category}</span></p>
        <div class="rating product__rating">
          <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <p class="rating__value">${rating}</p>
        </div>
      </div>
  `;
}