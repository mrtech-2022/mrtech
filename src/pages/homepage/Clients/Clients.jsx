import Marquee from 'react-fast-marquee';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import './clients.css';

const Clients = () => {
	const axiosPublic = useAxiosPublic();
	const { data: clients = [] } = useQuery({
		queryKey: ['clients'],
		queryFn: async () => {
			const result = await axiosPublic.get('/clients');
			return result.data;
		},
	});

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
				<Marquee pauseOnHover>
					{clients.map(client => (
						<div key={client._id} className="marquee-item -mx-12 md:mx-0">
							<img className="marquee-image" src={client.image} alt="" />
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default Clients;
