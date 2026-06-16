import homeSvg from "./assets/home.svg";
import storeSvg from "./assets/store.svg";
import cartSvg from "./assets/cart.svg";
import { Link } from "react-router";

export default function NavBar() {
    return (
        <nav className={"flex h-20 p-8 items-center bg-brand-main text-ui-white"}>
            <div className={"text-4xl font-bold tracking-wide"}>Devbay</div>
            <div className={"flex gap-4 ml-auto"}>
                <Link to="/"    > <img className={"w-12 hover:scale-115 ease-in-out duration-300 invert"} src={homeSvg}></img></Link>
                <Link to="store"> <img className={"w-12 hover:scale-115 ease-in-out duration-300 invert"} src={storeSvg}></img></Link>
                <Link to="cart" > <img className={"w-12 hover:scale-115 ease-in-out duration-300 invert"} src={cartSvg}></img></Link>
            </div>
        </nav>
    )
}