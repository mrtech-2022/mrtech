import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import PageTopPosition from '../components/PageTopPosition/PageTopPosition';

const MainLayout = () => {
	return (
		<div>
			<PageTopPosition />
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
