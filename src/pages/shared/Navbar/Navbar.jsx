import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Logo from '../../../../public/assets/MR-Tech2.png';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
	const [openDropdown, setOpenDropdown] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const aboutRef = useRef(null);
	const servicesRef = useRef(null);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	useEffect(() => {
		const closeDropDown = e => {
			if (
				aboutRef.current &&
				!aboutRef.current.contains(e.target) &&
				servicesRef.current &&
				!servicesRef.current.contains(e.target)
			) {
				setOpenDropdown(null);
			}
		};
		document.addEventListener('mousedown', closeDropDown);
		return () => {
			document.removeEventListener('mousedown', closeDropDown);
		};
	}, []);

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

	const handleDropdownClick = menu => {
		setOpenDropdown(openDropdown === menu ? null : menu);
	};

	const listing = (
		<>
			<li className="group flex cursor-pointer flex-col">
				<HashLink smooth to="/#home">
					Home
				</HashLink>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li ref={aboutRef} className="relative group cursor-pointer">
				<button
					onClick={() => handleDropdownClick('about')}
					className="relative flex items-center gap-1"
				>
					<span>About</span>
					<svg
						className={`transition-transform duration-300 ${
							openDropdown === 'about' ? '' : 'rotate-180'
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
				{openDropdown === 'about' && (
					<ul className="absolute top-10 z-10 w-52 space-y-2 rounded-lg bg-white p-2 text-black">
						<li className="px-3 hover:text-textPrimary">
							<Link to="/about-mrtech">About MR Tech</Link>
						</li>
						<li className="px-3 hover:text-textPrimary">
							<Link to="/team">Our Team</Link>
						</li>
						<li className="px-3 hover:text-textPrimary">
							<Link to="/company-documents">Documents</Link>
						</li>
					</ul>
				)}
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col">
				<Link to="/projects">Projects</Link>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col">
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
			<li className="group flex cursor-pointer flex-col">
				<Link to="/gallery">Gallery</Link>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex cursor-pointer flex-col">
				<HashLink smooth to="/contacts">
					Contacts
				</HashLink>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
		</>
	);

	return (
		<nav
			className={`fixed top-0 w-full p-4 h-[70px] z-50 transition-all transform ${
				isScrolled ? 'bg-white' : 'bg-transparent'
			}`}
		>
			<div className="flex justify-between mx-5 md:mx-10 items-center">
				<div>
					<Link to="/">
						<img className="w-24" src={Logo} alt="Mr Tech Logo" />
					</Link>
				</div>
				<div>
					<ul className="hidden items-center text-textPrimary text-lg font-bold gap-10 md:flex">
						{listing}
					</ul>
				</div>
				<div className="md:hidden">
					<button onClick={toggleDrawer} className="text-4xl font-bold">
						<IoMenu />
					</button>
					{isDrawerOpen && (
						<div
							className="fixed inset-0 z-50 bg-black bg-opacity-50"
							onClick={toggleDrawer}
						>
							<div className="absolute top-0 right-0 w-80 bg-white p-4 h-full">
								<button
									className="flex justify-end font-bold text-xl"
									onClick={toggleDrawer}
								>
									X
								</button>
								<ul className="mt-4">{listing}</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
