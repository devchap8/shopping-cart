export default function NavBar() {
    return (
        <nav className={"flex h-20 p-8 items-center bg-amber-400"}>
            <div className={"text-4xl font-bold"}>Devbay</div>
            <div className={"flex gap-4 ml-auto"}>
                <div>Home Icon</div>
                <div>Shop Icon</div>
                <div>Cart Icon</div>
            </div>
        </nav>
    )
}