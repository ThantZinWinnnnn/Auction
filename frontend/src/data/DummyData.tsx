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
		url: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Laptops",
	},
	{
		id: 3,
		url: "https://images.unsplash.com/photo-1582893719336-719bbd6b329d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxoZWFkcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name: "Audio",
	},
];

export const jewelleryCategories:Array<feature> = [
	{
		id: 4,
		url: "https://s.alicdn.com/@sc04/kf/H9b74dd58c0bf46d28409aaf29da527859.jpg_720x720q50.jpg",
		name: "Fine Jewelry",
	},
	{
		id: 5,
		url: "https://s.alicdn.com/@sc04/kf/H9acfe520526a449c846d1c20d7da852fh.jpg_720x720q50.jpg",
		name: "Fashion Jewelry",
	},
	{
		id: 6,
		url: "https://s.alicdn.com/@sc04/kf/H4acf44cc12ee4c07990a35e32b3803a21.jpg_300x300.jpg",
		name: "Costume Jewelry",
	},
];

export const vehicleCategories:Array<feature> = [
	{
		id: 7,
		url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Cars",
	},
	{
		id: 8,
		url: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name: "Trucks",
	},
	{
		id: 9,
		url: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Motorcycles",
	},
];

export const fashionCategories:Array<feature> = [
	{
		id: 10,
		url: "https://s.alicdn.com/@sc04/kf/H666a5dd54260462c8921c547b35d08d9j.jpg_300x300.jpg",
		name: "Casual Wear",
	},
	{
		id: 11,
		url: "https://s.alicdn.com/@sc04/kf/Hcc1dd2e67b0940e09e3cca32359195dcZ.jpg_300x300.jpg",
		name: "Formal Wear",
	},
	{
		id: 12,
		url: "https://s.alicdn.com/@sc04/kf/H223a7def1aa74c90a92fd31861499342q.jpg_300x300.jpg",
		name: "Activewear",
	},
];

export const watchesCategories:Array<feature> = [
	{
		id: 13,
		url: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name: "Casual Watches",
	},
	{
		id: 14,
		url: "https://img.freepik.com/free-psd/smartwatch-mock-up-design_1135-61.jpg?size=626&ext=jpg",
		name: "Sports Watches",
	},
	{
		id: 15,
		url: "https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241141.jpg?size=626&ext=jpg&ga=GA1.1.1044166412.1681362426&semt=ais",
		name: "Luxury Watches",
	},
];

export const handbagCategories:Array<feature> = [
	{
		id: 16,
		url: "https://s.alicdn.com/@sc04/kf/H91185f17400b4ef38ab108f6441eb6ded.jpg_300x300.jpg",
		name: "Tote Bags",
	},
	{
		id: 17,
		url: "https://s.alicdn.com/@sc04/kf/Hc96a49d62f6640b3bf8dcba1eff20f41y.jpg_300x300.jpg",
		name: "Crossbody Bags",
	},
	{
		id: 18,
		url: "https://s.alicdn.com/@sc04/kf/H87c0217ba9144b45866a32cff2b835f7W.jpg_300x300.jpg",
		name: "Clutch Bags",
	},
];



interface category {
  id:Number,
  name:String,
  path?:String
};

export const IntroMenu:Array<category> = [
	{
		id:1,
		name:"Account Info",
		path:"/user/profile"
	},
	{
		id:2,
		name:"Favourite Cart",
		path:"/user/profile"
	},
	{
		id:3,
		name:"Sell Product",
		path:"/user/create"
	},
	{
		id:4,
		name:"Win Products",
		path:"/user/winProducts"
	},
	{
		id:5,
		name:"Lost Products",
		path:"/user/lostProducts"
	},
]

export const PrimaryCategories: Array<category> = [
  {
    id:1,
    name:"Watches",
	path:"/auction/watches"
  },
  {
    id:2,
    name:"Jewellery",
	path:"/auction/jewellery"
  },
    {
    id:3,
    name:"Electrical",
	path:"/auction/electronic"
  },
    {
    id:4,
    name:"Vehicles",
	path:"/auction/vehicle"
  },
    {
    id:5,
    name:"Fashion",
	path:"/auction/fashion"
  },
    {
    id:6,
    name:"Handbags",
	path:"/auction/handbag"
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
		name:"Laptops"
	  },
		{
		id:3,
		name:"Audio"
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
		url:"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name:"Electrical"
	},
	{
		id:2,
		url:"https://media.istockphoto.com/id/1356569932/photo/style-and-confidence.jpg?b=1&s=170667a&w=0&k=20&c=MvMzYpB6-WWMn2e95A2H6ICu0XERnL61PwvnQYrbr3o=",
		name:"Fashion"
	},
	{
		id:3,
		url:"https://media.istockphoto.com/id/609094568/photo/watch-shop-window.jpg?b=1&s=170667a&w=0&k=20&c=xRqeJjcR2U-DvnTOJ0zu4nYMWfgxu9aqqPjSbbv-vJg=",
		name:"Watches"
	},
	{
		id:4,
		url:"https://images.unsplash.com/photo-1574582242931-e2b1d1f65d4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name:"Jewellery"
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

 interface lists {
	id:string,
	name: string;
  }


 export const mobileLists: Array<lists> = [
	{ name: "Auctions",
	  id:"1"    
  },
	{ name: "Liquidations",
	  id:"2"    
  },
	{ name: "High Street Goods",
	  id:"3"    
  },
	{ name: "Children & Baby",
	  id:"4"    
  },
	{ name: "Electronics",
	  id:"5"    
  },
	{ name: "Art",
	  id:"6"    
  },
	{ name: "Jewellery",
	  id:"7"    
  },
	{ name: "Watches",
	  id:"8"    
  },
	{ name: "Fashion",
	  id:"9"    
  },
	{ name: "About Us",
	  id:"10"    
  },
	{ name: "Sign Up",
	  id:"11"    
  },
	{ name: "Account",
	  id:"12"    
  },
	{name:"Profile Setting",
	  id:"13"
  },
	{name:"Sell Products Lists",
	  id:"14"
  },
	{name:"Win Lot Products",
	  id:"15"
  },
	{name:"Lost Lot Products",
	  id:"16"
  }
  ];
  
	
