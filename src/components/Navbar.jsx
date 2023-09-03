import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="flex justify-between items-center max-w-7xl p-5 fixed w-full top-0 text-[#eeeeee] z-[99] mix-blend-exclusion">
            <a className="font-bold tracking-tight " href="">
                ContemptStudios
            </a>
            <nav className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
        </header>
    )   
}