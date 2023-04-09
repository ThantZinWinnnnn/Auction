export interface UserLocation{
    id:string,
    street:string,
    town:string,
    region:string,
    country:string,
}


export interface User{
    id:string,
    email:string,
    name:string,
    password:string,
    profileUrl?:string,
    location?:Array<UserLocation>
}

export type LoginUser = Partial<User>;
export type SignUpUser = Partial<User>;


export interface Product {
    id:string,
    title:string,
    image:string,
    price:number,
    owner:string,
    currentOwner?:string,
    createdAt:string,
    updatedAt:string,
    category:string,
    subCategory:string
}

export type UpdateProduct = Partial<Product>;

export interface LotProduct{
    id:string,
    bidPrice:string,
    product:Array<Product>,

}
