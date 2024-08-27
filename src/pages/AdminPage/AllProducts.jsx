import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
    const { products } = useProducts()

    return (
        <div>

            <h1 className="text-3xl mt-6 ml-10 font-bold">Total Products: {products.length}</h1>

            <div className="overflow-x-auto m-2 md:m-10 bg-white rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Model Name</th>
                            <th>Brand</th>
                            <th>Regular Price</th>
                            <th>Special Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h3 className="text-[10px] md:text-sm font-bold">
                                        {product.name}
                                    </h3>
                                    <div className="hidden md:flex flex-wrap gap-1 mt-1">
                                        <span className="badge badge-primary badge-xs md:badge-sm">
                                            Category: {product.category}
                                        </span>
                                        <span className="badge badge-outline badge-xs md:badge-sm">
                                            SubCategory: {product.subcategory}
                                        </span>
                                    </div>
                                </td>
                                <td className="capitalize">{product.brand}</td>
                                <td>{product.regularPrice}</td>
                                <td>{product.specialPrice}</td>
                                <td className={`${product.status === 'instock' ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;
