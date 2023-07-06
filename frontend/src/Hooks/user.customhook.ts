import { AxiosResponse } from "axios"
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type  apiAuth = (data:any) => Promise<AxiosResponse<any, any>>
type Handler = (data:any) => void;
const notifyForWrongPass = ()=> 
 toast.error("Wrong Password, Please Try Again")


export const useAuthentication= (api:apiAuth,successHandler:Handler)=> {
    const navigate = useNavigate();
    return useMutation(
        api,
        {
          onSuccess: successHandler,
          onError: () => {
            notifyForWrongPass();
            navigate("/auth");
          },
        }
      );
}