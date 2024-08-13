import {
	FaArrowRight,
	FaFacebookSquare,
	FaHome,
	FaInstagram,
	FaInstagramSquare,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa';
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer
			id="contacts"
			className="bg-black grid md:grid-cols-3 p-6 px-16 justify-items-center mt-5"
		>
			<div className="flex flex-col justify-center ">
				<img
					className="w-1/4 ml-5"
					src="https://i.ibb.co/B3G283b/MR-Tech2.png"
					alt="MR Tech"
				/>
				<div className="flex flex-col gap-4 my-4 ">
					<Link to="/contacts">
						<div className="bg-white w-1/3 p-3 rounded-md text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all text-center">
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
			<div className="text-textPrimary">
				<h1 className="text-2xl mb-3 font-bold">QUICK LINKS</h1>
				<ul>
					<li
						className="text-gray-300 underline p-1 mb-2 hover:text-red-500 flex items-center text-lg gap-1"
						style={{ textUnderlineOffset: '7px' }}
					>
						<FaArrowRight />

						<Link to="/about-mrtech">About US</Link>
					</li>
					<li
						className="text-gray-300 underline p-1 mb-2 hover:text-red-500 flex items-center text-lg gap-1"
						style={{ textUnderlineOffset: '7px' }}
					>
						<FaArrowRight />

						<Link to="/team">Our Team</Link>
					</li>
					<li
						className="text-gray-300 underline p-1 mb-2 hover:text-red-500 flex items-center text-lg gap-1"
						style={{ textUnderlineOffset: '7px' }}
					>
						<FaArrowRight />

						<Link to="/about-mrtech">Company Documents</Link>
					</li>
				</ul>
			</div>
			<div className="text-textPrimary">
				<div className="flex items-center gap-3 font-bold text-3xl mb-4">
					<FaHome />
					<h1>Registered Office</h1>
				</div>
				<p className="text-gray-300 ml-11">
					Evercare Hospital Link Road <br />
					(Beside Bashundhara), Vatara, Dhaka-1212
				</p>
			</div>
		</footer>
	);
};

export default Footer;
