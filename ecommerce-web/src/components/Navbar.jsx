import { Link } from "react-router-dom"


const Navbar = () => {
    return(
        <>
        <div className="navbar">
            <div className="navbar-wrap">
                <Link to={'/'} className="logo">ChaiNamkeen</Link>
            </div>

            <div className="navbar-link">
                <Link to={'/'}>Home</Link>
                <Link to={'/checkout'}>Cart</Link>
            </div>

            <div className="user-link">
                <Link to={'/auth'}>Login</Link>
            </div>
        </div>
        </>
    )
}

export default Navbar