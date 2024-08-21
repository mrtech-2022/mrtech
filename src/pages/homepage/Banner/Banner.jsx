import CountUp from 'react-countup';
import { HashLink } from 'react-router-hash-link';
import useServices from '../../../hooks/useServices';
import useClients from '../../../hooks/useClients';
import useProjects from '../../../hooks/useProjects';
import Particle from '../../../components/Particles/Particles';
import { scrollToSection } from '../../../components/ScrollToSection/ScrollToSection';

const Banner = () => {
	const [services] = useServices();
	const [clients] = useClients();
	const [projects] = useProjects();


	return (
		<div id="home" className="relative h-screen overflow-hidden">
			{/* Particle component restricted to the Banner section */}
			<div className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0 bg-bgBlue">
				<Particle />
			</div>

			<div className="relative z-10 flex items-center justify-center h-full text-center">
				<div className="flex flex-col gap-36">
					{/* Intro text */}
					<div className="text-center md:w-1/2 mx-3 md:mx-auto">
						<h1 className="text-sky-600 font-semibold text-4xl mb-5 mt-20 sm:mt-0">
							Grow Your Fantastic Network
						</h1>
						<p className="text-white">
							Allah is the owner of everything and security. Then we will be careful. The threat is very real and the threat of attack is imminent. So MR Tech is created with the sole purpose of providing security to the clients if Allah wills.
						</p>
						<button onClick={() => scrollToSection('about')} className="bg-textPrimary p-3 px-7 rounded-xl my-5 text-white font-bold hover:bg-textSecondary transition-all duration-300">
							Get Started
						</button>
					</div>

					<div className="md:-mb-28 m-auto overflow-hidden text-textPrimary bottom-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-full gap-4 md:gap-8 place-items-end uppercase font-bold">
						<div className="relative m-3 border-4 border-textPrimary p-2 md:p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-3xl md:text-5xl font-bold m-3">
								0
								<CountUp
									end={services.length}
									duration={3}
									delay={0.5}
								/>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-bgBlue px-4">
								Services
							</p>
						</div>
						<div className="relative m-3 border-4 border-textPrimary p-2 md:p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-3xl md:text-5xl font-bold m-3">
								0
								<CountUp
									end={clients.length}
									duration={3}
									delay={0.5}
								/>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-bgBlue px-4">
								Clients
							</p>
						</div>
						<div className="relative m-3 border-4 border-textPrimary p-2 md:p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-3xl md:text-5xl font-bold m-3">
								0
								<CountUp
									end={projects.length}
									duration={3}
									delay={0.5}
								/>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-bgBlue px-4">
								Projects
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id='about'>

			</div>
		</div>
	);
};

export default Banner;
