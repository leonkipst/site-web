let cart = {};

function addToCart(productId) {
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    updateCartTotal();
}

function updateCart(productId) {
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value, 10);
    if (quantity > 0) {
        cart[productId] = quantity;
    } else {
        removeFromCart(productId);
    }
    updateCartTotal();
}

function removeFromCart(productId) {
    delete cart[productId];
    updateCartTotal();
}

function updateCartTotal() {
    // Mettez à jour le total du panier et la page
    let totalPrice = 0;
    for (const productId in cart) {
        const productQuantity = cart[productId];
        // Ajoutez ici la logique pour calculer le total en fonction des prix et des quantités
    }
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function checkout() {
    // Implémentez ici la logique de paiement
}
