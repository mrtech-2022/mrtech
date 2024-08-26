
export const getCartItems = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
    const cart = getCartItems();
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1; // Increase quantity if product already exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new product to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId) => {
    let cart = getCartItems();
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartItemQuantity = (productId, newQuantity) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => item._id === productId ? { ...item, quantity: newQuantity } : item);
    localStorage.setItem('cart', JSON.stringify(cart));
};


export const clearCart = () => {
    localStorage.removeItem('cart');
};
