import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Logo from '/assets/MR-Tech2.png';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import './Navbar.css'

const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

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
				<ul className="dropdown-content w-32 uppercase space-y-2 rounded-lg bg-white p-2  ml-24 md:ml-8 text-black lg:mt-5">
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/about-mrtech">About US</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/team">Our Team</Link >
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">Company Documents</Link>
					</li>
				</ul>
			</li>

			<li className="group flex cursor-pointer flex-col text-white hover:text-textPrimary" onClick={toggleDrawer}>
				<HashLink smooth to="/#services">
					Services
				</HashLink>
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
					<ul className="absolute top-10 z-10 w-44 space-y-2 rounded-lg bg-white p-2 text-black">
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
			<li className="navbar-item group cursor-pointer text-white hover:text-textPrimary">
				<button className="relative flex items-center gap-1">
					<span>Product</span>
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
				<ul className="dropdown-content uppercase absolute top-10 z-10 w-52 space-y-2 rounded-lg bg-white p-2 ml-20 md:ml-8 text-black lg:mt-5">
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/about-mrtech">
							Security
							{/* HD CC camera
								    hikvision,dahua
								ip camera
									hikvision, dahua
								dvr
									hikvision, jovision
								nvr
									hikvision, dahua
								xvr 
									dahua, uniview, jovision
								cc camera excessories

								portable wifi camera
									TP-LINK, xiaomi, tenda, sri home, dahua, hikvision, jovision, uniview */}
						</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/team">
							{/* Networking
								Router
									tp-link, tenda, net gear, d-link, mi, asos, cisco, mikrotik 
								media converter
									d-link, tp-link
								onu
								network cable
									utp cable, fiber optic cable
								switch
									d-link, tplink, tenda, netgear, hikvision, dahua, cisco, mikrotik
								access point & range extend
									tenda, d-link, tplink, netgear, mikrotik
								pocket router
									tplink, huawei, mi, */}
						</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">
							Server & Storage
							{/* Server work station server rack server
									hdd server
									hdd bag server
									ram server
									ssd server
									power supply */}
						</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">
							Accessories
							{/* keyboard
								mouse
								cable
									usb cable, hdmi cable, vga cable
								converter
								memory Card	
									transcnd, samsung, adata, 
								bluetooth receiver
								thermal paste */}
						</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">
							Monitor/Tv
							{/* led tv
									smart tv
									android tv */}
							{/* monitor brand msi
										lg, asos, hp, dell , gigabyte */}
						</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">
							Pc Component
							{/* processor
									amd, intel
								mohterboard
									gigabyte, msi, asus
								desktop ram 
									corsiar, gigabyte, gscale, 	kingstone, hp, transent, team 
								powersupply
									corsiar, gigabyte, asus, thermal take
								casing
									corsiar, asus, msi, gigabyte */}
						</Link>
					</li>
					<li className="px-3 hover:text-textPrimary" onClick={toggleDrawer}>
						<Link to="/company-documents">
							Storage
							{/* hdd
									toshiba, western digital, 
								portable hdd
									toshiba, transent, western digital, adata
								ssd 
									gigabyte, hp, transcnd, samsung, seagate, western digital, kingstone, corsiar
								portable ssd */}
						</Link>
					</li>
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

	const navBarClasses = `fixed top-0 w-full p-4 h-[70px] z-50 transition-all transform bg-black bg-opacity-65 ${isScrolled ? 'shadow-lg' : ''}`;

	return (
		<nav className={navBarClasses}>
			<div className="flex items-center justify-between mx-0 md:mx-10">
				<div className="flex items-center">
					<Link to="/">
						<img className="w-16 md:w-24" src={Logo} alt="Mr Tech Logo" />
					</Link>
				</div>
				<div className="mx-auto hidden lg:flex">
					<ul className="flex items-center text-textPrimary text-sm 2xl:text-lg font-bold gap-10">
						{listing}
					</ul>
				</div>
				<div className="lg:hidden flex items-center justify-end ml-auto">
					<button onClick={toggleDrawer} className="text-4xl font-bold text-white">
						<IoMenu />
					</button>
				</div>
			</div>

			{isDrawerOpen && (
				<div className="fixed inset-0 z-50 bg-opacity-50 lg:hidden ">
					<div className="absolute flex justify-between flex-row-reverse top-0 right-0 w-full h-screen bg-black bg-opacity-65 p-4 font-bold ">
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
