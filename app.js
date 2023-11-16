import React from "react"
import ReactDOM from "react-dom/client"

const title = (
    <div id="heading" tabIndex="1">React</div>
)
const searchbar = <input type="text" placeholder="Search..." />
const userIcon = <div>User</div>
const Heading = () => (
    <div className="main-header">
        {title}
        {searchbar}
        {userIcon}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Heading())