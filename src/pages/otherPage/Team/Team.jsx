import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaXTwitter } from 'react-icons/fa6';

const Team = () => {
	return (
		<div>
			<SectionTitle title="Our Team" />
			<div className="text-center mx-16">
				<p>
					We celebrate diversity as our strength and believe in creating an
					inclusive environment for all. Discrimination has no place here;
					we're united in valuing each individual's unique contributions.
				</p>
			</div>
			{/* Owner information */}
			<div className="m-8 ml-12 my-32">
				<h1 className="text-5xl font-bold border-l-[13px]  border-textSecondary p-3">
					Management Team
				</h1>
				<div className="flex flex-col items-center  md:flex-row my-10">
					<div className="group relative ">
						<img
							className="scale-105 transform rounded-lg bg-black/70 w-[300px]"
							src="https://i.ibb.co/Ht13Dy6/2-2.jpg"
							alt="card ui"
						/>
						<span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
							<svg
								width={25}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<g id="style=linear">
										<g id="add">
											<path
												id="vector"
												d="M11.998 5.84424L11.998 18.1604"
												stroke="#9EE6FD"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
											<path
												id="vector_2"
												d="M18.1561 12.002L5.83998 12.0019"
												stroke="#9EE6FD"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
										</g>
									</g>
								</g>
							</svg>
						</span>
						<span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
						<span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
					</div>
					<div className=" space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
						<div className="space-y-1">
							<h2 className="text-center font-sans font-medium text-gray-700 dark:text-white/90 text-3xl">
								Masudur Rahman
							</h2>
							<p className="font-sans text-gray-500 dark:text-white/70">
								Founder & CEO
							</p>
						</div>
						<div className="flex flex-wrap items-center justify-between">
							<div className="space-y-1">
								<a
									href="https://x.com/MasudurRahmanMe"
									target="blank"
									className=" tracking-wider text-gray-700 dark:text-white/80 text-4xl hover:text-[#0d87f8] transition transform "
								>
									<FaXTwitter />
								</a>
							</div>
							<div className="space-y-1">
								<a
									href="https://www.instagram.com/masudurrahmanme/"
									target="blank"
									className="tracking-wider text-gray-700 dark:text-white/80 text-4xl transition transform hover:text-textPrimary"
								>
									<FaInstagram />
								</a>
							</div>
							<div className="space-y-1">
								<a
									href="https://www.linkedin.com/in/masudurrahmanme"
									target="blank"
									className=" tracking-wider text-gray-700 dark:text-white/80 text-4xl transition transform hover:text-[#0d87f8]"
								>
									<FaLinkedin />
								</a>
							</div>
						</div>
						<div>
							<a href="https://wa.me/01531946491" target="blank">
								<button className="rounded-full border border-emerald-500 px-4 py-2 text-sm text-emerald-500 hover:bg-emerald-500 hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:bg-emerald-500 dark:hover:drop-shadow-[0px_0px_2px_#0d87f8] hover:">
									Send WhatsApp Message
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Developer Team */}
			<div className="m-8 ml-12">
				<h1 className="text-5xl font-bold border-l-[13px] border-textSecondary p-3">
					Developer Team
				</h1>
				<div className="flex flex-col items-center md:flex-row-reverse justify-end my-10">
					<div className="group relative w-[320px] md:w-[330px]">
						<img
							className=" scale-105 transform rounded-lg bg-black/70"
							src="https://i.ibb.co/TW6SVgw/Al-Amin.png"
							alt="card ui"
						/>
						<span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
							<svg
								width={25}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<g id="style=linear">
										<g id="add">
											<path
												id="vector"
												d="M11.998 5.84424L11.998 18.1604"
												stroke="#9EE6FD"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
											<path
												id="vector_2"
												d="M18.1561 12.002L5.83998 12.0019"
												stroke="#9EE6FD"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
										</g>
									</g>
								</g>
							</svg>
						</span>
						<span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
						<span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
					</div>
					<div className="w-[330px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
						<div className="space-y-1">
							<h2 className="text-center font-sans font-medium text-gray-700 dark:text-white/90 text-3xl">
								Md. Al-Amin
							</h2>
							<p className="font-sans text-gray-500 dark:text-white/70">
								Head OF Developer
							</p>
						</div>
						<div className="flex flex-wrap items-center justify-between">
							<div className="space-y-1">
								<a
									href="https://www.facebook.com/profile.php?id=100024270469893"
									target="blank"
									className=" tracking-wider text-gray-700 dark:text-white/80 text-4xl hover:text-[#0d87f8] transition transform "
								>
									<FaFacebook />
								</a>
							</div>
							<div className="space-y-1">
								<a
									href="https://www.instagram.com/mdalaminh052/"
									target="blank"
									className="tracking-wider text-gray-700 dark:text-white/80 text-4xl transition transform hover:text-textPrimary"
								>
									<FaInstagram />
								</a>
							</div>
							<div className="space-y-1">
								<a
									href="https://www.linkedin.com/in/alaminme"
									target="blank"
									className=" tracking-wider text-gray-700 dark:text-white/80 text-4xl transition transform hover:text-[#0d87f8]"
								>
									<FaLinkedin />
								</a>
							</div>
						</div>
						<div>
							<a href="https://wa.me/01586075605" target="blank">
								<button className="rounded-full border border-emerald-500 px-4 py-2 text-sm text-emerald-500 hover:bg-emerald-500 hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:bg-emerald-500 dark:hover:drop-shadow-[0px_0px_2px_#0d87f8] hover:">
									Send WhatsApp Message
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
