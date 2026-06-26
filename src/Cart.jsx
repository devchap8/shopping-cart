export default function Cart() {
    return (
        <>
        <section className={"flex pt-5 pb-2 px-8 justify-between"}>
            <h2 className={"text-2xl"}>Your Cart</h2>
            <button className={"border-ui-muted hover:bg-ui-snow border-2 px-2 py-1 cursor-pointer rounded-xl shadow hover:border-brand-lighter transition-color duration-200"}>Clear Cart</button>
        </section>
        <main className={"flex flex-col-reverse gap-3 p-3"}>
            <div className={"flex-1 bg-amber-300"}>Cart Here</div>
            <div className={"max-w-100 bg-ui-muted shadow p-3 flex flex-col gap-1"}>
                <h3 className={"text-xl"}>Subtotal (x items):</h3>
                <div className={"text-3xl font-bold tracking-wide"}>$200.00</div>
                <button className={"bg-brand-light rounded-xl text-lg font-bold text-ui-white cursor-pointer hover:bg-brand-lighter transition-colors duration-200"}>Go to Checkout</button>
            </div>
        </main>
        </>
    )
}