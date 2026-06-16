import NavBar from './Nav.jsx'
import { useState, Fragment } from 'react'
import { Outlet } from 'react-router'

import placeholderImg from "./assets/placeholder.webp";

const baseItemList = [
  // TECH (9 items)
  { name: "Television", price: "$200.00", category: "tech", pic: placeholderImg },
  { name: "Mechanical Keyboard", price: "$85.00", category: "tech", pic: placeholderImg },
  { name: "Wireless Headphones", price: "$150.00", category: "tech", pic: placeholderImg },
  { name: "Gaming Mouse", price: "$45.00", category: "tech", pic: placeholderImg },
  { name: "Ultra-Wide Monitor", price: "$320.00", category: "tech", pic: placeholderImg },
  { name: "Smart Watch Series 5", price: "$199.00", category: "tech", pic: placeholderImg },
  { name: "Bluetooth Speaker", price: "$60.00", category: "tech", pic: placeholderImg },
  { name: "External 1TB SSD", price: "$110.00", category: "tech", pic: placeholderImg },
  { name: "Webcam 4K Pro", price: "$95.00", category: "tech", pic: placeholderImg },

  // CLOTHING (9 items)
  { name: "Cotton Hoodie", price: "$55.00", category: "clothing", pic: placeholderImg },
  { name: "Slim Fit Denim Jeans", price: "$40.00", category: "clothing", pic: placeholderImg },
  { name: "Graphic Tee", price: "$25.00", category: "clothing", pic: placeholderImg },
  { name: "Knitted Wool Beanie", price: "$18.00", category: "clothing", pic: placeholderImg },
  { name: "High-Top Sneakers", price: "$65.00", category: "clothing", pic: placeholderImg },
  { name: "Mesh Shorts", price: "$30.00", category: "clothing", pic: placeholderImg },
  { name: "Waterproof Raincoat", price: "$120.00", category: "clothing", pic: placeholderImg },
  { name: "Button-Down Shirt", price: "$45.00", category: "clothing", pic: placeholderImg },
  { name: "Quilted Puffer Vest", price: "$80.00", category: "clothing", pic: placeholderImg },

  // HOME (9 items)
  { name: "Rose Scented Candle", price: "$15.00", category: "home", pic: placeholderImg },
  { name: "Ceramic Mug Set", price: "$22.00", category: "home", pic: placeholderImg },
  { name: "Electric Kettle", price: "$48.00", category: "home", pic: placeholderImg },
  { name: "Fleece Throw Blanket", price: "$35.00", category: "home", pic: placeholderImg },
  { name: "Abstract Wall Art", price: "$50.00", category: "home", pic: placeholderImg },
  { name: "Minimalist Desklamp", price: "$38.00", category: "home", pic: placeholderImg },
  { name: "Succulents 3 Set", price: "$28.00", category: "home", pic: placeholderImg },
  { name: "Memory Foam Pillow", price: "$42.00", category: "home", pic: placeholderImg },
  { name: "Bamboo Bath Mat", price: "$20.00", category: "home", pic: placeholderImg },

  // LIFESTYLE (9 items)
  { name: "Leather Backpack", price: "$75.00", category: "lifestyle", pic: placeholderImg },
  { name: "Filtered Water Bottle", price: "$24.00", category: "lifestyle", pic: placeholderImg },
  { name: "Yoga Mat", price: "$55.00", category: "lifestyle", pic: placeholderImg },
  { name: "Polarized Sunglasses", price: "$40.00", category: "lifestyle", pic: placeholderImg },
  { name: "Weekly Planner", price: "$18.00", category: "lifestyle", pic: placeholderImg },
  { name: "Travel Toiletry Kit", price: "$32.00", category: "lifestyle", pic: placeholderImg },
  { name: "Weighted Jump Rope", price: "$20.00", category: "lifestyle", pic: placeholderImg },
  { name: "Canvas Tote Bag", price: "$12.00", category: "lifestyle", pic: placeholderImg },
  { name: "Portable Power Bank", price: "$35.00", category: "lifestyle", pic: placeholderImg }
];

export default function App() {

  const [itemList, setItemList] = useState(baseItemList);

  return (
    <Fragment >
      <NavBar />
      <Outlet context={[itemList, setItemList]}/>
    </Fragment>
  )
}
