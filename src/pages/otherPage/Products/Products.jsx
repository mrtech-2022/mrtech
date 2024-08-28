import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import { categoryNavOptions } from '../../shared/Navbar/NavOptions';
import './Products.css';
import { addToCart } from '../../../components/Cart/Cart';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Products = () => {
    const { category, subcategory, brand: brandParam } = useParams();
    const navigate = useNavigate();
    const { products, isLoading, error } = useProducts(category, subcategory);

    const [selectedBrand, setSelectedBrand] = useState(brandParam || null);
    const [modalProduct, setModalProduct] = useState(null);

    useEffect(() => {
        if (brandParam !== selectedBrand) {
            setSelectedBrand(brandParam);
        }
    }, [brandParam, selectedBrand]);

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        navigate(`/products/${category}/${subcategory}/${brand}`);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setModalProduct(product);
        const modal = document.getElementById('my_modal_4');
        if (modal) {
            modal.showModal();
        }
    };

    const filteredProducts = selectedBrand
        ? products.filter(product => product.brand === selectedBrand)
        : products;

    const CategoryOptionsComponent = categoryNavOptions[category] || null;

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Failed to load products.</p>;

    return (
        <div className='min-h-screen mt-16'>
            <Helmet>
                <title>Products - MR Tech</title>
            </Helmet>
            <div className='m-6 md:m-10 md:my-24'>
                {!subcategory && CategoryOptionsComponent && (
                    <div className='max-w-screen-2xl mx-auto category-options-container md:flex items-center mb-4'>
                        <h2 className="text-xl font-bold mb-3 md:mb-4">Options:</h2>
                        <div className='flex flex-wrap m-0 md:m-2 md:gap-4'>
                            {CategoryOptionsComponent()}
                        </div>
                    </div>
                )}

                {subcategory && (
                    <div className='mb-4'>
                        <div className='flex flex-wrap gap-4'>
                            <h2 className="text-xl font-bold mb-2">Brands:</h2>
                            {[...new Set(products.map(product => product.brand))].map((brand, index) => (
                                <div key={index}>
                                    <button
                                        className={`px-3 py-1 border-2 ${selectedBrand === brand ? 'bg-textSecondary text-white' : 'border-textSecondary hover:bg-textSecondary hover:text-white'} transition-all duration-300 rounded-lg text-sm font-medium capitalize`}
                                        onClick={() => handleBrandClick(brand)}
                                    >
                                        {brand}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center md:place-items-stretch'>
                    {filteredProducts.map(product => (
                        <div key={product._id} className="w-full max-w-md flex flex-col border-2">
                            <div className="flex-grow flex flex-col space-y-4 rounded-lg bg-white p-5 shadow-xl">
                                <div className="flex-grow flex flex-col">
                                    <img width={400} height={300} className="h-[250px] w-full rounded-lg bg-gray-600 object-cover" src={product.image} alt={product.name} />
                                    <h3 className="text-[16px] md:text-lg mb-3 font-semibold">{product.name}</h3>

                                    <ul className='list-disc ml-5 flex-grow'>
                                        {product.description.split(">").map((part, index) => (
                                            <li key={index}>{part.trim()}</li>
                                        ))}
                                    </ul>
                                </div>

                                {product.status === 'instock' ? (
                                    <div className="flex items-end justify-between">
                                        {product.regularPrice === product.specialPrice ? (
                                            <h2 className="text-center mt-6 text-2xl font-medium">
                                                Price: <span className='font-bold'>{product.regularPrice} Tk</span>
                                            </h2>
                                        ) : (
                                            <div className="flex flex-col">
                                                <h2 className="font-medium mt-6 text-gray-500">
                                                    Regular Price: <span className='line-through text-red-600'>
                                                        {product.regularPrice} Tk
                                                    </span>
                                                </h2>
                                                <h2 className="text-center text-2xl font-medium">
                                                    Special Price: <span className='font-bold'>{product.specialPrice} Tk</span>
                                                </h2>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <h2 className="text-center mt-6 text-2xl font-medium text-textPrimary">
                                        Out Of Stock
                                    </h2>
                                )}

                                <button
                                    className={`w-full rounded-lg px-6 py-2 text-[12px] font-semibold text-white sm:text-sm md:text-base transition-all duration-300 ${product.status === 'instock' ? 'enabled bg-textSecondary hover:bg-sky-900' : 'cursor-not-allowed bg-textPrimary'}`}
                                    disabled={product.status !== 'instock'}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {product.status === 'instock' ? "Add To Cart" : "Out Of Stock"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <div className='flex justify-between items-center'>
                        <h3 className="font-bold text-lg">Added to Cart!</h3>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn text-textPrimary">X</button>
                            </form>
                        </div>
                    </div>
                    <p className="py-4 flex items-center gap-2">
                        <FaCheckCircle className='text-green-500' />
                        <span>

                            You have added
                            <span className='text-textPrimary'>
                                {modalProduct ? ` ${modalProduct.name} ` : ''}
                            </span>
                            to your shopping cart!
                        </span>
                    </p>
                    <div className='flex gap-6 mt-4'>
                        <Link to='/cart'>
                            <button className='btn btn-info text-white bg-textSecondary'>
                                View Cart
                            </button>
                        </Link>
                        <Link to='/checkout'>
                            <button className='btn btn-outline border-textSecondary border-2 hover:bg-textSecondary hover:border-none text-textSecondary'>
                                Confirm Order
                            </button>
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Products;
