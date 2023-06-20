import { SelectChangeEvent } from "@mui/material";
import { Dayjs } from "dayjs";

export interface UserLocation{
    id?:string,
    street:string,
    town:string,
    region:string,
    country:string,
}

export interface ProfileUserProps{
    email:string,
    name:string,
    password?:string,
    profileUrl?:string | undefined,
    backgroundUrl?:string | undefined,
    location:Array<UserLocation>
}



export interface User{
    email:string,
    name:string,
    password?:string,
    profileUrl?:string,
    backgroundUrl?:string,
    street:string,
    town:string,
    region:string,
    country:string,
    locationId?:string,
}

export type LoginUser = Partial<User>;
export type SignUpUser = Partial<User>;


export interface Product {
    title:string,
    image:string,
    price:number,
    owner?:string,
    currentOwner?:string,
    createdAt:string,
    updatedAt:string,
    category:string,
    subCategory:string,
}

export type UpdateProduct = Partial<Product>;

export interface LotProduct{
    id:string,
    bidPrice:string,
    product:Array<Product>,

}

interface category{
    name:string
}

export interface ProductWatchList {
    id:string | undefined,
    image:string,
    owner:string,
    price:number,
    title:string,
    createdAt:string,
    updatedAt:string,
    category:category,
    subCategory:category,
    currentBidPrice:string | null,
    currentOwnerName:string | null,
    productId?:string
}

export interface ResponseProduct {
    id:string | undefined,
    image:string,
    owner:string,
    price:number,
    title:string,
    createdAt:string,
    updatedAt:string,
    category:category,
    subCategory:category,
    currentBidPrice:number | null,
    currentOwnerName:string | null,
    watchListProducts?:Array<ProductWatchList>
}

export interface BidProductByUser{
    productId:string,
    price:number
};

export interface UserProductsResponse{
    id:string | undefined,
    image:string,
    owner:string,
    price:number,
    title:string,
    createdAt:string,
    updatedAt:string,
    category:category,
    subCategory:category,
    currentBidPrice:string | null,
    currentOwnerName:string | null,
    currentOwnerId:string,
    sellerId:string
}

export interface ForgotPassword {
    email:string,
    newPass:string
}

export interface WatchListNotiType{
    text:string,
    bgC:string
}


export interface OwnerUpdateProduct{
    price:number,
    currentBidPrice:number | null,
    category:string,
    subCategory:string,
    date:any,
    startDate:any
}

export interface OwnerUpdateHandler{
    priceHandler:(event: SelectChangeEvent)=>void,
    currentPriceHandler:(event: SelectChangeEvent)=>void,
    categoryHandler:(event: SelectChangeEvent)=>void,
    subCategoryHandler:(event: SelectChangeEvent)=>void,
    dateHandler:(newValue: React.SetStateAction<Dayjs | null>)=>void
    finalUpdateHandler:()=>void,
    startDateHandler:(newValue: React.SetStateAction<Dayjs | null>)=>void
}

export interface finalUpdateProduct{
    price:number,
    currentBidPrice:number | null,
    category:string,
    subCategory:string,
    date:string,
    productId:string | undefined,
    startDate:string
}