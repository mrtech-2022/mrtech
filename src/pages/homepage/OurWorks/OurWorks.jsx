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
			{/* <div className="md:flex p-5 text-center text-4xl text-white md:m-14 mt-20 uppercase">
				<div className="bg-textPrimary p-6 md:w-1/2">
					02 years of Experience
				</div>
				<div className="bg-textSecondary p-6 md:w-1/2">
					0{projects.length}+ projects completed
				</div>
			</div>
			<SectionTitle title="Explore Recent Work" />
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-16 md:mx-24">
				{projects.slice(0, projectsToShow).map(work => (
					<div key={work._id}>
						<img src={work.image} alt="" />
						<p className="font-bold text-center mt-3">{work.title}</p>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-4 ">
				<button
					className="btn bg-textSecondary text-white hover:bg-blue-700 mb-16"
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? 'Hide Some Projects' : 'Show All Projects'}
				</button>
			</div> */}
			<div>
				<SectionTitle title="Explore Recent Work" />
				<div className='flex justify-center'>
					<img className='w-2/3 sm:w-1/2' src="https://i.ibb.co/7K5xjJp/project.jpg" alt="Projects" />
				</div>
			</div>
		</div>
	);
};

export default OurWorks;
