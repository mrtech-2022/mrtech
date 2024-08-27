import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Helmet } from "react-helmet";

const Dashboard = () => {

    const secretRoute = import.meta.env.VITE_SECRET_ROUTE

    return (
        <div>
            <Helmet>
                <title>Dashboard - MR-Tech</title>
            </Helmet>
            {/* <div className="bg-emerald-700">
                <Navbar isFixed={false}></Navbar>
            </div> */}

            <div>
                <div className="drawer bg-slate-200 lg:drawer-open">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Page content here */}
                        <label
                            htmlFor="my-drawer"
                            title="Dashboard Element"
                            className="btn flex text-textSecondary hover:bg-transparent justify-end bg-slate-200 text-4xl font-bold lg:hidden"
                        >
                            <GiHamburgerMenu></GiHamburgerMenu>
                        </label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side ">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                            {/* Sidebar content here */}

                            <div className="text-2xl">
                                <li>
                                    <NavLink
                                        className="text-xl text-gray-500 font-bold"
                                        to={`/${secretRoute}/all-services`}
                                    >
                                        All Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-xl text-gray-500 font-bold"
                                        to={`/${secretRoute}/all-products`}
                                    >
                                        All Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-xl text-gray-500 font-bold"
                                        to={`/${secretRoute}/add-product`}
                                    >
                                        Add Product
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        className="text-xl text-gray-500 font-bold"
                                        to="/dashboard/allAppoinment"
                                    >
                                        Update Product
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        className="text-xl text-gray-500 font-bold"
                                        to="/dashboard/statistics"
                                    >
                                        Statistics
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-xl text-gray-500 font-bold"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;