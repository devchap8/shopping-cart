import homeSvg from "./assets/home.svg";
import storeSvg from "./assets/store.svg";
import cartSvg from "./assets/cart.svg";

export default function NavBar() {
    return (
        <nav className={"flex h-20 p-8 items-center bg-amber-400"}>
            <div className={"text-4xl font-bold"}>Devbay</div>
            <div className={"flex gap-4 ml-auto"}>
                <img className={"w-12"} src={homeSvg}></img>
                <img className={"w-12"} src={storeSvg}></img>
                <img className={"w-12"} src={cartSvg}></img>
            </div>
        </nav>
    )
}