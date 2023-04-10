
export interface UserLocation{
    street:string,
    town:string,
    region:string,
    country:string,
}

export interface ProfileUserProps{
    email:string,
    name:string,
    password?:string,
    profileUrl?:string,
    backgroundUrl?:string,
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
    subCategory:string
}

export type UpdateProduct = Partial<Product>;

export interface LotProduct{
    id:string,
    bidPrice:string,
    product:Array<Product>,

}
