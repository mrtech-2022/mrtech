import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/homepage/Home/Home';
import AboutCompany from '../pages/otherPage/AboutCompany/AboutCompany';
import OurWorks from '../pages/homepage/OurWorks/OurWorks';
import Team from '../pages/otherPage/Team/Team';

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
		],
	},
]);

export default router;
