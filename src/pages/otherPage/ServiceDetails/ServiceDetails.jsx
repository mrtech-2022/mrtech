import { useLocation } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ServiceDetails = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<div>
			<SectionTitle title="Service Details" />
			<div></div>
		</div>
	);
};

export default ServiceDetails;
