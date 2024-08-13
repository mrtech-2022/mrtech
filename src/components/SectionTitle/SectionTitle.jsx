const SectionTitle = ({ title }) => {
	return (
		<div>
			<h1 className="border-b-2 w-fit mx-auto p-2 border-textPrimary text-center text-3xl md:text-4xl font-bold my-12 md:my-20 text-textSecondary uppercase">
				{title}
			</h1>
		</div>
	);
};

export default SectionTitle;
