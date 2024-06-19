import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useClients = () => {
	const axiosPublic = useAxiosPublic();
	const { data: clients = [] } = useQuery({
		queryKey: ['clients'],
		queryFn: async () => {
			const result = await axiosPublic.get('/clients');
			return result.data;
		},
	});

	return [clients];
};

export default useClients;
