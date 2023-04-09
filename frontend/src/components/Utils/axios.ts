// import axios from "axios";

// const client = axios.create({baseURL:"http://localhost:3000/api"});

// export const request = ({...options})=>{
//     client.defaults.headers.common.Authorization = `Bearer Token`;

//     const onSuccess = (response:any) => response;
//     const onError = (error: any)=>{
//         return error
//     }

//     return client(options).then(onSuccess).catch(onError)
// };

// export const signUpRequest = ()

import axios from "axios";

import { User, LoginUser, Product, UpdateProduct,SignUpUser } from "./apiTypes/apiTypes";

const BASE_URL = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers:{
    "Content-Type":"application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const authAPI = {
  signup: (userData: SignUpUser) => axiosInstance.post("/user/signup", userData),
  signin: (userData: LoginUser) => axiosInstance.post("/user/signin", userData),
};

const productAPI = {
  createProduct: (productData: Product) =>
    axiosInstance.post("/products/create", productData),
  updateProduct: (productId: string, productData: UpdateProduct) =>
    axiosInstance.put(`/products/${productId}`, productData),
  deleteProduct: (productId: string) =>
    axiosInstance.delete(`/products/${productId}`),
  getProduct: (productId: string) =>
    axiosInstance.get(`/products/${productId}`),
  getAllProduct: () => axiosInstance.get("/products/allProducts"),
  bidProduct: (productId: string, price: number) =>
    axiosInstance.put(`/products/auction/bid/${productId}`, price),

  //detail api
  getProductByCategory: (categpry: string) =>
    axiosInstance.get(`/products/category?cat=${categpry}`),
  searchProduct: (product: string) =>
    axiosInstance.get(`/products/search?product=${product}`),
};

export { authAPI, productAPI };
