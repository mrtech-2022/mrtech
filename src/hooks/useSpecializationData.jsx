import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSpecializationData = () => {
	const axiosPublic = useAxiosPublic();
	const { data: specialization = [] } = useQuery({
		queryKey: ['specialization'],
		queryFn: async () => {
			const result = await axiosPublic.get('/specialization');
			return result.data;
		},
	});

	return [specialization];
};

export default useSpecializationData;
