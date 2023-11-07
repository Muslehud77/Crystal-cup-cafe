import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const postData = (url,dataToSend) => {
  const { data, isLoading, isFetching } = useMutation({
  
    queryFn: async () => {
      const data = await axios.get(url,dataToSend, { withCredentials: true });
      return await data.data;
    },
  });

  return { data, isLoading, isFetching};
};
