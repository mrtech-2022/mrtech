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
				path: 'about-mrtech',
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
			}
		],
	},
]);

export default router;
