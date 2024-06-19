import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import networkImg from '../../../../public/assets/network.jpg';
import peopleImg from '../../../../public/assets/people.jpg';
import teamImg from '../../../../public/assets/team.jpg';

const About = () => {
	return (
		<div id="about" className="w-full text-center">
			<SectionTitle title="About Us" />
			<p className="text-justify mx-4 md:mx-16">
				MR Tech is a Simple and customized IT Company (Networking, CCTV,
				Surveillance, Access Control, Fire Alarm System, Intruder Alarm
				System, Smart Education System and Products) Service provider In
				Bangladesh, with a far-reaching vision of adding values to society
				and industry we operate in. Most of our solutions are backed up by
				years of market experience and client demand. MT Tech understand
				their customer’s requirements and satisfy them by providing unique
				solutions specifically tailored to individual customer’s need and
				also enables us to provide unparalleled after-sale service.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-20 mx-5 lg:w-11/12 xl:w-10/12 mx-auto">
				{/* Card-1 */}
				<div className="card card-compact w-80 h-96 bg-base-100 rounded-md shadow-xl">
					<figure className="h-48">
						<img src={networkImg} alt="Network" />
					</figure>
					<div className="card-body">
						<h2 className="card-title mx-auto font-bold">
							Highest Standards
						</h2>
						<p className="mb-10 text-justify">
							We always ensure the highest standard solution and with the
							quality product.
						</p>
					</div>
				</div>

				{/* Card-2 */}
				<div className="card card-compact w-80 h-96 bg-base-100 rounded-md shadow-xl">
					<figure className="h-48">
						<img src={peopleImg} alt="Network" />
					</figure>
					<div className="card-body">
						<h2 className="card-title mx-auto font-bold">
							Creative Solutions
						</h2>
						<p className="text-justify mb-10">
							MR Tech always finds the creative solutions for customer
							satisfaction.
						</p>
					</div>
				</div>

				{/* Card-2 */}
				<div className="card card-compact w-80 h-96 bg-base-100 rounded-md shadow-xl">
					<figure className="h-48">
						<img src={teamImg} alt="Network" />
					</figure>
					<div className="card-body">
						<h2 className="card-title mx-auto font-bold">Our Team</h2>
						<p className="text-justify mb-10">
							To be a global leader in state-of-the-art cyber security
							solutions, helping individuals and innovative companies to
							function in a more secure and stable environment.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
