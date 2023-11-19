const URL = {
    products: 'https://dummyjson.com/products',
    categories: 'https://dummyjson.com/products/categories',
    searchByProducts: (product) => `https://dummyjson.com/products/search?q=${product}`,
    productsByCategory: (category) => `https://dummyjson.com/products/category/${category}`,
}

const getEntities = async (url) => {
    const respose = await fetch(url);
    return respose.json();
}

export const getProducts = async () =>
    getEntities(URL.products);

export const getCategories = async () =>
    getEntities(URL.categories);

export const fetchSearchByProducts = async (product) =>
    getEntities(URL.searchByProducts(product));

export const fetchGetProductsByCategory = async (category) =>
    getEntities(URL.productsByCategory(category));
