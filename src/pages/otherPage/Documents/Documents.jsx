import SectionTopStyle from "../../../components/SectionTopStyle/SectionTopStyle";

const Documents = () => {
	return (
		<div className="h-screen">
			<SectionTopStyle
				title="MR Tech Documents"
				content="MR Tech is a customer-oriented It setup, security, product and customized IT  solution provider in Bangladesh. Here you can find all our company documents."
				backgroundImage="https://i.ibb.co/hBHfCw4/document.jpg"
			// backgroundImage="https://i.ibb.co/wgrtK8S/document.jpg"
			/>
			{/* <div className="m-24">
				<div className="bg-textPrimary p-8 text-center text-white">
					<h1 className="text-3xl font-bold my-2">MR TECH Documents</h1>
					<p>
						MR Tech is a customer-oriented electronic Higher safety,
						security, and customized IT, solution provider in Bangladesh
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default Documents;
