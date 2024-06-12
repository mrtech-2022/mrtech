import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import networkImg from '../../../../public/assets/network.jpg';
import peopleImg from '../../../../public/assets/people.jpg';
import teamImg from '../../../../public/assets/team.jpg';

const About = () => {
	return (
		<div id="about" className="w-full text-center">
			<SectionTitle title="About Us" />
			<p className="mx-3 md:max-w-[110ch] md:mx-auto">
				We served security to someone's home, office, shop, restaurant or
				other places by CCTV camera to protect from corruption. We also have
				some IT section for. The bigger weapon now is not a gun, but a
				keyboard. From malicious codes to Trojans to phishing and organized
				crimes (data theft, DoS, DDoS) are the new threats we face every
				day.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-20 mx-5 lg:w-11/12 xl:w-10/12 mx-auto">
				{/* Card-1 */}
				<div className="card card-compact w-80 bg-base-100 rounded-md shadow-xl">
					<figure className="h-48">
						<img src={networkImg} alt="Network" />
					</figure>
					<div className="card-body">
						<h2 className="card-title mx-auto font-bold">CrowdSpark</h2>
						<p className="mb-10 text-justify">
							CrowdSpark is a proprietary engagement management
							application that provides our clients with a one-stop
							dashboard for all vital data.
						</p>
					</div>
				</div>

				{/* Card-2 */}
				<div className="card card-compact w-80 bg-base-100 rounded-md shadow-xl">
					<figure className="h-48">
						<img src={peopleImg} alt="Network" />
					</figure>
					<div className="card-body">
						<h2 className="card-title mx-auto font-bold">
							WFH Security Assessment
						</h2>
						<p className="text-justify mb-10">
							Assess the security of your remote working solution,
							ensuring that configuration issues are not exposing your
							corporate data and systems to unauthorized users.
						</p>
					</div>
				</div>

				{/* Card-2 */}
				<div className="card card-compact w-80 bg-base-100 rounded-md shadow-xl">
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
