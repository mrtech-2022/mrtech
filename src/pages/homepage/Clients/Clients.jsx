import Marquee from 'react-fast-marquee';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import './clients.css';
import useClients from '../../../hooks/useClients';

const Clients = () => {
	const [clients] = useClients();

	return (
		<div>
			<SectionTitle title="Major Clients" />
			<div className="mx-6 md:mx-32 text-center">
				<p>
					Clients are important to us. First, we survey sites and identify
					the client’s needs. Prepare CAD design and pointing system. We
					proposed a financial proposal. We believe in quality system
					design and solution provider to clients. Products Brand’s next.
				</p>
				{/* <Marquee pauseOnHover>
					{clients.map(client => (
						<div key={client._id} className="marquee-item -mx-12 md:mx-0">
							<img className="marquee-image" src={client.image} alt="" />
						</div>
					))}
				</Marquee> */}
				<Marquee pauseOnHover>

					<div className="marquee-item -mx-12 md:mx-0 my-8">
						<img className="marquee-image" src="https://i.ibb.co/rxBGYtL/client.jpg" alt="" />
					</div>
					<div className="marquee-item -mx-12 md:mx-0 my-8">
						<img className="marquee-image" src="https://i.ibb.co/rxBGYtL/client.jpg" alt="" />
					</div>
					<div className="marquee-item -mx-12 md:mx-0 my-8">
						<img className="marquee-image" src="https://i.ibb.co/rxBGYtL/client.jpg" alt="" />
					</div>
					<div className="marquee-item -mx-12 md:mx-0 my-8">
						<img className="marquee-image" src="https://i.ibb.co/rxBGYtL/client.jpg" alt="" />
					</div>


				</Marquee>
			</div>
		</div>
	);
};

export default Clients;
