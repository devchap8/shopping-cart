import NavBar from './Nav.jsx'
import { useState, Fragment } from 'react'
import { Outlet } from 'react-router'

import placeholderImg from "./assets/placeholder.webp";
import artImg from "./assets/art.avif";
import backpackImg from "./assets/backpack.avif";
import bathmatImg from "./assets/bathmat.avif";
import beanieImg from "./assets/beanie.avif";
import blanketImg from "./assets/blanket.avif";
import candleImg from "./assets/candle.avif";
import headphonesImg from "./assets/headphones.avif";
import hoodieImg from "./assets/hoodie.avif";
import jeansImg from "./assets/jeans.avif";
import jumpropeImg from "./assets/jumprope.avif";
import kettleImg from "./assets/kettle.avif";
import keyboardImg from "./assets/keyboard.avif";
import lampImg from "./assets/lamp.avif";
import monitorImg from "./assets/monitor.avif";
import mouseImg from "./assets/mouse.avif";
import mugsImg from "./assets/mugs.avif";
import pillowImg from "./assets/pillow.avif";
import plannerImg from "./assets/planner.avif";
import plantsImg from "./assets/plants.avif";
import raincoatImg from "./assets/raincoat.avif";
import razorImg from "./assets/razor.avif";
import shadesImg from "./assets/shades.avif";
import shirtImg from "./assets/shirt.avif";
import sneakersImg from "./assets/sneakers.avif";
import speakerImg from "./assets/speaker.avif";
import ssdImg from "./assets/ssd.avif";
import teeImg from "./assets/tee.avif";
import televisionImg from "./assets/television.avif";
import tentImg from "./assets/tent.avif";
import toiletriesImg from "./assets/toiletries.avif";
import toteImg from "./assets/tote.avif";
import vestImg from "./assets/vest.avif";
import watchImg from "./assets/watch.avif";
import waterbottleImg from "./assets/waterbottle.avif";
import webcamImg from "./assets/webcam.avif";
import yogamatImg from "./assets/yogamat.avif";

const baseItemList = [
  // TECH (9 items)
  { name: "Television", price: 200, category: "tech", pic: televisionImg },
  { name: "Mechanical Keyboard", price: 85, category: "tech", pic: keyboardImg },
  { name: "Wireless Headphones", price: 150, category: "tech", pic: headphonesImg },
  { name: "Gaming Mouse", price: 45, category: "tech", pic: mouseImg },
  { name: "Ultra-Wide Monitor", price: 520, category: "tech", pic: monitorImg },
  { name: "Smart Watch Series 5", price: 199, category: "tech", pic: watchImg },
  { name: "Bluetooth Speaker", price: 60, category: "tech", pic: speakerImg },
  { name: "External 1TB SSD", price: 110, category: "tech", pic: ssdImg },
  { name: "Webcam 4K Pro", price: 95, category: "tech", pic: webcamImg },

  // CLOTHING (9 items)
  { name: "Cotton Hoodie", price: 55, category: "clothing", pic: hoodieImg },
  { name: "Slim Fit Denim Jeans", price: 40, category: "clothing", pic: jeansImg },
  { name: "Graphic Tee", price: 25, category: "clothing", pic: teeImg },
  { name: "Knitted Wool Beanie", price: 18, category: "clothing", pic: beanieImg },
  { name: "High-Top Sneakers", price: 65, category: "clothing", pic: sneakersImg },
  { name: "Black Shades", price: 20, category: "clothing", pic: shadesImg },
  { name: "Waterproof Raincoat", price: 120, category: "clothing", pic: raincoatImg },
  { name: "Button-Down Shirt", price: 45, category: "clothing", pic: shirtImg },
  { name: "Quilted Puffer Vest", price: 80, category: "clothing", pic: vestImg },

  // HOME (9 items)
  { name: "Rose Scented Candle", price: 15, category: "home", pic: candleImg },
  { name: "Ceramic Mug Set", price: 22, category: "home", pic: mugsImg },
  { name: "Electric Kettle", price: 48, category: "home", pic: kettleImg },
  { name: "Fleece Throw Blanket", price: 35, category: "home", pic: blanketImg },
  { name: "Abstract Wall Art", price: 50, category: "home", pic: artImg },
  { name: "Minimalist Desklamp", price: 38, category: "home", pic: lampImg },
  { name: "Succulents 4 Set", price: 28, category: "home", pic: plantsImg },
  { name: "Memory Foam Pillow", price: 42, category: "home", pic: pillowImg },
  { name: "Novelty Bath Mat", price: 20, category: "home", pic: bathmatImg },

  // LIFESTYLE (9 items)
  { name: "Leather Backpack", price: 75, category: "lifestyle", pic: backpackImg },
  { name: "Filtered Water Bottle", price: 24, category: "lifestyle", pic: waterbottleImg },
  { name: "Yoga Mat", price: 55, category: "lifestyle", pic: yogamatImg },
  { name: "Electronic Razor", price: 60, category: "lifestyle", pic: razorImg },
  { name: "Weekly Planner", price: 18, category: "lifestyle", pic: plannerImg },
  { name: "Travel Toiletry Kit", price: 32, category: "lifestyle", pic: toiletriesImg },
  { name: "Weighted Jump Rope", price: 20, category: "lifestyle", pic: jumpropeImg },
  { name: "Canvas Tote Bag", price: 12, category: "lifestyle", pic: toteImg },
  { name: "Luxuary Tent", price: 235, category: "lifestyle", pic: tentImg }
];

export default function App() {

  const [itemList, setItemList] = useState(baseItemList);
  const [currCat, setCurrCat] = useState("all");
  const [currSort, setCurrSort] = useState("category");
  
  const filterByCat = (cat, list = baseItemList) => {
    setCurrCat(cat);
    if(cat === "all") setItemList(list);
    else setItemList(list.filter(item => item.category === cat));

    // filter by price and search term later here
  }

  const sortByPrice = (sortType) => {
    setCurrSort(sortType, list = baseItemList);
    if(sortType === "category") setItemList(list);
    // else setItemList(list.sort(item => item.))
  }



  const cont = {itemList, setItemList, filterByCat};

  return (
    <Fragment >
      <NavBar />
      <Outlet context={cont}/>
    </Fragment>
  )
}
