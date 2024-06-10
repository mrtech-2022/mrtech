import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Specialization = () => {
	const [specialization, setSpecialization] = useState([]);
	useEffect(() => {
		try {
			fetch('specialization.json').then(res =>
				res.json().then(data => setSpecialization(data))
			);
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div>
			<SectionTitle title="Specialization" />
			<p className="text-center m-16">
				As a modern Information Security company, Beetles Cyber Security
				combines a range of advanced services and technical resources to
				provide your business with the level of solution support it needs.
			</p>
			<div className="grid grid-cols-3 items-center gap-12">
				{specialization.map(data => (
					<div
						className="flex flex-col items-center hover:text-textPrimary"
						key={data.id}
					>
						<img className="w-20 mb-2" src={data.image} alt="Service" />
						<p>{data.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Specialization;
