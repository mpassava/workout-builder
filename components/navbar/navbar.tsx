import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><Link href="/workouts">My Workouts</Link></a></li>
            <li><a>Create Exercises</a></li>
            <li><a>Create Workouts</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <div className="btn btn-ghost text-2xl">Workout Builder v1.0</div>
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  )
}
