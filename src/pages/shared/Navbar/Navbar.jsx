import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Logo from '/assets/MR-Tech2.png';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import './Navbar.css'
import { scrollToSection } from '../../../components/ScrollToSection/ScrollToSection';
import { FaShoppingCart } from "react-icons/fa";
import { AccessoriesNavOptions, MonitorNavOptions, NetworkNavOptions, PcNavOptions, SecurityNavOptions, ServerNavOptions, StorageNavOptions } from './NavOptions';
import { MdOutlineArrowRight } from "react-icons/md";
import { getCartItems } from '../../../components/Cart/Cart';
import { toggleDrawer } from '../../../utils/toggleDrawer';

const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeCategory, setActiveCategory] = useState(null);
	const [cartQuantity, setCartQuantity] = useState(0)
	const navigate = useNavigate()
	const cartItems = getCartItems()

	useEffect(() => {
		const quantity = cartItems.reduce((total, item) => {
			return total + item.quantity
		}, 0)
		setCartQuantity(quantity)
	}, [cartItems])





	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToHome = () => {
		const homeElement = document.getElementById('home');
		if (homeElement) {
			homeElement.scrollIntoView({ behavior: 'smooth' });
			window.history.pushState(null, '', '/'); // Update the URL without the hash
		}
	};


	const handleMouseEnter = (category) => {
		setActiveCategory(category);
	};

	const handleMouseLeave = () => {
		setActiveCategory(null);
	};


	const listing = (
		<>
			<li className="group text-white hover:text-textPrimary flex cursor-pointer flex-col " onClick={() => { scrollToHome(); toggleDrawer() }}>
				<Link to="/">
					Home
				</Link>
				<span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>

			{/* About MRTech Dropdown */}
			<li className="navbar-item group cursor-pointer text-white hover:text-textPrimary">
				<button className="relative flex items-center gap-1">
					<span>About MRTech</span>

					<svg
						className="transition-transform duration-300"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M6 9l6 6 6-6" />
					</svg>
				</button>
				<div className="hover-area"></div>
				<ul className="dropdown-content w-32 uppercase space-y-2 rounded-lg py-2  ml-8 sm:ml-16 lg:ml-4 text-black lg:mt-5">
					<Link to="/about-us">
						<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
							About US
						</li>
					</Link>
					<Link to="/team">
						<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
							Our Team
						</li>
					</Link >
					<Link to="/company-documents">
						<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
							Company Documents
						</li>
					</Link>
				</ul>
				<span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>

			{/* Services */}
			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={() => {
				toggleDrawer();
				scrollToSection('services', navigate)
			}}>
				Services
				<span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>

			{/* Product Dropdown */}
			<li
				className="navbar-item group cursor-pointer text-white hover:text-textPrimary"
				onMouseEnter={() => handleMouseEnter('products')}
				onMouseLeave={handleMouseLeave}
			>
				<Link to="/products">
					<button className="relative flex items-center gap-1">
						<span>Products</span>
						<svg
							className="transition-transform duration-300"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M6 9l6 6 6-6" />
						</svg>
					</button>
				</Link>
				<div className="hover-area"></div>
				<ul
					className={`dropdown-content absolute top-10 z-10 space-y-2 rounded-lg bg-white py-2 ml-10 text-sm sm:ml-16 lg:ml-4 text-black lg:mt-5 ${activeCategory ? 'block' : 'hidden'
						}`}
					onMouseEnter={() => handleMouseEnter('products')}
					onMouseLeave={handleMouseLeave}
				>
					{/* Security Options */}
					<Link className='hidden lg:inline' to="/products/security">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Security</span>
								{activeCategory === 'products' && <SecurityNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					{/* only navigate when click on text for small device */}
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex justify-between'>
							<Link className='-mt-[7px]' to="/products/security">
								<span>Security</span>
							</Link>
							{activeCategory === 'products' && <SecurityNavOptions />}
							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>

					{/* Networking option */}
					<Link className='hidden lg:inline' to="/products/networking">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Networking</span>
								{activeCategory === 'products' && <NetworkNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					{/* only navigate when click on text for small device */}
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex justify-between'>
							<Link className='-mt-[7px]' to="/products/networking">
								<span>Networking</span>
							</Link>
							{activeCategory === 'products' && <NetworkNavOptions />}
							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>

					{/* Server option */}
					<Link className='hidden lg:inline' to="/products/server_storage">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex w-full justify-between'>
								<span>Server & Storage</span>
								{activeCategory === 'products' && <ServerNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					{/* only navigate when click on text for small device */}
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex w-full justify-between'>
							<Link className='-mt-[7px]' to="/products/server_storage">
								<span>Server & Storage</span>
							</Link>
							{activeCategory === 'products' && <ServerNavOptions />}
							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>

					{/* Accessories */}
					<Link className='hidden lg:inline' to="/products/accessories">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Accessories</span>
								{activeCategory === 'products' && <AccessoriesNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex justify-between'>
							<Link className='-mt-[7px]' to="/products/accessories">
								<span>Accessories</span>
							</Link>
							{activeCategory === 'products' && <AccessoriesNavOptions />}
							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>

					{/* Monitor/tv */}
					<Link className='hidden lg:inline' to="/products/monitor_tv">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Monitor/TV</span>
								{activeCategory === 'products' && <MonitorNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex justify-between'>
							<Link className='-mt-[7px]' to="/products/monitor_tv">
								<span>Monitor/TV</span>
							</Link>
							{activeCategory === 'products' && <MonitorNavOptions />}
							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>

					{/* Pc Component */}
					<Link className='hidden lg:inline' to="/products/pc_component">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>PC Component</span>
								{activeCategory === 'products' && <PcNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex justify-between'>
							<Link className='-mt-[7px]' to="/products/pc_component">
								<span>PC Component</span>
							</Link>
							{activeCategory === 'products' && <PcNavOptions />}
							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>

					{/* Storage */}
					<Link className='hidden lg:inline' to="/products/storage">
						<li
							className="px-2 sm:px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>

								<span>Storage</span>
								{activeCategory === 'products' && <StorageNavOptions />}

								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
					<li
						className="lg:hidden px-2 sm:px-3 hover:text-textPrimary"
						onClick={() => setActiveCategory('products')}
					>
						<div className='flex justify-between'>

							<Link className='-mt-[7px]' to="/products/storage">
								<span>Storage</span>
							</Link>
							{activeCategory === 'products' && <StorageNavOptions />}

							<MdOutlineArrowRight className='-mt-1' />
						</div>
					</li>
				</ul>

				<span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={toggleDrawer}>
				<Link to="/gallery">Gallery</Link>
				<span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={toggleDrawer}>
				<HashLink smooth to="/contacts">
					Contacts
				</HashLink>
				<span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer text-white flex-col bg-transparent border-2 border-textPrimary hover:bg-textPrimary px-2 py-2 md:py-1 rounded-md transition-all duration-300" onClick={toggleDrawer}>
				<button>

					<Link to='/career'>Career</Link>
				</button>
			</li>
		</>
	);

	const navBarClasses = `fixed top-0 w-full py-2 z-50 transition-all transform bg-black ${isScrolled ? 'shadow-lg' : ''}`;

	return (
		<nav className={`${navBarClasses}`}>
			<div className="flex items-center justify-between mx-5 md:mx-10">
				<div className="flex items-center" onClick={() => { scrollToHome() }}>
					<Link to="/">
						<img className="w-16 md:w-28" src={Logo} alt="Mr Tech Logo" />
					</Link>
				</div>
				<div className="mx-auto hidden lg:flex">
					<ul className="flex items-center text-textPrimary text-sm 2xl:text-lg font-bold gap-10">
						{listing}
					</ul>
				</div>
				{/* cart/menu icon */}
				<div className='flex items-center gap-3'>
					{/* cart */}
					<Link to="/cart">
						<div className="relative w-fit">
							<span className='text-white text-2xl'>
								<FaShoppingCart />
							</span>
							<span className="absolute -right-2 -top-3 flex size-5 items-center justify-center rounded-full bg-red-400 text-center text-[14px] font-bold text-white">{cartQuantity}</span>
						</div>
					</Link>

					{/* menu icon */}
					<div className="drawer-content lg:hidden flex items-center justify-end ml-auto">
						<label htmlFor="my-drawer-4" className="text-4xl font-bold text-white">
							<IoMenu />
						</label>
					</div>
				</div>
			</div>

			{/* {isDrawerOpen && (
				<div className="fixed inset-0 z-50 bg-opacity-50 lg:hidden ">
					<div className="absolute flex justify-between flex-row-reverse top-0 right-0 w-[80%] sm:w-[60%] min-h-[2000px]  bg-black bg-opacity-95 p-4 font-bold">
						<button
							className="flex justify-end text-white font-bold text-xl "
							onClick={toggleDrawer}
						>
							X
						</button>
						<ul className="mt-4 ml-7 flex flex-col gap-8 text-textPrimary">
							{listing}
						</ul>
					</div>
				</div>
			)} */}
			<div className="drawer drawer-end">
				<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
				<div className="drawer-side">
					<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
					<ul className="flex flex-col gap-8 bg-black min-h-full w-80 p-6  text-textPrimary">
						{listing}
					</ul>
				</div>
			</div>

		</nav >

	);
};

export default NavBar;