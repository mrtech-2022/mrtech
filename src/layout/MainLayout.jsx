import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import PageTopPosition from '../components/PageTopPosition/PageTopPosition';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';

const MainLayout = () => {
	const [isVisible, setIsVisible] = useState(false)
	const { pathname } = useLocation();

	/* this use for show at the top of the page when changing any route */
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	/* scroll to top button */
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div>
			<PageTopPosition />
			<NavBar />
			<Outlet />
			<Footer />

			{/* whatsapp button */}
			<div>
				<a
					href="https://wa.me/01531946491"
					target="blank"
					className={`fixed bottom-20 right-8 z-10 transition-all duration-300
						}`}
				>
					<FaSquareWhatsapp className="text-4xl sm:text-5xl text-green-500 font-bold " />
				</a>
			</div>

			{/* Scroll to top button */}
			<div>
				<Link
					to="#"
					onClick={scrollToTop}
					className={`fixed bottom-8 right-8 z-10 ${isVisible ? 'block' : 'hidden'
						}`}
				>
					<FaArrowUp className="text-3xl md:text-4xl bg-textSecondary text-white font-bold p-2 rounded-full hover:bg-textPrimary transition-all duration-300 " />
				</Link>
			</div>
		</div>
	);
};

export default MainLayout;
