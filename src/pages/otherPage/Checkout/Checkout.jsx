import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { clearCart, getCartItems } from '../../../components/Cart/Cart';
import { sendDataForm } from '../../../utils/sendDataForm';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { getAllDistrict, getAllUpazila } from 'bd-divisions-to-unions';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const cartItems = getCartItems();

    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [dhakaUpazilas, setDhakaUpazilas] = useState([]);

    const districtsData = getAllDistrict("en");
    const upazilasData = getAllUpazila("en");

    const districts = Object.values(districtsData).flat();

    useEffect(() => {
        fetch('/dhaka.json')
            .then(response => response.json())
            .then(data => setDhakaUpazilas(data))
            .catch(error => console.error('Error fetching Dhaka Upazilas:', error));
    }, []);

    useEffect(() => {
        // Log the filteredUpazilas to verify if data is being set correctly
        // console.log('Filtered Upazilas:', filteredUpazilas);
    }, [filteredUpazilas]);

    const handleDistrictChange = (event) => {
        const districtCode = JSON.parse(event.target.value);
        console.log(districtCode.value);

        const districtValue = Number(districtCode.value);
        console.log("District Code Value:", districtValue);

        setSelectedDistrict(districtCode);

        if (districtValue === 26) {
            setFilteredUpazilas(dhakaUpazilas);
        } else {
            const upazilas = upazilasData[districtCode.value] || [];
            console.log(upazilas);
            setFilteredUpazilas(upazilas);
        }
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.specialPrice * item.quantity), 0);

    const onSubmit = (data, e) => {
        const form = e.target;
        const cartItemsString = cartItems.map(item =>
            `Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.specialPrice}, Total: ${item.specialPrice * item.quantity}`
        ).join('\n');

        const orderDetails = {
            ...data,
            cartItems: cartItemsString,
            subtotal,
            total: subtotal + 60,
            deliveryFee: 60
        };

        const serviceId = import.meta.env.VITE_EMAILJS_ORDER_SERVICE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_ORDER_PUBLIC_KEY;
        const templateId = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID;

        sendDataForm(orderDetails, form, serviceId, templateId, publicKey, "Your Order placed successfully");
        clearCart();
    };

    return (
        <div className="p-6 max-w-[1800px] bg-gray-100 min-h-screen md:mx-auto ">
            <SectionTitle title="Checkout" />
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Customer Information */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold text-lg mb-4">
                        <span className="text-red-500 bg-red-100 p-2 rounded-xl">1</span> Customer Information
                    </h2>

                    <div className="mt-4">
                        <label className="block font-medium">Name*</label>
                        <input {...register('name', { required: true })} placeholder="Your Name" className="block w-full border p-2 rounded" />
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium">Phone Number*</label>
                        <input {...register('number', { required: true })} placeholder="Phone Number" className="block w-full border p-2 rounded" />
                        {errors.number && <p className="text-red-500 text-sm">Phone number is required</p>}
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium">Email*</label>
                        <input {...register('email', { required: true })} placeholder="E-Mail" className="block w-full border p-2 rounded" />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block font-medium">District*</label>
                            <select
                                {...register('district', { required: true })}
                                onChange={handleDistrictChange}
                                className="block w-full border p-2 rounded"
                            >
                                <option value="">Select District</option>
                                {districts.map(district => (
                                    <option
                                        key={district.value}
                                        // Store both `value` and `title` as JSON string in the value
                                        value={JSON.stringify({ value: district.value, title: district.title })}
                                    >
                                        {district.title}
                                    </option>
                                ))}
                            </select>
                            {errors.district && <p className="text-red-500 text-sm">District is required</p>}
                        </div>
                        <div>
                            <label className="block font-medium">Area*</label>
                            <select
                                {...register('area', { required: true })}
                                className="block w-full border p-2 rounded"
                            >
                                <option value="">Select Area</option>
                                {filteredUpazilas.map(upazilla => (
                                    <option key={upazilla.value} value={upazilla.title}>{upazilla.title}</option>
                                ))}
                            </select>
                            {errors.area && <p className="text-red-500 text-sm">Area is required</p>}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mt-4">
                        <label className="block font-medium">Address*</label>
                        <input {...register('address', { required: true })} placeholder="Details Address" className="block w-full border p-2 rounded" />
                        {errors.address && <p className="text-red-500 text-sm">Address is required</p>}
                    </div>

                    {/* instruction */}
                    <div className="mt-4">
                        <label className="block font-medium">Instruction <small>(optional)</small></label>
                        <textarea {...register('instruction')} placeholder="Any Instruction" className="block w-full border p-2 rounded"></textarea>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="p-4 rounded bg-white h-fit shadow">
                    <h2 className="font-bold text-lg mb-4">
                        <span className="text-red-500 bg-red-100 p-2 rounded-xl">2</span> Payment Method
                    </h2>
                    <div className="flex flex-col">
                        <label className="mb-2">
                            <input {...register('paymentMethod', { required: true })} type="radio" value="Cash on Delivery" className="mr-2" />
                            Cash on Delivery
                        </label>
                        <label className="mb-2">
                            <input {...register('paymentMethod', { required: true })} type="radio" value="Online Payment" className="mr-2" />
                            Online Payment
                        </label>
                        {errors.paymentMethod && <p className="text-red-500 text-sm">Payment method is required</p>}
                    </div>

                    {/* coupon */}
                    <div className="mt-4">
                        <input {...register('coupon')} placeholder="Promo / Coupon Code" className="block w-full border p-2 rounded" />
                        <button className="mt-2 btn-sm bg-blue-500 btn-disabled text-white px-4 rounded">Apply Coupon</button>
                    </div>
                </div>

                {/* Delivery Method */}
                <div className="bg-white p-4 rounded h-60 shadow">
                    <h2 className="font-bold text-lg mb-4">
                        <span className="text-red-500 bg-red-100 p-2 rounded-xl">3</span> Delivery Method
                    </h2>
                    <div className="flex flex-col">
                        <label className="mb-2">
                            <input {...register('deliveryMethod', { required: true })} type="radio" value="Home Delivery" className="mr-2" />
                            Home Delivery - 60৳
                        </label>
                        <label className="mb-2">
                            <input {...register('deliveryMethod', { required: true })} type="radio" value="Pickup" className="mr-2" />
                            Pickup - Free
                        </label>
                        {errors.deliveryMethod && <p className="text-red-500 text-sm">Payment method is required</p>}
                    </div>
                </div>

                {/* Order Overview */}
                <div className="bg-white p-4 rounded shadow col-span-1 lg:col-span-2">
                    <h2 className="font-bold text-lg mb-4">
                        <span className="text-red-500 bg-red-100 p-2 rounded-xl ">4</span> Order Overview
                    </h2>
                    {
                        cartItems.map((item, index) => <div key={index}>

                            <div className="border-t border-b py-2">
                                <p className="flex justify-between items-center">
                                    <div className='flex items-center gap-2'>
                                        <img className='w-14' src={item.image} alt="img" />
                                        <span>{item.name}</span>
                                    </div>
                                    <span>{item.specialPrice} × {item.quantity} = {item.specialPrice * item.quantity}৳</span>
                                </p>


                            </div>
                        </div>
                        )
                    }
                    <div className="mt-4">
                        <p className="flex justify-between"><span>Sub-Total:</span><span>{subtotal}৳</span></p>
                        <p className="flex justify-between"><span>Home Delivery:</span><span>60৳</span></p>
                        <p className="flex justify-between font-bold"><span>Total:</span><span>{subtotal + 60}৳</span></p>
                    </div>
                </div>

                {/* Confirm Order Button */}
                <div className="lg:col-span-3 mt-4">
                    <label className="flex items-center">
                        <input {...register('terms', { required: true })} type="checkbox" className="mr-2" />
                        I have read and agree to the <a href="#" className="text-red-500 underline">Terms and Conditions</a>, <a href="#" className="text-red-500 underline">Privacy Policy</a>, and <a href="#" className="text-red-500 underline"> Refund and Return Policy</a>
                    </label>
                    {errors.terms && <p className="text-red-500 text-sm">You must agree to the terms and conditions</p>}

                    <button type="submit" className="w-56 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-bold py-3 px-6 rounded mt-4">
                        Confirm Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
