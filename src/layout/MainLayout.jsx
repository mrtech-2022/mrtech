import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
