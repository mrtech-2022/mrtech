import { useEffect, useRef, useState } from 'react';
import Logo from '../../../../public/assets/MR-Tech2.png';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

const NavBar = () => {
	const [dropDownState, setDropDownState] = useState(false);
	const dropDownMenuRef = useRef();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	useEffect(() => {
		const closeDropDown = e => {
			if (
				dropDownMenuRef.current &&
				!dropDownMenuRef.current.contains(e.target)
			) {
				setDropDownState(false);
			}
		};
		document.addEventListener('mousedown', closeDropDown);
		return () => {
			document.removeEventListener('mousedown', closeDropDown);
		};
	}, []);

	const listing = (
		<>
			<li className="group flex  cursor-pointer flex-col">
				<Link smooth to="/">
					Home
				</Link>
				<span className="hidden md:block mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<Link to="/services">About</Link>
				<span className="hidden md:block mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary text-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li ref={dropDownMenuRef} className="relative group cursor-pointer">
				<button
					onClick={() => setDropDownState(!dropDownState)}
					className="relative flex items-center gap-1 "
				>
					<span>Services</span>
					<svg
						className={`${dropDownState ? '' : 'rotate-180'}`}
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
				{dropDownState && (
					<ul className="absolute transition-all duration-700  top-10 z-10 space-y-2 rounded-lg bg-white p-2 text-black ">
						<li className="px-3 hover:text-textPrimary ">
							<Link href="#">Transport</Link>
						</li>
						<li className="px-3 hover:text-textPrimary ">
							<Link href="#">Management</Link>
						</li>
					</ul>
				)}
				<span className="hidden md:block mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<Link to="/projects">Projects</Link>
				<span className="hidden md:block mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<Link to="/contacts">Contacts</Link>
				<span className="hidden md:block mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary text-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
		</>
	);

	return (
		<nav className="fixed top-0 w-full p-4 h-[70px] z-50 bg-white">
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

				<div
					ref={dropDownMenuRef}
					onClick={() => setDropDownState(!dropDownState)}
					className="md:hidden drawer"
				>
					<input
						id="my-drawer"
						type="checkbox"
						className="drawer-toggle"
						checked={isDrawerOpen}
						onChange={toggleDrawer}
					/>
					<div className="flex justify-end drawer-content text-textSecondary">
						{/* Page content here */}
						<label
							htmlFor="my-drawer"
							className="drawer-button text-4xl font-bold"
						>
							<IoMenu />
						</label>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
							<button
								className="flex justify-end font-bold text-xl"
								onClick={toggleDrawer}
							>
								X
							</button>
							{listing}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
