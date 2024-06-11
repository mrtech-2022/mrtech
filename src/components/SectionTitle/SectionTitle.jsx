const SectionTitle = ({ title }) => {
	return (
		<div>
			<h1 className="border-b-4 w-fit mx-auto p-2 border-textPrimary text-center text-5xl font-bold my-12 md:my-20 text-textSecondary">
				{title}
			</h1>
		</div>
	);
};

export default SectionTitle;
