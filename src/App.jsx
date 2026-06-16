import NavBar from './Nav.jsx'
import { useState, Fragment } from 'react'
import { Outlet } from 'react-router'

import placeholderImg from "./assets/placeholder.webp";

const baseItemList = [
  {name: "Television", price: "$200.00", category: "tech", picLink: placeholderImg}
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
