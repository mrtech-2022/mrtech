import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import PageTopPosition from '../components/PageTopPosition/PageTopPosition';
import { FaArrowUp, FaWhatsappSquare } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainLayout = () => {
	const [isVisible, setIsVisible] = useState(false)


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
					<FaWhatsappSquare className="text-4xl sm:text-5xl text-green-500 font-bold rounded-full " />
				</a>
			</div>

			{/* Scroll to top button */}
			<div>
				<Link
					to="#"
					onClick={scrollToTop}
					className={`fixed bottom-8 right-8 z-10 transition-all duration-300 ${isVisible ? 'block' : 'hidden'
						}`}
				>
					<FaArrowUp className="text-3xl md:text-4xl bg-textSecondary text-white font-bold p-2 rounded-full hover:bg-textPrimary" />
				</Link>
			</div>
		</div>
	);
};

export default MainLayout;
