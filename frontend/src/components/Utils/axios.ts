
import axios from "axios";

import {
  User,
  LoginUser,
  Product,
  UpdateProduct,
  SignUpUser,
  BidProductByUser
} from "./apiTypes/apiTypes";

const BASE_URL = "http://localhost:3000/api";

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
};

const userInfoAPI = {
  getLoggedInUser: () => axiosInstance.get("/user/getUser"),
  updateProfiel: (data: User) => axiosInstance.put("/user/updateProfile", data),
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
  bidProduct: (data: BidProductByUser) =>
    axiosInstance.put(`/products/auction/bid`, data),
  firstBidProduct:(productData:BidProductByUser)=>
    axiosInstance.put(`/products/bid`,productData),

  //detail api
  getProductByCategory: (category: JSON | undefined) =>
    axiosInstance.post("/products/category",category),
  searchProduct: (product: string) =>
    axiosInstance.get(`/products/search?product=${product}`),
};

export { authAPI, productAPI, userInfoAPI };
