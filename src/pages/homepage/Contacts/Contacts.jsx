import { Bounce, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import contactImg from '/assets/Contact1.jpg'
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { sendDataForm } from '../../../utils/sendDataForm';



const Contacts = () => {
	const formValue = useRef();
	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const number = form.number.value;
		const address = form.address.value;
		const message = form.message.value;
		if (!name || !email || !number || !address || !message) {
			toast('Fill up all forms', {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				theme: 'dark',
				draggable: true,
				progress: undefined,
				transition: Bounce,
				style: {
					backgroundColor: '#ED334A',
					color: 'white',
					fontWeight: 'bold',
					zIndex: 90,
				},
			});
			return;
		}


		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

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
			}
		} catch (error) {
			toast.error('error occured');
			console.log(error);
		}
	};

	return (
		<>
			<Helmet>
				<title>Contact Us - MR Tech</title>
			</Helmet>
			{/* cover image */}
			<div
				className="relative about bg-cover bg-no-repeat bg-center p-36 text-bgBlue"
				style={{
					backgroundImage: `url('/assets/Contact1.jpg')`,
				}}
			>
				{/* Overlay for reducing background image opacity */}
				<div className="absolute inset-0 bg-black opacity-80"></div>
				<div className="relative flex justify-center z-40 p-6 md:p-10">
					<h1 className="text-5xl font-bold mb-4 text-center text-white">
						Contact
					</h1>
				</div>
			</div>

			{/* middle text */}
			<div className='my-10 text-center mx-2'>
				<h1 className='text-4xl text-textSecondary font-bold'>Feel Free Contact Us Today and Get <br /> Your Solution</h1>
				<p className='mt-6 text-gray-500'>Reach out to us for personalized solutions tailored to your needs. Our expert team is here to <br /> help you achieve your goals.

				</p>
			</div>

			{/* company info */}
			<div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center mx-auto gap-6 my-10 max-w-7xl'>
				<div className='bg-gray-100 p-12 px-16 shadow-xl  items-center h-full w-96'>
					<div className='flex gap-6 items-center'>
						<a href="tel:01531946491">
							<GiRotaryPhone className='bg-darkBlue text-white text-6xl p-2' />
						</a>
						<div className='text-black'>
							<h1 className='text-2xl font-bold'>Call Us.</h1>
							<p>+880 1531946491</p>
						</div>
					</div>
				</div>
				<div className='bg-gray-100 p-12 px-16 shadow-xl flex items-center h-full w-96'>
					<div className='flex gap-6 items-center'>
						<a href="mailto:info@mrtech.com.bd">
							<MdOutlineMarkEmailUnread className='bg-darkBlue text-white text-6xl p-2' />
						</a>
						<div className='text-black'>
							<h1 className='text-2xl font-bold'>Email Us.</h1>
							<p>info@mrtech.com.bd</p>
						</div>
					</div>
				</div>
				<div className='bg-gray-100 p-8 px-16 shadow-xl flex items-center h-full w-96'>
					<div className='flex gap-6 items-center'>
						<a href='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14601.184943008018!2d90.4288286!3d23.8080628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75c6f4edaed%3A0x27d198cada031f5e!2sMR%20Tech!5e0!3m2!1sen!2sbd!4v1724095327697!5m2!1sen!2sbd' target='blank'>
							<FaHome className='bg-darkBlue text-white text-6xl p-2' />
						</a>
						<div className='text-black'>
							<h1 className='text-2xl font-bold'>Address</h1>
							<p className='text-sm'>Evercare Hospital Link<br /> Road
								(Beside Bashundhara), <br /> Vatara, Dhaka-1212</p>
						</div>
					</div>
				</div>
			</div>



			{/* contact info */}
			<div className="-mb-5 mt-8">
				<div
					id="contacts"
					className="flex flex-col md:flex-row justify-center gap-10 lg:gap-20 place-items-center py-8"
				>

					{/* contact form */}
					<div className="bg-white shadow-lg md:shadow-2xl p-6 px-8 w-full md:w-[350px] rounded-xl">
						<h1 className="text-5xl text-bgBlue text-center my-6 font-bold">
							Contacts
						</h1>
						<form ref={formValue} onSubmit={handleSubmit}>
							<div className="flex flex-col gap-6">
								<div className="relative  w-full rounded-lg">
									<input
										name="name"
										className="peer rounded-xl border-4  border-bgBlue   px-4 py-2 text-bgBlue w-full focus:outline-none"
										type="text"
										placeholder="Type your name"
									/>
									<label
										className="absolute -top-2 left-[10px] bg-white font-bold px-2 duration-300 peer-placeholder-shown:left-[14px] placeholder-shown:top-3 focus:-top-2 focus:left-[10px] text-bgBlue focus:  "
										htmlFor=""
									>
										Name
									</label>
								</div>
								<div className="relative w-full rounded-lg">
									<input
										name="email"
										className="peer w-full rounded-xl border-4  border-bgBlue   px-4 py-2 text-bgBlue focus:outline-none"
										type="email"
										placeholder="Your email"
									/>
									<label
										className="absolute text-bgBlue -top-2 left-[10px] bg-white font-bold px-2   duration-300 peer-placeholder-shown:left-[14px] placeholder-shown:top-3 focus:-top-2 focus:left-[10px] focus: "
										htmlFor=""
									>
										Email
									</label>
								</div>
								<div className="relative  w-full rounded-lg">
									<input
										name="number"
										className="peer rounded-xl border-4  border-bgBlue   px-4 py-2 text-bgBlue w-full focus:outline-none"
										type="number"
										placeholder="Enter Phone Number"
									/>
									<label
										className="absolute -top-2 left-[10px] bg-white font-bold px-2 duration-300 peer-placeholder-shown:left-[14px] placeholder-shown:top-3 focus:-top-2 focus:left-[10px] text-bgBlue focus:  "
										htmlFor=""
									>
										Number
									</label>
								</div>
								<div className="relative  w-full rounded-lg">
									<input
										name="address"
										className="peer rounded-xl border-4  border-bgBlue   px-4 py-2 text-bgBlue w-full focus:outline-none"
										type="text"
										placeholder="Type your name"
									/>
									<label
										className="absolute -top-2 left-[10px] bg-white font-bold px-2 duration-300 peer-placeholder-shown:left-[14px] placeholder-shown:top-3 focus:-top-2 focus:left-[10px] text-bgBlue focus:  "
										htmlFor=""
									>
										Address
									</label>
								</div>
								<div className="relative  w-full rounded-lg">
									<textarea
										name="message"
										className="peer rounded-xl border-4  border-bgBlue w-full h-24   px-4 py-2 text-bgBlue focus:outline-none resize-none"
										type="text"
										placeholder="Details message"
									/>
									<label
										className="absolute -top-2 left-[10px] bg-white font-bold px-2   duration-300 peer-placeholder-shown:left-[14px] placeholder-shown:top-3 focus:-top-2 focus:left-[10px] focus:  text-bgBlue"
										htmlFor=""
									>
										Messsage
									</label>
								</div>
							</div>

							{/* Button */}
							<button
								className="py-2 w-full h-16 px-6 mb-4 mt-6 bg-textSecondary hover:bg-blue-500 duration-300 text-bgBlue font-bold text-xl rounded-xl flex items-center justify-center overflow-hidden hover:overflow-visible relative group"
								type="submit"
							>
								<svg
									viewBox="0 0 1024 1024"
									className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									fill="#000000"
								>
									<g strokeWidth="0"></g>
									<g strokeLinecap="round" strokeLinejoin="round"></g>
									<g>
										<path
											d="M244.5 662l268.1-446.4 268 446.4z"
											fill="#9ED5E4"
										></path>
										<path
											d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
											fill="#154B8B"
										></path>
										<path
											d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
											fill="#F7F9F9"
										></path>
										<path
											d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
											fill="#154B8B"
										></path>
										<path
											d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
											fill="#9ED5E4"
										></path>
										<path
											d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
											fill="#154B8B"
										></path>
										<path
											d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
											fill="#9ED5E4"
										></path>
										<path
											d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
											fill="#154B8B"
										></path>
									</g>
								</svg>
								<span className="duration-500">Send</span>
							</button>
						</form>
					</div>

					{/* google map */}
					<div className='shadow-2xl'>
						<iframe
							className="w-96 p-2 sm:w-[450px] md:w-[400px] lg:w-[650px] h-96"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14601.184943008018!2d90.4288286!3d23.8080628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75c6f4edaed%3A0x27d198cada031f5e!2sMR%20Tech!5e0!3m2!1sen!2sbd!4v1724095327697!5m2!1sen!2sbd"
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
