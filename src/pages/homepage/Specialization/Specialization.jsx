import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useSpecializationData from '../../../hooks/useSpecializationData';

const Specialization = () => {
	const [specialization] = useSpecializationData();
	const [selectedSpecialization, setSelectedSpecialization] = useState(null);

	const handleSpecializationClick = data => {
		setSelectedSpecialization(data);
		document.getElementById('data-modal').showModal();
	};

	return (
		<div>
			<SectionTitle title="Specialization" />
			<p className="text-center m-8 md:m-16">
				As a modern Information Security company, Beetles Cyber Security
				combines a range of advanced services and technical resources to
				provide your business with the level of solution support it needs.
			</p>

			<div className="grid grid-cols-2 lg:grid-cols-3 items-center mx-4 gap-12">
				{specialization.map(data => (
					<div
						className="flex flex-col items-center text-center hover:text-textPrimary"
						key={data._id}
						onClick={() => handleSpecializationClick(data)}
					>
						<img
							className="w-20 mb-2 cursor-pointer"
							src={data.image}
							alt="Service"
						/>
						<p className="cursor-pointer">{data.name}</p>
					</div>
				))}
			</div>

			{/* Modal Data */}
			<dialog id="data-modal" className="modal">
				{selectedSpecialization && (
					<div className="modal-box">
						<h3 className="font-bold text-lg">
							{selectedSpecialization.name}
						</h3>
						<form method="dialog">
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-textPrimary text-xl">
								✕
							</button>
						</form>

						<p className="py-4">{selectedSpecialization.details}</p>
					</div>
				)}
				<form method="dialog" className="modal-backdrop">
					<button>Close</button>
				</form>
			</dialog>
		</div>
	);
};

export default Specialization;
