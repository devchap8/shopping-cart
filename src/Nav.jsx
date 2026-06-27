import homeSvg from "./assets/home.svg";
import storeSvg from "./assets/store.svg";
import cartSvg from "./assets/cart.svg";
import { Link } from "react-router";

export default function NavBar({cartList}) {

    const getCartSize = () => {
        return Object.values(cartList).reduce((last, curr) => last + curr, 0);
    }
    const cartSize = getCartSize();

    return (
        <nav className={"flex h-20 p-8 items-center bg-brand-main text-ui-white"}>
            <h1 className={"text-4xl font-bold tracking-wide"}>Devbay</h1>
            <div className={"flex gap-4 ml-auto"}>
                <Link to="/"    > <img className={"w-12 hover:scale-115 ease-in-out duration-300 invert"} src={homeSvg}></img></Link>
                <Link to="store"> <img className={"w-12 hover:scale-115 ease-in-out duration-300 invert"} src={storeSvg}></img></Link>
                <Link to="cart" className={"relative"}> 
                    <img className={"w-12 hover:scale-115 ease-in-out duration-300 invert"} src={cartSvg}></img>
                    {cartSize > 0 && 
                    <div data-testid="cart-size" className={"absolute bg-red-500 min-w-6 p-px text-center rounded-full -top-2 -right-2 opacity-90"}>{cartSize}</div>
                    }
                </Link>
            </div>
        </nav>
    )
}