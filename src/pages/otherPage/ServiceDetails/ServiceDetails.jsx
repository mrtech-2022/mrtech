import { useParams } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ServiceDetails = () => {
	const { id } = useParams();
	const axiosPublic = useAxiosPublic();
	const { data: service = [] } = useQuery({
		queryKey: ['service', id],
		queryFn: async () => {
			const result = await axiosPublic.get(`services/${id}`);
			return result.data;
		},
	});

	const handleAddService = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const number = form.number.value;
		const address = form.address.value;
	};

	return (
		<div>
			<SectionTitle title="Service Details" />
			{/* Service Details */}
			<div className="flex m-20 justify-center items-center gap-10">
				<img className="w-72 " src={service.image} alt="Image" />
				<div>
					<h1 className="text-3xl font-bold my-4">{service.name}</h1>
					<p>{service.details}</p>
				</div>
			</div>

			{/*Booking service */}
			<div>
				<div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
					<form onSubmit={handleAddService} className="p-12">
						<h1 className="backdrop-blur-sm text-4xl pb-8 font-bold">
							Add This Service
						</h1>
						<div className="space-y-5">
							<label htmlFor="name" className="block">
								Name
							</label>
							<div className="relative">
								<input
									id="name"
									name="name"
									required
									type="text"
									placeholder="Enter Your Name"
									className="p-3 block w-full drop-shadow-lg  border-4 outline-none"
								/>
							</div>

							<label htmlFor="number" className="block">
								Contact Number
							</label>
							<div className="relative">
								<input
									id="number"
									required
									type="number"
									name="number"
									placeholder="Contact Number"
									className="p-3 block w-full drop-shadow-lg  border-4 outline-none"
								/>
							</div>

							<label htmlFor="address" className="block">
								Address
							</label>
							<div className="relative">
								<input
									name="address"
									id="address"
									required
									type="text"
									placeholder="Enter Your Address"
									className="p-3 block w-full drop-shadow-lg  border-4 outline-none"
								/>
							</div>
						</div>
						{/* button type will be submit for handling form submission*/}
						<button
							type="submit"
							className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
