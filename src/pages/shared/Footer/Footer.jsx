import {
	FaArrowRight,
	FaFacebookSquare,
	FaHome,
	FaInstagramSquare,
	FaLinkedin,
} from 'react-icons/fa';
import { FaSquareXTwitter, } from 'react-icons/fa6';
import { IoIosMailOpen } from "react-icons/io";
import { IoCall } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div
				id="contacts"
				className="bg-black grid md:grid-cols-3 p-6 md:px-16 md:justify-items-center mt-5"
			>
				<div className="flex flex-col justify-center ">
					<img
						className="w-1/4"
						src="https://i.ibb.co/B3G283b/MR-Tech2.png"
						alt="MR Tech"
					/>
					<p className='text-white text-justify w-4/5 text-sm my-3'>
						Core values are the fundamental beliefs of a person or
						organization. These guiding principles dictate behavior and
						can help people understand the difference between right and
						wrong.
					</p>
					<div className="flex flex-col gap-4 my-4">
						<Link to="/contacts">
							<div className="bg-white w-[115px] p-2 rounded-md text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300 text-center text-sm">
								Privacy Policy
							</div>
						</Link>
					</div>
					<div className="flex gap-2">
						<a
							className="text-textSecondary text-2xl"
							href="https://www.facebook.com/mrtech.bd2022"
							target="blank"
						>
							<FaFacebookSquare />
						</a>
						<a
							className="text-textPrimary text-2xl"
							href="https://www.facebook.com/mrtech.bd2022"
							target="blank"
						>
							<FaInstagramSquare />
						</a>

						<a
							className="text-white text-2xl"
							href="https://www.facebook.com/mrtech.bd2022"
							target="blank"
						>
							<FaSquareXTwitter />
						</a>
						<a
							className="text-textSecondary text-2xl"
							href="https://www.facebook.com/mrtech.bd2022"
							target="blank"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div className="text-textPrimary my-12 md:my-0">
					<h1 className="text-xl mb-5 text-white font-bold relative inline-block">
						QUICK LINKS
						<span
							className="absolute left-0 -bottom-1 w-3/5 h-[2px] bg-textPrimary"

						></span>
					</h1>

					<ul>
						<li
							className="text-gray-300 p-1 hover:text-red-500 flex items-center text-md gap-1 transition-all duration-300 font-semibold"
						>
							<Link to="/about-mrtech">About US</Link>
						</li>
						<li
							className="text-gray-300 p-1 hover:text-red-500 flex items-center text-md gap-1 transition-all duration-300 font-semibold"
						>
							<Link to="/team">Our Team</Link>
						</li>
						<li
							className="text-gray-300 p-1 hover:text-red-500 flex items-center text-md gap-1 transition-all duration-300 font-semibold"
						>
							<Link to="/career">Career</Link>
						</li>
						<li
							className="text-gray-300 p-1 hover:text-red-500 flex items-center text-md gap-1 transition-all duration-300 font-semibold"
						>
							<Link to="/company-documents">Company Documents</Link>
						</li>
					</ul>
				</div>

				{/* Registered Office */}
				<div className="text-textPrimary">
					<h1 className="text-xl mb-5 text-white font-bold relative inline-block">
						Get In Touch
						<span
							className="absolute left-0 -bottom-1 w-3/5 h-[2px] bg-textPrimary"

						></span>
					</h1>

					<p className='flex items-center gap-3 text-white hover:text-textPrimary transition-all duration-300'>
						<FaHome className='text-textPrimary text-lg' />
						<p>Evercare Hospital Link Road <br />
							(Beside Bashundhara), Vatara, Dhaka-1212</p>
					</p>
					<a href="mailto:info@mrtech.com.bd" className='flex items-center gap-3 mt-5 text-white hover:text-textPrimary transition-all duration-300'>
						<IoIosMailOpen className='text-textPrimary text-lg' />
						<p>info@mrtech.com.bd</p>
					</a>
					<a href="tel:01531946491" className='flex items-center gap-3 mt-2 text-white hover:text-textPrimary transition-all duration-300'>
						<IoCall className='text-textPrimary text-lg' />
						<p>+8801531946491</p>
					</a>
				</div>
			</div>
			<hr className="border-gray-500" />
			<div className='p-4 bg-black text-white text-center text-sm'>
				<p>@ 2024 Design & Developed By <Link to='/' className='text-red-500 hover:text-red-700'>MR Tech </Link></p>
			</div>
		</footer>
	);
};

export default Footer;
