import clothesImg from "./assets/clothes.avif";
import clothesCropped from "./assets/clothes-cropped.avif";

export default function Homepage() {
    return (
        <div className={"flex justify-center items-center p-3"}>
            <div className={"flex justify-around bg-ui-muted rounded-xl w-11/12 p-3 text-left max-w-300"}>
                <div className={"flex flex-col justify-center gap-5 mb-10"}>
                    <div className={"font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-wide text-shadow-lime-300 text-shadow-lg"}>Summer Clothes Sale</div>
                    <div className={"text-sm sm:text-lg"}>Save 20% on clothes while offers apply</div>
                    <button className={"self-start bg-lime-500 px-3 py-2 text-xl rounded-2xl font-bold text-white cursor-pointer transition-all duration-200 hover:bg-lime-300"}>Shop Now</button>
                </div>
                <img className={"hidden md:block max-w-7/12 h-auto rounded-2xl"} src={clothesImg} alt="4 people modelling clothes"></img>
                <img className={"md:hidden max-w-5/12 rounded-2xl"} src={clothesCropped} alt="4 people modelling clothes"></img>
            </div>
        </div>
    )
}