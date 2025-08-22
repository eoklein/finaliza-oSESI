// This file handles product listings and retrieval. 
// It exports functions such as fetchProducts and displayProducts.

const products = [
    { id: 1, name: "Organic Fertilizer", price: 25.99, description: "A natural fertilizer for healthy plants." },
    { id: 2, name: "Chemical Fertilizer", price: 19.99, description: "A fast-acting chemical fertilizer." },
    { id: 3, name: "Slow Release Fertilizer", price: 30.50, description: "Provides nutrients over an extended period." },
    { id: 4, name: "Liquid Fertilizer", price: 15.75, description: "Easy to apply liquid fertilizer." },
];

export function fetchProducts() {
    return products;
}

export function displayProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}