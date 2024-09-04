import { Helmet } from 'react-helmet';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import Specialization from '../Specialization/Specialization';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Home | MR Tech</title>
			</Helmet>
			<Banner />
			<About />
			<Services />
			<Specialization />
			<OurWorks />
			<Clients />
			{/* <Contacts /> */}
		</div>
	);
};

export default Home;
