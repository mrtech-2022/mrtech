import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useProjects = () => {
	const axiosPublic = useAxiosPublic();
	const { data: projects = [] } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const result = await axiosPublic.get('/projects');
			return result.data;
		},
	});
	return [projects];
};

export default useProjects;
