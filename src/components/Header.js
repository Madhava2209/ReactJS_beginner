const title = (
    <div id="heading" tabIndex="1">OrderIt</div>
)
const userIcon = 
    (<div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>)
export const Header = () => (
    <div className="main-header">
        {title}
        {userIcon}
    </div>
)