import clothesImg from "./assets/clothes.avif";

export default function Homepage() {
    return (
        <div className={"flex justify-center p-3"}>
            <button className={"flex justify-around bg-ui-muted rounded-xl w-11/12 p-3 text-left"}>
                <div className={"flex flex-col justify-center gap-5 mb-10"}>
                    <div className={"font-bold text-5xl tracking-wide text-shadow-lime-300 text-shadow-lg"}>Summer Clothes Sale</div>
                    <div className={""}>Save 20% on clothes while offers apply</div>
                    <button className={"self-start bg-lime-500 px-3 py-2 text-xl rounded-2xl font-bold text-white cursor-pointer transition-all duration-200 hover:bg-lime-300"}>Shop Now</button>
                </div>
                <img className={"max-w-7/12 rounded-2xl"} src={clothesImg} alt="4 people modelling clothes"></img>
            </button>
        </div>
    )
}