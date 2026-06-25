import { useOutletContext } from "react-router";
import cartPlus from "./assets/cart-plus.svg";

export default function Store() {

    const cont = useOutletContext();

    return (
        <>
        <div className={"h-14 flex items-center justify-around bg-ui-snow border-b-2 border-b-ui-muted"} data-testid="store-nav-bar">
            <select onChange={(e) => cont.sortByPrice(e.target.value)} data-testid="select-sort" className={"h-10 text-xs sm:text-sm md:text-base border-2 border-ui-muted focus:border-ui-gray focus:outline-0 rounded-t-lg p-1 text-text-dim"} name="sortDropdown">
                <option value="category">Sort by Category</option>
                <option value="highest">Highest Price First</option>
                <option value="lowest">Lowest Price First</option>
            </select>
            <input onChange={(e) => cont.filterByQuery(e.target.value)} className={"bg-ui-light h-8 w-1/2 border-2 border-ui-muted focus:border-black focus:outline-0 rounded-xl p-3"} type="search" name="mainSearch" placeholder="Search Devbay"></input>
            <select onChange={(e) => cont.filterByCat(e.target.value)} data-testid="select-filter" className={"h-10 text-xs sm:text-sm md:text-base border-2 border-ui-muted focus:border-ui-gray focus:outline-0 rounded-t-lg p-1 text-text-dim"} name="tagDropdown">
                <option value="all">Show All Items</option>
                <option value="tech">Tech</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home</option>
                <option value="lifestyle">Lifestyle</option>
            </select>
        </div>

        {cont.itemList.length < 1 && 
        <div className={"flex flex-col h-1/2 justify-center text-center gap-10"}>
            <h2 className={"text-5xl font-bold tracking-wide"}>No results found</h2>
            <div className={"text-lg text-text-dim"}>Try searching with other terms that might match</div>
        </div>}
        <main className={"h-fit p-6 grid content-evenly justify-items-center gap-6 md:gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"}>
            {cont.itemList.map(item => 
                <div key={item.name} className={"h-auto w-56 bg-ui-snow p-2 border-2 border-b-0 border-ui-muted rounded-2xl hover:shadow-2xl shadow-brand-lighter transition-shadow duration-500 ease-in-out"}>
                    <img className={"rounded-xl shadow-md"} alt={item.name} src={item.pic}></img>
                    <div data-testid="item-name" className={"mt-2 text-lg font-bold tracking-wide"}>{item.name}</div>
                    <div className={"tracking-wider"}>{`$${item.price}.00`}</div>
                    <form className={"bg-brand-light -m-2 mt-2 p-1 pr-2 pl-2 h-10 rounded-b-2xl flex items-center"}>
                        <button className={"border-2 border-r-0 w-6 font-bold hover:bg-brand-main rounded-l-lg"}>+</button>
                        <input className={"border-ui-dark border-t-2 border-b-2 text-center focus:outline-0 focus:bg-brand-lighter"} type="number" min="0" max="99" name="qty" placeholder="qty"></input>
                        <button className={"border-2 border-l-0 w-6 mr-auto font-bold hover:bg-brand-main rounded-r-lg"}>-</button>
                        <input className={"size-6 hover:scale-120 ease-in-out duration-200"} type="image" src={cartPlus}></input>
                    </form>
                </div>
            )}
        </main>
        </>
    )
}