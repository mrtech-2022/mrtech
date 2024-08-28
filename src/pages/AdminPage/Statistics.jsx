import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Helmet } from "react-helmet";
import useProducts from "../../hooks/useProducts";

const Statistics = () => {
    // Fetch all products without filtering by category or subcategory
    const { products, isLoading, error } = useProducts();

    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Group products by category
    const categoryCounts = products.reduce((acc, product) => {
        const category = product.category;
        if (acc[category]) {
            acc[category]++;
        } else {
            acc[category] = 1;
        }
        return acc;
    }, {});

    // Convert the grouped data into a format suitable for PieChart
    const pieChartData = Object.entries(categoryCounts).map(([label, value]) => ({
        name: label,
        value,
    }));

    // Define colors for the chart slices
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56'];

    return (
        <div>
            <Helmet>
                <title>Statistics - MR Tech</title>
            </Helmet>
            <h1 className="text-4xl m-9 font-bold border-l-8 border-textSecondary p-3">Products
                Statistics
            </h1>
            <div className="bg-white w-11/12 flex md:w-1/2 md:p-10 my-10 rounded-lg mx-auto">
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx={200}
                        cy={200}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
