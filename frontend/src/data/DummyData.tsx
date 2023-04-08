import { useLocation } from "react-router-dom"

interface feature{
	id:Number,
	name:String,
	url?:String | React.Component,
	info ?: String,
	currentlot ?:String
}



export const electronicCategories: Array<feature> = [
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
		url: "https://s.alicdn.com/@sc04/kf/H45f4f94d92e64d02889002eea3fba5ad3.jpg_300x300.jpg",
		name: "Gaming",
	},
];

export const jewelleryCategories:Array<feature> = [
	{
		id: 1,
		url: "https://s.alicdn.com/@sc04/kf/H9b74dd58c0bf46d28409aaf29da527859.jpg_720x720q50.jpg",
		name: "Fine Jewelry",
	},
	{
		id: 2,
		url: "https://s.alicdn.com/@sc04/kf/H9acfe520526a449c846d1c20d7da852fh.jpg_720x720q50.jpg",
		name: "Fashion Jewelry",
	},
	{
		id: 3,
		url: "https://s.alicdn.com/@sc04/kf/H4acf44cc12ee4c07990a35e32b3803a21.jpg_300x300.jpg",
		name: "Costume Jewelry",
	},
];

export const vehicleCategories:Array<feature> = [
	{
		id: 1,
		url: "https://s.alicdn.com/@sc04/kf/H29eaed058de84e1a882878e025702ad5n.jpg_300x300.jpg",
		name: "Cars",
	},
	{
		id: 2,
		url: "https://s.alicdn.com/@sc04/kf/H3b0a194592124a819bd5d14fb777b2cak.jpg_300x300.jpg",
		name: "Trucks",
	},
	{
		id: 3,
		url: "https://s.alicdn.com/@sc04/kf/Hf56fff0d9ecf469f91a999133a389441P.jpg_300x300.jpg",
		name: "Motorcycles",
	},
];

export const fashionCategories:Array<feature> = [
	{
		id: 1,
		url: "https://s.alicdn.com/@sc04/kf/H666a5dd54260462c8921c547b35d08d9j.jpg_300x300.jpg",
		name: "Casual Wear",
	},
	{
		id: 2,
		url: "https://s.alicdn.com/@sc04/kf/Hcc1dd2e67b0940e09e3cca32359195dcZ.jpg_300x300.jpg",
		name: "Formal Wear",
	},
	{
		id: 3,
		url: "https://s.alicdn.com/@sc04/kf/H223a7def1aa74c90a92fd31861499342q.jpg_300x300.jpg",
		name: "Activewear",
	},
];

export const watchesCategories:Array<feature> = [
	{
		id: 1,
		url: "https://s.alicdn.com/@sc04/kf/Hfb7fd0de0de644af8fdf8acf7a042f7fL.jpg_300x300.jpg",
		name: "Casual Watches",
	},
	{
		id: 2,
		url: "https://s.alicdn.com/@sc04/kf/H6c39fa6eee4143c49d6231c07d284ba4f.jpg_300x300.jpg",
		name: "Sports Watches",
	},
	{
		id: 3,
		url: "https://s.alicdn.com/@sc04/kf/H5919937806394eaf89a2c89cb08a5071w.jpg_300x300.jpg",
		name: "Luxury Watches",
	},
];

export const handbagCategories:Array<feature> = [
	{
		id: 1,
		url: "https://s.alicdn.com/@sc04/kf/H91185f17400b4ef38ab108f6441eb6ded.jpg_300x300.jpg",
		name: "Tote Bags",
	},
	{
		id: 2,
		url: "https://s.alicdn.com/@sc04/kf/Hc96a49d62f6640b3bf8dcba1eff20f41y.jpg_300x300.jpg",
		name: "Crossbody Bags",
	},
	{
		id: 3,
		url: "https://s.alicdn.com/@sc04/kf/H87c0217ba9144b45866a32cff2b835f7W.jpg_300x300.jpg",
		name: "Clutch Bags",
	},
];



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
    name:"Fashion"
  },
    {
    id:6,
    name:"Handbags"
  },

];

export const watchesSubCategories:Array<category> = [
	{
		id:1,
		name:"Casual Watches"
	  },
	  {
		id:2,
		name:"Sports Watches"
	  },
		{
		id:3,
		name:"Luxury Watches"
	  },
];

export const jewellerySubCategories:Array<category> = [
	{
		id:1,
		name:"Fine Jewelry"
	  },
	  {
		id:2,
		name:"Fashion Jewelry"
	  },
		{
		id:3,
		name:"Costume Jewelry"
	  },
];

export const vehicleSubCategories:Array<category> = [
	{
		id:1,
		name:"Cars"
	  },
	  {
		id:2,
		name:"Trucks"
	  },
		{
		id:3,
		name:"Motorcycles"
	  },
];

export const fashionSubCategories:Array<category> = [
	{
		id:1,
		name:"Casual Wear"
	  },
	  {
		id:2,
		name:"Formal Wear"
	  },
		{
		id:3,
		name:"Activewear"
	  },
];

export const handbagSubCategories:Array<category> = [
	{
		id:1,
		name:"Tote Bags"
	  },
	  {
		id:2,
		name:"Crossbody Bags"
	  },
		{
		id:3,
		name:"Clutch Bags"
	  },
];

export const electronicSubCategories:Array<category> = [
	{
		id:1,
		name:"Phones"
	  },
	  {
		id:2,
		name:"Audio"
	  },
		{
		id:3,
		name:"Gaming"
	  },
];




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
];


interface profile{
	username:string,
	email:string,
	role:string,
	street:string,
	town:string,
	region:string,
	country:string
};

export const profileDetails:profile = {

	username:"Thant Zin Win",
	email:"thant.zin.windev@gmail.com",
	role:"ADMIN",
	street:"PayainMa Street",
	town:"Myaung",
	region:"Sagaing",
	country:"Myanmar"
}


 export const data = [
	{
	  title:
		"No Reserve, Brand New Retail Stock | Includes Pallets of Retail Returns, Headphones & Speakers, Games, Toys & More | No VAT on Hammer",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415233/images/70842db8-b4f3-4c25-90c3-4a9bc2f71368.png?w=250",
	  price: "400",
	  owner: "Thant Zin Win",
	  proCat: "Electronics",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	{
	  title:
		"Laptops, Computers & Tech accessories | Including Apple, Windows & Dell Products",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415237/images/ecdee6cd-1fb3-4794-a488-2b7086236fdb.png?w=250",
	  price: "400",
	  owner: "Thant Zin Win",
	  proCat: "Electronics",currentOwner:"Thant",
	  currentPrice:400
	},
	//watches
	{
	  title:
		"High Street Designer Watches | All Brand New with Delivery Available",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415230/images/7fca4d54-fc62-4029-957e-6421606f68cf.png?w=250",
	  price: "",
	  owner: "Thant Zin Win",
	  proCat: "Watches",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	{
	  title:
		"Pre-Owned and New Luxury Watches - Audemars Piguet, Omega, Rolex, Oris, Bucherer",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415249/images/d7f36a41-9e3d-4310-83cb-8eb037ff751e.png?w=250",
	  price: "",
	  owner: "Thant Zin Win",
	  proCat: "Watches",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	{
	  title:
		"No Reserve Antiques & Collectables | Jewellery | Homes & Interiors | Porcelain & Glass | Vintage Fashion & more. FREE UK Shipping unless otherwise specified",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415170/images/98f208e2-7cf0-4245-9a17-94a2e71e38c5.png?w=250",
	  price: "",
	  owner: "Thant Zin Win",
	  proCat: "Jewellery",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	{
	  title: "Stunning Collection of Gemstones and Jewellery | Very Low Reserves",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415244/images/8b5bc45f-3158-4ebc-8965-d06ecd058ae7.png?w=250",
	  price: "",
	  owner: "Thant Zin Win",
	  proCat: "Jewellery",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	//venchile
	{
	  title: "Industrial Food Processing Factory Equipment & Machinery",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415227/images/2944909a-055e-43e7-ab0b-9f17610dd9dd.jpg?w=250",
	  price: "",
	  owner: "Thant Zin Win",
	  proCat: "Watches",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	{
	  title: "Plant, Machinery, Automotive & Number Plates | Collective Auction",
	  image:
		"https://portal-images.azureedge.net/auctions-2023/wi415214/images/5d471ecd-e71e-4e3e-a7db-80c8ce7d5d3f.png?w=250",
	  price: "",
	  owner: "Thant Zin Win",
	  proCat: "Watches",
	  currentOwner:"Thant",
	  currentPrice:400
	},
	//decorative
 ]



interface overviewProps{
	electronicUrl:string
	jewelleryUrl:string
	watchesUrl:string
	vehicleUrl:string
	fashionUrl:string
	handbagUrl:string
}

export const overviewData : overviewProps ={
	 electronicUrl: "https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/6230a4b50eedd6edaa6890a3_Electronics-Hero-Image2.jpg",
	 jewelleryUrl : "https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
	 watchesUrl:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/630e1f8c75ed090e1e6e8762_watches.png",
	 vehicleUrl:"https://hotweelz.com/wp-content/uploads/2021/12/hakon-sataoen-yQ9mZzBdDAM-unsplash-1536x966.jpg",
	 fashionUrl:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/620e654d41122f2c5e9982ba_Fashion-Hero-Image.jpg",
	 handbagUrl:"https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/6220db8951515a430b634155_Handbags-Hero-Image.jpg"
 }
  
	
