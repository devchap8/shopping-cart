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
  const [currQuery, setCurrQuery] = useState("");
  const [cartList, setCartList] = useState({Television: 1, "Gaming Mouse": 1});
  
  const filterByCat = (cat, list = baseItemList, chain = true) => {
    setCurrCat(cat);
    let newList = [...list];
    if(cat !== "all") newList = newList.filter(item => item.category === cat);
    if(chain) {
      newList = filterByQuery(currQuery, newList, false);
      newList = sortByPrice(currSort, newList, false);
      setItemList(newList);
    }  
    return newList;
  }

  const sortByPrice = (sortType, list = baseItemList, chain = true) => {
    setCurrSort(sortType);
    let newList = [...list];
    if(sortType === "lowest") newList = list.toSorted((a, b) => a.price - b.price);
    else if(sortType === "highest") newList = list.toSorted((a, b) => b.price - a.price);
    if(chain) {
      newList = filterByCat(currCat, newList, false);
      newList = filterByQuery(currQuery, newList, false);
      setItemList(newList);
    } 
    return newList;
  }

  const filterByQuery = (query, list = baseItemList, chain = true) => {
    setCurrQuery(query);
    let newList = [...list];
    const regex = new RegExp(query.trim(), "i");
    newList = newList.filter(item => regex.test(item.name));
    if(chain) {
      newList = filterByCat(currCat, newList, false);
      newList = sortByPrice(currSort, newList, false);
      setItemList(newList);
    }
    return newList;
  }

  const addToCart = (e, itemName) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let qty = formData.get("qty");
    qty = Math.max(+qty, 0);
    setCartList(prevCart => ({
      ...prevCart,
      [itemName]: +qty
    }));
  }

  const pressStorePlusMinus = (e, isPlus) => {
    e.preventDefault();
    const input = isPlus ? e.target.nextElementSibling : e.target.previousElementSibling;
    const newVal = isPlus ? +input.value + 1 : +input.value - 1;
    if(newVal >= 0 && newVal <= 99) input.value = newVal;
  }

  const pressCartPlusMinus = (e, isPlus) => {
    e.preventDefault();
    const itemName = e.target.getAttribute("data-item-name");
    isPlus 
      ? setCartList(prevCart => ({...prevCart, [itemName]: Math.min(prevCart[itemName] + 1, 99)}))
      : setCartList(prevCart => ({...prevCart, [itemName]: Math.max(prevCart[itemName] - 1, 1)}))
  }

  const cont = {itemList, cartList, setItemList, setCartList, filterByCat, sortByPrice, filterByQuery, addToCart, pressStorePlusMinus,
    pressCartPlusMinus
  };

  return (
    <div className="" >
      <header className={"sticky top-0"}>
        <NavBar cartList={cartList}/>
      </header>
      <main className={""}>
        <Outlet context={cont}/>
      </main>
    </div>
  )
}
