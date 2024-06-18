import { useParams } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
	const [openModal, setOpenModal] = useState(false);
	const formValue = useRef();

	const { id } = useParams();
	const axiosPublic = useAxiosPublic();
	const { data: service = [] } = useQuery({
		queryKey: ['service', id],
		queryFn: async () => {
			const result = await axiosPublic.get(`services/${id}`);
			return result.data;
		},
	});

	const handleAddService = async e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const number = form.number.value;
		const address = form.address.value;
		const details = form.details.value;
		console.log(name, number, address, details);

		// send service to email
		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_SERVICE_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		try {
			const res = await emailjs.sendForm(serviceId, templateId, form, {
				publicKey: publicKey,
			});
			if (res.status == 200) {
				toast.success('Your message sent successfully', {
					style: {
						backgroundColor: '#333',
						color: '#fff',
						fontWeight: 'bold',
					},
				});
				form.reset();
				setOpenModal(false);
			}
		} catch (error) {
			toast.error('error occured');
			console.log(error);
		}
	};

	return (
		<div>
			<SectionTitle title="Service Details" />
			{/* Service Details */}
			<div className="flex flex-col md:flex-row m-10 md:m-20 justify-center items-center gap-10">
				<img className="w-72 " src={service.image} alt="Image" />
				<div>
					<h1 className="text-3xl font-bold my-4">{service.name}</h1>
					<p>{service.details}</p>
				</div>
			</div>

			<div>
				<button
					onClick={() => setOpenModal(true)}
					type="submit"
					className="py-2 px-5 flex mx-auto mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-black text-white font-bold relative hover:bg-white hover:text-black transition-all ease-in-out duration-500"
				>
					Request for this Service
				</button>
			</div>

			{/* Service Modal */}
			<div className="mx-auto flex w-72 items-center justify-center">
				<div
					onClick={() => setOpenModal(false)}
					className={`fixed z-[100] flex items-center justify-center ${
						openModal ? 'opacity-1 visible' : 'invisible opacity-0'
					} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
				>
					<div
						onClick={e_ => e_.stopPropagation()}
						className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
							openModal
								? 'opacity-1 translate-y-0 duration-300'
								: '-translate-y-20 opacity-0 duration-150'
						}`}
					>
						<form
							ref={formValue}
							onSubmit={handleAddService}
							className="p-12"
						>
							<div className="flex justify-between ">
								<h1 className="backdrop-blur-sm text-4xl pb-8 font-bold">
									Request This Service
								</h1>
								<h1
									onClick={() => setOpenModal(false)}
									className="font-bold text-3xl text-textPrimary cursor-pointer -mt-6"
								>
									x
								</h1>
							</div>
							<div className="space-y-5">
								<label htmlFor="name" className="block font-semibold">
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

								<label htmlFor="number" className="block font-semibold">
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

								<label
									htmlFor="address"
									className="block font-semibold"
								>
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
								<label
									htmlFor="details"
									className="block font-semibold"
								>
									Details
								</label>
								<div className="relative">
									<input
										name="details"
										id="details"
										required
										type="text"
										placeholder="Details About Your Service"
										className="p-3 block w-full drop-shadow-lg  border-4 outline-none"
									/>
								</div>
							</div>
							{/* button type will be submit for handling form submission*/}
							<button
								type="submit"
								className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-black relative inline-block font-bold text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
