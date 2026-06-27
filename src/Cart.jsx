import { useOutletContext } from "react-router";

export default function Cart() {

    const cont = useOutletContext();

    const clearCartList = () => {
        if(window.confirm("Are you sure you want to clear your cart?")) {
            cont.setCartList({});
        }
    }

    const calcTotal = () => {
        let total = 0;
        for(let item of cont.itemList) {
            if(item.name in cont.cartList) {
                total += (+item.price * cont.cartList[item.name]);
            }
        }
        return total;
    }

    return (
        <>
        <section className={"flex pt-5 pb-2 px-8 justify-between"}>
            <h2 className={"text-2xl"}>Your Cart</h2>
            <button onClick={clearCartList} className={"border-ui-muted hover:bg-ui-snow border-2 px-2 py-1 cursor-pointer rounded-xl shadow hover:border-brand-lighter transition-color duration-200"}>Clear Cart</button>
        </section>
        <main className={"flex flex-col-reverse gap-7 p-3"}>
            
            <div className={"flex-1 flex flex-col gap-3"}>
                {cont.itemList.map(item => {
                    if(item.name in cont.cartList) {
                return  <div className={"flex p-2 bg-ui-muted shadow-lg gap-5"} key={item.name}>
                            <img className={"size-30"} src={item.pic} alt={item.name}></img>
                            <div className={"flex flex-col self-stretch justify-around"}>
                                <div className={"text-2xl tracking-wide"}>{item.name}</div>
                                <div className={"flex flex-col gap-1 text-sm text-text-muted -mt-6"}>
                                    <div>Free 2-4 Day Delivery</div>        
                                    <div>Standard Shipping</div>     
                                </div>
                            </div>
                            <div className={"flex flex-col ml-auto justify-around items-end mr-3"}>
                                <div className={"text-2xl font-bold tracking-wide"}>{`$${item.price * +cont.cartList[item.name]}.00`}</div> 
                                <div className={"flex flex-col w-fit"}>
                                    <div className={"flex text-xl"}>
                                        <button onClick={(e) => cont.pressCartPlusMinus(e, false)} data-item-name={item.name} className={"w-7 p-0.5 hover:bg-brand-lightest transition-colors duration-200 border-3 border-brand-main border-r-0 rounded-l-xl"}>-</button>
                                        <div className={"w-6    p-0.5  text-center border-3 border-brand-main border-x-0"}>{cont.cartList[item.name]}</div>
                                        <button onClick={(e) => cont.pressCartPlusMinus(e, true)} data-item-name={item.name} className={"w-7 p-0.5 hover:bg-brand-lightest transition-colors duration-200 border-3 border-brand-main border-l-0 rounded-r-xl"}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>

            <div className={"max-w-100 bg-ui-muted shadow-lg p-3 flex flex-col gap-1"}>
                <h3 className={"text-xl"}>Subtotal ({Object.values(cont.cartList).length > 0 ? Object.values(cont.cartList).reduce((prev, curr) => prev + curr) : 0} items):</h3>
                <div className={"text-3xl font-bold tracking-wide"}>{`$${calcTotal()}.00`}</div>
                <button className={"bg-brand-light rounded-xl text-lg font-bold text-ui-white cursor-pointer hover:bg-brand-lighter transition-colors duration-200"}>Go to Checkout</button>
            </div>
        </main>
        </>
    )
}