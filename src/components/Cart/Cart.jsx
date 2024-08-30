export const getCartItems = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product, callback) => {
    const cart = getCartItems();
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1; // Increase quantity if product already exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new product to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    if (callback) callback(); // Trigger the callback after updating the cart
};

export const removeFromCart = (productId, callback) => {
    let cart = getCartItems();
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    if (callback) callback(); // Trigger the callback after updating the cart
};

export const updateCartItemQuantity = (productId, newQuantity, callback) => {
    let cart = getCartItems();
    cart = cart.map(item => item._id === productId ? { ...item, quantity: newQuantity } : item);
    localStorage.setItem('cart', JSON.stringify(cart));
    if (callback) callback(); // Trigger the callback after updating the cart
};

export const clearCart = (callback) => {
    localStorage.removeItem('cart');
    if (callback) callback(); // Trigger the callback after clearing the cart
};
