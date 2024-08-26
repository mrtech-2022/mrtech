import { FaHandshakeAngle } from 'react-icons/fa6';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import networkImg from '/assets/network.jpg';
import teamImg from '/assets/team.jpg';
import { TbBulb, TbHandClick } from "react-icons/tb";
import { Link } from 'react-router-dom';


const About = () => {
	return (
		<>
			<div className="w-full text-center">
				<SectionTitle title="Our Values" />
				<p className="mx-4 md:mx-16">
					Welcome to our security company. Security is very important especially for individuals, organizations, devices & software. Through this company, we will give you security advice and explore the world of security in its practical way. So, let's start this cyber security journey together, where you can make yourself, your organization, devices and software digitally secure. You can even put yourself and the country on a digital smart security path.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-20 mx-5 lg:w-11/12 xl:w-10/12 mx-auto">
					{/* Card-1 */}
					<div className="card card-compact w-80 h-96 bg-base-100 rounded-md shadow-xl">
						<figure className="h-48">
							<img src={networkImg} alt="Network" />
						</figure>
						<div className="card-body">
							<h2 className="card-title mx-auto font-bold mt-4">
								Highest Standards
							</h2>
							<p className="mb-10 text-justify">
								We always ensure the highest standard solution and with the
								quality product.
							</p>
						</div>
						<div>
							<TbHandClick className='absolute text-white top-[43%] left-[43%] bg-orange-700 rounded-full p-1 text-5xl hover:bg-white hover:text-bgBlue transition-all duration-500' />
						</div>
					</div>

					{/* Card-2 */}
					<div className="card card-compact w-80 h-96 bg-base-100 rounded-md shadow-xl">
						<figure className="h-48">
							<img src="https://i.ibb.co/mBbKL8N/creative.jpg" alt="Network" />
						</figure>
						<div className="card-body">
							<h2 className="card-title mx-auto font-bold mt-4">
								Creative Solutions
							</h2>
							<p className="text-justify mb-10">
								MR Tech always finds the creative solutions for customer
								satisfaction.
							</p>
						</div>
						<div>
							<TbBulb className='absolute text-white top-[43%] left-[43%] bg-orange-700 rounded-full p-1 text-5xl hover:bg-white hover:text-bgBlue transition-all duration-500' />
						</div>
					</div>

					{/* Card-3 */}
					<div className="card card-compact w-80 h-96 bg-base-100 rounded-md shadow-xl relative group">
						<figure className="h-48">
							<Link to='/team'>
								<img src={teamImg} alt="Network" className="w-full h-full object-cover" />
							</Link>
						</figure>
						<div className="card-body">
							<h2 className="card-title mx-auto font-bold mt-4 hover:text-textPrimary">
								<Link to="/team">
									Our Team
								</Link>
							</h2>
							<p className="text-justify">
								To be a global leader in state-of-the-art cyber security
								solutions, helping individuals and innovative companies to
								function in a more secure and stable environment.
							</p>
						</div>
						<div>
							<Link to='/team'>
								<FaHandshakeAngle className='absolute text-white top-[43%] left-[43%] bg-orange-700 rounded-full p-1 text-5xl transition-all duration-500 cursor-pointer group-hover:bg-white group-hover:text-bgBlue' />
							</Link>
						</div>
					</div>

				</div>
			</div>
			<div id='services'></div>
		</>
	);
};

export default About;
