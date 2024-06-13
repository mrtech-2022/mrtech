import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useProjects from '../../../hooks/useProjects';

const OurWorks = () => {
	// const [works, setWorks] = useState([]);
	const [projects] = useProjects();
	const [showAll, setShowAll] = useState(false);
	const projectsToShow = showAll ? showAll.length : 4;

	return (
		<div>
			<SectionTitle title="Our Works" />
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-16 md:mx-24">
				{projects.slice(0, projectsToShow).map(work => (
					<div key={work._id}>
						<img src={work.image} alt="" />
						<p className="font-bold text-center mt-3">{work.title}</p>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-4">
				<button
					className="btn bg-textSecondary text-white hover:bg-blue-700"
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? 'Hide Some Projects' : 'Show All Projects'}
				</button>
			</div>
		</div>
	);
};

export default OurWorks;
