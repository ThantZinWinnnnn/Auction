import { Component } from "react";

import SummerizeItems from "../assets/images/summerizeItems.jpg"
import smallestGadegats from "../assets/images/smallestGadegats.jpg"
import kitchenRefri from "../assets/images/kitchenRefri.jpg"
import kitchenAndAccessories from "../assets/images/kitchenAndAccessories.jpg"

interface category {
  id:Number,
  name:String
}

export const PrimaryCategories: Array<category> = [
  {
    id:1,
    name:"Watches"
  },
  {
    id:2,
    name:"Jewellery"
  },
    {
    id:3,
    name:"Electrical"
  },
    {
    id:4,
    name:"Automotive & Vehicles"
  },
    {
    id:5,
    name:"Decorative Art"
  },
    {
    id:6,
    name:"Asian Art"
  },

];

interface feature{
  id:Number,
  name:String,
  url?:String | React.Component,
  info ?: String,
  currentlot ?:String
}

export const relatedItems: Array<feature> = [
	{
		id: 1,
		name: "relatedItem1",
		url: "https://portal-images.azureedge.net/auctions-2023/wi415196/images/309e5596-d9ac-4cd2-8eeb-afa200ee7696.jpg?w=250",
		info: "Mystery Box RRP £480.00",
		currentlot: "Lot 3800",
	},
	{
		id: 2,
		name: "relatedItem2",
		url: "https://portal-images.azureedge.net/auctions-2023/wi415196/images/c3b9288a-bd9f-44b1-b87f-afa200ee82ab.jpg?w=250",
		info: "5 x 61 Piece Screwdriver, Star & Alan Key Set. RRP £40",
		currentlot: "Lot 6100",
	},
	{
		id: 3,
		name: "relatedItem3",
		url: "https://portal-images.azureedge.net/auctions-2023/wi415196/images/71320481-2bf2-4998-a735-afa200eec3c0.jpg?w=250",
		info: "40 x Assorted Mesh Sports T Shirts - Various Sizes RRP £359.60",
		currentlot: "Lot 17000",
	},
	{
		id: 4,
		name: "relatedItem4",
		url: "https://portal-images.azureedge.net/auctions-2023/wi415196/images/eef71db1-fe8f-43ba-bc24-afa200ef19c0.jpg?w=250",
		info: "11 x Studio White Aluminium Venetian Blinds 180 X 180cm RRP £35.00 Each",
		currentlot: "Lot 20000",
	},
	{
		id: 5,
		name: "relatedItem5",
		url: "https://portal-images.azureedge.net/auctions-2023/wi415196/images/87290fd7-9955-42c5-836d-afa200efa949.jpg?w=250",
		info: "Mekamon Robot",
		currentlot: "Lot 580000",
	}
];

export const shopCategories: Array<feature> = [
	{
		id: 1,
		url: "https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/62166267f1bac34f6ac84ff3_Phone-Category.jpg",
		name: "Phones",
	},
	{
		id: 2,
		url: "https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/6216632d29b28bab1b12d77e_Audio-Category.jpg",
		name: "Audio",
	},
	{
		id: 3,
		url: "https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/6216632d29b28bab1b12d77e_Audio-Category.jpg",
		name: "Gaming",
	},
];


export const moreAuctions:Array<feature> = [
	{
		id:1,
		url:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/62175b85827f37aebeaff95b_Toys-Category.jpg",
		name:"Retail Returns"
	},
	{
		id:1,
		url:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/62175b85827f37aebeaff95b_Toys-Category.jpg",
		name:"Home Improvement"
	},
	{
		id:1,
		url:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/62175b85827f37aebeaff95b_Toys-Category.jpg",
		name:"Children & Baby"
	},
	{
		id:1,
		url:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/62175b85827f37aebeaff95b_Toys-Category.jpg",
		name:"High Street Goods"
	},
];

export const information:Array<feature> = [
	{
		id:1,
		name:"Sign Up for Email"
	},
	{
		id:2,
		name:"Bidding"
	},
	{
		id:3,
		name:"Selling"
	},
	{
		id:4,
		name:"Online Auctions"
	},
	{
		id:5,
		name:"Orders & Payments"
	},
	{
		id:6,
		name:"Contact Us"
	},
];


export const carouselData:Array<feature> =[
	{
		id:1,
		url:"https://media.istockphoto.com/id/653058890/photo/home-appliances-group-of-white-refrigerator-washing-machine-stove-microwave.jpg?s=612x612&w=0&k=20&c=OzENCxEGezSfCY_yWTLJRm-M8RIvPjdqEWqexJBoBEA=",
		name:"GadeGats"
	},
	{
		id:2,
		url:"https://media.istockphoto.com/id/1453338188/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.jpg?s=612x612&w=0&k=20&c=hhqrDjtkBRNy0spzlf8-W6pERJkT8i4lxAlYz7aPjHM=",
		name:"Electronics"
	},
	{
		id:3,
		url:"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name:"Laptops And Computers"
	},
	{
		id:4,
		url:"https://media.istockphoto.com/id/1307512096/photo/asian-chinese-female-boutique-shop-clothing-store-owner-checking-stock-with-digital-tablet.jpg?s=2048x2048&w=is&k=20&c=QDMw0b4F1a4c89xZK60t56-WAx3yJjxqFVEVA331LNs=",
		name:"Fashions"
	},
]