import About from '../About/About';
import Banner from '../Banner/Banner';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import Specialization from '../Specialization/Specialization';

const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Services />
			<Specialization />
			<OurWorks />
		</div>
	);
};

export default Home;
