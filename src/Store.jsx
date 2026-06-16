import { useOutletContext } from "react-router";
import cartPlus from "./assets/cart-plus.svg";

export default function Store() {

    const [itemList, setItemList] = useOutletContext();
    const makeNewList = () => {
        setItemList([...itemList, {name: "test", price: "test", category: "test", picLink: null}]);
        console.log(itemList);
    }

    return (
        <main className={"h-fit"}>
            {/* <button onClick={makeNewList}>Test button</button> */}
            {itemList.map(item => 
                <div key={item.name} className={"w-48 h-auto bg-ui-snow p-2 border-2 border-ui-muted rounded-2xl"}>
                    <img alt={item.name} src={item.picLink}></img>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div className={"-m-2 mt-2 rounded-b-2xl bg-amber-400"}>
                        Input form here
                    </div>
                </div>
            )}
        </main>
    )
}