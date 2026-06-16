import { useOutletContext } from "react-router";
import cartPlus from "./assets/cart-plus.svg";

export default function Store() {

    const [itemList, setItemList] = useOutletContext();

    return (
        <main className={"h-fit"}>
            {itemList.map(item => 
                <div key={item.name} className={"h-auto w-56 bg-ui-snow p-2 border-2 border-b-0 border-ui-muted rounded-2xl hover:shadow-2xl shadow-brand-lighter transition-shadow duration-500 ease-in-out"}>
                    <img alt={item.name} src={item.pic}></img>
                    <div className={"mt-2 text-lg font-bold tracking-wide"}>{item.name}</div>
                    <div className={"tracking-wider"}>{item.price}</div>
                    <form className={"bg-brand-light -m-2 mt-2 p-1 pr-2 pl-2 h-10 rounded-b-2xl flex items-center"}>
                        <button className={"border-2 border-r-0 w-6 font-bold hover:bg-brand-main rounded-l-lg"}>+</button>
                        <input className={"border-ui-dark border-t-2 border-b-2 text-center focus:outline-0 focus:bg-brand-lighter"} type="number" min="0" max="99" name="qty" placeholder="qty"></input>
                        <button className={"border-2 border-l-0 w-6 mr-auto font-bold hover:bg-brand-main rounded-r-lg"}>-</button>
                        <input className={"size-6 hover:scale-120 ease-in-out duration-200"} type="image" src={cartPlus}></input>
                    </form>
                </div>
            )}
        </main>
    )
}