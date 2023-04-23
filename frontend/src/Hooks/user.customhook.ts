import { AxiosResponse } from "axios"
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type  apiAuth = (data:any) => Promise<AxiosResponse<any, any>>
type Handler = (data:any) => void;


export const useAuthentication= (api:apiAuth,successHandler:Handler)=> {
    const navigate = useNavigate();
    return useMutation(
        api,
        {
          onSuccess: successHandler,
          onError: () => {
            navigate("/auth");
          },
        }
      );
}