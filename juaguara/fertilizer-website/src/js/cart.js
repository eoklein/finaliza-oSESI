// This file manages the shopping cart functionality, including adding, removing, and displaying items in the cart.

let cart = [];

// Function to add an item to the cart
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to get all items in the cart
function getCartItems() {
    return cart;
}

// Function to update the cart display (to be implemented)
function updateCartDisplay() {
    // Logic to update the cart UI goes here
}

// Exporting functions for use in other modules
export { addToCart, removeFromCart, getCartItems };