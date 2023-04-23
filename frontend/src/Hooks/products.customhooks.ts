
import { AxiosResponse } from "axios"

export const useUserProductsData = (key:string,api:Promise<AxiosResponse<any, any>>)=>{
    return {
        queryKey: [`${key}`],
        queryFn: api,
        refetchOnWindowFocus: false,
      }
}