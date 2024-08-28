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


const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeCategory, setActiveCategory] = useState(null);
	const navigate = useNavigate()
	const cartItems = getCartItems()


	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

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
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
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
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/about-us">About US</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/team">Our Team</Link >
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">Company Documents</Link>
					</li>
				</ul>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>

			{/* Services */}
			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={() => {
				toggleDrawer();
				scrollToSection('services', navigate)
			}}>
				Services
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			{/* <li ref={servicesRef} className="relative group cursor-pointer">
				<button
					onClick={() => handleDropdownClick('services')}
					className="relative flex items-center gap-1"
				>
					<span>Services</span>
					<svg
						className={`transition-transform duration-300 ${
							openDropdown === 'services' ? '' : 'rotate-180'
						}`}
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
						<path d="m18 15-6-6-6 6" />
					</svg>
				</button>
				{openDropdown === 'services' && (
					<ul className="absolute top-10 z-10 w-44 space-y-2 rounded-lg bg-white py-2 text-black">
						<li className="px-3 hover:text-textPrimary">
							<Link to="/transport">Transport</Link>
						</li>
						<li className="px-3 hover:text-textPrimary">
							<Link to="/management">Management</Link>
						</li>
					</ul>
				)}
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li> */}

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
					className={`dropdown-content absolute top-10 z-10 w-52 space-y-2 rounded-lg bg-white py-2 ml-10 sm:ml-16 lg:ml-4 text-black lg:mt-5 ${activeCategory ? 'block' : 'hidden'
						}`}
					onMouseEnter={() => handleMouseEnter('products')}
					onMouseLeave={handleMouseLeave}
				>
					{/* Security Options */}
					<Link to="/products/security">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Security</span>
								{activeCategory === 'products' && <SecurityNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>

					{/* Networking option */}
					<Link to="/products/networking">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Networking</span>
								{activeCategory === 'products' && <NetworkNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>

					{/* Server option */}
					<Link to="/products/server_storage">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Server & Storage</span>
								{activeCategory === 'products' && <ServerNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>

					{/* Accessories */}
					<Link to="/products/accessories">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Accessories</span>
								{activeCategory === 'products' && <AccessoriesNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>

					{/* Monitor/tv */}
					<Link to="/products/monitor_tv">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>Monitor/TV</span>
								{activeCategory === 'products' && <MonitorNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>

					{/* Pc Component */}
					<Link to="/products/pc_component">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>
								<span>PC Component</span>
								{activeCategory === 'products' && <PcNavOptions />}
								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>

					{/* Storage */}
					<Link to="/products/storage">
						<li
							className="px-3 hover:text-textPrimary"
							onClick={() => setActiveCategory('products')}
						>
							<div className='flex justify-between'>

								<span>Storage</span>
								{activeCategory === 'products' && <StorageNavOptions />}

								<MdOutlineArrowRight className='mt-1' />
							</div>
						</li>
					</Link>
				</ul>

				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={toggleDrawer}>
				<Link to="/gallery">Gallery</Link>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={toggleDrawer}>
				<HashLink smooth to="/contacts">
					Contacts
				</HashLink>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
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
		<nav className={navBarClasses}>
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
				{/* cart/menu */}
				<div className='flex items-center gap-3'>
					{/* cart */}
					<Link to="/cart">
						<div className="relative w-fit">
							<span className='text-white text-2xl'>
								<FaShoppingCart />
							</span>
							<span className="absolute -right-2 -top-3 flex size-5 items-center justify-center rounded-full bg-red-400 text-center text-[14px] font-bold text-white">{cartItems.length}</span>
						</div>
					</Link>

					{/* menu icon */}
					<div className="lg:hidden flex items-center justify-end ml-auto">
						<button onClick={toggleDrawer} className="text-4xl font-bold text-white">
							<IoMenu />
						</button>
					</div>
				</div>
			</div>

			{isDrawerOpen && (
				<div className="fixed inset-0 z-50 bg-opacity-50 lg:hidden ">
					<div className="absolute flex justify-between flex-row-reverse top-0 right-0 w-[80%] h-screen bg-black bg-opacity-90 p-4 font-bold ">
						<button
							className="flex justify-end text-white font-bold text-xl m-4"
							onClick={toggleDrawer}
						>
							X
						</button>
						<ul className="mt-4 ml-7 flex flex-col gap-8 text-textPrimary">
							{listing}
						</ul>
					</div>
				</div>
			)}

		</nav>

	);
};

export default NavBar;
