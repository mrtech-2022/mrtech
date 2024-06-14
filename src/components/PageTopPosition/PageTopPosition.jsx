import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTopPosition = () => {
	const { pathName } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathName]);
	return null;
};

export default PageTopPosition;
