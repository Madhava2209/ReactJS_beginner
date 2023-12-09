import { Link } from "react-router-dom"
const title = (
    <div id="heading" tabIndex="1">OrderIt</div>
)
const userIcon = 
    (<div className="nav-items">
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <li>Cart</li>
        </ul>
    </div>)
export const Header = () => (
    <div className="main-header">
        {title}
        {userIcon}
    </div>
)