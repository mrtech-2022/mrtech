import { useState, useEffect } from 'react';
import { getCartItems, removeFromCart, clearCart, updateCartItemQuantity } from '../../../components/Cart/Cart';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import './CartItems.css';

const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Load cart items from local storage
        const items = getCartItems();
        setCartItems(items);
    }, []);

    const handleRemove = (productId) => {
        removeFromCart(productId);
        setCartItems(cartItems.filter(item => item._id !== productId));
    };

    const handleClearCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete all product from your cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your cart has been deleted.",
                    icon: "success"
                });
                clearCart();
                setCartItems([]);
            }
        });
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity > 0) {
            updateCartItemQuantity(productId, newQuantity);
            setCartItems(cartItems.map(item => item._id === productId ? { ...item, quantity: newQuantity } : item));
        } else {
            handleRemove(productId);
        }
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((total, item) => total + (item.specialPrice * item.quantity), 0);

    return (
        <div className='min-h-screen mt-16'>
            <div className='m-6 md:m-10 md:my-24'>
                <h1 className='text-2xl font-bold mb-5 underline underline-offset-4'>Your Cart Item:</h1>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <ul className='ml-5'>
                            {cartItems.map(item => (
                                <li key={item._id} className='mb-4'>
                                    <div className='flex items-center'>
                                        <img width={100} height={100} className='w-24 h-24 object-cover' src={item.image} alt={item.name} />
                                        <div className='ml-4'>
                                            <h2 className='text-sm md:text-lg font-semibold'>{item.name}</h2>

                                            <div className='flex items-center gap-2 mb-2'>
                                                <p className='mt-2'>Quantity:</p>
                                                <div className='flex items-center mt-2'>
                                                    <button
                                                        className='px-2 py-[2px] bg-gray-300 text-black rounded'
                                                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className='mx-3 font-bold'>{item.quantity}</span>
                                                    <button
                                                        className='px-2 py-[2px] bg-gray-300 text-black rounded'
                                                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                            </div>
                                            <p className='text-textSecondary font-bold'>Total: {item.specialPrice * item.quantity} Tk</p>
                                            {/* <button
                                                className='mt-2 px-4 py-2 bg-red-600 text-white rounded'
                                                onClick={() => handleRemove(item._id)}
                                            >
                                                Remove All
                                            </button> */}
                                        </div>
                                    </div>
                                    <hr className='my-4' />
                                </li>
                            ))}
                        </ul>
                        <div className='mt-4'>
                            <h2 className='my-5 text-lg font-semibold text-textPrimary'>Subtotal Amount: {subtotal} Tk</h2>
                        </div>
                        <div className='mt-4'>
                            <button
                                className='px-4 py-2 bg-textSecondary hover:bg-blue-700 text-white rounded transition-all duration-300'
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </button>
                            <button
                                className='ml-4 px-4 py-2 border-2 border-textPrimary text-textPrimary rounded hover:text-white hover:bg-textPrimary transition-all duration-300'
                                onClick={handleClearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartItems;
