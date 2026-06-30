import clothesImg from "./assets/clothes.avif";
import clothesCropped from "./assets/clothes-cropped.avif";
import { useOutletContext, Link } from "react-router";

import televisionImg from "./assets/television.avif";
import monitorImg from "./assets/monitor.avif";
import mouseImg from "./assets/mouse.avif";
import keyboardImg from "./assets/keyboard.avif";
import hoodieImg from "./assets/hoodie.avif";
import teeImg from "./assets/tee.avif";
import sneakersImg from "./assets/sneakers.avif";
import shirtImg from "./assets/shirt.avif";
import mugsImg from "./assets/mugs.avif";
import kettleImg from "./assets/kettle.avif";
import candleImg from "./assets/candle.avif";
import artImg from "./assets/art.avif";
import backpackImg from "./assets/backpack.avif";
import yogamatImg from "./assets/yogamat.avif";
import plannerImg from "./assets/planner.avif";
import tentImg from "./assets/tent.avif";

export default function Homepage() {

    const cont = useOutletContext();

    return (
        <div className={"flex flex-col justify-center items-center p-3 gap-5 overflow-x-hidden"}>
            <div className={"flex justify-around bg-ui-muted rounded-xl w-11/12 p-3 text-left max-w-300"}>
                <div className={"flex flex-col justify-center gap-5 mb-10"}>
                    <div className={"font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-wide text-shadow-lime-300 text-shadow-lg"}>Summer Clothes Sale</div>
                    <div className={"text-sm sm:text-lg"}>Save 20% on clothes while offers apply</div>
                    <button className={"self-start bg-lime-500 px-3 py-2 text-xl rounded-2xl font-bold text-white cursor-pointer transition-all duration-200 hover:bg-lime-300"}>Shop Now</button>
                </div>
                <img className={"hidden md:block max-w-7/12 h-auto rounded-2xl"} src={clothesImg} alt="4 people modelling clothes"></img>
                <img className={"md:hidden max-w-5/12 rounded-2xl"} src={clothesCropped} alt="4 people modelling clothes"></img>
            </div>
                <div className={"flex max-w-300 justify-between w-full bg-none px-5"}>
                    <div className={"text-2xl tracking-wide font-bold"}>Shop for...</div>
                    <Link to="store" onClick={() => cont.filterByCat("all")} className={"underline text-xl text-brand-dark font-bold hover:text-brand-lighter cursor-pointer transition-all duration-150"}>See All</Link>
                </div>
                <div className={"flex gap-10 overflow-x-auto overflow-y-visible w-full max-w-300 p-5"}>
                    <Link to="store" onClick={() => cont.filterByCat("tech")} className={"shrink-0 w-80 sm:w-100 bg-ui-muted p-3 rounded-2xl text-left cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-brand-lighter hover:scale-105"}>
                        <div className={"text-4xl font-bold tracking-wider ml-1 mb-1"}>Tech</div>
                        <div className={"grid grid-cols-2 gap-2"}>
                            <div>
                                <img className={"rounded-xl"} src={televisionImg} alt="Television"></img>
                                <div className={"tracking-tight"}>Television</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={monitorImg} alt="Computer Monitor"></img>
                                <div className={"tracking-tight"}>Ultra-Wide Monitor</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={mouseImg} alt="Gaming Mouse"></img>
                                <div className={"tracking-tight"}>Gaming Mouse</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={keyboardImg} alt="Mechanical Keyboard"></img>
                                <div className={"tracking-tight"}>Mechanical Keyboard</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="store" onClick={() => cont.filterByCat("clothing")} className={"shrink-0 w-80 sm:w-100 bg-ui-muted p-3 rounded-2xl text-left cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-brand-lighter hover:scale-105"}>
                        <div className={"text-4xl font-bold tracking-wider ml-1 mb-1"}>Clothing</div>
                        <div className={"grid grid-cols-2 gap-2"}>
                            <div>
                                <img className={"rounded-xl"} src={hoodieImg} alt="Hoodie"></img>
                                <div className={"tracking-tight"}>Cotton Hoodie</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={teeImg} alt="T-Shirt"></img>
                                <div className={"tracking-tight"}>Graphic Tee</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={sneakersImg} alt="Sneakers"></img>
                                <div className={"tracking-tight"}>High-Top Sneakers</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={shirtImg} alt="Button-Down Shirt"></img>
                                <div className={"tracking-tight"}>Button-Down Shirt</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="store" onClick={() => cont.filterByCat("home")} className={"shrink-0 w-80 sm:w-100 bg-ui-muted p-3 rounded-2xl text-left cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-brand-lighter hover:scale-105"}>
                        <div className={"text-4xl font-bold tracking-wider ml-1 mb-1"}>Home</div>
                        <div className={"grid grid-cols-2 gap-2"}>
                            <div>
                                <img className={"rounded-xl"} src={kettleImg} alt="Kettle"></img>
                                <div className={"tracking-tight"}>Electric Kettle</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={mugsImg} alt="Mugs"></img>
                                <div className={"tracking-tight"}>Ceramic Mug Set</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={candleImg} alt="Candle"></img>
                                <div className={"tracking-tight"}>Rose Scented Candle</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={artImg} alt="Wall Art"></img>
                                <div className={"tracking-tight"}>Abstract Wall Art</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="store" onClick={() => cont.filterByCat("lifestyle")} className={"shrink-0 w-80 sm:w-100 bg-ui-muted p-3 rounded-2xl text-left cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-brand-lighter hover:scale-105"}>
                        <div className={"text-4xl font-bold tracking-wider ml-1 mb-1"}>Lifestyle</div>
                        <div className={"grid grid-cols-2 gap-2"}>
                            <div>
                                <img className={"rounded-xl"} src={backpackImg} alt="Backpack"></img>
                                <div className={"tracking-tight"}>Leather Backpack</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={yogamatImg} alt="Yoga Mat"></img>
                                <div className={"tracking-tight"}>Yoga Mat</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={plannerImg} alt="Planner"></img>
                                <div className={"tracking-tight"}>Weekly Planner</div>
                            </div>
                            <div>
                                <img className={"rounded-xl"} src={tentImg} alt="Tent"></img>
                                <div className={"tracking-tight"}>Luxuary Tent</div>
                            </div>
                        </div>
                    </Link>
                </div>
        </div>
    )
}