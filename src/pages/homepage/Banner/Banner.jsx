import CountUp from 'react-countup';
import IntroVideo from '../../../assets/intro.mp4';
const Banner = () => {
	return (
		<div className="relative h-screen overflow-hidden">
			<video
				src={IntroVideo}
				className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-90"
				autoPlay
				loop
				muted
			></video>

			<div className="relative z-10 text-center flex items-center justify-center h-full">
				<div className="flex flex-col gap-36">
					<div>
						<h1 className="text-gray-400 font-semibold text-4xl mb-5">
							Grow Your Fantastic Network
						</h1>
						<p className="text-white">
							An offensive approach to IT security that provides data
							driven, insightful PenTest engagements. <br /> A conclusive
							test of IT resilience, the best defence is a controlled
							offense.
						</p>
					</div>
					<div className="-mb-32 m-auto  left-0 right-0 overflow-hidden text-textPrimary bottom-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-4 md:gap-8 place-items-end ">
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								<CountUp
									// enableScrollSpy={true}
									end={555}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-7">
								PenTests
							</p>
						</div>
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								<CountUp
									// enableScrollSpy={true}
									end={300}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-4">
								Bug Found
							</p>
						</div>
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								<CountUp
									// enableScrollSpy={true}
									end={105}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-4">
								Clients Served
							</p>
						</div>
						<div className="relative m-3  border border-textPrimary p-4 flex flex-col justify-end items-center w-40 md:w-52">
							<h1 className="text-5xl font-bold m-3">
								<CountUp
									// enableScrollSpy={true}
									end={5}
									duration={3}
									delay={0.5}
								></CountUp>
							</h1>
							<p className="absolute bottom-0 -mb-3 text-center bg-blue-950 px-4">
								Project Completed
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
