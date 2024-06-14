import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useServices = () => {
	const axiosPublic = useAxiosPublic();
	const { data: services = [] } = useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const result = await axiosPublic.get('/services');
			return result.data;
		},
	});

	return [services];
};

export default useServices;
