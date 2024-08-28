import { useForm } from 'react-hook-form';
import { categories } from './cat_subcat';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const selectedCategory = watch('category');
    const axiosPublic = useAxiosPublic();

    const image_hosting_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
    const imageUpload = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

    const normalizeString = (str, isSubcategory = false) => {
        if (!str) return '';

        // Replace spaces, &, / with single underscore
        let normalized = str
            .toLowerCase()
            .replace(/[ &/]+/g, '_');

        // Replace hyphens with underscore only if it's a subcategory
        if (isSubcategory) {
            normalized = normalized.replace(/[ &/]+/g, '-');
            normalized = normalized.replace(/_+/g, '-').trim();
        }

        // Replace multiple underscores with a single underscore
        normalized = normalized.replace(/_+/g, '_').trim();

        return normalized;
    };

    const onSubmit = async (data) => {
        try {
            // Normalize the category and subcategory values
            const normalizedData = {
                ...data,
                category: normalizeString(data.category),
                subcategory: normalizeString(data.subcategory, true) // Pass true for subcategories
            };

            // Prepare the image for upload
            const formData = new FormData();
            formData.append('image', data.image[0]);

            // Upload the image to ImgBB
            const imageResponse = await axios.post(imageUpload, formData);
            const imageUrl = imageResponse.data.data.url;

            // Prepare the final data object including the image URL directly in the image property
            const finalData = {
                ...normalizedData,
                image: imageUrl, // Save the image URL directly in the image property
            };

            // Send the product data to your backend API
            const response = await axiosPublic.post('/products', finalData);

            if (response.data.insertedId) {
                toast.success('Your Product Added Successfully', {
                    style: {
                        backgroundColor: '#333',
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                })
                reset()
            }
            // Handle the response as needed
            console.log('Product saved successfully:', response.data);
        } catch (error) {
            console.error('Error uploading image or saving product:', error);
        }
    };


    const getSubcategories = (categoryName) => {
        const category = categories.find(cat => cat.name === categoryName);
        return category ? category.subcategories : [];
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Helmet>
                <title>AddProduct - MR Tech</title>
            </Helmet>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
                <div className="grid grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            {...register('name', { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Product Name"
                        />
                        {errors.name && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Brand Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Brand</label>
                        <input
                            {...register('brand', { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Brand Name. Ex- Hik-Vision or HikVision"
                        />
                        <small className='text-violet-600'>Tips: Ignore spaces</small> <br />
                        {errors.brand && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Regular Price Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Regular Price</label>
                        <input
                            {...register('regularPrice', { required: true })}
                            type="number"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Regular Price"
                        />
                        {errors.regularPrice && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Special Price Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Special Price</label>
                        <input
                            {...register('specialPrice', { required: true })}
                            type="number"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Special Price"
                        />
                        {errors.specialPrice && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Status Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            {...register('status', { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            <option defaultValue value="instock">In Stock</option>
                            <option value="outofstock">Out of Stock</option>
                        </select>
                        {errors.status && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Category Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            {...register('category', { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            <option value="" disabled selected>Select category</option>
                            {categories.map(category => (
                                <option key={category.name} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                        {errors.category && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Subcategory Field */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Subcategory</label>
                        <select
                            {...register('subcategory', { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            disabled={!selectedCategory}
                        >
                            <option value="" disabled selected>Select subcategory</option>
                            {selectedCategory && getSubcategories(selectedCategory).map(subcategory => (
                                <option key={subcategory} value={subcategory}>{subcategory}</option>
                            ))}
                        </select>
                        {errors.subcategory && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Description Field */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Product Description. Ex- Display: Led Display > Size: 40 inch"
                            rows={3}
                        ></textarea>
                        <small className='text-violet-600'>Important: give {'>'} this to seperate description </small> <br />
                        {errors.description && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>

                    {/* Image Field */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                        />
                        {errors.image && <span className="text-red-600 text-sm">This field is required</span>}
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
