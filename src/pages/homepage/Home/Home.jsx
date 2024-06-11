import About from '../About/About';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Contacts from '../Contacts/Contacts';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import Specialization from '../Specialization/Specialization';

const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Specialization />
			<Services />
			<OurWorks />
			<Clients />
			<Contacts />
		</div>
	);
};

export default Home;
