import { TbDeviceDesktopBolt } from 'react-icons/tb';
import { LuTarget } from 'react-icons/lu';
import { MdPushPin } from 'react-icons/md';

const AboutCompany = () => {
	return (
		<div>
			{/* top section will */}
			<div
				className="relative about bg-cover bg-no-repeat bg-center mx-4 md:mx-10 mt-28 p-12"
				style={{
					backgroundImage: `url('https://i.ibb.co/H4kpRCj/Network.jpg')`,
				}}
			>
				{/* Overlay for reducing background image opacity */}
				<div className="absolute inset-0 bg-black opacity-60"></div>

				<div className="relative z-10 text-white bg-gray-100 bg-opacity-30 p-6 md:p-10">
					<h1 className="text-2xl font-bold mb-4 text-center">
						About MR Tech
					</h1>
					<p>
						MR Tech is a customer-oriented electronic Higher safety
						security, and customized IT, solution provider, with a
						far-reaching vision of adding values to the society and
						industry we operate in. Most of our solutions are backed up by
						years of market experience and client demand. MR Tech is an
						Importer, Distributor, system integrator of higher safety and
						security Products in Bangladesh. MR Tech understand their
						customer’s requirements and satisfy them by providing unique
						solutions specifically tailored to individual customer’s need
						and also enables us to provide unparalleled after-sale
						service.
					</p>
				</div>
			</div>

			<div className="bg-gray-100 mx-4 md:mx-20 mt-28 p-6">
				<h1 className="text-2xl font-bold mb-4">Historical Background</h1>
				<p>
					<span className="text-textPrimary font-bold">MR Tech Ltd</span>{' '}
					is one of the fastest-growing customized IT & Electronic Safety &
					Security Solutions provider company in Bangladesh Since 2022.{' '}
					<br />
					<br />
					Understanding customer’s needs want and demands,{' '}
					<span className="font-bold text-textPrimary">MR TECH</span> was
					established in 2022 to Provide the hightest quality safety and
					security solutions.
					<br />
					<br />
					<span className="font-bold text-textPrimary">MR TECH</span> is
					working perfectly in the electrical safety and security &
					Automation solution sector in Bangladesh. We are so dedicate on
					any project to make customer happy.
				</p>
			</div>

			{/* Mission & Vission */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 md:mx-16 mb-16">
				{/* Vision */}
				<div className="bg-gray-100 m-6 p-5">
					<TbDeviceDesktopBolt className="text-8xl text-textSecondary mx-auto" />
					<h1 className="text-2xl font-bold my-3">Vision</h1>
					<p>The Vision of MR Tech is:</p>
					<ul className="list-disc pl-5 space-y-3">
						<li>
							We always maintain the highest level of quality of the
							Products.
						</li>
						<li>
							We have honesty, transparency, fairness, and high moral
							standards.
						</li>
						<li>
							We have the creativity to deliver the best practical
							outcomes.
						</li>
						<li>
							We build strong relationships with our customers or clients
							to achieve success in the long term.
						</li>
					</ul>
				</div>

				{/* Mission */}
				<div className="bg-gray-100 m-6 p-5">
					<LuTarget className="text-8xl text-textSecondary mx-auto" />
					<h1 className="text-2xl font-bold my-3">Mission</h1>
					{/* <p>The Vision of MR Tech is:</p> */}
					<ul className="list-disc pl-5 space-y-3">
						<li>Do the right thing regardless of the consequence.</li>
						<li>Value openness and honesty.</li>
						<li>
							Set high expectations and hold ourselves accountable for
							the quality of our service.
						</li>
						<li>Manage your IT department smartly and create value.</li>
					</ul>
				</div>

				{/* Objective */}
				<div className="bg-gray-100 m-6 p-5">
					<MdPushPin className="text-8xl text-textSecondary mx-auto" />
					<h1 className="text-2xl font-bold my-3">Objective</h1>
					<ul className="list-disc pl-5 space-y-3">
						<li>
							MR Tech established its business in customized IT and
							Higher Electronical safety and security products importer,
							distributor, system integrator.
						</li>
						<li>
							To digitalize the safety and security sector in Bangladesh.
						</li>
						<li>Stablish Central Monitoring System in Bangladesh.</li>
						<li>To achieve their business goal.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
