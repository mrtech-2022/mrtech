import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import SectionTopStyle from '../../../components/SectionTopStyle/SectionTopStyle';
import useServices from '../../../hooks/useServices';
import { Link } from 'react-router-dom';

const Services = () => {
	const [services] = useServices();
	console.log(services);
	return (
		<div>
			<div>
				<SectionTitle title="Services" />

				<p className="text-center m-8 md:m-16">
					As a modern Information Security company, MR Tech combines a
					range of advanced services and technical resources to provide
					your business with the level of solution support it needs.
				</p>

				<div className="grid grid-cols-2 lg:grid-cols-3 items-center mx-4 gap-12">
					{services.map(service => (
						<div
							className="flex flex-col items-center text-center"
							key={service._id}
						>
							<img
								className="w-20 mb-2"
								src={service.icon}
								alt="Service"
							/>
							<p className="font-semibold max-w-[25ch]">{service.name}</p>
							<Link to={`/service-details/${service._id}`}>
								<button className="bg-textSecondary text-white p-2 m-3 hover:bg-black hover:transition-all ">
									More Details
								</button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
