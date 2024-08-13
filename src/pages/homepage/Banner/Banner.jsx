import CountUp from 'react-countup';
import IntroVideo from '../../../../public/assets/intro.mp4';
import { HashLink } from 'react-router-hash-link';
import useServices from '../../../hooks/useServices';
import useClients from '../../../hooks/useClients';
import useProjects from '../../../hooks/useProjects';
const Banner = () => {
	const [services] = useServices();
	const [clients] = useClients();
	const [projects] = useProjects();
	return (
		<div id="home" className="relative h-screen overflow-hidden">
			<video
				src={IntroVideo}
				className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-90"
				autoPlay
				loop
				muted
			></video>

			<div className="relative z-10 text-center flex items-center justify-center h-full">
				<div className="flex flex-col gap-36">
					<div className="text-center w-1/2 mx-auto">
						<h1 className="text-gray-400 font-semibold text-4xl mb-5">
							Grow Your Fantastic Network
						</h1>
						<p className="text-white">
							Core values are the fundamental beliefs of a person or
							organization. These guiding principles dictate behavior and
							can help people understand the difference between right and
							wrong.
						</p>
						<HashLink smooth to="/#about">
							<button className="bg-textPrimary p-3 rounded-xl my-5 text-white font-bold hover:bg-textSecondary transition-all">
								Get Started
							</button>
						</HashLink>
					</div>
					<div className="-mb-32 m-auto overflow-hidden text-textPrimary bottom-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-full gap-4 md:gap-8 place-items-end uppercase font-bold">
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								0
								<CountUp
									// enableScrollSpy={true}
									end={services.length}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-4">
								Services
							</p>
						</div>
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								0
								<CountUp
									// enableScrollSpy={true}
									end={clients.length}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-4">
								Clients
							</p>
						</div>
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								0
								<CountUp
									// enableScrollSpy={true}
									end={projects.length}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-4">
								Projects
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
