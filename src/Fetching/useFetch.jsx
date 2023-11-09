import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useContextData from './../Hooks/useContextData';






export const useFetch = (url,query='query') => {
const {logout} = useContextData()
   const { data, isLoading, isFetching, refetch } = useQuery({
     queryKey: [query],
     queryFn: async () => {
       const data = await axios.get(url, { withCredentials: true }).catch(err=>{
        console.log(err.response.status);
        if (err.response.status === 401 || err.response.status === 403) {
          
          logout()
        }
       })

       return await data.data;
     },
   });
   
 
   
    return {data,isLoading,isFetching,refetch}
};

