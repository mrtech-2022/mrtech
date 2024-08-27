import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/homepage/Home/Home';
import AboutCompany from '../pages/otherPage/AboutCompany/AboutCompany';
import OurWorks from '../pages/homepage/OurWorks/OurWorks';
import Team from '../pages/otherPage/Team/Team';
import Contacts from '../pages/homepage/Contacts/Contacts';
import Documents from '../pages/otherPage/Documents/Documents';
import ServiceDetails from '../pages/otherPage/ServiceDetails/ServiceDetails';
import Gallery from '../pages/otherPage/Gallery/Gallery';
import Career from '../pages/otherPage/Career/Career';
import AdminHome from '../pages/AdminPage/AdminHome';
import Dashboard from '../layout/Dashboard';
import AllServices from '../pages/AdminPage/AllServices';
import Products from '../pages/otherPage/Products/Products';
import CartItems from '../pages/otherPage/CartItems/CartItems';
import Checkout from '../pages/otherPage/Checkout/Checkout';
import AddProduct from '../pages/AdminPage/AddProduct';
import AllProducts from '../pages/AdminPage/AllProducts';

const secretRoute = import.meta.env.VITE_SECRET_ROUTE;

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'about-us',
				element: <AboutCompany />,
			},
			{
				path: 'projects',
				element: <OurWorks />,
			},
			{
				path: 'team',
				element: <Team />,
			},
			{
				path: 'contacts',
				element: <Contacts />,
			},
			{
				path: 'company-documents',
				element: <Documents />,
			},
			{
				path: 'service-details/:id',
				element: <ServiceDetails />,
			},
			{
				path: 'gallery',
				element: <Gallery />,
			},
			{
				path: 'career',
				element: <Career />
			},
			{
				path: '/products',
				element: <Products />
			},
			{
				path: '/products/:category',
				element: <Products />

			},
			{
				path: '/products/:category/:subcategory/:brand?',
				element: <Products />

			},
			{
				path: '/cart',
				element: <CartItems />
			},
			{
				path: '/checkout',
				element: <Checkout />
			}
		],
	},
	{
		path: secretRoute,
		element: <Dashboard />,
		children: [
			{
				path: 'all-services',
				element: <AllServices />
			},
			{
				path: 'add-product',
				element: <AddProduct />
			},
			{
				path: 'all-products',
				element: <AllProducts />
			}
		]
	}
]);

export default router;
