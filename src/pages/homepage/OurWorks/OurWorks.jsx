import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurWorks = () => {
	const [works, setWorks] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const projectsToShow = showAll ? showAll.length : 4;
	useEffect(() => {
		const worksData = async () => {
			try {
				const data = await fetch('works.json');
				const response = await data.json();
				setWorks(response);
			} catch (err) {
				console.log(err);
			}
		};
		worksData();
	}, []);
	return (
		<div>
			<SectionTitle title="Our Works" />
			<div className="grid grid-cols-4 gap-10 mx-24">
				{works.slice(0, projectsToShow).map(work => (
					<div key={work.id}>
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
