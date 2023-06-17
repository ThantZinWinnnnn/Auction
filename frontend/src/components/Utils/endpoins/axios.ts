
import axios from "axios";

import {
  User,
  LoginUser,
  Product,
  UpdateProduct,
  SignUpUser,
  BidProductByUser,
  ForgotPassword
} from "../apiTypes/apiTypes";

//  const BASE_URL = "https://auction-backend-nb7b.onrender.com/api";
  const BASE_URL = "http://localhost:3000/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Content-Type"]= "application/json"

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const authAPI = {
  signup: (userData: SignUpUser) =>
    axiosInstance.post("/user/signup", userData),
  signin: (userData: LoginUser) => axiosInstance.post("/user/signin", userData),
  forgotPassword:(data:ForgotPassword)=> axiosInstance.put("/user/forgot",data)
};

const userInfoAPI = {
  getLoggedInUser: () => axiosInstance.get("/user/getUser"),
  updateProfile: (data: User) => axiosInstance.put("/user/updateProfile", data),
  reUpdateProfile:(data:User) => axiosInstance.put("/user/reUpdateProfile",data)
};

const productAPI = {
  createProduct: (productData: Product) =>
    axiosInstance.post("/products/create", productData),
  updateProduct: (productId: string, productData: UpdateProduct) =>
    axiosInstance.put(`/products/${productId}`, productData),
  deleteProduct: (productId: string) =>
    axiosInstance.delete(`/products/${productId}`),
  getProduct: (productId: string | undefined) =>
    axiosInstance.get(`/products/${productId}`),
  getAllProduct: () => axiosInstance.get("/products/allProducts"),
  getProductsByUserId: () => axiosInstance.get('/user/product'),
  getUserWinProducts:()=>axiosInstance.get("/products/auction/winProducts"),
  getUserLostProducts:()=>axiosInstance.get("/products/auction/lostProducts"),
  getUserWatchListProducts:()=>axiosInstance.get("/products/auction/watchlistProducts"),
  bidProduct: (data: BidProductByUser) =>
    axiosInstance.put(`/products/auction/bid`, data),
  firstBidProduct:(productData:BidProductByUser)=>
    axiosInstance.put(`/products/bid`,productData),
  addWatchListProduct:(data:any)=>axiosInstance.post(`/products/watchList`,data),
  removeWatchListProduct:(data:any)=> axiosInstance.put('/products/removeWatchList',data),

  //detail api
  getProductByCategory: (category: JSON | undefined) =>
    axiosInstance.post("/products/category",category),
  searchProduct: (product: string) =>
    axiosInstance.get(`/products/queryProduct?product=${product}`),
    getProductBySubCategory:(subCategory:JSON | undefined) => 
    axiosInstance.post("/products/subCategory",subCategory)
};

export { authAPI, productAPI, userInfoAPI };
