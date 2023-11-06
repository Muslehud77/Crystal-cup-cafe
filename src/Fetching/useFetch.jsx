import { useQuery } from '@tanstack/react-query';
import axios from 'axios';






export const useFetch = (url,query='query') => {
   const {data,isLoading,isFetching,refetch} = useQuery({
    queryKey:[query],
    queryFn: async ()=>{
        const data = await axios.get(url) 
        return await data.data;
    }
   })
   
   
    return {data,isLoading,isFetching,refetch}
};

