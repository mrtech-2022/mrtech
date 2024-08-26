import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (category = '', subcategory = '') => {
    const axiosPublic = useAxiosPublic();

    const fetchProducts = async () => {
        let url = '/products';
        if (category) {
            url += `?category=${category}`;
            if (subcategory) {
                url += `&subcategory=${subcategory}`;
            }
        }
        const result = await axiosPublic.get(url);
        return result.data;
    };

    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['products', category, subcategory],
        queryFn: fetchProducts,
        enabled: true // Always enable the query
    });

    return { products, isLoading, error };
};

export default useProducts;
