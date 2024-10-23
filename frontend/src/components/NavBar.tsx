import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex justify-center my-4 mx-8">
          <Link className="inline-block mx-2 p-2 bg-stone-500 hover:bg-stone-400 text-center text-white uppercase font-semibold w-32 rounded-xl "to="/">Main </Link>
          <Link className="inline-block mx-2 p-2 bg-stone-500 hover:bg-stone-400 text-center text-white uppercase font-semibold w-32 rounded-xl " to="/admin">Admin </Link>
    </nav>
  )
}

export default NavBar
